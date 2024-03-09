const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const exist = await User.findOne({ email });

        if (exist) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const newUser = new User({
            email,
            username,
            password: hashedPassword, // Store the hashed password
        });

        await newUser.save();
        
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};


exports.getUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare passwords using bcrypt.compare
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate and send JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'yourFallbackSecret', {
            expiresIn: "1h",
        });

        return res.status(200).json({ user, token });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

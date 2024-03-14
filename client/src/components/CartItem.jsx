import React from 'react'

const CartItem = () => {
  return (
    <div>
        <table className="table table-lg">
            {/* head */}
            <thead>
            <tr  >
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th className='font-bold' >Product Details</th>
                <th className='font-bold' >Job</th>
                <th className='font-bold' >Favorite Color</th>
                <th className='font-bold' ></th>
            </tr>
            </thead>
            <tbody>
                      {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CartItem
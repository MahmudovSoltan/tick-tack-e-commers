'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getAllCheckout } from "@/app/store/slices/checkoutSlice";
import { useEffect } from "react";
import LoadingSpinner from "../lodanig/LoadingSpinner";


const AccountOrderList = ({ detailOrderFunc }) => {
    const dispatch = useAppDispatch()
    const { chekoutProducts, loading } = useAppSelector((state) => state.chekcout)
    useEffect(() => {
        dispatch(getAllCheckout())
    }, [])
    console.log(chekoutProducts);
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div>

            <div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tarix</th>
                            <th>Çatdırılma ünvanı</th>
                            <th>Məhsul sayı</th>
                            <th>Subtotal/Çatdırılma</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {chekoutProducts.map((order, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
                                <td>{order.address}</td>
                                <td>{order.items?.length}</td>
                                <td>{order.total} m /pulsuz </td>
                                <td>
                                    <span>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="details" onClick={() => detailOrderFunc(order.id)}>detallar &gt;</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccountOrderList
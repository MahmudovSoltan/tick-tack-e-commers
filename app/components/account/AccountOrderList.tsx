'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getAllCheckout } from "@/app/store/slices/checkoutSlice";
import { Dispatch, SetStateAction, useEffect } from "react";
import LoadingSpinner from "../lodanig/LoadingSpinner";

const orders = [
    {
        no: "#321321",
        date: "10.09.2021",
        address: "Zərifə Əliyeva 55, Azərbaycan",
        count: 10,
        subtotal: "30m/pulsuz",
        status: "Tamamlandı",
    },
    {
        no: "#321321",
        date: "10.09.2021",
        address: "Zərifə Əliyeva 55, Azərbaycan",
        count: 10,
        subtotal: "30m/pulsuz",
        status: "Ləğv edildi",
    },
    {
        no: "#321321",
        date: "10.09.2021",
        address: "Zərifə Əliyeva 55, Azərbaycan",
        count: 10,
        subtotal: "30m/pulsuz",
        status: "Tamamlandı",
    },
    {
        no: "#321321",
        date: "10.09.2021",
        address: "Zərifə Əliyeva 55, Azərbaycan",
        count: 10,
        subtotal: "30m/pulsuz",
        status: "Tamamlandı",
    },
    {
        no: "#321321",
        date: "10.09.2021",
        address: "Zərifə Əliyeva 55, Azərbaycan",
        count: 10,
        subtotal: "30m/pulsuz",
        status: "Tamamlandı",
    },
];
interface PropsType {
    setOrderDetail: Dispatch<SetStateAction<boolean>>
}
const AccountOrderList = ({ setOrderDetail }: PropsType) => {
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
                                <td className="details" onClick={() => setOrderDetail(true)}>detallar &gt;</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccountOrderList
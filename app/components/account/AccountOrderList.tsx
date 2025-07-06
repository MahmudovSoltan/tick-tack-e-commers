import { Dispatch, SetStateAction } from "react";

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
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.no}</td>
                                <td>{order.date}</td>
                                <td>{order.address}</td>
                                <td>{order.count}</td>
                                <td>{order.subtotal}</td>
                                <td>
                                    <span className={`status ${order.status === "Tamamlandı" ? "done" : "cancelled"}`}>
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
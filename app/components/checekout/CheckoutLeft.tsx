"use client"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchProfile } from "@/app/store/slices/profileSlice";
import { useEffect, useState } from "react";
import LoadingSpinner from "../lodanig/LoadingSpinner";
import { IfomrType } from "./CheckoutBody";

interface ChooseType {
    cash: boolean,
    card: boolean
}
interface PropsType {
    openModal:(form:IfomrType)=>void
}
const CheckoutLeft = ({ openModal }:PropsType) => {
    const [error, setError] = useState<string>("")
    const { user, loading } = useAppSelector((state) => state.user)
    const [choose, setChoose] = useState<ChooseType>({
        cash: false,
        card: false
    })
    const [formData, setFormData] = useState({
        paymentMethod: "" /* Enum CASH CARD */,
        note: "",
        address: "",
        phone: ""
    })
    const dispatch = useAppDispatch()



    const handleChoose = (type: 'CASH' | 'CARD') => {
        setChoose({
            cash: type === 'CASH',
            card: type === 'CARD'
        });
        setFormData({ ...formData, paymentMethod: type })
    };


    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                address: user.address || "",
                phone: user.phone || ""
            }))
        }
    }, [user])
    const submit = () => {
        if (!formData.paymentMethod) {
            setError("Zəhmət olmasa ödəniş metodunu seçin.");
            return;
        } else if(formData.paymentMethod){
            setError("");
            openModal(formData);
            console.log(formData);

        }
    };
    if (!user || loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="checkout_left_container">
            <h3 className="checkout_title">
                Sifarişin tamamlanması
            </h3>
            <div className="checkout_left_content">

                <div className=" flex justify-between">
                    <div className="flex flex-col gap-8 mb-16">
                        <div>
                            <h6 className="left_title">
                                Adınız
                            </h6>
                            <p className="left_text">
                                {user?.full_name}
                            </p>
                        </div>
                        <div>
                            <h6 className="left_title">
                                Ünvanınız
                            </h6>
                            <p className="left_text">
                                {user?.address}
                            </p>
                        </div>
                        <div>
                            <h6 className="left_title">
                                Telefon nömrəniz
                            </h6>
                            <p className="left_text">
                                {user?.phone}
                            </p>
                        </div>
                    </div>
                    <div className="other_note">
                        <h6 className="left_title">
                            Əlavə qeyd
                        </h6>
                        <div className="textarea">
                            <textarea onChange={(e) => setFormData({ ...formData, note: e.target.value })} name="" id="" placeholder="Əlavə qeydiniz varsa buraya daxil edin" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="left_title " >
                        Ödəmə metodu seçin:
                    </p>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <div className="flex items-center gap-8 mt-4">
                        <div className={`w-1/2 order_choose  ${choose.cash && "active_choose"}`} onClick={() => handleChoose("CASH")}>
                            <div>
                                <svg width="40" height="40" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48.9313 23.8366C48.9312 23.8364 48.9312 23.8363 48.931 23.836L39.6796 0.606547C39.4833 0.11298 38.9238 -0.127972 38.4303 0.0683725C38.4299 0.0684928 38.4295 0.068613 38.4292 0.0688535L0.897438 15.0136C0.744378 15.0798 0.611638 15.1853 0.512684 15.3195C0.200553 15.4817 0.00336659 15.8027 0 16.1544V41.1634C0 41.6946 0.430683 42.1253 0.961884 42.1253H41.361C41.8922 42.1253 42.3229 41.6946 42.3229 41.1634V27.5047L48.3943 25.0865C48.8877 24.8897 49.1281 24.3301 48.9313 23.8366ZM40.3991 40.2015H1.92377V17.1163H40.3991V40.2015ZM16.049 15.1974L32.1548 8.77967C33.5922 10.2906 35.5839 11.1493 37.6693 11.1575L39.2756 15.1974H16.049ZM42.3229 25.4385V16.1544C42.3229 15.6232 41.8922 15.1926 41.361 15.1926H41.3456L39.3074 10.0734C39.2848 10.0307 39.2584 9.99008 39.2285 9.95221C39.1254 9.48894 38.6963 9.17284 38.2233 9.21156C36.283 9.38842 34.3848 8.57106 33.1802 7.03963C32.8804 6.66966 32.3536 6.57768 31.9461 6.82416C31.9004 6.82957 31.8551 6.83799 31.8105 6.84917L12.1476 14.6789C11.9097 14.7722 11.7194 14.9573 11.6196 15.1926H5.64818L38.2484 2.21193L46.7889 23.6571L42.3229 25.4385Z" fill="currentColor" />
                                    <path d="M4.53444 33.7084C6.40194 34.2604 7.86328 35.7199 8.41757 37.5867C8.53912 37.9942 8.9139 38.2733 9.33905 38.2735C9.38895 38.2703 9.43849 38.2629 9.48718 38.2513C9.53035 38.2636 9.57447 38.2726 9.61896 38.2783H32.7042C32.7438 38.2731 32.783 38.265 32.8215 38.2542C33.3021 38.3711 33.7864 38.0764 33.9034 37.5958C33.9038 37.594 33.9042 37.5923 33.9046 37.5905C34.4574 35.7218 35.919 34.2602 37.7877 33.7074C38.2409 33.5689 38.5225 33.1173 38.4476 32.6493C38.4604 32.6027 38.4697 32.5551 38.4755 32.507V24.8119C38.4698 24.7637 38.4602 24.7161 38.4466 24.6696C38.522 24.2015 38.2403 23.7496 37.7868 23.6115C35.9181 23.0588 34.4568 21.5966 33.9056 19.7274C33.7663 19.2711 33.3103 18.9888 32.8398 19.0675C32.7953 19.0552 32.75 19.0461 32.7042 19.0406H9.61896C9.5705 19.0464 9.52253 19.056 9.47564 19.0695C9.0078 18.9949 8.55644 19.2764 8.41757 19.7293C7.86436 21.5977 6.4029 23.0588 4.53444 23.6115C4.08127 23.75 3.79968 24.2016 3.87459 24.6696C3.86208 24.7163 3.85307 24.7638 3.84766 24.8119V32.507C3.85319 32.5522 3.8622 32.5969 3.87459 32.6407C3.79571 33.1116 4.07791 33.5683 4.53444 33.7084ZM5.77142 25.2024C7.70289 24.4267 9.23373 22.8958 10.0095 20.9644H32.3127C33.0888 22.8958 34.62 24.4267 36.5517 25.2024V32.1165C34.6208 32.8931 33.0903 34.4236 32.3136 36.3545H10.0095C9.23288 34.4236 7.70229 32.8931 5.77142 32.1165V25.2024Z" fill="currentColor" />
                                    <path d="M21.1619 34.4313C24.3494 34.4313 26.9332 31.8474 26.9332 28.66C26.9332 25.4725 24.3494 22.8887 21.1619 22.8887C17.9745 22.8887 15.3906 25.4725 15.3906 28.66C15.3938 31.8461 17.9758 34.4281 21.1619 34.4313ZM21.1619 24.8124C23.2868 24.8124 25.0095 26.535 25.0095 28.66C25.0095 30.7849 23.2868 32.5075 21.1619 32.5075C19.037 32.5075 17.3144 30.7849 17.3144 28.66C17.3144 26.535 19.037 24.8124 21.1619 24.8124Z" fill="currentColor" />
                                    <path d="M10.5815 30.1009C11.3783 30.1009 12.0243 29.4549 12.0243 28.6581C12.0243 27.8613 11.3783 27.2153 10.5815 27.2153C9.7847 27.2153 9.13867 27.8613 9.13867 28.6581C9.13867 29.455 9.7847 30.1009 10.5815 30.1009ZM10.5815 28.1771C10.8471 28.1771 11.0624 28.3925 11.0624 28.6581C11.0624 28.9237 10.8471 29.139 10.5815 29.139C10.3159 29.139 10.1006 28.9237 10.1006 28.6581C10.1006 28.3925 10.3159 28.1771 10.5815 28.1771Z" fill="currentColor" />
                                    <path d="M31.7417 30.1009C32.5385 30.1009 33.1845 29.4549 33.1845 28.6581C33.1845 27.8613 32.5385 27.2153 31.7417 27.2153C30.9449 27.2153 30.2988 27.8613 30.2988 28.6581C30.2988 29.455 30.9449 30.1009 31.7417 30.1009ZM31.7417 28.1771C32.0073 28.1771 32.2226 28.3925 32.2226 28.6581C32.2226 28.9237 32.0073 29.139 31.7417 29.139C31.4761 29.139 31.2607 28.9237 31.2607 28.6581C31.2607 28.3925 31.4761 28.1771 31.7417 28.1771Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className={`choose_text  ${choose.cash && "active_text"}`}>
                                Qapıda nağd ödəmə
                            </div>
                            <div className={`sircle_box  ${choose.cash && "active_box"}`}>
                                <span></span>
                            </div>
                        </div>
                        <div className={`w-1/2 order_choose  ${choose.card && "active_choose"}`} onClick={() => handleChoose("CARD")}>
                            <div>
                                <svg width="40" height="40" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.0584 30.9386H37.5878C38.0577 30.9386 38.3709 30.6254 38.3709 30.1556V23.1078C38.3709 22.6379 38.0577 22.3247 37.5878 22.3247H25.0584C24.5886 22.3247 24.2754 22.6379 24.2754 23.1078V30.1556C24.2753 30.6253 24.5886 30.9386 25.0584 30.9386ZM25.8415 23.8908H36.8048V29.3724H25.8415V23.8908Z" fill="currentColor" />
                                    <path d="M3.91587 20.7579H10.1806C10.6505 20.7579 10.9637 20.4446 10.9637 19.9748C10.9637 19.5049 10.6505 19.1917 10.1806 19.1917H3.91587C3.44602 19.1917 3.13281 19.5049 3.13281 19.9748C3.13281 20.4446 3.44602 20.7579 3.91587 20.7579Z" fill="currentColor" />
                                    <path d="M13.3124 20.7579H19.5771C20.047 20.7579 20.3602 20.4446 20.3602 19.9748C20.3602 19.5049 20.047 19.1917 19.5771 19.1917H13.3124C12.8425 19.1917 12.5293 19.5049 12.5293 19.9748C12.5293 20.4446 12.8425 20.7579 13.3124 20.7579Z" fill="currentColor" />
                                    <path d="M3.91587 23.8908H14.096C14.5658 23.8908 14.8791 23.5776 14.8791 23.1078C14.8791 22.6379 14.5658 22.3247 14.096 22.3247H3.91587C3.44602 22.3247 3.13281 22.6379 3.13281 23.1078C3.13281 23.5776 3.44602 23.8908 3.91587 23.8908Z" fill="currentColor" />
                                    <path d="M19.5776 22.3242H17.2284C16.7585 22.3242 16.4453 22.6374 16.4453 23.1072C16.4453 23.5771 16.7585 23.8903 17.2284 23.8903H19.5776C20.0475 23.8903 20.3607 23.5771 20.3607 23.1072C20.3607 22.6374 20.0475 22.3242 19.5776 22.3242Z" fill="currentColor" />
                                    <path d="M46.2805 12.6137C45.7324 11.9089 45.0276 11.5173 44.1662 11.4391L42.2868 11.2113V9.01142V7.4453C42.2868 5.72254 40.8772 4.31298 39.1545 4.31298H3.13232C1.40956 4.31289 0 5.72245 0 7.4453V9.01151V15.2763V32.5042C0 33.9186 0.950443 35.1212 2.24401 35.5066C2.20455 37.0907 3.40313 38.466 5.01183 38.6123L41.1905 42.6843C41.2688 42.6843 41.4255 42.6843 41.5037 42.6843C43.0699 42.6843 44.4795 41.5097 44.6361 40.0218L46.9853 14.8847C47.0636 14.1015 46.8287 13.2401 46.2805 12.6137ZM1.56621 9.79457H40.7207V11.8306V14.4931H1.56621V9.79457ZM3.13232 5.8791H39.1544C40.0158 5.8791 40.7206 6.58388 40.7206 7.4453V8.22836H1.56621V7.4453C1.56621 6.58388 2.27099 5.8791 3.13232 5.8791ZM1.56621 32.5041V16.0592H40.7207V32.5041C40.7207 33.3655 40.0159 34.0703 39.1545 34.0703H3.21069H3.13242C2.27099 34.0703 1.56621 33.3655 1.56621 32.5041ZM45.4191 14.5714L43.0698 39.7085C42.9916 40.57 42.2084 41.1964 41.3471 41.1181L5.24666 37.0461C4.46361 36.9678 3.91538 36.3413 3.8371 35.6365H39.1544C40.8771 35.6365 42.2867 34.2269 42.2867 32.5042V15.2762V12.692L44.0878 12.8486C44.4794 12.8486 44.8709 13.0835 45.1058 13.3967C45.3408 13.71 45.4975 14.1798 45.4191 14.5714Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className={`choose_text  ${choose.card && "active_text"}`}>
                                Qapıda kart ilə ödəmə
                            </div>
                            <div className={`sircle_box  ${choose.card && "active_box"}`}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={submit} className="acsept_btn">Sifarişi tamamla</button>

                </div>
            </div>
        </div>
    )
}

export default CheckoutLeft
'use client'

import { useMyFormState } from "@/app/hooks/useForm"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { fetchProfile, profileEdit } from "@/app/store/slices/profileSlice"
import { useEffect, useMemo } from "react"
import LoadingSpinner from "../lodanig/LoadingSpinner"
import { toast } from "react-toastify"

const AccountInfo = () => {
    const dispatch = useAppDispatch()
    const { user,loading  } = useAppSelector((state) => state.user)

    // user fetch et
    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    // user yoxdursa hələ form state yaratma
    const initialFormData = useMemo(() => ({
        full_name: user?.full_name || "",
        address: user?.address || "",
        password:"",
        password_repeat: "",
        phone: user?.phone || ""
    }), [user])

    const { handleChange, setData, data } = useMyFormState(initialFormData)

    // user dəyişəndə form data yenilə
    useEffect(() => {
        if (user) {
            setData(initialFormData)
        }
    }, [user])
    const handleSubmit = async () => {
        const result = await dispatch(profileEdit(data));
        if (profileEdit.fulfilled.match(result)) {
            toast.success("Məlumatlar uğurla yeniləndi!");
            dispatch(fetchProfile());
        } else {
            toast.error("Xəta baş verdi!");
        }
    };
    if (!user || loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="tab_container">
            <h3 className="accunt_info_title">
                Əlaqə məlumatlarınız
            </h3>
            <div className="account_form">
                <div className="account_form_top mb-7">
                    <div className="flex items-center gap-8 justify-between">
                        <div className="w-1/2">
                            <label>
                                Adınız
                            </label>
                            <div className="form_input">
                                <input
                                    type="text"
                                    placeholder="Adınız"
                                    onChange={handleChange}
                                    name="full_name"
                                    value={data.full_name}
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Telefon nömrəsi
                            </label>
                            <div className="form_input">
                                <input
                                    type="tel"
                                    placeholder="(+994) __ / ___ / __ / __"
                                    onChange={handleChange}
                                    name="phone"
                                    value={data.phone}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="account_form_top mb-[50px]">
                    <div className="flex items-center gap-8 justify-between">
                        <div className="w-1/2">
                            <label>
                                E-mail
                            </label>
                            <div className="form_input">
                                <input
                                    type="email"
                                    placeholder="rahimlisarkhan@gmail.com"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Unvan
                            </label>
                            <div className="form_input">
                                <input
                                    type="text"
                                    placeholder="Unvaniniz"
                                    onChange={handleChange}
                                    value={data.address}
                                    name="address"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="mb-5">
                        <h3 className="accunt_info_title !mb-0">
                            Şifrənin yenilənməsi
                        </h3>
                        <p className="accoun_bottom_text">
                            Ehtiyac yoxdursa boş buraxın
                        </p>

                    </div>
                    <div className="flex items-center gap-8 justify-between">
                        <div className="w-1/2">
                            <label>
                                Yeni Şifrə
                            </label>
                            <div className="form_input">
                                <input
                                    type="password"
                                    placeholder="Yeni Şifrə"
                                    onChange={handleChange}
                                    value={data.password}
                                    name="password"
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Yeni Şifrənin təkrarı
                            </label>
                            <div className="form_input">
                                <input
                                    type="password"
                                    placeholder="Yeni Şifrənin təkrarı"
                                    onChange={handleChange}
                                    value={data.password_repeat}
                                    name="password_repeat"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center mt-[60px]">
                    <button onClick={handleSubmit} className="account_btn">Məlumatları yenilə</button>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo
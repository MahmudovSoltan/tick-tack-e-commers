
"use client"

import { useMyFormState } from "@/app/hooks/useForm";
import { useAppDispatch } from "@/app/store/hooks";
import { register } from "@/app/store/slices/authStore";
import { ILoginFomtType } from "@/app/types/auth.type";


const initialData = {
    phone: "",
    password: "",
    full_name:""
}
const Regitser = () => {
    const { data, handleChange, setData } = useMyFormState<ILoginFomtType>(initialData)
    const dispatch = useAppDispatch();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await dispatch(register(data))
            console.log(data);

             setData(initialData)
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <form className="form">
                <div className="form_inputs">
                    <label htmlFor="">
                        Ad
                    </label>
                    <div className="form_input">
                        <input type="text" placeholder="Ad, Soyad" />
                    </div>
                </div>
                <div className="form_inputs">
                    <label htmlFor="">
                        Telefon nömrəsi
                    </label>
                    <div className="form_input">
                        <input type="number" placeholder="(+994) __ / ___ / __ / __" />
                    </div>
                </div>
                <div className="form_inputs">
                    <label htmlFor="">
                        Parol
                    </label>
                    <div className="form_input">
                        <input type="password" placeholder="*********************" />
                    </div>
                </div>
                <button type="submit" className="submit_btn">Tamamla</button>
            </form>
        </div>
    )
}

export default Regitser
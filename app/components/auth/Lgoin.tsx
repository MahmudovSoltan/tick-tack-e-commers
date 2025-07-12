import { useMyFormState } from "@/app/hooks/useForm";
import { useAppDispatch } from "@/app/store/hooks";
import { login } from "@/app/store/slices/authStore";
import { ILoginFomtType } from "@/app/types/auth.type";
import { useRouter } from "next/navigation";
import React from "react";

const initialData = {
    phone: "",
    password: "",
}

const Lgoin = () => {
    const { data, handleChange, setData } = useMyFormState<ILoginFomtType>(initialData)
    const dispatch = useAppDispatch();
    const navigate = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await dispatch(login(data))
            setData(initialData)
            navigate.push("/home")
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_inputs">
                    <label htmlFor="">
                        Telefon nömrəsi
                    </label>
                    <div className="form_input">
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={data.phone}
                            placeholder="(+994) __ / ___ / __ / __"
                        />
                    </div>
                </div>
                <div className="form_inputs">
                    <label htmlFor="">
                        Parol
                    </label>
                    <div className="form_input">
                        <input
                            type="password"
                            placeholder="*********************"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                        />
                    </div>
                </div>
                <button type="submit" className="submit_btn">Tamamla</button>
            </form>
        </div>
    )
}

export default Lgoin

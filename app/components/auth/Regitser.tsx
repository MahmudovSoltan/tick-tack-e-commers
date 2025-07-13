"use client"

import { useMyFormState } from "@/app/hooks/useForm";
import { useAppDispatch } from "@/app/store/hooks";
import { register } from "@/app/store/slices/authSlice";
import { ILoginFomtType } from "@/app/types/auth.type";
// Adını düzgün yoxla

const initialData: ILoginFomtType = {
  phone: "",
  password: "",
  full_name: "",
};

const Register = () => {
  const { data, handleChange, setData } = useMyFormState<ILoginFomtType>(initialData);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Göndərilən məlumatlar:", data); // Debug üçün
    try {
      await dispatch(register(data)).unwrap(); // unwrap daha aydın error verir
      console.log("Qeydiyyat uğurludur");
      setData(initialData);
    } catch (error) {
      console.error("Xəta baş verdi:", error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_inputs">
          <label htmlFor="full_name">Ad Soyad</label>
          <div className="form_input">
            <input
              type="text"
              placeholder="Ad, Soyad"
              name="full_name"
              value={data.full_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form_inputs">
          <label htmlFor="phone">Telefon nömrəsi</label>
          <div className="form_input">
            <input
              type="text" // 👈 type="number" yox!
              placeholder="(+994) __ / ___ / __ / __"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form_inputs">
          <label htmlFor="password">Parol</label>
          <div className="form_input">
            <input
              type="password"
              placeholder="*********************"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit_btn">Tamamla</button>
      </form>
    </div>
  );
};

export default Register;

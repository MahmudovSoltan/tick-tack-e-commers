


const Regitser = () => {

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
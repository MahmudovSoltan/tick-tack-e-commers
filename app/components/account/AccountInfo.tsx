
const AccountInfo = () => {
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
                                <input type="text" placeholder="Adınız" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Telefon nömrəsi
                            </label>
                            <div className="form_input">
                                <input type="number" placeholder="(+994) __ / ___ / __ / __" />
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
                                <input type="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Unvan
                            </label>
                            <div className="form_input">
                                <input type="text" placeholder="Unvaniniz" />
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
                                <input type="password" placeholder="Yeni Şifrə" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label>
                                Yeni Şifrənin təkrarı
                            </label>
                            <div className="form_input">
                                <input type="password" placeholder="Yeni Şifrənin təkrarı" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center mt-[60px]">
                    <button className="account_btn">Məlumatları yenilə</button>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo
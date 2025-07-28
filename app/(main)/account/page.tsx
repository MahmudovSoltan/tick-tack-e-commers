

import AccountBody from "@/app/components/account/AccountBody"
import Header from "../header"
import './css/account.css'
const Account = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header role="account" />
            </div>
            <section className="bg-[#f7f5fc] pb-14">
                <AccountBody />
            </section>
        </div>
    )
}

export default Account
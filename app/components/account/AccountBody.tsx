"use client"

import AccountSideBar from "./AccountSideBar"
import AccountInfo from "./AccountInfo"
import AccountOrder from "./AccountOrder"
import { useState } from "react"
const asideTabs = [AccountInfo, AccountOrder]
const AccountBody = () => {
    const [tab, setTab] = useState<number>(0)
    const CurrentTab = asideTabs[tab]


    return (
        <div className="container mx-auto ">
            <h3 className="account_title">
                Hesabım
            </h3>
            <div className="account_body_content">
                <AccountSideBar setTab={setTab} tab={tab} />
                <CurrentTab />
            </div>
        </div>
    )
}

export default AccountBody
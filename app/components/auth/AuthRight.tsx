'use client'

import AuthRIghtHeader from "./AuthRIghtHeader"
import Regitser from "./Regitser"
import Login from './Lgoin'
import { useState } from "react"
const authTabs = [Login, Regitser]
const AuthRight = () => {
    const [tab, setTab] = useState<number>(0)
    const Currenttab = authTabs[tab]

    return (
        <div className="auth_right_container">
            <div>
                <AuthRIghtHeader setTab={setTab} tab={tab} />
                <Currenttab />

            </div>
        </div>
    )
}

export default AuthRight
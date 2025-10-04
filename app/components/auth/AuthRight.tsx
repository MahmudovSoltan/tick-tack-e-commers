'use client'

import AuthRIghtHeader from "./AuthRIghtHeader"
import Regitser from "./Regitser"
import Login from './Lgoin'
import { useEffect, useState } from "react"
import { getCookie, setCookie } from "@/app/utils/cookie"
import LoadingSpinner from "../lodanig/LoadingSpinner"
const authTabs = [Login, Regitser]
const AuthRight = () => {
    const [tab, setTab] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const Currenttab = authTabs[tab]


    useEffect(() => {
        const savedTab = getCookie("authTab")
        if (savedTab) {
            setTab(parseInt(savedTab, 10))
        }
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])
    useEffect(() => {
        setCookie("authTab", tab.toString())
    }, [tab])

    if (loading) {
        return <LoadingSpinner />
    }


    return (
        <div className="auth_right_container">
            <div className="auth_right_content">
                <AuthRIghtHeader setTab={setTab} tab={tab} />
                <Currenttab />

            </div>
        </div>
    )
}

export default AuthRight
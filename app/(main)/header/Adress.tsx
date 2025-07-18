'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { fetchProfile } from "@/app/store/slices/profileSlice";
import { useEffect } from "react";

const Adress = () => {
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfile())
    }, [])
    return (

        <div className="adress_container" >
            <div className="addres_title">
                Unvan
            </div>
            <p className="addres_adress">
                {
                    user?.address ? <span>{user?.address}</span> : "Ünvan daxil edilmeyib"
                }

            </p>
        </div>

    )
}

export default Adress

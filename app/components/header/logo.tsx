'use client'

import { useRouter } from "next/navigation"

const Logo = () => {
        const navigate = useRouter()
    return (
        <h1 className="title cursor-pointer" onClick={()=>navigate.push("/home")}>
            TIK TAK
        </h1>
    )
}

export default Logo
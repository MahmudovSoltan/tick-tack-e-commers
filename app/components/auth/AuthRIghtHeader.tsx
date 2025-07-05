import { log } from 'console'
import { Dispatch, SetStateAction } from 'react'
interface PropsType {
    setTab: Dispatch<SetStateAction<number>>,
    tab: number
}

const AuthRIghtHeader = ({ setTab, tab }: PropsType) => {
    console.log(tab);
    
    return (
        <div>
            <ul className="auth_header_container">
                <li onClick={() => setTab(0)} className={tab == 0 ? "active" : ""}>
                    Daxil ol
                </li>
                <li onClick={() => setTab(1)} className={tab == 1 ? "active" : ""}>
                    Qeydiyyatdan keç
                </li>
            </ul>
        </div>
    )
}

export default AuthRIghtHeader
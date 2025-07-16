'use client'
import { useRouter } from 'next/navigation'
import './css/LinkComponent.css'

interface linkProps {
    title: string,
}

const LinkComponent = ({ title }: linkProps) => {
      const navigate = useRouter()
    return (
        <div>
            <div className='link_content'>
                <span className='cursor-pointer' onClick={()=>navigate.push("/home")}>Ana Səhifə </span> /{title}
            </div>

        </div>
    )
}

export default LinkComponent

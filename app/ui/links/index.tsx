
import './css/LinkComponent.css'

interface linkProps {
    title: string,
}

const LinkComponent = ({ title }: linkProps) => {

    return (
        <div>
            <div className='link_content'>
                <span>Ana Səhifə </span> /{title}
            </div>

        </div>
    )
}

export default LinkComponent

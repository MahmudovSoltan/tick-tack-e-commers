
import './css/LinkComponent.css'

interface linkProps {
    title: string,
}

const LinkComponent = ({ title }: linkProps) => {

    return (
        <div>
            <div>
                Ana Səhifə
            </div>
            {
                title
            }
        </div>
    )
}

export default LinkComponent

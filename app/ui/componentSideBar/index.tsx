import Image from "next/image"
import '@/app/(main)/category/css/category.css'
interface ComponentSidebarPropsType {
    links: string[],
    image: string,

}
const ComponentSidebar = ({ links, image }: ComponentSidebarPropsType) => {
    return (
        <aside >
            <div className="aside_top">
            <h4 className="categories_sub_title">
                Meyvələr
            </h4>
            <ul className="aside_links">
                {
                    links?.map((link, index) => (
                        <li key={index}>
                            {link}
                        </li>
                    ))
                }

            </ul>
            </div>
            <div>
                <Image src={image} alt={"category_image"} height={432} width={338} />
            </div>

        </aside>
    )
}

export default ComponentSidebar
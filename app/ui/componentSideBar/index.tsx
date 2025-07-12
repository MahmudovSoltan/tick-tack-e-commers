import Image from "next/image"
import '@/app/(main)/category/css/category.css'
interface ComponentSidebarPropsType {
    links: string[],
    image: string,
    currentCategory:string[]

}
const ComponentSidebar = ({ links, image,currentCategory }: ComponentSidebarPropsType) => {
    console.log(currentCategory);
    
    return (
        <aside className="w-[300px]">
            <div className="aside_top">
            <ul className="aside_links">
                {
                    links?.map((link, index) => (
                        <li key={index}  className={`${link.name === currentCategory && "categories_sub_title" }`}>
                            {link?.name}
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
import Image from "next/image"
import '@/app/(main)/category/css/category.css'
import { useRouter } from "next/navigation";

 type Link ={
   id:number ,
   name:string
 }
interface ComponentSidebarPropsType {
    links: Link[],
    image: string,
    currentCategory:string | undefined

}
const ComponentSidebar = ({ links, image,currentCategory }: ComponentSidebarPropsType) => {
    console.log(currentCategory);
    
    const navigate = useRouter()
    return (
        <aside className="w-[300px]">
            <div className="aside_top">
            <ul className="aside_links">
                {
                    links?.map((link, index) => (
                        <li key={index} onClick={()=>navigate.push(`/category/${link.id}`)}  className={`${link.name === currentCategory && "categories_sub_title" }`}>
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
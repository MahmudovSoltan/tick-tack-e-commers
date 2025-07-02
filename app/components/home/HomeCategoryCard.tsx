import Image from "next/image"
interface ICategory {
    title:string,
    image:string
}
const HomeCategoryCard = ({ title, image }: ICategory) => {
    console.log(image,'imgae');
    
    return (
        <div className="home_right_card">
            <Image src={image} alt={title} width={118} height={72} />
            <h4>
                {title}
            </h4>
        </div>
    )
}

export default HomeCategoryCard
'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";
interface ICategory {
    title: string,
    image: string,
    id: number
}
const HomeCategoryCard = ({ title, image, id }: ICategory) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/category/${id}`); // başqa səhifəyə yönləndirir
    };

    return (
        <div className="home_right_card" onClick={handleClick}>

            {
                image && <div className="home_right_image"><Image src={image} alt={title} width={118} height={72} /></div>
            }

            <h4>
                {title}
            </h4>
        </div>
    )
}

export default HomeCategoryCard
'use client'

import Image from "next/image";
import HomeCategoryCard from "./HomeCategoryCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";
import { getAllCategory } from "@/app/store/slices/categorySlice";



const categories = [
    {
        title: "Meyvə və Tərəvəz",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Ət və Toyuq Məhsulları",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Süd və Süd Məhsulları",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Çörək və Şirniyyatlar",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Quru Ərzaqlar",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "İçkilər",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Şirniyyat və Qənnadı",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Uşaq Məhsulları",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Təmizlik və Gigiyena",
        image: "https://control.titan.az/bloq/bloq.png",
    },
    {
        title: "Ev və Mətbəx",
        image: "https://control.titan.az/bloq/bloq.png",
    }
];

const HomeRight = () => {
    // const dispatch = useAppDispatch();
    // const { categories } = useAppSelector((state) => state.categories)
    // console.log(categories,'categories');
    // useEffect(()=>{
    //     dispatch(getAllCategory())
    // },[])
    return (
        <div className="home_right_container">
            {
                categories.map((category, index) => (

                    <HomeCategoryCard key={index} title={category.title} image={category.image} />

                ))
            }
        </div>
    )
}

export default HomeRight
'use client'

import HomeCategoryCard from "./HomeCategoryCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";
import { getAllCategory } from "@/app/store/slices/categorySlice";
import LoadingSpinner from "../lodanig/LoadingSpinner";



const HomeRight = () => {
    const dispatch = useAppDispatch();
    const { categories, loading } = useAppSelector((state) => state.categories)
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    if (loading) return <LoadingSpinner />
    return (
        <div className="home_right_container">
            {
                categories?.map((category, index) => (

                    <HomeCategoryCard id={category.id} key={index} title={category.name} image={category.img_url} />

                ))
            }
        </div>
    )
}

export default HomeRight
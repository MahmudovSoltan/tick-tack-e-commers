'use client'

import Header from "@/app/(main)/header"
import SwiperCarusel from "../landingPage/swiper"
import Specialoffers from "../landingPage/specialoffers/Specialoffers"
import Ourindicators from "../landingPage/ourindicators/Ourindicators"
import Footer from "@/app/(main)/footer"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import LoadingSpinner from "../lodanig/LoadingSpinner"
import { useEffect } from "react"
import { getAllCampaigns } from "@/app/store/slices/campingSlice"


const LandingBody = () => {
    const { data, loading, } = useAppSelector((state) => state.campings);
    console.log(loading, "loading");
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCampaigns())
    }, [])
    if (loading === true) {
        return <LoadingSpinner />

    } 

    return (
        <div className="px-[50px]">
            <Header role="landing" />
            <SwiperCarusel data={{ data }} />
            <Specialoffers />
            <Ourindicators />
            <Footer />
        </div>
    )
}

export default LandingBody

'use client'

import FavoritesBody from "@/app/components/favorites/FavoritesBody"
import Header from "../header"

const FavoritesPage = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Header role="basket" />

            </div>
            <section className="bg-[#f7f5fc] min-h-[570px] pt-8">
                <div className="container mx-auto">
                    <FavoritesBody />
                </div>
            </section>
        </div>
    )
}

export default FavoritesPage

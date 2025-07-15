import FavoritesBody from "@/app/components/favorites/FavoritesBody"
import Header from "../header"

const FavoritesPage = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Header role="basket" />

            </div>
            <section>
                <div className="container mx-auto">
                    <FavoritesBody />
                </div>
            </section>
        </div>
    )
}

export default FavoritesPage

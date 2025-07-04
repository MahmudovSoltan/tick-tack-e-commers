import LinkComponent from '@/app/ui/links'
import Header from '../../header'
import '../css/product.css'
import ProductBody from '@/app/components/product'
const ProductDetail = () => {
    return (
        <div >

            <div>
                <div className="container mx-auto">
                    <Header role="" />

                </div>
                <section className="product_container">
                    <div className="container mx-auto">
                        <LinkComponent title="Meyvələr" />
                        <ProductBody />
                    </div>
                </section>

            </div>

        </div>
    )
}

export default ProductDetail
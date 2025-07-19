import LinkComponent from '@/app/ui/links'
import Header from '../../header'
import '../css/product.css'
import ProductBody from '@/app/components/product'

interface Props {
  params: {
    product_id: string
  }
}

const ProductDetail = async ({ params }: Props) => {
  const { product_id } = params

  return (
    <div>
      <div className="container mx-auto">
        <Header role="" />
      </div>
      <section className="product_container">
        <div className="container mx-auto">
          <LinkComponent title="Meyvələr" />
          <ProductBody id={product_id} />
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

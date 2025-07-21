"use client"

import LinkComponent from '@/app/ui/links';
import Header from '../../header';
import '../css/product.css';
import ProductBody from '@/app/components/product';
import { useParams } from 'next/navigation';


export default  function Page() {
const params = useParams()
const product_id = Array.isArray(params.product_id) ? params.product_id[0] : params.product_id;
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
  );
}



// app/(main)/product/[product_id]/page.tsx


import LinkComponent from '@/app/ui/links';
import Header from '../../header';
import '../css/product.css';
import ProductBody from '@/app/components/product';

interface IPageProps {
  params: {
    product_id: string;
  };
}

export default async function Page({ params }: IPageProps) {
  const { product_id } = params;

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

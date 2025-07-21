// app/(main)/product/[product_id]/page.tsx

export const dynamic = "force-dynamic"; // SSR və ya ISR dəstəyi üçün əlavə olunur

import LinkComponent from '@/app/ui/links';
import Header from '../../header';
import '../css/product.css';
import ProductBody from '@/app/components/product';

interface PageProps {
  params: {
    product_id: string;
  };
}

export default async function Page({ params }: PageProps) {
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

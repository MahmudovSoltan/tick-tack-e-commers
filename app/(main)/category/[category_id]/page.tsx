// ❌ 'use client' sil, çünki bu server komponent olacaq
export const dynamic = "force-dynamic";

import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import '../css/category.css'
import LinkComponent from "@/app/ui/links";

// Bu interface serverdəki parametrləri əks etdirir
interface PageProps {
  params: {
    category_id: string;
  };
}

export default function CategoryDetailPage({ params }: PageProps) {
  const categoryId = Array.isArray(params.category_id) ? params.category_id[0] : params.category_id;

  return (
    <div>
      <div className="container mx-auto">
        <Header role="" />
      </div>
      <section className="categories_container">
        <div className="container mx-auto">
          <LinkComponent title="Meyvələr" />
          <CategoriesBody id={categoryId} />
        </div>
      </section>
    </div>
  );
}

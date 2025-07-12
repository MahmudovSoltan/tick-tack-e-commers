

import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import '../css/category.css'
import LinkComponent from "@/app/ui/links";
interface CategoryDetailPageProps {
  params: {
    catogry_id: string;
  };
}

export default function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { catogry_id } = params;


  return (
    <div>
      <div className="container mx-auto">
        <Header role="" />
      </div>
      <section className="categories_container">
        <div className="container mx-auto">
          <LinkComponent title="Meyvələr" />
          <CategoriesBody id={catogry_id} />
        </div>
      </section>

    </div>
  );
}


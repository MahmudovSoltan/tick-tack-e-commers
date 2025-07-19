'use client'

export const dynamic = "force-dynamic";
import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import '../css/category.css'
import LinkComponent from "@/app/ui/links";
import { useParams } from "next/navigation";



export default  function CategoryDetailPage() {
   const params = useParams();

  if (!params.category_id) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto">
        <Header role="" />
      </div>
      <section className="categories_container">
        <div className="container mx-auto">
          <LinkComponent title="Meyvələr" />
          <CategoriesBody id={Array.isArray(params.category_id) ? params.category_id[0] : params.category_id} />
        </div>
      </section>
    </div>
  );
}
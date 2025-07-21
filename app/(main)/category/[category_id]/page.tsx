"use client"

import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import "../css/category.css";
import LinkComponent from "@/app/ui/links";
import { useParams } from "next/navigation";


  function CategoryDetailPage() {
const params = useParams()

console.log(params, "params in category detail page");

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
export default CategoryDetailPage;
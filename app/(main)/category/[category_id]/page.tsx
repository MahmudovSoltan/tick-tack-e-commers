import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import "../css/category.css";
import LinkComponent from "@/app/ui/links";

// ✅ Next.js page üçün tip belə olmalıdır:
interface CategoryDetailPageProps {
  params: {
    category_id: string;
  };
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const categoryId = Array.isArray(params.category_id)
    ? params.category_id[0]
    : params.category_id;

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

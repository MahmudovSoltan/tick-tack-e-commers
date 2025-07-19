import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import '../css/category.css'
import LinkComponent from "@/app/ui/links";
// app/(main)/category/[catogry_id]/page.tsx

interface Props {
  params: {
    catogry_id: string;
  };
}

// !!! Burada `async` olmasa belə, `FC` istifadə ETMƏ!
export default function CategoryDetailPage({ params }: Props) {
  const { catogry_id } = params;

  if (!catogry_id) {
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
          <CategoriesBody id={catogry_id} />
        </div>
      </section>
    </div>
  );
}

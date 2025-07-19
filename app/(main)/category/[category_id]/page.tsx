export const dynamic = "force-dynamic";
import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import '../css/category.css'
import LinkComponent from "@/app/ui/links";

interface PageProps {
  params: {
    category_id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default  async function CategoryDetailPage({ params }: PageProps) {
  const { category_id } =  await params;

  if (!category_id) {
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
          <CategoriesBody id={category_id} />
        </div>
      </section>
    </div>
  );
}
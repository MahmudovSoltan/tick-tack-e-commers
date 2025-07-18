// app/(main)/category/[catogry_id]/page.tsx

import CategoriesBody from "@/app/components/categories/CategoriesBody";
import Header from "../../header";
import "../css/category.css";
import LinkComponent from "@/app/ui/links";

// düzgün type
type CategoryDetailPageProps = {
  params: {
    catogry_id: string;
  };
};

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

// generateStaticParams funksiyası - build üçün lazımdır
export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/categories"); // əgər real API-dirsə
  const data = await res.json();

  return data.map((cat: any) => ({
    catogry_id: cat.id.toString(), // mütləq string!
  }));
}

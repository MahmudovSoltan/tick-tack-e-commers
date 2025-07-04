import Header from "../../header";

interface CategoryDetailPageProps {
  params: {
    categoryId: string;
  };
}

export default function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { categoryId } = params;



  return (
    <div>
      <div className="container mx-auto">
        <Header role="category" />

      </div>
      <section className="categories_container">
        <div className="container mx-auto">
          <h1>Kateqoriya Detalı: {categoryId}</h1>
        </div>
      </section>

    </div>
  );
}


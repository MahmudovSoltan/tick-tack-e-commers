'use client'
import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
import Card from "@/app/ui/card";
import MyBasket from "@/app/ui/myBasket";
const categories = [
  "Tərəvəzlər",
  "Qış meyvələri",
  "Dietik Batonlar",
  "Xlebçı",
  "Diabetik Məhsullar",
  "Dietik İçkilər",
  "Qlütensiz Məhsullar",
]

const fruits = [
  {
    title: "Alma",
    price: 1.2,
    image: "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg",
  },
  {
    title: "Armud",
    price: 1.5,
    image: "https://cdn.pixabay.com/photo/2016/08/08/15/19/pears-1578745_1280.jpg",
  },
  {
    title: "Banan",
    price: 2.0,
    image: "https://cdn.pixabay.com/photo/2018/06/04/19/51/bananas-3450176_1280.jpg",
  },
  {
    title: "Portağal",
    price: 1.8,
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
  },
  {
    title: "Kivi",
    price: 2.3,
    image: "https://cdn.pixabay.com/photo/2018/06/07/20/51/kiwi-3462841_1280.jpg",
  },
  {
    title: "Üzüm",
    price: 2.7,
    image: "https://cdn.pixabay.com/photo/2016/10/02/22/17/grapes-1716311_1280.jpg",
  },

];

const CategoriesBody = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="categories_title">
            Kateqorialar
          </h2>
          <div className="w-[375px] flex items-center justify-start">
            <h2 className="categories_title">
              Səbətim
            </h2>

          </div>

        </div>
        <div className="categories_body_container">
          <ComponentSidebar image={sideBarImage} links={categories} />
          <div className="category_cards">
            {
              fruits?.map((fruit, i) => (
                <Card key={i} image={fruit.image} onclik={() => { }} price={fruit.price} title={fruit.title} />
              ))
            }
          </div>
          <div>

            <MyBasket />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesBody

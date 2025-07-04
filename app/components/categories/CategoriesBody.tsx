import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
const categories = [
  "Tərəvəzlər",
  "Qış meyvələri",
  "Dietik Batonlar",
  "Xlebçı",
  "Diabetik Məhsullar",
  "Dietik İçkilər",
  "Qlütensiz Məhsullar",
]
const CategoriesBody = () => {
  return (
    <div>
      <ComponentSidebar image={sideBarImage} links={categories} />
    </div>
  )
}

export default CategoriesBody

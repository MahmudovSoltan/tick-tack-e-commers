'use client'
import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
import Card from "@/app/ui/card";
import MyBasket from "@/app/ui/myBasket";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getAllCategory } from "@/app/store/slices/categorySlice";
import { useEffect, useMemo } from "react";
import { fetchProducts } from "@/app/store/slices/productSlice";
import imgage from '@/app/assets/images/Group 42.svg'
import Image from "next/image";
import { addBasketFunc, deleteProduct, getAllBasketProducts, removeProduct } from "@/app/store/slices/basketSlice";
import { ToastContainer } from "react-toastify";
import debounce from 'lodash/debounce';
import EmptyBasket from "../basket/EmptyBasket";
import LoadingSpinner from "../lodanig/LoadingSpinner";
interface PropsType {
  id:string
}
const CategoriesBody = ({ id }:PropsType) => {


  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products)
  const { categories } = useAppSelector((state) => state.categories)

  const currentCategory = categories?.find((category) => category.id === Number(id))
  const filterProduct = products.filter((product) => product.category.id === Number(id))
  const { baskets } = useAppSelector((state) => state.baskets)
  const addbasket = useMemo(() => {
    return debounce(async (id: string) => {
      await dispatch(addBasketFunc(id));
      await dispatch(getAllBasketProducts());
    }, 500);
  }, [dispatch]);

  const deleteProductFunc = useMemo(() => {
    return debounce(async (id: string) => {
      await dispatch(deleteProduct(id));
      await dispatch(getAllBasketProducts());
    }, 500);
  }, [dispatch]);

  const removeProductFunc = useMemo(() => {
    return debounce(async (id: string) => {
      await dispatch(removeProduct(id));
      await dispatch(getAllBasketProducts());
    }, 500);
  }, [dispatch]);






  useEffect(() => {
    dispatch(getAllBasketProducts())
    dispatch(getAllCategory())
    dispatch(fetchProducts())
  }, [id, addbasket])
  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="categories_title">
            Kateqorialar
          </h2>
          <div className="w-[330px] flex items-center justify-start">
            <h2 className="categories_title">
              Səbətim
            </h2>

          </div>

        </div>
        <div className="categories_body_container">
          <ComponentSidebar image={sideBarImage} links={categories} currentCategory={currentCategory?.name} />
          <div className="category_cards">
            {
              filterProduct?.length > 0 ? filterProduct?.map((product, i) => (
                <Card
                  key={i}
                  image={product?.img_url}
                  onclik={() => addbasket(String(product.id))}
                  price={product.price}
                  title={product?.title}
                  id={product.id}
                  baskets={baskets}
                  deleteProductFunc={deleteProductFunc}
                />
              )) : <div className="empty_product">
                <Image
                  src={imgage}
                  width={208}
                  height={208}
                  alt="empty_category"
                  objectFit="cover"
                />
                <p>
                  Bu kateqoriyada məhsul yoxdur
                </p>
              </div>
            }



          </div>
          <div>
            {
                baskets && baskets?.items?.length > 0 ? <MyBasket  removeProductFunc={removeProductFunc} baskets={baskets} deleteProduct={deleteProductFunc} addbasket={addbasket} /> : <EmptyBasket />
            }

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesBody

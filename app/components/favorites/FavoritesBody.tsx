'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { addBasketFunc, deleteProduct, getAllBasketProducts, removeProduct } from "@/app/store/slices/basketSlice"
import MyBasket from "@/app/ui/myBasket"
import { useEffect, useMemo } from "react"
import EmptyBasket from "../basket/EmptyBasket"
import { debounce } from "lodash"
import { getAllFavorites } from "@/app/store/slices/favoritesSLice"
import Card from "@/app/ui/card"
import LoadingSpinner from "../lodanig/LoadingSpinner"

const FavoritesBody = () => {
  const { baskets } = useAppSelector((state) => state.baskets)
  const dispatch = useAppDispatch()
  const { favosites, loading } = useAppSelector((state) => state.favosites)


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
    dispatch(getAllFavorites())
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="categories_title">
          Siyahılarım
        </h2>
        <div className="w-[375px] flex items-center justify-start">
          <h2 className="categories_title">
            Səbətim
          </h2>
        </div>
      </div>
      <div className="flex mt-3.5 pb-14">
        <div className="w-[70%] max-h-max flex items-center flex-wrap gap-5 mt-[10px]">
          {
            favosites.map((favorite) => (
              <Card
                key={favorite.id}
                baskets={baskets}
                image={favorite.img_url}
                onclik={() => addbasket(String(favorite.id))}
                price={Number(favorite.price)}
                title={favorite?.title}
                id={favorite.id}
                deleteProductFunc={deleteProductFunc}
              />
            ))
          }
        </div>


        <div>
          {
             baskets && baskets?.items?.length > 0 ? <MyBasket removeProductFunc={removeProductFunc} baskets={baskets} addbasket={addbasket} deleteProduct={deleteProductFunc} /> : <EmptyBasket />
          }

        </div>

      </div>
    </div>
  )
}

export default FavoritesBody
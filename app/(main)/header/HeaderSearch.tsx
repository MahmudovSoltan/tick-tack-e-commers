'use client'
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchProducts, productSearch } from "@/app/store/slices/productSlice";
import { useSearchParams,useRouter } from "next/navigation";
import {  } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HeaderSearch = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const {products}= useAppSelector((state)=>state.products)
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  useEffect(() => {
    if (isFocused && secondInputRef.current) {
      secondInputRef.current.focus();
    }
  }, [isFocused]);

  const filteredResults = products.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set("search", value)

    } else {
      params.delete("search")
    }
       dispatch(productSearch({search:value}))
    router.replace(`?${params.toString()}`);
  }


  
  return (
    <div className="search_input relative" ref={searchRef}>
      <input
        type="text"
        placeholder="Axtarış"
        onFocus={() => setIsFocused(true)}
      />

      {isFocused && (
        <div className="search_container">
          <div className="ovelay" onClick={() => setIsFocused(false)}></div>
          <div className="search-popup">
            <input
              ref={secondInputRef}
              type="text"
              placeholder="Axtarış"
              value={searchText}
              onChange={handleSearchChange}
              className="search-input"
            />
            <div className="serach_content">
              {filteredResults.map((item) => (
                <div  onClick={()=>router.push(`/product/${item.id}`)}  className="search-item" key={item.id}>
                  <img src={item?.img_url} alt={item.title} className="item-img" />
                  <div className="item-info">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;

import Hero from "@/components/hero/Hero";
import Skeleton from "@/components/skeleton/skeleton";
import { useFetch } from "../../hooks/useFetch";
import React, { useState } from "react";
import Shops from "@/components/shops/Shops";
import Pro from "@/components/pro/Pro";
import Banner from "@/components/banner/Banner";
import Products from "@/components/products/products";

const Home = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useFetch(
    `/products${category ? `/category/${category}` : ""}`,
    { limit: 10 },
    [category]
  );
  const { data: categories } = useFetch("/products/category-list");

  const products = (
    <div className="container  py-4 mt-10">
      <ul className="category category flex whitespace-nowrap ul__text  overflow-x-auto scroll-none gap-4 ">
        <li>
          <button
            onClick={() => setCategory("")}
            className="px-4 py-1 bg-green-500 ul__text rounded-3xl text-white"
          >
            All
          </button>
        </li>
        {categories?.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setCategory(cat)}
              className="px-4 py-1 bg-green-500 rounded-3xl text-white"
            >
              {cat.split("-").join(" ")}
            </button>
          </li>
        ))}
      </ul>
      {!loading ? <Products data={data?.products} /> : <Skeleton />}
    </div>
  );
  return (
    <>
   <div>
<Hero/>
<Shops/>
<Pro/>
{products}
<Banner/>
</div>
   
    </>
  );
};

export default Home;

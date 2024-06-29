"use client";
import Image from "next/image";
import logo from "../../../../public/logo.jpeg";
import AddProducts from "../addProducts";
import ListProducts from "../listProducts";
import { useState } from "react";
import { IProduct } from "@/app/interfaces/produts";
import { productsMock } from "@/app/mock/listproduts";

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<IProduct[]>(productsMock);

  const addProduct = (newProduct: IProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <section className="h-3/4 bg-white sm:w-1/2 mx-auto p-8 rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <Image src={logo} alt="logo Oak Tecnologia" height={200} width={200} />
        <div className="flex gap-4 w-full max-w-lg sm:flex-row flex-col">
          <input
            placeholder="Pesquisar produto"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-[#457a80] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <AddProducts addProduct={addProduct} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <ListProducts searchTerm={searchTerm} products={products} />
      </div>
    </section>
  );
};

export default Products;

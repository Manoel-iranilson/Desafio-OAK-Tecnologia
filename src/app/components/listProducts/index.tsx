import { IProduct } from "@/app/interfaces/produts";
import { useState } from "react";

interface ListProductsProps {
  searchTerm: string;
  products: IProduct[];
}

const ListProducts: React.FC<ListProductsProps> = ({
  searchTerm,
  products,
}) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const toggleSortDirection = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

  const filterProducts = (product: IProduct): boolean => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
  };

  return (
    <div className="overflow-x-auto">
      <button
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md mb-4"
        onClick={toggleSortDirection}
      >
        {sortDirection === "asc" ? "Menor para Maior" : "Maior para Menor"}
      </button>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nome do Produto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Valor
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Disponível
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProducts
              .filter((product) => filterProducts(product))
              .map((product) => (
                <tr key={product.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.available ? "Sim" : "Não"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProducts;

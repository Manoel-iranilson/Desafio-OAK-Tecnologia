"use client";

import { IProduct } from "@/app/interfaces/produts";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProducts({
  addProduct,
}: {
  addProduct: (product: IProduct) => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addProduct({
      name: data.name,
      desc: data.desc,
      value: parseFloat(data.value),
      available: data.available === "true",
    });
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-[#457a80] text-white active:bg-[#457a80] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Adicionar novo Produto
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Adicionar Produto</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="nome"
                      >
                        Nome do Produto
                      </label>
                      <input
                        {...register("name", {
                          required: "name é obrigatório",
                        })}
                        id="name"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs italic">
                          {String(errors.name.message)}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="desc"
                      >
                        Descrição
                      </label>
                      <textarea
                        {...register("desc", {
                          required: "Descrição é obrigatória",
                        })}
                        id="desc"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.desc && (
                        <p className="text-red-500 text-xs italic">
                          {String(errors.desc.message)}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="value"
                      >
                        Valor
                      </label>
                      <input
                        {...register("value", {
                          required: "Valor é obrigatório",
                        })}
                        id="value"
                        type="number"
                        step="0.01"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.value && (
                        <p className="text-red-500 text-xs italic">
                          {String(errors.value.message)}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="available"
                      >
                        Disponível
                      </label>
                      <select
                        {...register("available", {
                          required: "Disponibilidade é obrigatória",
                        })}
                        id="available"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                      </select>
                      {errors.available && (
                        <p className="text-red-500 text-xs italic">
                          {String(errors.available.message)}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Sair
                      </button>
                      <button
                        className="bg-[#457a80] text-white active:bg-[#457a80] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

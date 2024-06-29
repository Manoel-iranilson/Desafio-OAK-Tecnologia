import { IProduct } from "../interfaces/produts";

export const productsMock: IProduct[] = [
  {
    name: "Laptop",
    desc: "Um laptop de alto desempenho adequado para todas as suas necessidades de computação.",
    value: 1500.0,
    available: true,
  },
  {
    name: "Smartphone",
    desc: "Um smartphone de última geração com uma tela impressionante.",
    value: 799.99,
    available: true,
  },
  {
    name: "Fones de ouvido",
    desc: "Fones de ouvido com cancelamento de ruído e qualidade de som superior.",
    value: 199.99,
    available: false,
  },
  {
    name: "Smartwatch",
    desc: "Um smartwatch com monitoramento de saúde e várias funções inteligentes.",
    value: 249.99,
    available: true,
  },
  {
    name: "Tablet",
    desc: "Um tablet leve com uma tela vibrante, perfeito para entretenimento.",
    value: 499.99,
    available: true,
  },
];

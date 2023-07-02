import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Renda Obtida",
    value: "R$53.000,00",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "Do que na utlima semana",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Asisstiram filmes hoje",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "Do que o último mês",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Novo Publico",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "Do que ontem",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Vendas",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "Do que ontem",
    },
  },
];

export default statisticsCardsData;

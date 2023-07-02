import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export const ordersOverviewData = [
  {
    icon: BellIcon,
    color: "text-green-500",
    title: "$2400, Compras Online",
    description: "22 DEC 7:20 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-red-500",
    title: "Mais Visitas ao Site",
    description: "21 DEC 11 PM",
  },
  {
    icon: ShoppingCartIcon,
    color: "text-blue-500",
    title: "Compraram um plano da API",
    description: "21 DEC 9:34 PM",
  },
  {
    icon: CreditCardIcon,
    color: "text-orange-500",
    title: "Novos Cadastros ",
    description: "20 DEC 2:20 AM",
  },
  {
    icon: LockOpenIcon,
    color: "text-pink-500",
    title: "Novos Filmes no catalogo",
    description: "18 DEC 4:54 AM",
  },
  {
    icon: BanknotesIcon,
    color: "text-blue-gray-900",
    title: "Novos Pedidos",
    description: "17 DEC",
  },
];

export default ordersOverviewData;

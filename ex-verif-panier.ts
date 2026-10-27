const reduction = 20;
const reduction_type: "amount" | "percent" = "amount";

interface ProductI{
  name: string;
  quantity: number;
  price: number;
  currency: "EUR" | "USD";
}

interface CartI{
  products: ProductI[];
  isVip: boolean;
}

const cartVIP: CartI = {
  products: [
    {
      name: "Chocolat",
      quantity: 1,
      price: 2.49,
      currency: "EUR"
    },
    {
      name: "Lait",
      quantity: 3,
      price: 1.99,
      currency: "EUR"
    },
    {
      name: "Ordinateur",
      quantity: 1,
      price: 2149.99,
      currency: "EUR"
    }
  ],
  isVip: true
};

const cart: CartI = {
  products: [
    {
      name: "Chocolat",
      quantity: 1,
      price: 2.49,
      currency: "EUR"
    },
    {
      name: "Lait",
      quantity: 3,
      price: 1.99,
      currency: "EUR"
    },
    {
      name: "Ordinateur",
      quantity: 1,
      price: 2149.99,
      currency: "EUR"
    }
  ],
  isVip: false
};

function canGetReduction(cart: CartI): number{
  const totalAmount = cart.products.reduce(
    (acc, product) => (acc + (product.quantity * product.price)),
    0
  );

  if(!cart.isVip) return totalAmount;

  return reduction_type === "amount" ? totalAmount - reduction : totalAmount * (1 - reduction);
}

console.log(`Valeur panier VIP : ${canGetReduction(cartVIP)}`);
console.log(`Valeur panier classique : ${canGetReduction(cart)}`);
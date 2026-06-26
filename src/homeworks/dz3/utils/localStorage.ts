/** @format */

const FAVORITES_KEY = "favorites";
const CART_KEY = "cart";

type CartItem = {
  id: number;
  quantity: number;
};

// Favorite
export const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
};

export const toggleFavorite = (id: number) => {
  const favorites = getFavorites();

  if (favorites.includes(id)) {
    const updated = favorites.filter((item) => item !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } else {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

// Cart
export const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
};

export const addToCart = (id: number) => {
  const cart = getCart();

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) existingItem.quantity += 1;
  else cart.push({ id, quantity: 1 });

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

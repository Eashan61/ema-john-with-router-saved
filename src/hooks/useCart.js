import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
 const [cart, setCart] = useState([]);
 useEffect(() => {
     
  if(products.lenght){
   const savedCart = getStoredCart();
   const storedCart = [];
   for(const key in savedCart){
    const addedProduct = products.find(product => product.key === key);
    if(addedProduct){
     // set quantitiy
     const quantitiy = savedCart[key];
     addedProduct.quantitiy = quantitiy;
     storedCart.push(addedProduct);
    }
   }
   setCart(storedCart);
  }

 },[products]);

 return [cart, setCart];
}

export default useCart;
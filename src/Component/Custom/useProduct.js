import { useEffect, useState } from 'react';
import productApi from '../../api/productApi';

export default function useProduct(productID) {
   const [product, setProduct] = useState({});
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      (async () => {
         try {
            const result = await productApi.get(productID);
            setProduct(result);
            setLoading(false);
         } catch (error) {
            console.log(error.message);
         }
      })();
   }, [productID]);
   return { product, loading };
}

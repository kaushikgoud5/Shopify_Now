import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router'
import Breadcrump from '../Components/Breadcrump'
import ProductDisplay from './ProductDisplay'
import SimilarProducts from '../Components/SimilarProducts'
const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
        <Breadcrump product={product}></Breadcrump>
        <ProductDisplay product={product}/>
        <SimilarProducts/>
    </div>
  )
}

export default Product

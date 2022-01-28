import React from 'react';
import "../styles/product.scss"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"

function Product({ product, index }) {
  const { _id } = product
  
  const { name, image, price, type, description } = product
  const delEntry = (e) => {
    e.preventDefault()
    console.log(_id)
    axios.delete(`https://productscontroller.herokuapp.com/api/delete`, {id: _id})
      // .then(res => console.log("del",res))
      // .catch(err=> console.log(err))
  }
  
  
  return (
    <div className='product'>
      <div className="pcol1">{index + 1}</div>
      <div className="pcol2"><img src={image} alt="product item" /></div>
      <div className="pcol3">{name}</div>
      <div className="pcol4">{price}</div>
      <div className="pcol5">{type}</div>
      <div className="pcol6">{description}</div>
      <div className="pcol7"><AiFillDelete onClick={(e)=> delEntry(e)} className='icon'/></div>
    </div>
  );
}

export default Product;

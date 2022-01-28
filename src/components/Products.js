import React, {useState,useEffect} from 'react';
import Product from './Product';
import "../styles/products.scss"
import axios from 'axios';
import Wait from './Wait';

function Products() {
    const [state, setState] = useState([])
    
    useEffect(() => {
        axios.get("https://productscontroller.herokuapp.com/api/getAll")
            .then((res) => {
                setState(res.data.products)
            })
    })
    const returnEmpty = ()=> <Wait />
    return (
        <div className='products_wrapper'>
            <h3>All Products</h3>
            <div className="product_dashboard">
                <div className="top">
                    <div className="col1">#</div>
                    <div className="col2">Image</div>
                    <div className="col3">name</div>
                    <div className="col4">price</div>
                    <div className="col5">Type</div>
                    <div className="col6">Descrption</div>
                    <div className="col7">Del</div>
                </div>
                <div className="products">
                    {state === [] ? returnEmpty():
                        state.map((product) => <Product key={product._id} index={state.indexOf(product)} product={product} />)}
                </div>
            </div>
        </div>
    );
}

export default Products;

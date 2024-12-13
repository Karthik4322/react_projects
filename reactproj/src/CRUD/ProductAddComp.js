import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductAddComp = () => {
    let nav = useNavigate();
    const [product,setProduct] =useState({
        prod_name :"",
        price: "",
        pcompany:"",
        pquantity: ""
    })

    const inputChangeHandler =(event)=>{
        const{type,name,value} = event.target;  //destructuring
        setProduct({...product,[name]:value});
    }
    const addProduct =(event)=>{
        event.preventDefault();
        //console.log(product);
        axios.post(`http://localhost:9999/products`,product).then(()=>{
            window.alert("Product Added successfully");
            nav(`/mainDashboard/pdash`);
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>ProductAddComp</h2>
            <div className ="row">
            <div className= "col-sm-3"></div>
            <div className ="col-sm-6">

                <form onSubmit={addProduct}>
                    <label className='form-label'>Enter Product Name:</label>
                    <input type="text" name="prod_name"onChange={inputChangeHandler} value={product.prod_name} className='form-control'/>

                    <label className='form-label'>Enter Product Price:</label>
                    <input type="text" name="price" onChange={inputChangeHandler} value={product.price} className='form-control'/>

                    <label className='form-label'>Enter Product Company:</label>
                    <input type="text" name="pcompany" onChange={inputChangeHandler} value={product.pcompany} className='form-control'/>

                    <label className='form-label'>Enter Product Quantity:</label>
                    <input type="text" name="pquantity" onChange={inputChangeHandler} value={product.pquantity} className='form-control'/>
                
                    <button type="submit"className="btn btn-primary mt-3">Add Data</button>
                </form>
            </div>
            </div> 
            <div className='col-sm-3'></div>
        </div>
    )
}

export default ProductAddComp

import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const ProductEditComp = () => {
    const{id} =useParams();
    const nav = useNavigate();

const[product,setProduct] =useState({
    id:"",
    prod_name:"",
    price:"",
    pcompany:"",
    pquantity:""
});

useEffect(() => {
    axios.get(`http://localhost:9999/products/${id}`).then((res) =>{
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((error) => {});
}, [])


const inputChangeHandler =(event)=>{
    const{type,name,value} = event.target;  
    setProduct({...product,[name]:value});
}

const editProduct =(event)=>{
    event.preventDefault();
    //console.log(product);
    axios.put(`http://localhost:9999/product/${id}`,product).then(()=>{
        window.alert("Product edited successfully");
        nav('/mainDashboard/pdash');
    }).catch((error)=>{})
}


return (
        <div>
             <h2>ProductEditComp</h2>
             <div className ="row">
            <div className= "col-sm-3"></div>
            <div className ="col-sm-6">

                <form onSubmit={editProduct}>
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

export default ProductEditComp

import { useState } from 'react';
import React, { useEffect} from 'react'
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link,Outlet} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';


 const ProductDashComp = () => {
 const [product,setProduct]=useState([]);
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  
  

  const handleShow =(val)=>{
    setShow(true)
    setShow(val);
  };
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData=()=>{
        axios.get("http://localhost:9999/products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);

        }).catch((error)=>{
            //console.log(error);
        });
    }

    const deleteProduct=(id)=>{
        console.log(id);
        if(window.confirm(`Are you sure to delete product with id :${id}`)==true){
        axios.delete(`http://localhost:9999/products/${id}`).then(()=>{
            window.alert("Product deleted successfully");
            fetchData();
        }).catch((error)=>{})
    }

}


    return (
        <div>
            <h2>This is Product Dash Function Component</h2>
            <Link to="/mainDashboard/padd" className='btn btn-outline-success'>Add</Link>
             <table className='table table-hover table-bordered table-striped text-center ' >
               <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead> 
                <tbody>
                {
                    product.length >0 && product.map((val,index)=>{

                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.prod_name}</td>
                            <td>{val.price}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                            <td>
                            <button type='button' className='btn btn-outline-success'onClick={()=>handleShow(val)}> <VisibilityIcon>
                                </VisibilityIcon></button>
                                <Link to={`/mainDashboard/pedit/${val.id}`} className='btn btn-outline-success' >
                                <EditIcon></EditIcon>
                                </Link>
                                <button type='button' className='btn btn-outline-success'onClick={()=>deleteProduct(val.id)}><DeleteIcon></DeleteIcon>
                                </button>
                            </td>
                        </tr>

                    })
                }
                </tbody>
             </table>
             
             <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
             <Modal.Header closeButton>
          <Modal.Title>{show.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span><strong>{show.prod_name}</strong></span>
          <span><strong>{show.price}</strong></span>
          <span><strong>{show.pcompany}</strong></span>
          <span><strong>{show.pquantity}</strong></span>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
        </Modal>
        <Outlet/>
         </div>
    )
 }            
export default ProductDashComp 

import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import NavComp from "../layout/NavComp";
import FooterComp from "../layout/FooterComp";
// import ProductAddComp from "../CRUD/ProductAddComp";
// import ProductDashComp from "../CRUD/ProductDashComp";
// import { Carousel } from "react-bootstrap";



const MainDashboardComp=(props)=>{

    // const [show, setShow] = useState(false);

    const anchorVisited=()=>{

    }


    return (
        <div>
            {/* <h2>This is main Dashboard Function Component</h2> */}

            <div className="container mt-3" >
                <div className="card border-primary">
                    <div className="card-header border-primary">
                        <NavComp/>
                    </div>
                    <div className="card-body border-primary">
                        <Outlet/>
                        {/* // Outlet won't work in Fragment */}
                    </div>
                    <div className="card-footer border-primary">
                        <FooterComp/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainDashboardComp;

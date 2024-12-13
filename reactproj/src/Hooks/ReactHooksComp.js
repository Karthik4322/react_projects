
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactHooksComp=(props)=>{
    return (
        <div>
            <h2>This is React Hooks Function Component</h2>
            <div className="card border-primary">
                    <div className="card-header border-primary">
                    <Link to="statehooks" className="btn btn-outline-warning btn-sm me-2">UseStateHooksComp</Link>
                    <Link to="effecthooks" className="btn btn-outline-warning btn-sm me-2">UseEffectHooksComp</Link>
                    </div>
                    <div className="card-body border-primary">
                        <Outlet/>
                    </div>

                </div>
        </div>
    )
};

export default ReactHooksComp;
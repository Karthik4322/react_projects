import { createBrowserRouter } from "react-router-dom";
import VirtualDOMComp from "../components/VirtualDOMComp";
import MyImagesComp from "../components/MyImagesComp";
import EventComp from "../components/EventComp";
import CssComp from "../components/CssComp";
import MyStateComp from "../components/MyStateComp";
import MyPureComp from "../components/MyPureComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "../MainRouting/ProtectedRouting";
import DataListComp from "../reduxCode/DataListComp";
import MyCarouselComp from "../components/MyCarouselComp";

const routing = createBrowserRouter([

    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    {path:"mainDashboard",element:<ProtectedRouting Component ={MainDashboardComp}/>, children:[
        //default routing
        
        {path:"",element:<MyStateComp></MyStateComp>},
        {path:"datalist",element:<DataListComp></DataListComp>},

        {path:"state",element:<MyStateComp></MyStateComp>},
        {path:"favcolor",element:<MyFavColorComp newColor="Green"/>},
        {path:"pdash", element:<ProductDashComp/>},
        {path:"padd", element:<ProductAddComp/>},
        {path:"pedit/:id", element:<ProductEditComp/>}, // by using pedit/:id we are accessing the specific product by id.
        {path: "caro",element:<MyCarouselComp></MyCarouselComp>},

       
        //naming routing

        {path:"virtualdom",element:<VirtualDOMComp></VirtualDOMComp>},

        //parameterized routing

        {path:"images/id",element:<MyImagesComp></MyImagesComp>},
        {path:"event",element:<EventComp />},
        {path:"mycss",element:<CssComp />},

        //child routing

        {path:"hooks",element:<ReactHooksComp/>,children:[
            {path:"statehooks",element:<UseStateHooksComp/>},
            {path:"effecthooks",element:<UseEffectHooksComp/>},
        ]},
   

    ]},
    {path:"formval",element:<FormValComp/>},


    
    //wild-card routing

    {path:"*",element:<PageNotFoundComp />}

]);

export default routing;
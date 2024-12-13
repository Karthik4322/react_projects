import React from 'react';
import commonData from '../assets/shared/constant/constantData';

const MyImageComp=()=>{
    return(
        <div>
            <img src ={commonData.Sunflower} alt="india flag" height="200px" width="200px"/>
            <img src ={commonData.chichen} alt="petra"height="200px" width="200px" />

        </div>
    )
}
export default MyImageComp;
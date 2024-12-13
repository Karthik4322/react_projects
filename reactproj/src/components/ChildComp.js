const ChildComp =(props)=>{
    const{name,sal,manageState}=props;
        return(
            <div>
                <h2>This is Child component</h2>
                <p>Name:{name} and Salary:{sal}</p>
                <h2 onMouseOver ={manageState}>Change Data</h2>
            </div>
        )
};
export default ChildComp;
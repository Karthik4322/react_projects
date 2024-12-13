import React, {Component} from "react";

class EmpDetailsComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            emp:[
                {empId:10,empName:"Madhav",empPost:"Full Stack Developer",empSal:300000,empContact:5678904321,empAddress:"Trichy"},
                {empId:11,empName:"Sai",empPost:"Full Stack Developer",empSal:300000,empContact:9360335010,empAddress:"Tirunelveli"},
                {empId:12,empName:"Arun",empPost:"Frontend Developer",empSal:300000,empContact:8860335010,empAddress:"Pondichery"},
                {empId:13,empName:"prasath",empPost:"Backend Developer",empSal:300000,empContact:7760335010,empAddress:"Perambulur"},
                {empId:14,empName:"Sankresh",empPost:"Tester",empSal:300000,empContact:6660335010,empAddress:"Tanjavur"},
                {empId:15,empName:"karthi",empPost:"Full Stack Developer",empSal:300000,empContact:5560335010,empAddress:"Chennai"},
                {empId:16,empName:"Sriram",empPost:"Frontend Developer",empSal:300000,empContact:9087654321,empAddress:"Chennai"},
                {empId:17,empName:"Kishore",empPost:"Frontend Developer",empSal:300000,empContact:8097654321,empAddress:"Vellore"},
                {empId:18,empName:"SelvaBalaji",empPost:"Backend Developer",empSal:300000,empContact:7890654321,empAddress:"Chengalpattu"},
                {empId:19,empName:"Deva",empPost:"Tester",empSal:300000,empContact:6789054321,empAddress:"vilupuram"},
            
            ]


        }
    }

    render(){
         const {emp}=this.state;
        return (
            <div>
                <h2> This is Employee Class Component</h2>
                <table className="table table-bordered table-striped table-hover table-info">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Salary</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>

                    {
                        emp.length > 0 && emp.map((val,index)=>{
                            return <tr>
                                <td key={val.empId}>{val.empId}</td>
                                <td key={val.empId}>{val.empName}</td>
                                <td key={val.empId}>{val.empPost}</td>
                                <td key={val.empId}>{val.empSal}</td>
                                <td key={val.empId}>{val.empContact}</td>
                                <td key={val.empId}>{val.empAddress}</td>
                            </tr>
                        })
                    }
                </table>
                
            </div>
        )
    }
}

export default EmpDetailsComp;





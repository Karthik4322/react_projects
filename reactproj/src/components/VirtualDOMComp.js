import React, { Component } from 'react';

class VirtualDOMComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakFast: [
                { id: 101, name: "idly", price: "39rs" },
                { id: 102, name: "dosa", price: "50rs" },
                { id: 103, name: "poori", price: "60rs" },
                { id: 104, name: "pongal", price: "20rs" },
            ],
            courses: ['javascript', 'react', 'angular', 'Java', 'Dotnet', 'python'],
        };
    }

    render() {
        const { breakFast, courses } = this.state; // Extract both breakFast and courses from state
        return (
            <div>
                <h2>This is Virtual DOM</h2>
                <ul>
                    {breakFast.length > 0 &&
                        breakFast.map((val) => {
                            return (
                                <li key={val.id}>
                                    {val.name} -- {val.price}
                                </li>
                            );
                        })}
                </ul>
                <hr />
                <select>
                    {courses.length > 0 &&
                        courses.map((val, index) => {
                            return (
                                <option value={val} key={index}>
                                    {val}
                                </option>
                            );
                        })}
                </select>
            </div>
        );
    }
}

export default VirtualDOMComp;

import React, { useState } from 'react';

const FormValComp = () => {
    let myCourses =["html","css","javascript","python","java"]
    const [user, setUser] = useState({
        fname: '',
        email: '',
        contact: '',
        terms: false,
        courses: ''
    });

    const handleInputChange = (event) => {
        const { type, name, value, checked } = event.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const contactRegex = /^[6-9]\d{9}$/;
        const nameRegex = /^[a-zA-Z ]{3,20}$/;

        // First Name Validation
        if (!user.fname.trim()) {
            alert('First Name is required');
            return;
        }
        if (!nameRegex.test(user.fname.trim())) {
            alert('First Name must contain only letters and be 3-20 characters long');
            return;
        }

        // Email Validation
        if (!user.email.trim()) {
            alert('Email is required');
            return;
        }
        if (!emailRegex.test(user.email.trim())) {
            alert('Please enter a valid email address');
            return;
        }

        // Contact Validation
        if (!user.contact.trim()) {
            alert('Contact number is required');
            return;
        }
        if (!contactRegex.test(user.contact.trim())) {
            alert('Please enter a valid 10-digit Indian contact number');
            return;
        }

        // Checkbox Validation
        if (!user.terms) {
            alert('You must accept the terms and conditions');
            return;
        }

        // Select type Validation
        if(user.courses ===""){
            alert("You must select courses");
            return false;
        }
        

        // Successful submission
        alert(`Form submitted successfully!\n${JSON.stringify(user, null, 2)}`);
    };

    return (
        <div>
            <h1>Google Forms</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="fname"
                        value={user.fname}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contact"
                        value={user.contact}
                        onChange={handleInputChange}
                        placeholder="Enter your contact number"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={user.terms}
                            onChange={handleInputChange}
                        />
                        Accept Terms and Conditions
                    </label>
                </div>
                <div>
                    <label>Select your courses:</label>
                    <select name ="courses"  onChange={handleInputChange}  >
                    <option value ="">Select course</option>
                    {
                        myCourses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                    </select>

                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormValComp;

import axios from "axios";
import React, { useState } from "react";
import '../components/UserDashboard';
import '../styles/AddUser.css';

const AddUser = () => {

  const [formData, setForData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  })

  const handleFormSubmit = async(e)=>{
    let response = await axios.post('http://localhost:4000/posts', formData);

    if(response){
      alert('data submitted successfully');
    } else {
      alert('something went wrong');
    }

    setForData({
      name: '',
    mobile: '',
    email: '',
    password: '',
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1>Add User Form</h1>

          <div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                FullName
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={formData.name}
                onChange={(e)=> setForData({...formData, name:e.target.value})}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
              Mobile No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={formData.mobile}
                onChange={(e)=> setForData({...formData, mobile:e.target.value})}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={formData.email}
                onChange={(e)=> setForData({...formData, email:e.target.value})}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                value={formData.password}
                onChange={(e)=> setForData({...formData, password:e.target.value})}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

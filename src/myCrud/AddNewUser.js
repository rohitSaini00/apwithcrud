import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "./_api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddNewUser = (props) => {
  const { getdata } = props;
  const [userinput, setUserinput] = useState({
    name: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserinput({
      ...userinput,
      [e.target.name]: e.target.value,
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/users`, userinput);
    navigate("/");
    getdata();
  };
  return (
    <div className="container mt-5">
      <div className="edit-user">
        <h1>Add New User</h1>
        <Link to="/">
          <button type="button" className="btn btn-success">
            All User
          </button>
        </Link>
      </div>
      <form action="" method="post" onSubmit={addData}>
        <div class="form-group add-data">
          <input
            type="text"
            className="form-control mt-4"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            value={userinput.name}
            required
          />
        </div>
        <div className="form-group add-data">
          <input
            type="text"
            className="form-control mt-4"
            name="username"
            placeholder="Enter Your username"
            onChange={handleChange}
            value={userinput.username}
            required
          />
        </div>
        <div class="form-group add-data">
          <input
            type="email"
            className="form-control mt-4"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={userinput.email}
            required
          />
        </div>
        <button type="submit" class="btn sumbtn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;

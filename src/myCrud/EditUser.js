import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./_api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditUser = (props) => {
  const { getdata } = props;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
  });
  const { id } = useParams();
  const getuser = async () => {
    const result = await axios.get(`${BASE_URL}/users/${id}`);
    setUser(result.data);
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(`${BASE_URL}/users/${id}`, user);
    getdata();
    navigate("/");
  };
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div className="edit-user">
          <h1>Edit User</h1>
          <Link to="/">
            <button type="button" className="btn btn-success">
              All User
            </button>
          </Link>
        </div>
        <form className="myfrom" action="" method="post" onSubmit={updateData}>
          <div className="form-group">
            <label className="mt-3" htmlFor="">
              Name of User
            </label>

            <input
              type="text"
              className="form-control mt-2"
              name="name"
              onChange={handleChange}
              value={user.name}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="form-group">
            <label className="mt-3" htmlFor="">
              UserName
            </label>
            <input
              type="text"
              className="form-control mt-2"
              onChange={handleChange}
              name="username"
              value={user.username}
              placeholder="Enter Your username"
            />
          </div>
          <div class="form-group">
            <label className="mt-3" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="form-control mt-2"
              name="email"
              onChange={handleChange}
              value={user.email}
              placeholder="Enter Your Email"
            />
          </div>
          <button type="submit" className="btn sumbtn btn-primary">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

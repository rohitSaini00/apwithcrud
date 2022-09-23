import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "./_api";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const UserTable = (props) => {
  const { myuser, getdata } = props;
  const delData = async (id) => {
    await axios.delete(`${BASE_URL}/users/${id}`);
    getdata();
  };

  return (
    <div>
      <h1 className="mt-4">API CRUD User Table</h1>
      <div className="container mt-2">
        <div className="addnew">
          <Link to="/addnewuser">
            <button type="button" className="btn mb-4 btn-success">
              Add New User
            </button>
          </Link>
        </div>
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name of User</th>
              <th scope="col">Email of User</th>
              <th scope="col">UserName</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {myuser?.data?.map((list, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.username}</td>
                  <td className="mybtn">
                    <Link to={`/edituser/${list.id}`}>
                      <button type="button" className="btn btn-primary">
                        <AiFillEdit />
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Are You Sure Delete This User"))
                          delData(list.id);
                      }}
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;

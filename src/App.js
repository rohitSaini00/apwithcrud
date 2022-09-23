import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./myCrud/_api";
import UserTable from "./myCrud/UserTable";
import { Routes, Route } from "react-router-dom";
import AddNewUser from "./myCrud/AddNewUser";
import EditUser from "./myCrud/EditUser";
function App() {
  const [users, setusers] = useState();

  const getData = async () => {
    await axios
      .get(BASE_URL + "/users")
      .then((res) => {
        setusers(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<UserTable myuser={users} getdata={getData} />}
          ></Route>
          <Route
            exact
            path="/addnewuser"
            element={<AddNewUser getdata={getData} />}
          ></Route>
          <Route
            path="/edituser/:id"
            element={<EditUser getdata={getData} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

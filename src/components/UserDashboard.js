import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [updateData, setUpdateData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    id: "",
  });

  const [data, setData] = useState([{}]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios
      .get("http://localhost:4000/posts")
      .then((res) => setData(res.data));
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:4000/posts/" + id)
      .then((res) => alert("Deleted success"));
    getUser();
  };

  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:4000/posts/${updateData.id}`, updateData)
      .then((res) => alert("User update Success"));
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">MOBILE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      setUpdateData({
                        name: user.name,
                        email: user.email,
                        mobile: user.mobile,
                        password: user.password,
                        id: user.id,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={updateData.name}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, name: e.target.value })
                  }
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
                  value={updateData.mobile}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, mobile: e.target.value })
                  }
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
                  value={updateData.email}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, email: e.target.value })
                  }
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
                  value={updateData.password}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleUpdate()}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

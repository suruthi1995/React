import React from "react";
// import ControlledComponent from ".Controlled";
class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      designation: "",
      UserList: [
        { id: 1, name: "Priya", designation: "Developing" },
        { id: 2, name: "Dhivya", designation: "Testing" },
        { id: 3, name: "Kavi", designation: "Developing" },
       
      ],
    };
  }
  inputonchange = (event) => {
    console.log(event.target.value);
    this.setstate({
      [event.target.value]: event.target.value,
    });
  };
  createuser = (event) => {
    event.preventDefault();
    console.log("Length", this.state.UserList.length);
    console.log(this.state.name, this.state.designation);
    if (this.state.name && this.state.designation) {
      var tempUserList = this.state.UserList;
      var newUserobj = {
        id: this.state.UserList.length + 1,
        name: this.state.name,
        designation: this.state.designation,
      };
      tempUserList.push(newUserobj);
      this.setstate({
        UserList: tempUserList,
      });
    } else {
    }
  };
  deleteuser = (index) => {
    var tempUserList = this.state.UserList;
    tempUserList.splice(index, 1);
    this.setState({
      UserList: tempUserList,
    });
  };
  render() {
    return (
      <div className="container">
        <controlledComponent />

        <div className="controlled">
          <h3 className="mb-4">Controlled</h3>
          <form className="row g-3">
            <div className="col-auto">
              <label className="visually-hidden"> Name </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Name"
                value={this.state.name}
                onchange={this.inputonchange}
              ></input>
            </div>
            <div className="col-auto">
              <label className="visually-hidden">Designation</label>
              <input
                name="designation"
                type="text"
                className="form-control form-control-custom"
                id="inputPassword"
                placeholder="Designation"
                value={this.state.designation}
                onchange={this.inputonchange}
              ></input>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onclick={this.createuser}
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <h3 className="mt-3 mb-3">UserList</h3>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.UserList.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onclick={() => this.deleteuser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListComponent;

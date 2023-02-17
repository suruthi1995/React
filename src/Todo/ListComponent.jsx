import React from "react";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserList: [
        {
          id: 1,
          name: "Priya",
          designation: "Developing",
          createdDate: new Date(),
        },
        {
          id: 2,
          name: "Dhivya",
          designation: "Testing",
          createdDate: new Date(),
        },
        {
          id: 3,
          name: "Kavi",
          designation: "Developing",
          createdDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h3 className="mt-3 mb-3">UserList</h3>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.UserList.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>{user.createdDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListComponent;

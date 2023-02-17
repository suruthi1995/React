import React from "react";
class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }
  submit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", this.username.current.value);
    console.log(this.username.current.value, this.password.current.value);
    let uname = this.username.current.value;
    let pass = this.password.current.value;
    if (uname == "suruthi" && pass == "12345") {
    } else {
    }
  };
  render() {
    return (
      <div className="Uncontrolled">
        <h3 className="mb-4">Login form-Uncontrolled</h3>
        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden"> Email </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Username"
              ref={this.username}
            ></input>
          </div>
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              ref={this.password}
            ></input>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onclick={this.submit}
            >
              {" "}
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default UncontrolledComponent;

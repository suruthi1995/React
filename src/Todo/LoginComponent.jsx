import React from "react";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "suruthi",
      password: "123",
      isSuccess: false,
      isfail: false,
    };
  }
  inputonchange = (event) => {
    console.log(event.target.value);
    this.setstate({
      [event.target.value]: event.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (
      this.state.username &&
      this.state.password &&
      this.state.username === "suruthi" &&
       this.state.password === "12345"
       ) {
        this.props.navigate('/home')
      this.setState({
        isSuccess: true,
        isfail: false,
      });
    } else {
      this.setState({
        isSuccess: false,
        isfail: true,
      });
    }
  };
  render() {
    return (
      <div className="controlled mt-5">
        <h3 className="mb-4">Login form</h3>
        <form className="row g-3 justify-content-center">
          <div className="col-auto">
            <label className="visually-hidden"> Email </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Name"
              value={this.state.username}
              onchange={this.inputonchange}
            ></input>
          </div>
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={this.state.password}
              onchange={this.inputonchange}
            ></input>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onclick={this.submit}
            >
              Submit
            </button>
          </div>
        </form>

        <LoginStatus
          isSuccess={this.state.isSuccess}
          isfail={this.state.isfail}
        />
      </div>
    );
  }
}

function LoginStatus(props) {
  if (props.isSuccess || props.isfail) {
    return props.isSuccess ? (
      <div className="alert alert-success">Login success</div>
    ) : (
      <div className="alert alert-danger">Login Fail</div>
    );
  }
}

export default LoginComponent;

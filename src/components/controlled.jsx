import React from "react";
class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      designation: "",
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
    console.log(this.state.name, this.state.designation);
    if (this.state.name === "suruthi" && this.state.designation === "12345") {
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
       <div className="controlled">
        <h3 className="mb-4">Controlled</h3>
        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden"> Email </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="name"
              value={this.state.name}
              onchange={this.inputonchange}
            ></input>
          </div>
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder="designation"
              value={this.state.designation}
              onchange={this.inputonchange}
            ></input>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onclick={this.submit}
            >
              Create
            </button>
          </div>
        </form>
        </div>
  );
  }
  }
  
  


export default ControlledComponent;

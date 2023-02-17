import React from "react";
class UnmountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  removeHeader = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    if (this.state.show) {
      var header = <Header />;
    }
    return (
      <div>
        {header}
        <button className="btn btn-primary" onclick={this.removeHeader}>
          Remove Header
        </button>
      </div>
    );
  }
}
class Header extends React.Component {
  componentWillUnmount() {
    alert("The header will be removed");
  }
  render() {
    return <h3>Header</h3>;
  }
}
export default UnmountingComponent;

import React from "react";
class updatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink",
    };
  }
  // static getDerivedStateFromProps(props,state){
  //  return{
  //      color: props.favcolor,
  //  };

  // }

  shouldComponentUpdate() {
    return false;
  }
  changecolor = () => {
    this.setState({
      color: "purple",
    });
  };
  render() {
    return (
      <div>
        <div>My Fav color is {this.state.color}</div>
        <button className="btn btn-primary" onclick={this.changecolor}>
          changecolor
        </button>
        <div id="prevcolor"></div>
        <div id="currentcolor"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(Prevprops, prevstate) {
    document.getElementById("Prevcolor").innerHTML =
      "My Prev fav color is" + prevstate.color;
      return null;
  }
  componentDidUpdate() {
    document.getElementById("currentcolor").innerHTML =
      "My current fav color is" + this.state.color;
  }
}

export default updatingComponent;

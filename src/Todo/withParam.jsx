import {  useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => {
    <Component {...props} paramas={useParams()} />;
  };
}

export default withParams;

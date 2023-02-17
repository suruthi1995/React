import { Link } from "react-router-dom";
function HomeComponent(props) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h5>Hello {props.params.name} </h5>
        {/* <button className="btn btn-primary mt-5">Go to list</button> */}
        <div>
          To view the list, <Link to="/list">click here</Link>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;

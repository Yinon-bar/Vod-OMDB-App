import "./VodStripe.css";
import popcorn from "../../Assets/img/popcorn.jpg";

function VodStripe() {
  return (
    <div
      className="VodStripe container-fluid"
      style={{ backgroundImage: `url( ${popcorn})` }}
    >
      <div className="container">
        <h2 className="display-4">VOD - Omdb</h2>
        {/*  */}
      </div>
    </div>
  );
}

export default VodStripe;

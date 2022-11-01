import "./VodStripe.css";
import cinema from "../../Assets/img/cinema.jpg";

function VodStripe() {
  return (
    <div
      className="VodStripe container-fluid"
      style={{ backgroundImage: `url( ${cinema})` }}
    >
      <div className="container">
        <h2 className="display-4">VOD - Omdb</h2>
        {/*  */}
      </div>
    </div>
  );
}

export default VodStripe;

import VodItem from "../VodItem/VodItem";
import "./VodList.css";

function VodList() {
  return (
    <div className="VodList container-fluid py-4">
      <div className="container">
        <h2>List of Movies</h2>
        <div className="row">
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
        </div>
      </div>
    </div>
  );
}

export default VodList;

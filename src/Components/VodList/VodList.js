import VodItem from "../VodItem/VodItem";
import "./VodList.css";

function VodList(props) {
  return (
    <div className="VodList container-fluid py-4">
      <div className="container">
        <h2>List of Movies</h2>
        <div className="row">
          {props.vod_ar.map((item) => (
            <VodItem key={item.imdbID} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VodList;

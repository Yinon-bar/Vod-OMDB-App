import "./VodItem.css";

function VodItem(props) {
  return (
    <div className="col-md-4 p-2 ">
      <div className="border p-2 h-100 overflow-hidden shadow rounded rounded-2">
        <img src={props.item.Poster} className="float-start me-2 w-25" alt="" />
        <h3>{props.item.Title}</h3>
        <div>Year: {props.item.Year}</div>
        <button className="btn btn-dark">More info</button>
      </div>
    </div>
  );
}

export default VodItem;

import "./VodItem.css";

function VodItem() {
  return (
    <div className="col-md-3 border p-2">
      <img src="" className="float-start me-2 w-25" alt="" />
      <h3>Rambo 5</h3>
      <div>Year: 2022</div>
      <button className="btn btn-dark">More info</button>
    </div>
  );
}

export default VodItem;

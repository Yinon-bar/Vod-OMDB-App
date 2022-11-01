import "./VodInput.css";

function VodInput() {
  return (
    <header className="VodInput container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h3 className="text-white">VodInput</h3>
          </div>
          <nav className="d-flex col-md-5">
            <input type="search" className="form-control" />
            <button className="btn btn-warning">Search</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;

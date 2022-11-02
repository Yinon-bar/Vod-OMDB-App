import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./VodInput.css";

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onSearchClick = () => {
    const inputVal = inputRef.current.value;
    nav(`?s=${inputVal}`);
  };

  return (
    <header className="VodInput container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h3 className="text-white">VodInput</h3>
          </div>
          <nav className="d-flex col-md-5">
            <input ref={inputRef} type="search" className="form-control" />
            <button onClick={onSearchClick} className="btn btn-warning">
              Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;

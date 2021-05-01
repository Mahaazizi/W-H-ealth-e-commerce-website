import React from "react";
import logoo from '../../assets/logoo.png';

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <div className="brand-icon">
      <img className="display-1"
          src={logoo}
          hight= "50"
          width="100"
          alt="site logo"
        />      </div>
      <div className="input-group w-50 mx-auto">
     
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
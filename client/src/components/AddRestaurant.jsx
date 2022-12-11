import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="row">
          <div className="col-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col-3">
            <select className="custom-select my-1 mr-sm-2">
              <option>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;

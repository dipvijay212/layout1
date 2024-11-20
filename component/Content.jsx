import React from "react";

const Content = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8">
          <div className="bg-secondary text-white  mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljHunwtIgPgn5gVs9vyzBZTYGCALheHDYMA&s" alt=""  height={300} width={750}/>
           
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-4">
          <div className="bg-light border p-3 mb-3">
            <h5> Content</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, assumenda.</p>
          </div>
          <div className="bg-light border p-3">
          <h5> Content</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, assumenda.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

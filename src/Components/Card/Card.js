import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ char: { id, image, name, status}, page }) => {
  return (
    <>
      <Link
        to={`${page}/${id}`}
        style={{ textDecoration: "none" }}
        className={`col-md-4 mb-4`}
      >
        <div className="card mb-4 text-dark">
          <div className={`card custom-shardow`}>
            {/* image */}
            <div className="image position-relative">
              <img src={image} className="card-img-top " alt={name} />
            </div>
            {/* card header */}
            <div className="card-header ">
              <h5
                className="card-title "
                style={{
                  fontSize: `${name.length > 20 ? "1.1rem" : "1.25rem"}`,
                }}
              >
                {name}
              </h5>
              <div className="row px-4">
                <div className="col-md-4 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">status</p>
                </div>
                <div className="col-md-4 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold">{status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

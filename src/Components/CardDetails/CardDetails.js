import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  

  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [inputText, setInputText] = useState("");
  const { name, image, type, gender, species, status } = info;
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setInfo(data);
    })();
  }, [api]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 col-sm-12">
          <div className="card position-relative" style={{ width: "" }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text ">
              <div className="row">
                <div className="col-md-5 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">status</p>
                </div>
                <div className="col-md-7 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold">{status}</p>
                </div>
              </div>
              </p>
              <p className="card-text ">
              <div className="row">
                <div className="col-md-5 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">type</p>
                </div>
                <div className="col-md-7 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold">{type ? type : "unknown"}</p>
                </div>
              </div>
              </p>
              <p className="card-text ">
              <div className="row">
                <div className="col-md-5 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">gender</p>
                </div>
                <div className="col-md-7 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold">{gender}</p>
                </div>
              </div>
              </p>
              <p className="card-text ">
              <div className="row">
                <div className="col-md-5 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">species</p>
                </div>
                <div className="col-md-7 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold">{species}</p>
                </div>
              </div>
              </p>
              <p className="card-text ">
              <div className="row">
                <div className="col-md-5 bg-warning bg-opacity-50 fw-bold text-dark">
                  <p className="card-text">location</p>
                </div>
                <div className="col-md-7 bg-warning text-white">
                  <p className="card-text fs-6 fw-bold"></p>
                </div>
              </div>
              </p>
            </div>
            <p className="px-2">
              Location

              <form className="row" link="#">
              <div className="col-md-6 ">
                <input
                  type="text"
                  id="search"
                  autoComplete="off"
                  className="form-control custom-shadow"
                  placeholder="Input Location"
                  onChange={(e) => setInputText(e.target.value)}
                  
                />
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary mb-3 custom-shadow">
                  Input
                </button>
              </div>
            </form>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

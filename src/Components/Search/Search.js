import React from 'react'

function Search() {
  return (
    <div>
        <form className="row g-3 " >
      <div className="col-md-4 offset-md-4">
        <input
          type="text"
          id="search"
          autoComplete="off"
          className="form-control custom-shadow"
          placeholder="Search..."
          
        />
      </div>
      <div className="col-md-4">
        <button type="submit" className="btn btn-primary mb-3 custom-shadow">
          Search
        </button>
      </div>
    </form>
    </div>
  )
}

export default Search
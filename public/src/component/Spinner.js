import React from "react";
import loading from "./loading.gif";

const Spinner =()=>{
  
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    );
  
}
export default Spinner;

{/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark btn-sm"
            onClick={this.handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}

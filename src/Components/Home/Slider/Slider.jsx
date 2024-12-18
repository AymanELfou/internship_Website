import React from 'react';
import './Slider.css'; // Import the custom CSS for the slider

export default function Slider() {
  return (
    <div className="mx-4">

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://greenwarehouse.be/wp-content/uploads/2024/05/greenhousebanban.png" className="d-block w-100" alt="Slide 1" />
          
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Slide 2" />
            
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Slide 3" />
            
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="position-absolute top-50 start-50 translate-middle w-100 text-center">
        <h1 className="text-white d-inline-block px-4 py-2 rounded grnhous" style={{fontSize:'90px', fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>GREEN WAREHOUSE</h1>
      </div>
    </div>
    </div>
  );
}

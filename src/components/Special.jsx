import React from 'react';
import Footer from './Footer';

const Special = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel" // Make the carousel automatically slide
        //style={{ maxWidth: '1000px', margin: '0 auto' }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}> 
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c9469c97376281.5ec3ca8c1ed10.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://i.pinimg.com/originals/d4/a5/e6/d4a5e6cf599dfcfc048f1e4e5e2cde23.png"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://assets.materialup.com/uploads/f3ac51e6-2a2e-42f7-86f6-3f2ed66eedbe/preview.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Special;

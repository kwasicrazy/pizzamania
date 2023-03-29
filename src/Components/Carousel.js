import React from 'react'

const Carousel = () => {
  return (
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/download.jpg" className="d-block w-100" height="500px;" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/istock3.jpg" className="d-block w-100" height="500px;" alt="..." />
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    
  )
}

export default Carousel
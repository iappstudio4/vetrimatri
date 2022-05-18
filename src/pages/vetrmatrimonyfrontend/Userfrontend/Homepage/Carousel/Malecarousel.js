import React from 'react';

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


//Owl Carousel Settings
const options = {
  margin: 200,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  smartSpeed: 5000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,

      }
  },
};
let Carosel = ()=>{
   

    return (
      <div>
      <OwlCarousel  className="slider-items owl-carousel" {...options}>
      <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div> <div className="item"> <div className="card" style={{width: '250px'}}>
        <img  style={{height:"250px"}} className="card-img-top" src="https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q=" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Stephen</h5>
        </div>
      </div></div>
     
      </OwlCarousel></div>
)
};


export default Carosel;
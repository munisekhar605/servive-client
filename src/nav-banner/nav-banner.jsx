import { Carousel } from 'react-bootstrap';

function NavBanner() {
  return (
    <div className="banner-container">
      <Carousel >
      <Carousel.Item>
        <img
          className=" banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1731855951/D-1.0-UHP-16112024-mainbanner-z1-p-megaclearancedeal-60to80_d8ijyf.gif" 
          alt="" 
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1731855950/d-1.0-UHP-18112024-MainBanners-Z1-nivea-lakme-upto65_zg4w52.webp" // Replace with your image source
          alt="" 
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1731855949/D-1.0-UHP-17112024-MainBanners-Z1-P3-LEVIS-USPA-MIN55_dhjszx.jpg" // Replace with your image source
          alt="..." 
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default NavBanner;


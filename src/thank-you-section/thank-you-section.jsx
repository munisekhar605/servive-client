import './thank-you-section.css';

function ThankYouSection(){
    return(
        <div className="thanking-customers-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
              <h1 className="thanking-customers-section-heading">
                Thank you for being a valuable customer to us.
              </h1>
              <p className="thanking-customers-section-description">
                We have a surprise gift for you
              </p>
              <div className="d-md-none">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                  className="thanking-customers-section-img"
                  alt="non"
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
}

export default ThankYouSection; 
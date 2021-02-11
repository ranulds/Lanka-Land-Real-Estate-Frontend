import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        {/*Slider*/}
        <div className="slider">
          <div className="callbacks_container">
            <ul className="rslides callbacks callbacks1" id="slider4">
              <li>
                {/* <div className="slider-img1">
                  <div className="dot">
                    <div className="container">
                      <div className="slider_banner_info_w3ls">
                        <h1 className="text-uppercase mb-5">
                          A new way to explore <br />
                          real estate
                        </h1>
                        <a
                          href="#"
                          className="read"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          role="button"
                        >
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </li>
              <li>
                <div className="slider-img2">
                  <div className="dot">
                    <div className="container">
                      <div className="slider_banner_info_w3ls">
                        <h2 className="text-uppercase mb-5">
                          Investment with debt <br /> offerings
                        </h2>
                        <a
                          href="#"
                          className="read"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          role="button"
                        >
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {/* <div className="slider-img3">
                  <div className="dot">
                    <div className="container">
                      <div className="slider_banner_info_w3ls">
                        <h4 className="text-uppercase mb-5">
                          Technology <br /> to real estate
                        </h4>
                        <a
                          href="#"
                          className="read"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          role="button"
                        >
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </li>
              <li>
                {/* <div className="slider-img4">
                  <div className="dot">
                    <div className="container">
                      <div className="slider_banner_info_w3ls">
                        <h4 className="text-uppercase mb-5">
                          Landing funded <br /> transactions
                        </h4>
                        <a
                          href="#"
                          className="read"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          role="button"
                        >
                          Read more{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfix" />
        {/*//Slider*/}
        {/*property */}
        <section className="property mb-5">
          <div className="container-fluid">
            <div className="row agile-team-grids">
              <div className="col-lg-4 mt-5 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p1.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/colombo">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-building" aria-hidden="true" />
                      550 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Colombo <span>$950</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mt-5 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p2.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/gampaha">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" />
                      600 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Gampaha <span>$840</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mt-5 col-sm-6 team-grid">
                <div className="team-img">
                  <img src="images/p4.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/kiribathgoda">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" /> 720 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 4
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Kiribathgoda <span>$735</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mt-5 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p2.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/gampaha">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" />
                      600 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Gampaha <span>$840</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mt-5 col-sm-6 team-grid">
                <div className="team-img">
                  <img src="images/p4.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/kiribathgoda">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" /> 720 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 4
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Kiribathgoda <span>$735</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mt-5 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p1.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <Link to="/colombo">Know More</Link>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-building" aria-hidden="true" />
                      550 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Colombo <span>$950</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //property */}
      </div>
    );
  }
}
export default Landing;

import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1}>
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  We Take Care <br />
                  Your Smart Mining Solutions <br /> &amp; Provide Best <br /> Technology
                </h1>
                <div className="hero-button">
                  <Link
                    href="/"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Download App On PlayStore
                    <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Download App on AppStore
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Trusted by 1000+ people <br />
                    around the globe
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Get Consultations</h4>
                <p>Ready to Register Our YpoTerra Services</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          I’ve Read and agreed to{" "}
                          <Link href="/">Terms &amp; Conditions</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Get Started Now <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}

      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/about/02.jpg" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Why The Project
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Underground Mining Sharfts Surveillance
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    It uses IoT sensors, drones, and fitted cameras to report to
                    your mobile phone in real time. If any anomaly is detected,
                    notifications are sent to the user and the miners. For
                    example, if conditions exceed the thresholds, it uses
                    machine learning to identify trends and object detection to
                    find cracks.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Real Time Monitoring
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Object Detection to find Cracks
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Identify Trends Using Machine Learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            ></div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">Drone surveillance</Link>
                </h3>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">Fitted Equipement</Link>
                </h3>
              </div>
            </div>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Drone Surveillance</span>
                <span className="text-slider">Real Time Monitoring</span>
                <span className="text-slider">
                  Object Detection to find Cracks
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Team Section Start */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
        }}
        className="team-section fix section-padding"
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="section-title text-center"
          >
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Team Member
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Partners
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Meet Our Partners, the people who make it all possible. They are
                the ones who make sure that the company is running smoothly and
                efficiently.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center align-items-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">NUST</Link>
                  </h4>
                  <p>University</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Mviyo Technologies</Link>
                  </h4>
                  <p>Company</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Dryback Technologies.</Link>
                  </h4>
                  <p>Company</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Company Fun Fact
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Learn Our Company Statistics
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>

      {/* Pricing Section Start */}
    </NextLayout>
  );
};
export default page;

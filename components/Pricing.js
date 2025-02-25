import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">

        <div style={{ display: "flex",  flexDirection: "row", justifyContent: "center", alignItems: "center"}} className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Drone surveillance</h3>
                <p>
                  We Offer Surveillance services using drones for Underground
                  mine shaft inspections.
                </p>
              </div>
              <ul className="pricing-list">
                <li>
                  Drone Surveillance
                </li>
                <li>
                  Underground Mine Shaft Inspections
                </li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Fitted Equipement</h3>
                <p>We offer IoT sensors, Drones / Fitted, Cameras
                   for surveillance and monitoring of underground mines.
                </p>
              </div>
              <ul className="pricing-list">
                <li>IOT sensors</li>
                <li>Drones</li>
                <li>Fitted Cameras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;


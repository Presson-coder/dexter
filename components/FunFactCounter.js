import Counter from "./Counter";
const FunFactCounter = ({ style }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}} className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={6} />
            </span>
          </h2>
          <h6>-Provinces  </h6>
          <p>
            We have a presence in 6 provinces across the country.
          </p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={35} />
            </span>
          
          </h2>
          <h6>Companies</h6>
          <p>
            Trusted by over 35 companies, we are the best in the business.
          </p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={97} />
            </span>
          </h2>
          <h6>Users</h6>
          <p>
            Over 97% of our users recommend our services to their friends and
            family.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FunFactCounter;

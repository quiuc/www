import React, { useState } from "react";
import PropTypes from "prop-types";

const Home = props => {
  // use the routeName to determine where to scroll to.
  const [routeName] = useState(props.location.pathname.split("/")[1]);

  return <div className="container">{routeName}</div>;
};

Home.propTypes = {
  location: {
    pathname: PropTypes.string.isRequired
  }
};

export default Home;

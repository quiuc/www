import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Home.css";
import Header from "../../Components/Header/Header";

const Home = props => {
  // use the routeName to determine where to scroll to.
  const [routeName] = useState(props.location.pathname.split("/")[1]);

  return (
    <div className="screenContainer">
        <div className="background"/>
      <Header />
      {routeName}
    </div>
  );
};

Home.propTypes = {
  location: {
    pathname: PropTypes.string.isRequired
  }
};

export default Home;

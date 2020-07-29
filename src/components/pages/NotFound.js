import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1>
        <span className="text-danger">404</span> Not Found
      </h1>
      <p>Sorry, that's page does not exist </p>
    </Fragment>
  );
};

export default NotFound;

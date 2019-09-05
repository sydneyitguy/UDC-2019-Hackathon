import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "contexts/AuthContext";
import CircularProgress from "components/CircularProgress";

export default ({ render, ...routeProps }) => {
  const { user, authenticating } = useContext(AuthContext);

  if (authenticating) {
    return <CircularProgress />;
  }

  return user ? <Route {...routeProps} /> : <Redirect to={`/login`} />;
};

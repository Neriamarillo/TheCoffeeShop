import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;

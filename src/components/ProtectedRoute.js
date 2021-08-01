import { Redirect, Route } from "react-router-dom";
import Message from "./Message";

const ProtectedRoute = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
          // <Message>You are not signed in.</Message>
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

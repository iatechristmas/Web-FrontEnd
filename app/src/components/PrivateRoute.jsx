import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       window.localStorage.getItem("token") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/" />
//       )
//     }
//   />
// );

// export default PrivateRoute;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.userReducer.token);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

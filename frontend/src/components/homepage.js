import React from "react";
import Dashboard from "./dashboard";
import Signup from "./signup";

export default function Homepage(props) {
  return <div>{props.user === undefined ? <Signup /> : <Dashboard />}</div>;
  // I think the above line has caused the problem I described
}

Homepage.propTypes = {};
// I think this page has some issues, eveythime I click on the 'next' button, the sign up page is flickering

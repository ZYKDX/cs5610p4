import React from "react";
import Dashboard from "./dashboard";
import Signup from "./signup";

export default function Homepage(props) {
  return <div>{props.user === undefined ? <Signup /> : <Dashboard />}</div>;
  // Eveythime I click on the 'next' button on your home page, the sign up page is flickering
  // I think the above line has caused the problem I described, 
  // as when the page is refreshing, user become undefined and thus showing singup page instead of bashboad
}

Homepage.propTypes = {};

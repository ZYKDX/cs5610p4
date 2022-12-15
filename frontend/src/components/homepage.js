import React from "react";
import Dashboard from "./dashboard";
import Signup from "./signup";
// It will be nicer if all pages files can be organized in one folder named pages

export default function Homepage(props) {
  return <div>{props.user === undefined ? <Signup /> : <Dashboard />}</div>;
}

Homepage.propTypes = {};

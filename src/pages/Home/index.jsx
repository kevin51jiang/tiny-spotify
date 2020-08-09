import React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Hello this is home</h1>
      <span>Wao this is {props.auth}</span>
    </>
  );
};

export default Home;

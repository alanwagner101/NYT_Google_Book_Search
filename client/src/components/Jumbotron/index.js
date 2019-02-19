import React from "react";

function Jumbotron({ children }) {
  return (
<div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
  <div className="container">
    {children}
  </div>
</div>
  );
}

export default Jumbotron;

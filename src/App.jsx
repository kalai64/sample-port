import React from "react";

function App() {

let users = [{
  name:"kalai",
  description:"hi hello how are you"
},
{
  name:"kalai2",
  description:"hi hello how are you2"
},
{
  name:"kalai3",
  description:"hi hello how are you3"
},
{
  name:"kalai4",
  description:"hi hello how are you4"
},
{
  name:"kalai5",
  description:"hi hello how are you5"
},
{
  name:"kalai6",
  description:"hi hello how are you6"
}];
  return <>
  <div className="container">

{/* <!-- Page Heading --> */}
<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">{
  users.map((e,i)=>{
    return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{e.name}</a>
        </h4>
        <p className="card-text">{e.description}</p>
      </div>
    </div>
  </div>
  })
}

</div>

</div>
  </>
}

export default App;
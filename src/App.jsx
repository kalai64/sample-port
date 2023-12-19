import React from "react";
import Card from "./assets/components/card";

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
    return <Card cardData={e} key={i}/>
  })
}
</div>

</div>
  </>
}

export default App;
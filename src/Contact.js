import React, { useState } from "react";

const Contact = () =>{

  const [data, setData] = useState({
    fullName:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent =(event)=>{
    const {name, value} = event.target;

    setData((preVal) =>{
      return{
        ...preVal,
        [name]:value,
      };
    });

  };

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`${data.fullName}`)
  }

    return(
      <>
       <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
  <div className="form-group">
    <label htmlfor="exampleFormControlInput1">FullName</label>
    <input 
      type="text" 
      className="form-control" 
      id="exampleFormControlInput1"
      name="FullName"
      //value={data.fullName}
      onChange={InputEvent} 
      placeholder="Enter Your Name"

      />
  </div>
  <div className="form-group">
    <label htmlfor="exampleFormControlInput1">Phone NO.</label>
    <input 
      type="number" 
      className="form-control" 
      id="exampleFormControlInput1"
      name="Phone"
      //value={data.phone}
      onChange={InputEvent}  
      placeholder="Mobile Number"

      />
  </div>
  <div className="form-group">
    <label htmlfor="exampleFormControlInput1">Email address</label>
    <input 
      type="email" 
      className="form-control" 
      id="exampleFormControlInput1"
      name="Email"
      //value={data.email}
      onChange={InputEvent}  
      placeholder="name@example.com"

      />
  </div>
  
  
  <div className="form-group">
    <label htmlfor="exampleFormControlTextarea1">Message</label>
    <textarea 
      className="form-control" 
      id="exampleFormControlTextarea1" 
      rows="3"
      name="Message"
      //value={data.msg}
      onChange={InputEvent}
      ></textarea>
  </div>
  
  <div className="col-12">
  <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      
        </div>
          </div>
            </div> 
      </>
    )
  }
  export default Contact;
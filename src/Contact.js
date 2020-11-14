import React, { useState } from 'react'
import Social from "./Social"
import { db } from "./contactdb";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [loader, setLoader] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoader(true)

        db.collection('messages').add({
            name: name,
            email: email,
            message: message,
            phone: phone,
        })
           .then(() =>{
               alert('Message has been submitted')
               setLoader(false)
           }) 
           .catch((error) => {
            alert(error.message);
            setLoader(false)
          });

          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        }

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">C O N T A C T</h1>
        </div>

        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

  <form onSubmit={handleSubmit}>

  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1 ">Full Name</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
  </div>

  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1">Phone</label>
    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone number"/>
  </div>

  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>

  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

        <br/>
  <div className="col-12">
      <button className="btn btn-dark mb-5" type="submit" style={{background : loader ? "#ccc" : ""}}>Submit</button>
  </div>

</form>
<h5 className="my-3">
<strong className="brand-name">Follow</strong> me on
</h5>
<Social />
                </div>
              
            </div>
            
        </div>
        </>
    )
}

export default Contact

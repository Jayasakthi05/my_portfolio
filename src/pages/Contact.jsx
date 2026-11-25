import { useState } from "react"

function Contact(){
    const[student,setStudent]=useState({
        name:"",
        email:"",
        message:""
     });

    function handleChange(e){
        setStudent({
        ...student,
        [e.target.name]:e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("submited successfully");
    }

   

    return(


        
        
        <div className="contact">

            <div className="form">
                <h2>Form</h2>
                <form onSubmit={handleSubmit}>
               
                <input
                 type="text"
                 name="name"
                 value={student.name}
                 placeholder= "Enter Name"
                 onChange={handleChange}
                 required
                />
                <input
                 type="text"
                 name="email"
                 value={student.email}
                 placeholder="Enter Email ID"
                 onChange={handleChange}
                 required

                />  

                <textarea
                 placeholder="Message"
                 row={6}
                 required
                 />

                <button onClick={handleSubmit}>Submit</button>
       
            
                
          

       
         
               </form>
            </div>

            <div className="contact-detail">
                <h2>Contant Details</h2>

                <h3>College</h3>
                <p>Mohamed Sathak AJ College of Engineering College</p>

                <h3>Email Id</h3>
                <p><b>Personal ID:</b>sakthisubu005@gmail.com</p>
                <p><b>Work ID:</b>311824102026@msajce-edu.in</p>

                <h3>Phone No</h3>
                <p>9080377765</p>


            </div>



        </div>


        





          
    );
}

export default Contact;
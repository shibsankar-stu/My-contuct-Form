import Mybtn from "./mybtn";
import React, {useState} from 'react'
function Myform(){

    let [data, setData] = useState(["ff"])
    let [name, setName] = useState([""])
    let [email, setEmail] = useState([""])
    let [text, setText] = useState([""])
    const showData = (event) => {
        event.preventDefault();

        let name = event.target[0].value
        let email = event.target[1].value
        let text = event.target[2].value
        if (name === "" || email == "" || text == '') {
            alert("Blank forms are not allowed")
        }else{
            alert(`Dear ${name} Your form is successfully submitted`)
        document.getElementById("showresult").innerHTML = `
        <h1>This is Your Form Data </h1>
        <h2>Name is: ${name}</h2>
         <h2>Email is: ${email}</h2>
          <h2>Text is: ${text}</h2>`
          const msg = new SpeechSynthesisUtterance("fus ro dah!"); // Your desired message
          speechSynthesis.speak("hii");
        }
       
  
        

    }

    return(
        <div className="allinputform">
            <button className='email' >VIA EMAIL FORM</button>

            <form 
            onSubmit = {showData} >
            <div className="formControl" >
            <label htmlFor="name" id="nameInput" >Name</label>
            <input type="text" name="name" />
            </div>
            <div className="formControl" >
            <label htmlFor="name" id="nameInput" >E-mail</label>
            <input type="text" name="name" />
            </div>
            <div className="formControl" >
            <label htmlFor="name" id="nameInput" >Text</label>
            <input type="text" name="name" id="text" />
            </div>
            <Mybtn btnText = "SUBMIT" classsubmit = "submit"  />
            </form>
            <h2 id="showresult"></h2>
        </div>
    );
}
export default Myform;
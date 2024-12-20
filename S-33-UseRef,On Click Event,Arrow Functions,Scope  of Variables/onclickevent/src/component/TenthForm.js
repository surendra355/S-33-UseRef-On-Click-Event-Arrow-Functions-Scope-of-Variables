import React, { useRef } from 'react'

function TenthForm() {
    
let firstNameInputRef = useRef();
let lastNameInputRef = useRef();
let engInputRef = useRef ();
let telInputRef = useRef ();
let hinInputRef = useRef ();
let matInputRef = useRef ();
let sciInputRef = useRef ();
let socInputRef = useRef ();

let resultLabelRef = useRef();

let city= "Nellore";

  return (
    
    <div>
        
      <form>
      <h1>Marks Calculate Form</h1>
        <div>
            <label>First Name</label>
            <input type='text' ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input type='text' ref={lastNameInputRef}></input>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={engInputRef}></input>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number'ref={telInputRef}></input>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number'ref={hinInputRef}></input>
        </div>
        <div>
            <label>Maths</label>
            <input type='number'ref={matInputRef}></input>
        </div>
        <div>
            <label>Science</label>
            <input type='number'ref={sciInputRef}></input>
        </div>
        <div>
            <label>Social</label>
            <input type='number'ref={socInputRef}></input>
        </div>
        <div>
        <button type='button'onClick={()=>{
            console.log(city)
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let engMarks=Number(engInputRef.current.value);
            let telMarks=Number(telInputRef.current.value);
            let hinMarks=Number(hinInputRef.current.value);
            let matMarks=Number(matInputRef.current.value);
            let sciMarks=Number(sciInputRef.current.value);
            let socMarks=Number(socInputRef.current.value);

            let totalMarks = engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;
            // alert(totalMarks)
            alert(`${firstName} ${lastName} Total Marks are ${totalMarks}`)
            console.log(`${firstName} ${lastName} Total Marks are ${totalMarks}`)
            // alert(engInputRef.current.value);
            // engInputRef.current.value =99999;
            // engInputRef.current.style.backgroundcolor ="yellow";
            resultLabelRef.current.innerHTML = `${firstName} ${lastName} Total Marks are ${totalMarks}`
           
            // console.log("Hai")
        }} >Calculate</button>
        </div>
        {/* <div>
            <button type='button' onClick={()=>{
                let a=50;
                console.log(c);
                let b= ()=>{
                    console.log(a)
                    let c=30;
                    
                }
            }}>scope of variables</button>
        </div> */}
         <label ref={resultLabelRef} className='innerLabel'>Please enter Your Marks Calculate</label>
      </form>
      
    </div>
  )
}

export default TenthForm

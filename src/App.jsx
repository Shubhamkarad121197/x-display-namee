import { useState } from 'react';
import '../src/App.css'


const App=()=>{

   const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   const [fullName,setFullName]=useState('')
   const submitData=(e)=>{
    e.preventDefault()
 
    setFullName(`${firstName} ${lastName}`)

   }
  return (
   
    <>
    <div className='formContainer'>
      <form onSubmit={(e)=>submitData(e)}>
      <div className='inputGroup'>
        <label htmlFor="firstName">First Name</label>&nbsp;
        <input type="text" name="firstName" id=""  onChange={(e)=>setFirstName(e.target.value)} required />
      </div>
       <div className='inputGroup'>
        <label htmlFor="lastName">Last Name</label>&nbsp;
        <input type="text" name="lastName" id="" onChange={(e)=>setLastName(e.target.value)} required />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    {fullName? <span>Full Name:{fullName}</span>:''
      
    }
   
    </div>
    
    </>
  )
}

export default App;
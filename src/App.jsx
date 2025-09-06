import { useState } from 'react';
import '../src/App.css'

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const submitData = (e) => {
    e.preventDefault()

    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`)
    } else {
      setFullName("") // no display if inputs incomplete
    }
  }

  return (
    <>
      <div className='formContainer'>
        <form onSubmit={submitData}>
          <div className='inputGroup'>
            <label htmlFor="firstName">First Name</label>&nbsp;
            <input 
              type="text" 
              name="firstName" 
              onChange={(e) => setFirstName(e.target.value)} 
              required
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor="lastName">Last Name</label>&nbsp;
            <input 
              type="text" 
              name="lastName" 
              onChange={(e) => setLastName(e.target.value)} 
              required
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>

        {fullName 
          ? <span>Full Name: {fullName}</span> 
          : <span>Full Name Display</span>
        }
      </div>
    </>
  )
}

export default App;

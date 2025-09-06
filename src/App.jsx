import { useState } from 'react';
import '../src/App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName(''); // no display if incomplete
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitData}>
        <div className="inputGroup">
          <label htmlFor="firstName">First Name</label>&nbsp;
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lastName">Last Name</label>&nbsp;
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Initial load → show placeholder */}
      {!submitted && <span>Full Name Display</span>}

      {/* After submission → show only if both fields valid */}
      {submitted && fullName && <span>Full Name: {fullName}</span>}
    </div>
  );
};

export default App;

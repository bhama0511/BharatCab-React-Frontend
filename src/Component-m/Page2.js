import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Ensure this path is correct

export default function Page2() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    navigate('/Page3'); // Change '/Page3' to the route you want to navigate to
  };

  return (
    <div>
      <h1 align="center">Personal Details</h1>
      <form>
        
        <label htmlFor="fns">First Name</label><br></br>
        <input type="text" name="fn" id="fns" /><br></br>
        <br></br>
        <label htmlFor="lns">Last Name</label><br></br>
        <input type="text" name="ln" id="lns" /><br></br>
        <br></br>
        <label htmlFor="dobs">Date Of Birth</label><br></br>
        <input type="date" name="dob" id="dobs" /><br></br>
        <br></br>
        <label htmlFor="ems">Email</label><br></br>
        <input type="email" name="em" id="ems" /><br></br>
        <br></br>
        <label htmlFor="mobs">Mobile Phone</label><br></br>
        <input type="text" name="mob" id="mobs" /><br></br><br></br>
        <br></br>
        <button className='page' onClick={handleClick}>Add mini bio</button><br></br><br></br>
      </form>
    </div>
  );
}

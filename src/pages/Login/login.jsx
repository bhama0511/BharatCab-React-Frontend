import React from 'react';
import './login.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function LoginPage() {
  return (
    <MDBContainer fluid className="p-3 my-5" style={{backgroundColor: '#ebedee'}} >

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={require('./login.gif')} class="img-fluid" alt="Car GIF" />
        </MDBCol>

        <MDBCol col='4' md='6' className="d-flex justify-content-center align-items-center">
          <div>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
          </div>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;
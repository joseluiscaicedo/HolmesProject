import React, {useState} from 'react';

import Modal from '../components/Modal';

import Swal from 'sweetalert2';
import logo from '../assets/images/logo_holmes.png';


const Login = () => {
  const [loginForm, setloginForm] = useState({});

  function handleInput (e) {
    setloginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  }

  console.log(loginForm)

  // function handleSubmit (e) {
  //   e.preventDefault()
  //   async function loginFetch () {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginForm),
  //     });
  //   }
  //   loginFetch()
  // }

  return (
    <Modal visible={modal}>
      <form onSubmit={handleSubmit} className='modal-content'>
        <span className='close' onClick={nuevo}>
          &times;
        </span>
        <h2>New User</h2>
        <span className='label'>Name</span>
        <input
          className='input'
          type='text'
          onChange={handleInput}
          name='name'
        />
        <br />
        <span className='label'>Lastname</span>
        <input
          className='input'
          type='text'
          onChange={handleInput}
          name='lastname'
        />
        <br />
        <span className='label'>Age</span>
        <input
          className='input'
          type='text'
          onChange={handleInput}
          name='age'
        />
        <br />
        <span className='label'>Email</span>
        <input
          className='input'
          type='text'
          onChange={handleInput}
          name='email'
        />
        <br />
        <span className='label'>Phone</span>
        <input
          className='input'
          type='text'
          onChange={handleInput}
          name='phone'
        />
        <button type='submit' className='btn' onClick={saveUser}>
          Save
        </button>
        <br />
      </form>
    </Modal>
  );
};
export default Login;

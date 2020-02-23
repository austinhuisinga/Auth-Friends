import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = e => {
    // console.log(props);
    // e.preventDefault();
    axiosWithAuth()
      .post('/api/login', {
        username: username,
        password: password,
      })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friendsList');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label>
        <input
          // placeholder='Username'
          id='username'
          name='username'
          onChange={e => setUsername(e.target.value)}
          ref={register({
            required: 'Required Field'
          })}
        />
        {errors.username && errors.username.message}
        
        <label htmlFor='password'>Password</label>
        <input
          // placeholder='Password'
          id='password'
          name='password'
          onChange={e => setPassword(e.target.value)}
          ref={register({
            required: 'You must enter a password',
          })}
        />
        {errors.password && errors.password.message}

        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login;
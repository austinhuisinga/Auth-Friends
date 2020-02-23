import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {
  const { handleSubmit, register, errors } = useForm();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState();
  // const [email, setEmail] = useState('');

  const [friendInfo, setFriendInfo] = useState({ name: '', age: '', email: '' });
  
  const onSubmit = e => {
    axiosWithAuth()
      .post('/api/friends', friendInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    setFriendInfo('');
    setTimeout(() => {
      
    })
  };

  const handleChanges = e => {
    setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'></label>
      <input
        placeholder='Name'
        id='name'
        name='name'
        // onChange={e => setName(e.target.value)}
        onChange={handleChanges}
        ref={register({
          required: 'Name required.'
        })}
      />
      {errors.name && errors.name.message}

      <label htmlFor='age'></label>
      <input
        placeholder='Age'
        id='age'
        name='age'
        // onChange={e => setAge(e.target.value)}
        onChange={handleChanges}
        ref={register({
          required: 'Age required.'
        })}
      />
      {errors.age && errors.age.message}

      <label htmlFor='email'></label>
      <input
        placeholder='Email'
        id='email'
        name='email'
        // onChange={e => setEmail(e.target.value)}
        onChange={handleChanges}
        ref={register({
          required: 'Email required.'
        })}
      />
      {errors.email && errors.email.message}
      
      <button type='submit'>Add Friend</button>
    </form>
  )
}

export default FriendForm;
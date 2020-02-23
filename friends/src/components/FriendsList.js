import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  
  const getFriends = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log(res);
      setFriends(res.data);
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  };

  return (
    <h1>Friends List in progress</h1>
  )
};

export default FriendsList;
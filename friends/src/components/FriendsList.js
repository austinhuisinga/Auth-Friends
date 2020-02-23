import React, { useState, useEffect } from 'react';
import FriendForm from './FriendForm';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log(res.data);
      setFriends(res.data);
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }, []);

  return (
    <div>
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <h4>{friend.age}</h4>
          <h4>{friend.email}</h4>
        </div>
      ))}
      <FriendForm friends={friends} />
    </div>
  )
};

export default FriendsList;
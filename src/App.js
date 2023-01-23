import React from 'react';
import ProfilePhoto from './component/ProfilePhoto';
import FullName from './component/FullName';
import Address from './component/Adress';

function App() {
  return (
    
    <div>
      <h1>My Profile</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;


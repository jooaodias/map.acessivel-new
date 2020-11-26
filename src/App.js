import React, { useEffect, useState } from 'react';
import Layout from './container/Layout/Layout';
import Routes from './routes';

import firebase from 'firebase/app';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const displayName = firebase.auth().currentUser.displayName;
        setUser(displayName);
      }
    });
  }, []);

  console.log(user);
  return (
    <Layout user={user}>
      <Routes />
    </Layout>
  );
}

export default App;

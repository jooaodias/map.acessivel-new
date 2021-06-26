import React, { useEffect, useState } from 'react';
import Layout from './container/Layout/Layout';
import Routes from './routes';

import firebase from 'firebase/app';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const currentUser = firebase.auth().currentUser;
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <Layout user={user}>
      <Routes user={user} />
    </Layout>
  );
}

export default App;

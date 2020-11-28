import React, { PureComponent } from 'react';
import firebase from 'firebase/app';

import SignIn from './SignIn';
import SignUp from './SignUp';
import PageLoading from '../Loading/PageLoading';

class Authentication extends PureComponent {
  state = {
    lookingForUser: true,
    isUserAuthenticated: false,
    shouldShowLoginPage: true
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({ isUserAuthenticated: false, lookingForUser: false });
        return;
      }

      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(snapshot => {
          const userData = snapshot.data();
          this.setState({ userData, isUserAuthenticated: true, lookingForUser: false });
        });
    });
  };

  showLoginPage = shouldShowLoginPage => {
    this.setState({
      shouldShowLoginPage
    });
  };

  render() {
    const { lookingForUser, isUserAuthenticated, shouldShowLoginPage } = this.state;

    if (lookingForUser) {
      return <PageLoading />;
    }

    if (!isUserAuthenticated) {
      return (
        <React.Fragment>
          {shouldShowLoginPage && <SignIn />}
          {!shouldShowLoginPage && <SignUp />}
        </React.Fragment>
      );
    }


    return this.props.children({ ...this.state });
  }
}

export default Authentication;
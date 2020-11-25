import React from 'react'
import firebase from 'firebase/app';
import {
    GoogleLoginButton,
} from 'react-social-login-buttons';

const buttonStyle = {
    fontSize: '12pt',
    boxShadow: 'none',
    paddingRight: 36,
    width: '100%',
    marginTop: '16px',
    marginLeft: '-1px',
    borderRadius: '10px',
};

function SocialSignIn({ updateErrorMessage }) {
    const signInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        signInWithPopup(googleProvider);
    };

    const signInWithPopup = (provider) => {
        firebase.auth().signInWithPopup(provider).catch(handleSocialLoginError);
    };

    const handleSocialLoginError = (error) => {
        switch (error.code) {
            case 'auth/account-exists-with-different-credential':
                return updateErrorMessage(
                    'Esta conta já foi conectada usando outra rede social. Tente novamente usando outro método de login.',
                );

            case 'auth/popup-blocked':
            case 'auth/popup-closed-by-user':
                return updateErrorMessage(
                    'O popup de autorização foi bloqueado ou fechado, tente novamente.',
                );

            case 'auth/cancelled-popup-request':
                return;

            case 'auth/unauthorized-domain':
            case 'auth/operation-not-supported-in-this-environment':
            case 'auth/operation-not-allowed':
            case 'auth/auth-domain-config-required':
            default: {
                console.error(error);
                return updateErrorMessage('Ocorreu um erro inesperado');
            }
        }
    };

    return (
        <div>
            <GoogleLoginButton
                onClick={signInWithGoogle}
                text="Entrar com Google"
                style={buttonStyle}
                align="center"
            />
        </div>
    )
}

export default SocialSignIn

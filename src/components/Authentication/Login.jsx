import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import Userpool from './Userpool';
import React from 'react';

Amplify.configure(Userpool);
function Login() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        slot="sign-in"
        headerText="따릉이 Sign In"
        usernameAlias="email"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div slot="secondary-footer-content"></div>
      </AmplifySignIn>
    </AmplifyAuthenticator>
  );
}

export default Login;

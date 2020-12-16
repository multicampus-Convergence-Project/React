import { CognitoUserPool } from 'amazon-cognito-identity-js';

// const poolData = {
//   UserPoolId: 'us-east-1_EqzrkHsCr',
//   ClientId: '34ue3045jjn78g6opfipmaud6d',
// };

// export default new CognitoUserPool(poolData);

export default {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_EqzrkHsCr',
    userPoolWebClientId: '34ue3045jjn78g6opfipmaud6d',
  },
};

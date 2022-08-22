const aws = require("aws-sdk");
const { Amplify, Auth } = require("aws-amplify");

exports.confirmSignUp = async (email, code) => {
  try {
    const cognito = new aws.CognitoIdentityServiceProvider({
      apiVersion: "2016-04-18",
      region: process.env.REACT_APP_AWS_REGION,
      credentials: new aws.Credentials(
        process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ID
      ),
    });
    const cognitoParams = {
      ClientId: process.env.REACT_APP_AWS_CLIENT_ID,
      Username: email,
      ConfirmationCode: code,
    };

    let cognitoResponse = await cognito.confirmSignUp(cognitoParams).promise();
    return `user with email ${email} was created`, cognitoResponse;
  } catch (error) {
    return `user with email ${email} was not created`, error;
  }
};

exports.newCode = async (email) => {
  try {
    const cognito = new aws.CognitoIdentityServiceProvider({
      apiVersion: "2016-04-18",
      region: process.env.REACT_APP_AWS_REGION,
      credentials: new aws.Credentials(
        process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ID
      ),
    });
    const cognitoParams = {
      ClientId: process.env.REACT_APP_AWS_CLIENT_ID,
      Username: email,
    };

    let cognitoResponse = await cognito.resendConfirmationCode(cognitoParams).promise();
    return `the verifiction code was sended to ${email}`, cognitoResponse;
  } catch (err) {
    return `not possible send the code`, err;
  }
};

exports.updatePassword = async (email, password) => {
  const cognito = new aws.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
    region: process.env.REACT_APP_AWS_REGION,
    credentials: new aws.Credentials(
      process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ID
    ),
  });
  const cognitoParams = {
    UserPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
    Username: email,
    Permanent: true,
    Password: password,
  };

  let cognitoResponse = await cognito.adminSetUserPassword(cognitoParams).promise();
  return cognitoResponse;
};

exports.logInUser = async (username, password) => {
  Amplify.configure({
    Auth: {
      userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
      region: process.env.REACT_APP_AWS_REGION,
      userPoolWebClientId: process.env.REACT_APP_AWS_CLIENT_ID,
      authenticationFlowType: "USER_PASSWORD_AUTH",
    },
  });
  try {
    const user = await Auth.signIn(username, password);
    return {
      message: "signIn succesfull",
      data: user,
    };
  } catch (error) {
    return "sign in failed", error;
  }
};

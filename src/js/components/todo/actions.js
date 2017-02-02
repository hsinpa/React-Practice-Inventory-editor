import { connect } from 'react-redux';
import { LoginPanel } from './LoginComponent';

function LoginSubmit(inputObject) {
  inputObject.type = "LOGIN_SUBMIT";
  return inputObject;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSubmit: (inputs) => {
      dispatch(LoginSubmit(inputs))
    }
  }
}

const LoginCombine = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPanel)

export default LoginCombine

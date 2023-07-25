import { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { setIsLoggedIn } from "../store/reducers/login";

class LoginScreen extends Component {
    constructor(props : any) {
        super(props);
        this.state = this.initialState;
      }

      get initialState() {
        return {
          email: '',
          emailErr: '',
          password: '',
          loading: false,
          rememberMe: true,
        };
      }

    

}

const mapDispatchToProps = {
    setIsLoggedIn,
  };
export default connect(null, mapDispatchToProps)(LoginScreen);
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from 'react-navigation-stack';


const AuthStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
    },
    {
        initialRouteName: 'login',
        defaultNavigationOptions: {
            headerShown: false,
        },
    },
);
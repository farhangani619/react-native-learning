import {createStackNavigator} from '@react-navigation/native-stack'
import {createAppContainer } from '@react-navigation/native'
import Home from '../screens/HomeScreen'
import ReviewDetails from '../screens/ReviewDetailsScreen'

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)
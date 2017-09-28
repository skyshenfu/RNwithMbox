import {StackNavigator}from 'react-navigation'
import IndexComponent from './pages/index'
import WebComponent from './pages/web'
import {MainTab} from './pages/main'
export const Router=StackNavigator({
    Main :{
        screen:MainTab,
        navigationOptions:{
            header:null
        }
    },
    Web :{
        screen :WebComponent,
        navigationOptions:{
            headerTitle:'详情',
            headerBackTitle:null,
        }
    }
});
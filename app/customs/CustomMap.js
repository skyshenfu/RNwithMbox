import { requireNativeComponent,View } from 'react-native';
import { PropTypes} from 'react'

/**
 * 这里name是指在原生端 （x extend SimpleViewManager） x中return回来的名字
 * propTypes一定要包含View里面所有的东西，这样继承了通用属性就可以用RN来管理布局
 */

let component={
    name : 'CMapCustom',
    propTypes:{
        ...View.propTypes
    }
}
export default requireNativeComponent('CMapCustom', component)
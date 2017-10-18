import { requireNativeComponent,View,UIManager,findNodeHandle,Platform} from 'react-native';
import React, { Component ,PropTypes} from 'react'
/**
 * 这里name是指在原生端 （x extend SimpleViewManager） x中return回来的名字
 * propTypes一定要包含View里面所有的东西，这样继承了通用属性就可以用RN来管理布局
 */
let REF='CMapCustom'
let REF1='CMapCustom1'
let MapView= {
    name : "CMapCustom",
    propTypes:{
        ...View.propTypes
    }
};
let AMapView= {
    name : "Amap",
    propTypes:{
        ...View.propTypes,
}
}
let RCTMap = requireNativeComponent('CMapCustom',MapView);
let RCTMapIos=requireNativeComponent('Amap',AMapView);
//export default requireNativeComponent('CMapCustom', component)
export default class CMapCustom extends Component{
    _onReLocation(){
        console.log(UIManager.CMapCustom.Commands)
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.refs[REF]),//其实是获取RCTMap的节点因为它对应的是Native端的CMapCustom
            UIManager.CMapCustom.Commands.reloc,//Commands.pause与native层定义的COMMAND_PAUSE_NAME一致
            null//命令携带的参数数据
        );
    }
    constructor(props){
        super(props);

    }
    componentDidMount(){
        console.log(this.refs.CMapCustom1)
    }
    render(){
        if (Platform.OS=='android'){
            return (
                <RCTMap {...this.props} ref={REF}/>
            );
        }else {
            console.log(AMapView.propTypes)
            return (
                <RCTMapIos {...this.props}
                           ref={REF1}
                />
            )
        }

    }
}
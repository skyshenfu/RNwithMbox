package com.reviewrn.pain.customcomponents;

import com.amap.api.maps2d.AMapOptions;
import com.amap.api.maps2d.MapView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.reviewrn.pain.MainActivity;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：
 * 1.每一个自定义的Native控件都需要之策一个管理器
 * 2.管理器的createViewInstance定义了控件的初始方法
 * 3.View大小等通用参数有RN端指定
 */

public class CustomAmapManager extends SimpleViewManager<MapView> {
    private static final String NAME="CMapCustom";
    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext reactContext) {
        AMapOptions options = new AMapOptions();
        options.zoomControlsEnabled(false);
        MapView mapView=new MapView(reactContext,options);
        mapView.onCreate(null);
        return mapView;
    }
}

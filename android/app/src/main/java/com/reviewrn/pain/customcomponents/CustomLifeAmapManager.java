package com.reviewrn.pain.customcomponents;

import android.content.Context;
import android.util.Log;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.amap.api.maps2d.AMap;
import com.amap.api.maps2d.CameraUpdateFactory;
import com.amap.api.maps2d.LocationSource;
import com.amap.api.maps2d.MapView;
import com.amap.api.maps2d.UiSettings;
import com.amap.api.maps2d.model.LatLng;
import com.amap.api.maps2d.model.MyLocationStyle;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.reviewrn.pain.MainActivity;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：
 * 1.每一个自定义的Native控件都需要之策一个管理器
 * 2.管理器的createViewInstance定义了控件的初始方法
 * 3.View大小等通用参数有RN端指定
 * 4.如果需要和宿主生命周期绑定则实现LifecycleEventListener接口并且reactContext.addLifecycleEventListener(this);
 */

public class CustomLifeAmapManager extends SimpleViewManager<MapView>  implements LifecycleEventListener{
    private static final String NAME="CMapCustom";
    private AMap aMap;
    private AMapLocationClient mLocationClient = null;
    private ThemedReactContext mContext;
    WritableMap writableMap;
    private static final String LOCATIONNAME="Loc";
    private static String LOCATIONNINFO="暂无信息";
    //声明mLocationOption对象，定位参数
    public AMapLocationClientOption mLocationOption = null;
    //声明mListener对象，定位监听器
    private LocationSource.OnLocationChangedListener mListener = null;
    MapView mapView;
    //标识，用于判断是否只显示一次定位信息和用户重新定位
    //Amap的配置文件
    private UiSettings settings;
    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext reactContext) {
        mContext=reactContext;
        reactContext.addLifecycleEventListener(this);
        return configMap(reactContext);
    }
    private MapView configMap(ThemedReactContext reactContext){
        mapView=new MapView(reactContext);
        //设置开始
        Log.e("HERE", "configMap:");
        mapView.onCreate(MainActivity.bundle);
        initLocation();
        return mapView;

    }
    private void initLocation(){
        if (aMap==null){
            aMap=mapView.getMap();
            aMap.setLocationSource(new LocationSource() {
                @Override
                public void activate(OnLocationChangedListener onLocationChangedListener) {
                    mListener=onLocationChangedListener;

                }

                @Override
                public void deactivate() {
                        mListener=null;
                }
            });
            settings=aMap.getUiSettings();
            settings.setMyLocationButtonEnabled(false);
            settings.setZoomControlsEnabled(false);
            aMap.setMyLocationEnabled(true);
            location();

        }
    }
    private void location() {
        //初始化定位
        mLocationClient = new AMapLocationClient(mContext);
        //设置定位回调监听
        mLocationClient.setLocationListener(new AMapLocationListener() {
            @Override
            public void onLocationChanged(AMapLocation aMapLocation) {
                if (aMapLocation != null) {
                    if (aMapLocation.getErrorCode() == 0) {
                        //定位成功回调信息，设置相关消息
                        aMapLocation.getLocationType();//获取当前定位结果来源，如网络定位结果，详见官方定位类型表
                        aMapLocation.getLatitude();//获取纬度
                        aMapLocation.getLongitude();//获取经度
                        aMapLocation.getAccuracy();//获取精度信息
                        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        Date date = new Date(aMapLocation.getTime());
                        df.format(date);//定位时间
                        aMapLocation.getAddress();//地址，如果option中设置isNeedAddress为false，则没有此结果，网络定位结果中会有地址信息，GPS定位不返回地址信息。
                        aMapLocation.getCountry();//国家信息
                        aMapLocation.getProvince();//省信息
                        aMapLocation.getCity();//城市信息
                        aMapLocation.getDistrict();//城区信息
                        aMapLocation.getStreet();//街道信息
                        aMapLocation.getStreetNum();//街道门牌号信息
                        aMapLocation.getCityCode();//城市编码
                        aMapLocation.getAdCode();//地区编码
                        MyLocationStyle myLocationStyle;
                        myLocationStyle = new MyLocationStyle();
                        myLocationStyle.interval(2000); //设置连续定位模式下的定位间隔，只在连续定位模式下生效，单次定位模式下不会生效。单位为毫秒。
                        aMap.setMyLocationStyle(myLocationStyle);//设置定位蓝点的Style
                        aMap.setMyLocationEnabled(true);// 设置为true表示启动显示定位蓝点，false表示隐藏定位蓝点并不进行定位，默认是false。

//
//                // 如果不设置标志位，此时再拖动地图时，它会不断将地图移动到当前的位置
//                if (isFirstLoc) {
                        //设置缩放级别
                        aMap.moveCamera(CameraUpdateFactory.zoomTo(17));
                        //将地图移动到定位点
                        aMap.moveCamera(CameraUpdateFactory.changeLatLng(new LatLng(aMapLocation.getLatitude(), aMapLocation.getLongitude())));
                        //点击定位按钮 能够将地图的中心移动到定位点
                       // initMyMark(aMapLocation.getLatitude(),aMapLocation.getLongitude());
                        mListener.onLocationChanged(aMapLocation);
                        //获取定位信息
                        StringBuffer buffer = new StringBuffer();
                        buffer.append(aMapLocation.getCountry() + ""
                                + aMapLocation.getProvince() + ""
                                + aMapLocation.getCity() + ""
                                + aMapLocation.getProvince() + ""
                                + aMapLocation.getDistrict() + ""
                                + aMapLocation.getStreet() + ""
                                + aMapLocation.getStreetNum());
                        LOCATIONNINFO=buffer.toString();
                        sendEvent(mContext,"showloc");

//                }


                    } else {
                        //显示错误信息ErrCode是错误码，errInfo是错误信息，详见错误码表。
                        Log.e("Here","location Error, ErrCode:"
                                + aMapLocation.getErrorCode() + ", errInfo:"
                                + aMapLocation.getErrorInfo());
                    }
                }
            }
        });
        //初始化定位参数
        mLocationOption = new AMapLocationClientOption();
        //设置定位模式为Hight_Accuracy高精度模式，Battery_Saving为低功耗模式，Device_Sensors是仅设备模式
        mLocationOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);
        //设置是否返回地址信息（默认返回地址信息）
        mLocationOption.setNeedAddress(true);
        //设置是否只定位一次,默认为false
        mLocationOption.setOnceLocation(true);
        //设置是否强制刷新WIFI，默认为强制刷新
        mLocationOption.setWifiActiveScan(true);
        //设置是否允许模拟位置,默认为false，不允许模拟位置
        mLocationOption.setMockEnable(false);
        //设置定位间隔,单位毫秒,默认为2000ms
        //给定位客户端对象设置定位参数
        mLocationClient.setLocationOption(mLocationOption);
        //启动定位
        mLocationClient.startLocation();
    }

    @Override
    public void onDropViewInstance(MapView view) {
        super.onDropViewInstance(view);
        mContext.removeLifecycleEventListener(this);
    }

    @Override
    public void onHostResume() {
        if (mapView!=null){
            mapView.onResume();
            Log.e("HERE", "resumeMap: ");
        }
    }

    @Override
    public void onHostPause() {
        if (mapView!=null){
            mapView.onResume();
            Log.e("HERE", "pasuseMap: ");
        }

    }

    @Override
    public void onHostDestroy() {
        if (mapView!=null){
            mapView.onDestroy();
            Log.e("HERE", "DestoryMap: ");
        }else {
            Log.e("HERE", "remove2: ");

        }
    }
    private void sendEvent(ReactContext reactContext, String eventName){
        writableMap= Arguments.createMap();
        writableMap.putString(LOCATIONNAME,LOCATIONNINFO);
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,writableMap);
    }
}

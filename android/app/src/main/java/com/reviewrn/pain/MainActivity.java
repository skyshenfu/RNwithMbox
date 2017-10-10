package com.reviewrn.pain;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MainActivity extends ReactActivity {
    WritableMap writableMap;
    private static final String TIME="Time";
    public static Bundle bundle;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReviewRN";
    }
    @Override
    protected void onPause() {
        super.onPause();

        sendEvent( getReactInstanceManager().getCurrentReactContext(),"showtime");
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bundle=savedInstanceState;
    }

    /**
     *@method 这个方法是在原生端发生一些变化的时候在RN监听的，其中eventName是它的标示，是一个从原生端发送时间到RN的用例
     * @param reactContext 这是一个react的上下文
     * @param eventName 对应RN端addListener的名称
     */
    private void sendEvent(ReactContext reactContext, String eventName){
        writableMap= Arguments.createMap();
        writableMap.putString(TIME,System.currentTimeMillis()+"");
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,writableMap);
    }

}

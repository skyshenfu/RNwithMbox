package com.reviewrn.pain.customcomponents;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：
 */

public class CustomToast extends ReactContextBaseJavaModule {
    private Context mContext;
    /**
     * 定义常量，保存在一个Map中
     * 在js中通过:模块名.key值来访问常量
     * 设置Map的方法: getConstants
     */
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    private static final String COMPONENTNAME="CToast";
    public CustomToast(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext=reactContext;
    }

    @Override
    public String getName() {
        return COMPONENTNAME;
    }
    /**
     * RN实际调用的方法,参数可以为任意个
     * 必须使用注解@ReactMethod来标注方法
     */
    @ReactMethod
    public void rnCallNative(String msg,int duration){
        Toast.makeText(mContext,msg,duration).show();
    }
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }
}

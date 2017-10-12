package com.reviewrn.pain.customcomponents;

import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import com.reviewrn.pain.extras.OriginActivity;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：测试在React端调用原生Activity
 */

public class CustomButton extends ReactContextBaseJavaModule {
    private static final String NAME="CButton";
    private Context mContext;

    public CustomButton(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext=reactContext;
    }

    @Override
    public String getName() {
        return NAME;
    }
    @ReactMethod
    public void rnCallNative(){
        Intent intent=new Intent(mContext, OriginActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mContext.startActivity(intent);
    }

}

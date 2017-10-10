package com.reviewrn.pain;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reviewrn.pain.customcomponents.CustomAmapManager;
import com.reviewrn.pain.customcomponents.CustomButton;
import com.reviewrn.pain.customcomponents.CustomToast;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：
 */

public class MainPackage implements ReactPackage {
    /**
     * @method 这个方法返回的是所有native调用管理器
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules=new ArrayList<>();
        modules.add(new CustomToast(reactContext));
        return modules;
    }
    /**
     * @method 这个方法返回的是所有native ui管理器
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new CustomButton(),
                new CustomAmapManager()
        );
    }

}

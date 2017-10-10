package com.reviewrn.pain.customcomponents;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;

/**
 * 创建者：韦小宝
 * 创建日期：2017/10/10
 * 版本号：1.0.0
 * 功能说明：
 */

public class CustomButton extends SimpleViewManager<ReactViewGroup> {
    private static final String NAME="CButton";
    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected ReactViewGroup createViewInstance(ThemedReactContext reactContext) {
        return new ReactViewGroup(reactContext);
    }

}

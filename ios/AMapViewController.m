//
//  AMapViewController.m
//  ReviewRN
//
//  Created by LuDe on 2017/10/18.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import "AMapViewController.h"

@implementation AMapViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  /// 初始化地图
  MAMapView *_mapView = [[MAMapView alloc] initWithFrame:self.view.bounds];
  
  /// 把地图添加至view
  [self.view addSubview:_mapView];
  _mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
  
  /// 显示定位小蓝点
  _mapView.showsUserLocation = YES;
  _mapView.userTrackingMode = MAUserTrackingModeFollow;
  
  /// 显示室内地图
  
  /// 地图缩放等级
  [_mapView setZoomLevel:18 animated:YES];
  [_mapView setUserTrackingMode:MAUserTrackingModeFollowWithHeading animated:YES];
}
@end

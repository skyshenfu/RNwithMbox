//
//  GDMapViewManager.m

//
//  Created by Uncle Charlie on 18/10/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//
#import "CustomMapManager.h"

@interface CustomMapManager () <MAMapViewDelegate>

@end

@implementation CustomMapManager

RCT_EXPORT_MODULE(Amap)

//RCT_EXPORT_VIEW_PROPERTY(mapType, int)
//

- (UIView *)view {
  MAMapView *mapView = [[MAMapView alloc] init];
  //  MAMapView *mapView = [[MAMapView alloc] init];
  mapView.delegate = self;
  mapView.showsUserLocation = YES;
  mapView.userTrackingMode = MAUserTrackingModeFollow;
  
  return mapView;
}



@end


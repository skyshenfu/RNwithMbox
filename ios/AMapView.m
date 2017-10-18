//
//  AMapView.m
//  ReviewRN
//
//  Created by LuDe on 2017/10/18.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AMapView.h"
#import "AMapViewController.h"

@interface AMapView ()
@property (nonatomic, strong) AMapViewController * amapVC;
@end

@implementation AMapView

- (instancetype)init
{
  if ((self = [super init])) {
    
    AMapViewController * amapVC = [[AMapViewController alloc] init];
    self.amapVC = amapVC;
    
    [self addSubview:amapVC.view];
  }
  return self;
}
@end

#import "AMapViewManager.h"
#import "React/RCTBridge.h"
#import "React/RCTEventDispatcher.h"
#import "AMapView.h"

@implementation AMapViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  AMapView *map = [[AMapView alloc] init];
  return map;
}
RCT_CUSTOM_VIEW_PROPERTY(region, NSDictionary, AMapView)
{
  NSDictionary *options = [RCTConvert NSDictionary:json];
  [self setMapViewOptions:view :options];
}
-(void)setMapViewOptions:(AMapView *)view :(nonnull NSDictionary *)options
{
  NSArray *keys = [options allKeys];
  
  //地图宽高设置
  if([keys containsObject:@"frame"]) {
    NSDictionary *frame = [options objectForKey:@"frame"];
    CGFloat width = [[frame objectForKey:@"width"] floatValue];
    CGFloat height = [[frame objectForKey:@"height"] floatValue];
    view.frame = CGRectMake(view.frame.origin.x, view.frame.origin.y, width, height);
    NSLog(@"%f",width);
  }
}

RCT_EXPORT_METHOD(setOptions:(nonnull NSNumber *)reactTag :(nonnull NSDictionary *)options)
{
  
}

  
@end

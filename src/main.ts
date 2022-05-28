import OpenSeadragon, { Options } from 'openseadragon';
import './style.css';

const options: Options = {
  id: 'viewer',
  prefixUrl: '//openseadragon.github.io/openseadragon/images/',
  tileSources: '/fuffi/dzi.dzi',
  animationTime: 0.4,
  blendTime: 0.1,
  constrainDuringPan: true,
  maxZoomPixelRatio: 3,
  minZoomImageRatio: 0.25,
  visibilityRatio: 0.1,
  zoomPerScroll: 1.4,
  debugMode: false,
  gestureSettingsMouse: {
    clickToZoom: false
  },
  navigatorHeight: 150,
  navigatorWidth: 150,
  showNavigationControl: false
};

OpenSeadragon(options);

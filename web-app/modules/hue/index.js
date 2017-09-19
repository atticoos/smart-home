import {compose, withProps} from 'recompose'
import createHueWidget from './createHueWidget'
import HueWidget from './widget'
import {LightType} from '../../constants/hue'

export const KitchenLightsWidget = compose(
  withProps({title: 'Kitchen Lights'}),
  createHueWidget(LightType.KITCHEN)
)(HueWidget);

export const LivingRoomLightsWidget = compose(
  withProps({title: 'Living Room Lights'}),
  createHueWidget(LightType.LIVING_ROOM)
)(HueWidget);

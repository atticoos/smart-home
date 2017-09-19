import {compose, withProps} from 'recompose'
import createWemoWidget from './createWemoWidget'
import WemoWidget from './widget'
import {OutletType} from '../../constants/outlets'

export const StandingLightsWidget = compose(
  withProps({title: 'Standing Lights'}),
  createWemoWidget(OutletType.STANDING_LIGHTS)
)(WemoWidget);

export const StringLightsWidget = compose(
  withProps({title: 'String Lights'}),
  createWemoWidget(OutletType.STRING_LIGHTS)
)(WemoWidget);

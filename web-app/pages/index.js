import 'antd/dist/antd.css'
import Head from '../components/head'
import withRedux from 'next-redux-wrapper';
import {initStore} from '../state/store';
import * as Api from '../utils/api';
import {Widget} from '../components/widgets';
import Button from 'antd/lib/button';
import {
  StringLightsWidget,
  StandingLightsWidget
} from '../modules/outlets'
import {
  KitchenLightsWidget,
  LivingRoomLightsWidget
} from '../modules/hue'
import CameraFeedWidget from '../containers/widgets/cameraFeed';

class SmartHomeScreen extends React.Component {
  render() {
    return (
      <Screen />
    )
  }
}

const Screen = (props) => (
  <div>
    <Head title="Home" />

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <StringLightsWidget />
      <StandingLightsWidget />
    </div>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <KitchenLightsWidget />
      <LivingRoomLightsWidget />
    </div>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <CameraFeedWidget />
    </div>
  </div>
)

export default withRedux(initStore)(SmartHomeScreen);

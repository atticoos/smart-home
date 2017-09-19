import 'antd/dist/antd.css'
import Head from '../components/head'
import withRedux from 'next-redux-wrapper';
import {initStore} from '../state/store';
import * as Api from '../utils/api';
import {Widget} from '../components/widgets';
import {
  Row,
  Col,
  Button
} from 'antd'
import {
  StringLightsWidget,
  StandingLightsWidget
} from '../modules/outlets'
import {
  KitchenLightsWidget,
  LivingRoomLightsWidget,
  BedroomLightsWidget
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

    <Row>
      <Col span={6}>
        <StringLightsWidget />
      </Col>
      <Col span={6}>
        <StandingLightsWidget />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <KitchenLightsWidget />
      </Col>
      <Col span={6}>
        <LivingRoomLightsWidget />
      </Col>
      <Col span={6}>
        <BedroomLightsWidget />
      </Col>
    </Row>

    <Row>
      <Col span={12}>
        <CameraFeedWidget />
      </Col>
    </Row>
  </div>
)

export default withRedux(initStore)(SmartHomeScreen);

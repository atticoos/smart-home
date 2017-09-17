import 'antd/dist/antd.css'
import Link from 'next/link'
import Head from '../components/head'
import * as Api from '../utils/api';
import {Widget} from '../components/widgets';
import Button from 'antd/lib/button';
import StringLightsWidget from '../containers/widgets/stringLights';
import StandingLightsWidget from '../containers/widgets/standingLights';
import CameraFeedWidget from '../containers/widgets/cameraFeed';
export default () => (
  <div>
    <Head title="Home" />

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <StringLightsWidget />
      <StandingLightsWidget />
    </div>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <CameraFeedWidget />
    </div>
  </div>
)

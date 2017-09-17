import 'antd/dist/antd.css'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import * as Api from '../utils/api';
import {Widget} from '../components/widgets';
import Button from 'antd/lib/button';

export default () => (
  <div>
    <Head title="Home" />

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Widget title="String Lights">
        <Button onClick={() => Api.turnOutletsOn('string-lights')} type="primary">
          On
        </Button>
        <Button onClick={() => Api.turnOutletsOff('string-lights')}>
          Off
        </Button>
      </Widget>

      <Widget title="Standing Lights">
        <Button onClick={() => Api.turnOutletsOn('standing-lights')}>
          On
        </Button>
        <Button onClick={() => Api.turnOutletsOff('standing-lights')}>
          Off
        </Button>
      </Widget>
    </div>

    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Widget title="Camera" fullContent>
        <img
          src="http://apartment:43973"
          style={{minWidth: 400, minHeight: 400, maxWidth: 600, maxHeight: 500}}
        />
      </Widget>
    </div>
  </div>
)

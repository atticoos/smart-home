import React from 'react'
import PlugIcon from 'react-icons/lib/fa/plug'
import {Widget, WidgetTitle} from '../../components/widgets'
import {
  Row,
  Col,
  Button
} from 'antd'

const OutletWidget = ({title, icon = PlugIcon, initialized, loading, poweredOn, powerOn, powerOff}) => {
  return (
  <Widget
    title={<WidgetTitle title={title} icon={icon} />}
    loading={!initialized}
  >
    <Row gutter={10}>
      <Col span={12} style={{display: 'flex'}}>
        <Button
          style={{flex: 1}}
          onClick={powerOn}
          type={poweredOn ? 'primary' : null}
          loading={!poweredOn && loading}
        >
          On
        </Button>
      </Col>
      <Col span={12} style={{display: 'flex'}}>
        <Button
          style={{flex: 1}}
          onClick={powerOff}
          type={!poweredOn ? 'primary' : null}
          loading={poweredOn && loading}
        >
          Off
        </Button>
      </Col>
    </Row>
  </Widget>
)};

export default OutletWidget;

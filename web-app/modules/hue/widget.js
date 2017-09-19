import React from 'react'
import {Widget} from '../../components/widgets'
import {
  Row,
  Col,
  Button,
  Slider
} from 'antd'

const OutletWidget = ({title, initialized, loading, brightness, setBrightness, poweredOn, powerOn, powerOff}) => {
  return (
  <Widget title={title} loading={!initialized}>
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

    <Slider
      style={{marginTop: 30}}
      value={brightness}
      onChange={setBrightness}
      min={0}
      max={255}
    />
  </Widget>
)};

export default OutletWidget;

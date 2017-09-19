import React from 'react'
import {Widget} from '../../components/widgets'
import {
  Button,
  Slider
} from 'antd'

const OutletWidget = ({title, initialized, loading, brightness, setBrightness, poweredOn, powerOn, powerOff}) => {
  return (
  <Widget title={title} loading={!initialized}>
    <Button
      style={{width: 80, marginRight: 10}}
      onClick={powerOn}
      type={poweredOn ? 'primary' : null}
      loading={!poweredOn && loading}
    >
      On
    </Button>
    <Button
      style={{width: 80}}
      onClick={powerOff}
      type={!poweredOn ? 'primary' : null}
      loading={poweredOn && loading}
    >
      Off
    </Button>

    <div>
      <Slider
        value={brightness}
        onChange={setBrightness}
        min={0}
        max={255}
      />
    </div>
  </Widget>
)};

export default OutletWidget;

import React from 'react'
import {Widget} from '../../components/widgets'
import Button from 'antd/lib/button'

const OutletWidget = ({title, initialized, loading, poweredOn, powerOn, powerOff}) => {
  console.log('UI WIDGET', title, {loading})
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
  </Widget>
)};

export default OutletWidget;

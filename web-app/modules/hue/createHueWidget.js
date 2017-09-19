import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {compose, mapProps} from 'recompose';
import {createStructuredSelector} from 'reselect';
import {createOutletSelector} from './state/selector'
import {powerOn, powerOff, getPower, setBrightness} from './state/actions';


export default function withHueWidgetConnector (lightType) {
  return HueComponent => {
    class HueWidget extends React.Component {
      componentDidMount() {
        this.props.getPower(lightType);
      }

      render() {
        return (
          <HueComponent
            title={this.props.title}
            poweredOn={this.props.poweredOn}
            brightness={this.props.lightState ? this.props.lightState.bri : null}
            initialized={!this.props.initializing}
            loading={this.props.requestStatus === 'request'}
            powerOn={() => this.props.powerOn(lightType)}
            powerOff={() => this.props.powerOff(lightType)}
            setBrightness={(level) => this.props.setBrightness(lightType, level)}
          />
        )
      }
    }

    const selector = createStructuredSelector({
      outlet: createOutletSelector(lightType)
    })

    const actions = dispatch => ({
      outletActions: bindActionCreators({powerOn, powerOff, getPower, setBrightness}, dispatch)
    })

    const enhance = compose(
      connect(selector, actions),
      mapProps(({outlet, outletActions, ...props}) => ({
        ...outlet,
        ...outletActions,
        ...props
      }))
    );

    return enhance(HueWidget);
  };
}

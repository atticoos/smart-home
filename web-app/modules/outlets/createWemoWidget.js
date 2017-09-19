import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {compose, mapProps} from 'recompose';
import {createStructuredSelector} from 'reselect';
import {createOutletSelector} from './state/selector'
import {powerOn, powerOff, getPower} from './state/actions';


export default function withWemoWidgetConnector (outletType) {
  return WemoComponent => {
    class WemoWidget extends React.Component {
      componentDidMount() {
        this.props.getPower(outletType);
      }

      render() {
        console.log('DIS PROPS', outletType, this.props)
        return (
          <WemoComponent
            title={this.props.title}
            poweredOn={this.props.poweredOn}
            initialized={!this.props.initializing}
            loading={this.props.requestStatus === 'request'}
            powerOn={() => this.props.powerOn(outletType)}
            powerOff={() => this.props.powerOff(outletType)}
          />
        )
      }
    }

    const selector = createStructuredSelector({
      outlet: createOutletSelector(outletType)
    })

    const actions = dispatch => ({
      outletActions: bindActionCreators({powerOn, powerOff, getPower}, dispatch)
    })

    const enhance = compose(
      connect(selector, actions),
      mapProps(({outlet, outletActions, ...props}) => ({
        ...outlet,
        ...outletActions,
        ...props
      }))
    );

    return enhance(WemoWidget);
  };
}

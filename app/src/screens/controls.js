import React from 'react';
import glamorous from 'glamorous-native';
import * as API from '../utils/api';
import {LoadingButton} from '../components/button';

export default class ControlsScreen extends React.Component {
  state = {
    standingLights: {
      loading: false,
      powered: false
    },
    stringLights: {
      loading: false,
      powered: false
    }
  };

  componentDidMount() {
    this.syncOutletState();
    this.syncInterval = setInterval(() => this.syncOutletState, 30 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.syncInterval);
  }

  syncOutletState() {
    API.getOutletState('string-lights')
      .then(resp => this.setState({stringLights: {...this.state.stringLights, powered: resp.state}}))
      .catch(e => console.warn(e))

      API.getOutletState('standing-lights')
      .then(resp => this.setState({standingLights: {...this.state.stringLights, powered: resp.state}}))
      .catch(e => console.warn(e))
  }

  turnOutletsOff(type, state) {
    console.log('wtf', type, state)
    this.setState({[state]: {...this.state[state], loading: true}})
    API.turnOutletsOff(type)
      .then(() => this.setState({[state]: {...this.state[state], powered: false}}))
      .finally(() => this.setState({[state]: {...this.state[state], loading: false}}))
  }

  turnOutletsOn(type, state) {
    console.log('wtf', type, state)
    this.setState({[state]: {...this.state[state], loading: true}})
    API.turnOutletsOn(type)
    .then(() => this.setState({[state]: {...this.state[state], powered: true}}))
    .finally(() => this.setState({[state]: {...this.state[state], loading: false}}))
  }

  toggleOutlets(type, state) {
    if (this.state[state].powered) {
      this.turnOutletsOff(type, state)
    } else {
      this.turnOutletsOn(type, state)
    }
  }

  toggleAll() {
    if (this.areAllOn()) {
      this.turnOutletsOff('string-lights', 'stringLights')
      this.turnOutletsOff('standing-lights', 'standingLights')
    } else {
      this.turnOutletsOn('string-lights', 'stringLights')
      this.turnOutletsOn('standing-lights', 'standingLights')
    }
  }

  areAllOn() {
    return [
      'standingLights',
      'stringLights'
    ].reduce((allOn, key) => {
      return allOn && this.state[key].powered;
    }, true);
  }

  render() {
    return (
      <Container>
        <LoadingButton
          onPress={this.toggleAll.bind(this)}
          width={300}
          loading={false}
        >
          {this.areAllOn() ? 'All On' : 'All off'}
        </LoadingButton>
        <LoadingButton
          onPress={this.toggleOutlets.bind(this, 'string-lights', 'stringLights')}
          width={300}
          loading={this.state.stringLights.loading}
        >
          {this.state.stringLights.powered ? 'String Lights On' : 'String Lights off'}
        </LoadingButton>
        <LoadingButton
          onPress={this.toggleOutlets.bind(this, 'standing-lights', 'standingLights')}
          width={300}
          loading={this.state.standingLights.loading}
        >
          {this.state.standingLights.powered ? 'Standing Lights On' : 'Standing Lights off'}
        </LoadingButton>
      </Container>
    );
  }
}

const Container = glamorous.view({
  flex: 1,
  backgroundColor: '#CED3DC',
  justifyContent: 'center',
  alignItems: 'center'
})

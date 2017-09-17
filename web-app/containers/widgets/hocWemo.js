import React from 'react'

export default function createWemoWidget (WemoComponent, {turnOn, turnOff, load}) {
  class WemoWidget extends React.Component {
    state = {
      on: false,
      loading: false,
      initialized: false
    };

    componentDidMount() {
      load()
        .then(result => {
          console.log('RESULT', result)
          this.setState({on: !!result.state, initialized: true})
        })
        .catch((e) => {
          console.log('err', e)
          this.setState({initialized: true})
        });
    }

    turnOn() {
      this.setState({loading: true});
      const onComplete = () => setTimeout(() => this.setState({loading: false, on: true}), 3000);
      turnOn().then(onComplete, onComplete);
    }

    turnOff() {
      this.setState({loading: true});

      const onComplete = () => setTimeout(() => this.setState({loading: false, on: false}), 3000);
      turnOff().then(onComplete, onComplete);
    }

    render() {
      return (
        <WemoComponent
          initialized={this.state.initialized}
          poweredOn={this.state.on}
          loading={this.state.loading}
          turnOn={() => this.turnOn()}
          turnOff={() => this.turnOff()}
        />
      )
    }
  }
  return WemoWidget;
}

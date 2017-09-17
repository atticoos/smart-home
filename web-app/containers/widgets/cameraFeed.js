import React from 'react'
import * as Api from '../../utils/api';
import {Widget} from '../../components/widgets';
import Button from 'antd/lib/button';
import {compose, withStateHandlers} from 'recompose';



const CameraFeedWidget = ({loading, onLoad}) => {

  return (
    <div>
      {loading &&
        <img
          src="http://apartment:43973"
          style={{width: 0, height: 0, }}
          onLoad={onLoad}
        />
      }
  <Widget
    title="Camera Feed"
    loading={loading}
    bodyStyle={{minWidth: 600, minHeight: 400}}
  >
    <img
      src="http://apartment:43973"
      style={{minWidth: 400, minHeight: 400, maxWidth: 600, maxHeight: 500}}
    />
  </Widget>
  </div>
)}

const enhance = compose(
  withStateHandlers(
    ({loading = true}) => ({
      loading
    }),
    {
      onLoad: state => () => ({loading: false})
    }
  )
);

export default enhance(CameraFeedWidget)

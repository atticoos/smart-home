import React from 'react'
import * as Api from '../../utils/api';
import {Widget, WidgetTitle} from '../../components/widgets';
import VideoIcon from 'react-icons/lib/fa/video-camera'
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
    title={
      <WidgetTitle title="Camera Feed" icon={VideoIcon} />
    }
    loading={loading}
    bodyStyle={{minWidth: 600, minHeight: 400, padding: 0}}
  >
    <img
      src="http://apartment:43973"
      style={{width: '100%'}}
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

import React from 'react'
import glamorous from 'glamorous'
import Card from 'antd/lib/card';
import {compose, mapProps} from 'recompose';
import {withStyles} from '../../utils/style';

const enhance = compose(
  mapProps(({bodyStyle, fullContent, ...props}) => ({
    bordered: true,
    noHovering: true,
    bodyStyle: fullContent ? {padding: 0, ...bodyStyle} : bodyStyle,
    ...props
  })),
  withStyles({margin: 20})
);

export default enhance(Card);

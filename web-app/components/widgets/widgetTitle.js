import React from 'react'
import glamorous from 'glamorous'

export default function WidgetTitle ({title, icon}) {
  return (
    <div>
      <span style={{fontSize: 18, paddingBottom: 5, marginRight: 10}}>
        {icon && React.createElement(icon)}
      </span>
      <span style={{fontSize: 16}}>
        {title}
      </span>
    </div>
  )
}

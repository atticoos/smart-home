import React from 'react'
import glamorous from 'glamorous-native'
import {ActivityIndicator} from 'react-native'

export default function Button ({children, ...props}) {
  const isTextChild = typeof children === 'string';
  return (
    <Touchable {...props}>
      {isTextChild
        ? <Text>{children}</Text>
        : children
      }
    </Touchable>
  );
}

export function LoadingButton ({children, loading, ...props}) {
  return (
    <Button {...props}>
      {loading
        ? <ActivityIndicator size={'large'} />
        : children
      }
    </Button>
  )
}

const Touchable = glamorous.touchableHighlight({
  marginVertical: 10,
  backgroundColor: '#ABA9C3',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  height: 100
});
Touchable.propsAreStyleOverrides = true;

const Text = glamorous.text({
  color: '#FCF7F8',
  fontSize: 32
});

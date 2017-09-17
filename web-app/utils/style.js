import glamorous from 'glamorous';

export const withStyles = (...styles) => component => glamorous(component)(...styles);

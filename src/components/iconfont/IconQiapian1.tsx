/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconQiapian1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.527 512.901H638.428v53.315h159.099V512.9z m81.429-346.521H136.525c-43.93 0-79.545 35.799-79.545 79.964v533.115c0 44.16 35.615 79.964 79.545 79.964h742.43c43.93 0 79.545-35.804 79.545-79.964V246.344c0-44.165-35.61-79.964-79.544-79.964z m26.51 559.77c0 44.164-35.609 79.958-79.538 79.958h-636.37c-43.93 0-79.545-35.799-79.545-79.959V406.272h795.454v319.872z m0-373.182H110.014v-53.31c0-44.165 35.61-79.964 79.545-79.964h636.365c43.934 0 79.544 35.8 79.544 79.964v53.31zM534.257 512.9H163.042v53.315h371.216V512.9zM375.164 619.52H163.04v53.31h212.122v-53.31z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQiapian1.defaultProps = {
  size: 18,
};

IconQiapian1 = React.memo ? React.memo(IconQiapian1) : IconQiapian1;

export default IconQiapian1;

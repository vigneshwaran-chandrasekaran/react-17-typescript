import React from 'react';
import Greet from '../Greet';

/**
 * use props of other components
 */
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  console.log('props', props);
  return <div>{/* {console.log("props", props)} */}</div>;
};

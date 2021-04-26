import _ from 'lodash';
import React from 'react';

export const WithPreventDoubleClick = (WrappedComponent: any) => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = _.debounce(this.debouncedOnPress, 1500, {
      leading: true,
      trailing: false
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `WithPreventDoubleClick(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return PreventDoubleClick;
};

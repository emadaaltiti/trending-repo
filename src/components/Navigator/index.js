import React from "react";

class Navigator extends React.Component {
  render() {
    const { componentsList, selectedComponentName } = this.props;
    return componentsList.find((item) => item.name === selectedComponentName)
      .component;
  }
}

export default Navigator;

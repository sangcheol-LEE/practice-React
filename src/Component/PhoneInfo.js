import React, { Component } from 'react';

class PhoneInfo extends Component {
  render() {
    const { name, phone, id } = this.props.info;  // info 라는 값을 전달받고 거기서 name, phone, id 를 추출한다는 의미
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    }

    return (
      <div style={ style }>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
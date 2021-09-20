import React, { Component } from 'react';

class PhoneForm extends Component {

  state ={
    name: "",
    phone: "",
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //input 이 e.target이고 여기에 입력된 값이 valu이다.
    });
  }

  render() {
    return (
      <form> 
        <input 
        name="name"
        placeholder="이름" 
        onChange={this.handleChange} 
        value={this.state.name}
        />  {/*인풋에서 값이 변경될 때 마다  name 값이 변경 될 것임.*/}

        <input 
        name="phone"
        placeholder="전화번호" 
        onChange={this.handleChange}
        value={this.state.phone}
        
        />
        <div>
          {this.state.name}  {this.state.phone}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
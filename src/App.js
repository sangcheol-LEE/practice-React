import React, { Component } from "react";
import PhoneForm from "./Component/PhoneForm";
import PhoneInfoList from "./Component/PhoneInfoList";

class App extends Component {

  id = 0; //우리기 setState메소드를 사용하는 이유는 어떤 값이 수정됐을 때 Rerendering을 꼭 하게끔 하기 위함인데 id 값은 화면에 나올 필요가 없어서
          // state안에 굳이 포함 시키지 않고 밖으로 뺐다.

  state= {
    information : [],
  }

  handleCreate = (data) => {
    const { information } = this.state; //비구조 할당문법
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    }) 
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }


  render() {
    return (
      <div>
          <PhoneForm onCreate={this.handleCreate} />
          <PhoneInfoList 
          data={ this.state.information }
          onRemove={this.handleRemove}
          />
      </div>
    );
  }
}

export default App;

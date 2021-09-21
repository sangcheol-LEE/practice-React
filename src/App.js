import React, { Component } from "react";
import PhoneForm from "./Component/PhoneForm";
import PhoneInfoList from "./Component/PhoneInfoList";

class App extends Component {

  id = 3; //우리기 setState메소드를 사용하는 이유는 어떤 값이 수정됐을 때 Rerendering을 꼭 하게끔 하기 위함인데 id 값은 화면에 나올 필요가 없어서
          // state안에 굳이 포함 시키지 않고 밖으로 뺐다.

  state= {
    information : [
      {
        id:0,
        name: "홍길동",
        phone: "010-0000-0001"
      },
      {
        id:1,
        name: "이상철",
        phone: "010-0000-0002"
      },
      {
        id:2,
        name: "이안리",
        phone: "010-0000-0003"
      },
    ],
    keyword: "",
  }
   
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
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

   handleUpdate = (id, data) => {
     const { information } = this.state;
     this.setState({
       information: information.map(
         info => {
           if(info.id === id) {
             return {
               id,
               ...data,
             };
           }
           return info;
         }
       )
     })
   }
  


  render() {
    return (
      <div>
          <PhoneForm onCreate={this.handleCreate} />
          <input 
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색..." 
          />
          <PhoneInfoList 
          data={ this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;

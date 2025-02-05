import React,{ Component} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store';

class ToDoList extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    console.log(store.getState());
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleStoreChange=this.handleStoreChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange)

  }
    
    render(){
        return (
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <div>
                    <Input placeholder='todo info' style={{width:'300px'}} 
                    onChange={this.handleInputChange}/>
                    <Button type="primary" style={{marginLeft:"10px"}} onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List style={{marginTop:'10px',width:"300px"}}
 
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => (
        <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
      )}
    />
            </div>          

         
        )
    }

    handleInputChange(e){
      const action={
        type:'change_input_value',
        value:e.target.value
      }
      store.dispatch(action);
    }

    handleStoreChange(e){
      this.setState(store.getState())

    }

    handleBtnClick(){
      const action={
        type:'add_todo_item'
      };
      store.dispatch(action)
    }


    handleItemDelete(index){
      const action={
        type:'delete_todo_item'
      }
      store.dispatch(action)
    }

}
export default ToDoList;
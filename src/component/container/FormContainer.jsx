import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input.jsx';
import './form.less';

class FormContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      title: e.target.value,
    })
  }

  render(){
    const { title } = this.state;
    return (
      <form id="form">
        <Input
          label="title"
          text="标题"
          type="text"
          id='title'
          value={title}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer;
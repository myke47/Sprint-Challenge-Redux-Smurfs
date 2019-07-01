import React, { component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return (
      <div className="smurf-form-container">
        <form onSubmit={this.addSmurf} className="smurf-form">
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
            />
            <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            age='age'
            />
            <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            height='height'
            />
        </form>
      </div>
    )
  }

}

export default SmurfForm;
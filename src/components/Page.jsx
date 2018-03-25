import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import { ChatBox, TextBox, Input } from './ChatBox';

class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {response: ''};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit (event) {
    event.preventDefault();
    this.setState({ response: '' });
  }

  render () {
    return (
      <div>
        <Header />
        <div className='columns'>
          <div className='column is-6'>
            <ChatBox>
              <div className='field is-grouped'>
                <p className='control is-expanded'>
                  <input
                    className='input'
                    type='text'
                    placeholder='Enter response'
                    onChange={this.handleInputChange} />
                </p>
                <p className='control'>
                  <button
                    className='button is-info'
                    onClick={this.handleFormSubmit}>
                    Send
                  </button>
                </p>
              </div>
            </ChatBox>
          </div>
          <div className='column is-6'>
            <ChatBox>
              <Input />
            </ChatBox>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;

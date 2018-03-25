import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import { ChatBox, TextBox, Input, Button } from './ChatBox';

class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currResponse: '',
      newMsg: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit (event) {
    event.preventDefault();
    this.setState({ newMsg: this.state.currResponse });
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <Header />
        <div className='columns'>

          <div className='column is-6'>
            <ChatBox>

              <TextBox
                value={this.state.newMsg}
              />

              <div className='field is-grouped'>
                <p className='control is-expanded'>
                  <Input
                    placeholder='Enter response'
                    name='currResponse'
                    value={this.state.currResponse}
                    onChange={this.handleInputChange}
                  />
                </p>
                <p className='control'>
                  <Button onClick={this.handleFormSubmit}>
                    Send
                  </Button>
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

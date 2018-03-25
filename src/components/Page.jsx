import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import { ChatBox, TextBox, Input, Button } from './ChatBox';

class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newChat: '',
      chatList: ['Hello, I have an issue.', 'Sure, how can I help you?'],
      customer: 'example customer',
      issue: 'fa fa-credit-card',
      isActive: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // add most recent chat to list of chats above, and clear text box
  handleFormSubmit (event) {
    event.preventDefault();
    this.setState(
      {chatList: this.state.chatList.concat([
        this.state.newChat
      ])},
      () => {
        this.setState({
          newChat: ''
        });
      }
    );
  }

  // grab values of input and store in state
  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <Header />
        <div className='columns'>
          <div className='column is-5 is-offset-1'>
            <ChatBox
              customer={this.state.customer}
              issueIcon={this.state.issue}
            >
              <ul>
                {this.state.chatList.map((chat) =>
                  <TextBox value={chat} />
                )}
              </ul>
              <br />
              <div className='field is-grouped'>
                <p className='control is-expanded'>
                  <Input
                    placeholder='Enter response'
                    name='newChat'
                    value={this.state.newChat}
                    onChange={this.handleInputChange}
                  />
                </p>
                <p className='control'>
                  <Button
                    onClick={this.handleFormSubmit}
                    disabled={!(this.state.newChat)}
                  >
                    Send
                  </Button>
                </p>
              </div>
            </ChatBox>
          </div>

          <div className='column is-5'>
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

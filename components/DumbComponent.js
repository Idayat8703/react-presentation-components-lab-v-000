import React from 'react';

export default class DumbComponent extends React.Component {
  constructor() {
      super();

      this.state = {
        mood: 'happy'
      }


      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      mood: 'sad'
    })
  }

  render(){
    return (
      <div
       onClick={this.handleClick}>{this.state.mood}

       </div>

    )
  }
}

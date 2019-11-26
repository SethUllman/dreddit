import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(res => this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType} Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input 
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
          </label>

          <label>Text
            <textarea
              value={this.state.text}
              onChange={this.update('text')}
            />
          </label>

          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}
import React, { Component } from 'react';

class todoitem extends Component {
	render() {
		return <div onClick={this.handleClick}>{this.props.content}</div>; // todolist.js 第 53 行传过来的数据
	}

	handleClick() {
		alert('1');
	}
}

export default todoitem;

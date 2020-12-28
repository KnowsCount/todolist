import React, { Component } from 'react';

class todoitem extends Component {
	render() {
		return <div onClick={this.handleClick}>{this.props.content}</div>; // todolist.js 第 53 行传过来的数据
	}

	handleClick() {
		this.handleDeletion.bind(this, index);
	}

	handleDeletion(index) {
		const list = [...this.state.list];
		list.splice(index, 1);
	}
}

export default todoitem;

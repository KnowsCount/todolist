import React, { Component, Fragment } from 'react';
import './todolist.css';
// import './todoitem'

/*
 * 创建一个组件：
 * class foo extends Component {
 *
 * }
 *
 * 如果是 import React from 'react'：
 * class foo extends React.Component {
 *
 * }
 */

class todolist extends Component {
	constructor(props) {
		super(props); // super 指父类 (component)。
		// this.state: 组件的状态。
		this.state = {
			inputValue: '', // input 框的内容储存于此。
			list: [], // 矩阵储存表单
			current: 0,
			bgColor: '',
			strikeThrough: [],
		};
	}
	render() {
		return (
			// jsx 语法下 render() 返回的内容外层必须整体被包含在一个大的元素中。
			// 外层会套一个 div。但是可以用 Fragment 替代最外层的 div 标签。
			<Fragment>
				{/* 这样写注释 */}
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input
						// className='foo'
						id="insertArea"
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
					/>
					<button
						type="submit"
						onClick={this.handleBtnClick.bind(this)} // 一定要 bind(this)
					>
						submit
					</button>
				</div>
				<ul>
					{this.state.list.map((item, index) => {
						// 用 map 做数组循环
						return (
							/*
							<div>
								{/* 这里必须要 <div> 标签，因为 react 会认为你要他 return 两个 
								{/*<Todoitem content={item} />
								<li
									key={index}
									onClick={this.handleDeletion.bind(
										this,
										index
									)}
									dangerouslySetInnerHTML={{ __html: item }} // 使 <h1> 可以被读成元素而非字符串。只不过会有 xss 的风险。
								></li>
							</div>*/
							<li
								key={index}
								onClick={(event) => this.onButtonClick(event)}
								style={{ color: this.state.Colour }}
							>
								{item}
							</li>
						);
						// 避免使用 index 做 key 值
					})}
				</ul>
			</Fragment>
		);
	}
	// this.handleInputChange 在组件里并不存在，于是于此定义。
	handleInputChange(event) {
		// console.log(event);
		// console.log(event.target);
		// console.log(event.target.value);
		/* this.state.inputValue = event.target.value;
		 * 会报错 state 没有被定义。一定是 this 指向有问题。
		 */
		// console.log(this); 输出 undefined。
		/* 将 onChange={this.handleInputChange} 改变成
		 * onChange={this.handleInputChange.bind(this)}
		 */
		// console.log(this) 正常。
		// this.state.inputValue = event.target.value; 页面没有跟着变。—— react 不能通过引用改变，必须要 setState。
		this.setState({
			inputValue: event.target.value, // 成功！
		});
	}
	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue], // 做对 list 的变更
			inputValue: '', // 清空 input
		});
	}
	changeColour = () => {
		this.setState({
			Colour: 'grey',
		});
	};
	crossLine = (event) => {
		const element = event.target;
		element.classList.toggle('crossed-line');
	};
	onButtonClick = (event) => {
		this.changeColour();
		this.crossLine(event);
	};
	/*handleDeletion(index) {
		const list = [...this.state.list];
		list.splice(index, 1);

		this.setState({
			list: list,
		});
	}*/
}

export default todolist;

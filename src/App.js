import { Provider } from 'react-redux';
import { FieldLayout, HeaderLayout } from './components';
import { store } from './store/store';
import { Component } from 'react';
export class App extends Component {
	render() {
		return (
			<div className="w-[320px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<Provider store={store}>
					<HeaderLayout />
	 				<div className="mt-[50px]">
	 					<FieldLayout />
					</div>
				</Provider>
			</div>
		)
	}
}

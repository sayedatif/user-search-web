import { h, Component } from 'preact';
import request from '../request';
import SearchBox from '../components/SearchBox';
import Button from '../components/Button';
import CardContainer from './CardContainer';
import LoaderContainer from './LoaderContainer';
import EmptyContainer from './EmptyContainer';

class App extends Component {
	state = {
		keyword: '',
		disable: true,
		loading: false,
		userData: [],
		showWarning: false
	}

	search = async () => {
		const { keyword } = this.state;
		if (keyword.length < 3) {
			// eslint-disable-next-line no-alert
			alert('Keyword should be greater than equal to length 3');
			return;
		}
		
		this.setState({ loading: true });
		try {
			const data = await request(`http://www.localhost.com:8081/search?keyword=${keyword.toLowerCase()}`);
			const state = {
				userData: data,
				loading: false
			};
			if (data.length === 0) {
				state.showWarning = true;
			}
			this.setState(state);
		} catch (e) {
			// eslint-disable-next-line no-alert
			alert('Error occured try after some time.');
			this.setState({ loading: false });
		}
	}

	handleOnChange = e => {
		const stateToSet = {
			userData: [],
			keyword: e.target.value,
			showWarning: false
		};
		if (stateToSet.keyword && stateToSet.keyword.length >= 3) {
			stateToSet.disable = false;
		} else {
			stateToSet.disable = true;
		}
		this.setState(stateToSet);
	}

	render() {
		const { keyword, disable, loading, userData, showWarning } = this.state;
		return (
			<div id="app">
				<div class="center-container search">
					<SearchBox onChange={this.handleOnChange} value={keyword} />
					<Button onClick={this.search} disable={disable || loading} />
				</div>
				<div class="app-container">
					{loading && <LoaderContainer />}
					{!loading && !showWarning && <CardContainer users={userData} />}
					{!loading && showWarning && <EmptyContainer keyword={keyword} />}
				</div>
			</div>
		);
	}
}

export default App;
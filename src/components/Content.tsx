import { Route, Switch } from 'react-router-dom';
import AddTime from './AddTime';
import Main from './Main';

const Content: React.FC = () => {
	return (
		<div className='content'>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route path='/add'>
					<AddTime />
				</Route>
				<Route exact path='/two'>
					TWO
				</Route>
				<Route exact path='/two/-1'>
					ERROR
				</Route>
				<Route exact path='/two/:id'>
					Three
				</Route>
			</Switch>
		</div>
	);
};

export default Content;

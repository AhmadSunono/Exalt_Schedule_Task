import { Route } from 'react-router-dom';
import AddTime from './AddTime';
import Main from './Main';

const Content: React.FC = () => {
	return (
		<div className='content'>
			<Route exact path='/'>
				<Main />
			</Route>
			<Route path='/add'>
				<AddTime />
			</Route>
			<Route path='/two'>TWO</Route>
		</div>
	);
};

export default Content;

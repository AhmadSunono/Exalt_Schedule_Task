import { Route } from 'react-router-dom';
import AddTime from './AddTime';
import { Activity } from './../App';
import Main from './Main';

interface ContentProps {
	addActivity: (activity: Activity) => void;
	activities: Activity[];
}

const Content: React.FC<ContentProps> = ({ addActivity, activities }) => {
	return (
		<div className='content'>
			<Route exact path='/'>
				<Main activities={activities} />
			</Route>
			<Route path='/add'>
				<AddTime addActivity={addActivity} />
			</Route>
			<Route path='/two'>TWO</Route>
		</div>
	);
};

export default Content;

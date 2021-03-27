import { Activity } from './../App';
import DayActivities from './DayActivities';
import PeriodActivities from './PeriodActivities';

interface MainProps {
	activities: Activity[];
}

const Main: React.FC<MainProps> = ({ activities }) => {
	return (
		<div className='main-page' style={{ paddingTop: '15px' }}>
			<DayActivities activities={activities} />
			<hr />
			<PeriodActivities activities={activities} />
		</div>
	);
};

export default Main;

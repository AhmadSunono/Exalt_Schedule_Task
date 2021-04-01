import DayActivities from './DayActivities';
import PeriodActivities from './PeriodActivities';
import { useState, useEffect } from 'react';
import axios from '../axios-activities';

export interface Activity {
	name: string;
	startDate: Date;
	endDate: Date;
}

const Main: React.FC = () => {
	const [activities, setActivities] = useState<Activity[]>([]);

	useEffect(() => {
		axios
			.get('/activities.json')
			.then((res) =>
				setActivities(
					Object.keys(res.data).map((key) => {
						let arr = res.data[key];
						arr.startDate = new Date(arr.startDate);
						arr.endDate = new Date(arr.endDate);
						return arr;
					})
				)
			)
			.catch((err) => console.log(err));
	}, []);

	const ActivityList = () => {
		return (
			<ul className='activities'>
				{activities.map((activity) => (
					<li
						key={
							String(activity.startDate) +
							String(activity.endDate) +
							activity.name
						}>
						{activity.name} ### Starts at: ### -{' '}
						{activity.startDate.getFullYear()}-
						{activity.startDate.getMonth()}-
						{activity.startDate.getDate()}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className='main-page' style={{ paddingTop: '15px' }}>
			<DayActivities activities={activities} />
			<hr />
			<PeriodActivities activities={activities} />
			<hr />
			<br />
			{activities.length !== 0 && <ActivityList />}
		</div>
	);
};

export default Main;

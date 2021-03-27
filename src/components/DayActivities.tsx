import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Activity } from './../App';

interface DayActivitiesProps {
	activities: Activity[];
}

const DayActivities: React.FC<DayActivitiesProps> = ({ activities }) => {
	const [currentDate, setCurrentDate] = useState<Date | null>(null);
	const [currentActivities, setCurrentActivities] = useState<Activity[]>([]);
	const [labels, setLabels] = useState<String[]>([]);
	const [data, setData] = useState<Number[]>([]);

	const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentDate(new Date(e.target.value + ''));
	};

	const filterActivities = () => {
		if (currentDate) {
			activities = activities.filter(
				(activity) =>
					activity.startDate.getFullYear() ===
						currentDate.getFullYear() &&
					activity.startDate.getMonth() === currentDate.getMonth() &&
					activity.startDate.getDate() === currentDate.getDate()
			);

			setCurrentActivities([...activities]);
		}
	};

	useEffect(() => {
		if (currentDate) {
			filterActivities();
		}
	}, [currentDate, activities]);

	useEffect(() => {
		setLabels(currentActivities.map((activity) => activity.name));
		setData(
			currentActivities.map((activity) =>
				Math.floor(
					Math.abs(
						activity.endDate.getTime() -
							activity.startDate.getTime()
					) / 36e5
				)
			)
		);
	}, [currentActivities]);

	return (
		<React.Fragment>
			<h4>Daily Activities</h4>
			<div>
				<h5 style={{ display: 'inline', marginRight: '15px' }}>
					Select Date:
				</h5>
				<input type='date' onChange={dateChangeHandler} />
			</div>

			{currentActivities.length ? (
				<div
					style={{ width: '400px', height: '200px', margin: 'auto' }}>
					<Pie
						data={{
							labels: labels,
							datasets: [
								{
									label: 'Activities',
									data: data,
									backgroundColor: 'rgba(116,185,255,0.2)',
									borderColor: 'rgba(116,185,255,1)',
									borderWidth: 1,
									hoverBackgroundColor:
										'rgba(116,185,255,0.4)',
									hoverBorderColor: 'rgba(116,185,255,1)'
								}
							]
						}}
						options={{ maintainAspectRatio: false }}
						width={100}
						height={100}
					/>
				</div>
			) : (
				<h5>There is no activities at this day.</h5>
			)}
		</React.Fragment>
	);
};

export default DayActivities;

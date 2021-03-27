import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Activity } from './../App';

interface PeriodActivitiesProps {
	activities: Activity[];
}

interface BarActivity {
	name: string;
	hours: number;
}

const PeriodActivities: React.FC<PeriodActivitiesProps> = ({ activities }) => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [currentActivities, setCurrentActivities] = useState<BarActivity[]>(
		[]
	);
	const [labels, setLabels] = useState<String[]>([]);
	const [data, setData] = useState<Number[]>([]);

	const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		let name = e.target.name;
		switch (name) {
			case 'start':
				setStartDate(new Date(e.target.value + ''));
				break;
			case 'end':
				setEndDate(new Date(e.target.value + ''));
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		if (startDate && endDate) {
			let result: Activity[] = activities.filter(
				(activity) =>
					(activity.startDate.getTime() <= endDate.getTime() &&
						activity.startDate.getTime() >= startDate.getTime()) ||
					(activity.startDate.getFullYear === startDate.getFullYear &&
						activity.startDate.getMonth === startDate.getMonth &&
						activity.startDate.getDate === startDate.getDate)
			);
			let tmp: BarActivity[] = [];
			for (let i = 0; i < result.length; i++) {
				let index = tmp.findIndex(
					(element) => element.name === result[i].name
				);
				let hours = Math.floor(
					Math.abs(
						result[i].endDate.getTime() -
							result[i].startDate.getTime()
					) / 36e5
				);
				if (index < 0)
					tmp.push({
						name: result[i].name,
						hours: hours
					});
				else {
					tmp[index].hours += hours;
				}
			}
			setCurrentActivities([...tmp]);
		}
	}, [startDate, endDate, activities]);

	useEffect(() => {
		setLabels(currentActivities.map((activity) => activity.name));
		setData(currentActivities.map((activity) => activity.hours));
	}, [currentActivities]);

	return (
		<React.Fragment>
			<h4>Period Activities</h4>
			<div>
				<h5
					style={{
						display: 'inline',
						marginRight: '15px'
					}}>
					Start Date:
				</h5>
				<input type='date' name='start' onChange={dateChangeHandler} />
				<h5
					style={{
						display: 'inline',
						marginRight: '15px',
						marginLeft: '15px'
					}}>
					End Date:
				</h5>
				<input type='date' name='end' onChange={dateChangeHandler} />
			</div>
			{currentActivities.length ? (
				<div
					style={{ width: '600px', height: '300px', margin: 'auto' }}>
					<Bar
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
						options={{
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZero: true
										}
									}
								]
							}
						}}
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

export default PeriodActivities;

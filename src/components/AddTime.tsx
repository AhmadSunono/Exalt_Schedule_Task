import { ChangeEvent, FormEvent, useState } from 'react';
import { Activity } from './../App';

interface AddTimeProps {
	addActivity: (activity: Activity) => void;
}

const AddTime: React.FC<AddTimeProps> = ({ addActivity }) => {
	const [formData, setFormData] = useState({
		startDate: '',
		endDate: '',
		name: ''
	});

	const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const activityChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		let startDate = new Date(formData.startDate + '');
		let endDate = new Date(formData.endDate + '');
		let { name } = formData;
		let activity = {
			startDate,
			endDate,
			name
		};
		addActivity(activity);
		setFormData({ name: '', startDate: '', endDate: '' });
	};

/* 	const startDateRef = useRef<HTMLInputElement>(null);
	const endDateRef = useRef();
	const activityRef = useRef(); */

	return (
		<form className='add-time' onSubmit={submitHandler}>
			<div>
				<h6>Start Time:</h6>
				<input
					type='datetime-local'
					name='startDate'
					value={formData.startDate}
					onChange={dateChangeHandler}
					pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}'
					required
				/>
			</div>
			<div>
				<h6>End Time:</h6>
				<input
					type='datetime-local'
					value={formData.endDate}
					name='endDate'
					onChange={dateChangeHandler}
					pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}'
					required
				/>
			</div>
			<div>
				<h6>Activity:</h6>
				<select
					name='name'
					onChange={activityChangeHandler}
					required
					value={formData.name}>
					<option value='' disabled>
						--- select an activity ---
					</option>
					<option value='sleep'>Sleep</option>
					<option value='work'>Work</option>
					<option value='swim'>Swim</option>
					<option value='eat'>Eat</option>
					<option value='football'>Football</option>
				</select>
			</div>
			<hr />
			<div>
				<button type='submit' className='submit-btn'>
					Add Time
				</button>
			</div>
		</form>
	);
};

export default AddTime;

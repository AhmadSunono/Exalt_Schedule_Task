import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';

export interface Activity {
	name: string;
	startDate: Date ;
	endDate: Date;
}

const App = () => {
	const [activities, setActivities] = useState<Activity[]>([]);

	const addActivity = (activity: Activity) => {
		setActivities([...activities, activity]);
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Sidebar />
					<Content
						addActivity={addActivity}
						activities={activities}
					/>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

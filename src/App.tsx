import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					{loading ? (
						<h2>Loading</h2>
					) : (
						<>
							<h2>Potato</h2>
							<Header />
							<Sidebar />
							<Content />
						</>
					)}
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

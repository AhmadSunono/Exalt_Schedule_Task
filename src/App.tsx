import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Sidebar />
					<Content />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

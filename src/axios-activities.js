import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-dashboard-task-e9408-default-rtdb.firebaseio.com/'
});

export default instance;

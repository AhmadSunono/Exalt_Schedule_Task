import { NavLink } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<ul>
				<li>
					<NavLink to='/'>Home Page</NavLink>
				</li>
				<li>
					<NavLink to='/add'>Add New Time</NavLink>
				</li>
				<li>
					<NavLink to='/two'>Another Navigation Link</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;

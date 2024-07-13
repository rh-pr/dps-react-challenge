import dpsLogo from './assets/DPS.svg';
import './App.css';
import SearchFilter from './components/SearchFilter';
import SelectCity from './components/SelectCity';
import HighlightOld from './components/HighlightOld';
import Table from './components/Table';
import { useEffect, useState } from 'react';

interface User {
	id: number,
	firstName: string,
	lasstName: string,
	city: string,
	birthDay: string
}

interface OriginalData {
	[key: string]: any;
}

function App() {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then(res => res.json())
			.then(data => {
				const userData: OriginalData[] = data.users;
				const filteredUsersData: User[] = userData.map((user) => (
					{
						id: user.id,
						firstName: user.firstName,
						lasstName: user.lastName,
						city: user.address.city,
						birthDay: user.birthDate
					}
				))
				setUsers(filteredUsersData)
			})
			.catch(err => console.log(err))
	}, [])
	return (
		<>
			{console.log(users)};
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">

				<SearchFilter />
				<SelectCity />
				<HighlightOld />
				<Table />
			</div>
		</>
	);
}

export default App;

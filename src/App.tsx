import dpsLogo from './assets/DPS.svg';
import './App.css';
import SearchFilter from './components/SearchFilter';
import SelectCity from './components/SelectCity';
import HighlightOld from './components/HighlightOld';
import Table from './components/Table';
import { useEffect, useMemo, useState } from 'react';

export interface User {
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
	const [searchUser, setSearchUser] = useState<string>('')

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
							.replaceAll('-', '.').split('.')
							.map((el: string) => el.length === 1 ? el = '0' + el : el)
							.reverse()
							.join('.')
					}
				))
				setUsers(filteredUsersData)
			})
			.catch(err => console.log(err))
	}, [])

	const filteredUsers = useMemo<User[]>(() => {
		return users.filter((user: User) => (
			user.firstName.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase()) ||
			user.lasstName.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase())
		)).sort((a, b) =>
			a.firstName.localeCompare(b.firstName) || a.lasstName.localeCompare(b.lasstName)
		);
	}, [users, searchUser])

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">

				<SearchFilter setSearchUser={setSearchUser} />
				<SelectCity />
				<HighlightOld />
				<Table usersData={filteredUsers} />
			</div>
		</>
	);
}

export default App;

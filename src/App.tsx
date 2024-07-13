import dpsLogo from './assets/DPS.svg';
import './App.css';
import SearchFilter from './components/SearchFilter';
import SelectCity from './components/SelectCity';
import HighlightOld from './components/HighlightOld';
import Table from './components/Table';

function App() {
	return (
		<>
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

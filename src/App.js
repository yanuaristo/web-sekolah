import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer';
import TopBar from './components/topbar';
import Home from './pages/Home';
// import './App.css';

function App() {
	return(
		<Router>
		<TopBar />
		<Switch>
			<Route component={Home} />
		</Switch>
		<Footer />
		</Router>
	)
}

export default App;

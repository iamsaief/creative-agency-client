import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage/HomePage";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState();
	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage></HomePage>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;

import React from "react";
import { useEffect } from "react";
import { shallow, render, mount } from "enzyme";
import './style.css';

let Roster = () => {

	let routeBack = () => {
		// route to /teams
		window.location.href = "/teams";
	}

	let [teams, setTeams] = React.useState([]);

	let [persons, setPersons] = React.useState([]);

	// get the last of the route of the current page after the last slash
	let currentRoute = window.location.pathname.split("/").pop();

	// convert current route to num
	let currentRouteNum = parseInt(currentRoute);

	const url = `http://statsapi.mlb.com/api/v1/teams/${currentRouteNum}/roster?rosterType=active`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setTeams(json.roster);
				console.log(teams)
				// added in some error handling
				// create a for loop and iterate through teams array and output the fullName into a new array
				let fullNameArray = [];
				for (let i = 0; i < teams.length; i++) {
					setTeams(teams[i].person.fullName);
				}
				console.log("Person", fullNameArray);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	// take the part of the path before the second slash
	let currentRouteTwo = window.location.pathname.split("/")[2];
	// strip out '%20' from the currentRouteTwo
	let currentRouteTwoStrip = currentRouteTwo.replace(/%20/g, " ");

	console.log(currentRouteTwoStrip)

	return (
		<div className="toolbar">
			<div className="title-border">
				<h3 className="team-title">{currentRouteTwoStrip}</h3>
			</div>
			<br></br>
			<button className="back-button" onClick={routeBack}>Back To Teams</button>
			<ul className="list-data" data-testid="team-list">
				{teams.map((team) =>
					<li className="red-color" value={team.person.fullName} >
						{team.person.fullName}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Roster;

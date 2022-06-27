import React from "react";
import { useEffect } from "react";
import './style.css';

let Teams = () => {

let currentRoute = window.location.pathname;
console.log(currentRoute);

  let [teams, setTeams] = React.useState([]);

  const url = "https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1";

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTeams(json.teams);
      console.log("teams:", json);
      // added in some error handling
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
  }, []);

  return (
    <div className="toolbar">
		<h1>MLB Team Roster</h1>
		<br></br>
      <div className="flex-container">
        {teams.map((team) => (
          <button key={team.id} className="team-id" onClick={
			() => {
				window.location.href = `/roster/${team.name}/${team.id}`;
			}
		  }>
            {team.name}
          </button>
        ))}
      </div>
      <div className="displayedData"></div>
    </div>
  );
};

export default Teams;

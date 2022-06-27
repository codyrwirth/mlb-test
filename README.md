# React Interview

Fork this template from [codesandbox.io](https://codesandbox.io/s/react-interview-j63bl).

## Prompt

Please start development with the Teams.js component which has this prompt at the top:

We want this component to go get the teams from MLB's Stats API - GET to `https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1`
From there we want to display each team and the members of each team. To get the members of each team call the stats API with the team ID -
GET to `http://statsapi.mlb.com/api/v1/teams/<teamId>/roster?rosterType=active`

### Bonus

Add some styling to the component to make it more presentable or create one or two unit tests for the project.

--------------------------------------------------------------------------------------------------------------------------------------------
### Start / Test

`yarn add all`

`yarn start`

1) Navigate to the route `/teams` to get a rendered list of teams

2) And click on a team button or name, to render a list of all the players on the team and the team name

3) Unit tests were added, run `yarn test` to run tests to ensure that components are rendering properly


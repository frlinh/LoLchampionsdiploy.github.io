-- Creating table for gameanalysis database
CREATE TABLE summonerWinRate (
	summonerName VARCHAR(40) NOT NULL
	, summonerID VARCHAR(100) NOT NULL
	, leaguePoints INT
	, wins INT
	, losses INT
	, total_matches INT
	, win_percentage NUMERIC(5,2)
	, PRIMARY KEY (summonerID)
	, UNIQUE (summonerName)
);

-- Create master-league summoner table with league points, win/loss numbers, total matches, and win percentage
SELECT "summonerName", "summonerID", "leaguePoints", "wins", "losses"
	, "wins"+"losses" AS total_matches
	, CAST(ROUND(("wins")*100.0/("wins"+"losses"),2)as decimal(5,2))as win_percentage
FROM "master-league-ranked-5x5"
ORDER BY win_percentage DESC

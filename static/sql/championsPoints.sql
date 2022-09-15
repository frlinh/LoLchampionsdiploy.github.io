CREATE TABLE championPoints (
	championId VARCHAR(40) NOT NULL
	, championName VARCHAR(100) NOT NULL
	, role1 INT
	, role2 INT
	, difficulty INT
	, summonersPlaying INT
	, total_championPoints NUMERIC(5,2)
	, PRIMARY KEY (championId)
	, UNIQUE (championName)
);


-- Create table with Champions, champion points, and difficulty
SELECT m."championId"
	, c."id" AS championName
	, c."tag1" AS Role1
	, c."tag2" AS Role2
	, c."difficulty"
	, COUNT(m."summonerId") AS number_of_summoners_playing
	, SUM(m."championPoints") AS total_championPoints

FROM "champion-mastery" m
LEFT JOIN "champions" c
ON (CAST(m."championId" as Integer) = c."key")
GROUP BY m."championId", c."id", m."championLevel"

ORDER BY total_championPoints DESC

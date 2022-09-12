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

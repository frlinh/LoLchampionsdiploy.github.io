-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/sGfY4J
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "champion-mastery" (
    "summonerId" varchar   NOT NULL,
    "championId" varchar   NOT NULL,
    "championLevel" int   NOT NULL,
    "championPoints" int   NOT NULL,
    "lastPlayTime" float   NOT NULL,
    "championPointsSinceLastLevel" int   NOT NULL,
    "championPointsUntilNextLevel" int   NOT NULL,
    "tokensEarned" int   NOT NULL,
    CONSTRAINT "pk_champion-mastery" PRIMARY KEY (
        "summonerId"
     )
);

CREATE TABLE "total-champion-mastery-score" (
    "summonerID" varchar   NOT NULL,
    "masteryScore" float   NOT NULL,
    CONSTRAINT "pk_total-champion-mastery-score" PRIMARY KEY (
        "summonerID"
     )
);

CREATE TABLE "grandmaster-league-ranked5x5" (
    "summonerID" varchar   NOT NULL,
    "summonerName" varchar   NOT NULL,
    "leaguePoints" int   NOT NULL,
    "rank" varchar   NOT NULL,
    "wins" int   NOT NULL,
    "losses" int   NOT NULL,
    "veteran" boolean   NOT NULL,
    "inactive" boolean   NOT NULL,
    "freshBlood" boolean   NOT NULL,
    CONSTRAINT "pk_grandmaster-league-ranked5x5" PRIMARY KEY (
        "summonerID"
     )
);

CREATE TABLE "master-league-ranked-5x5" (
    "summonerID" varchar   NOT NULL,
    "summonerName" varchar   NOT NULL,
    "leaguePoints" int   NOT NULL,
    "rank" varchar   NOT NULL,
    "wins" int   NOT NULL,
    "losses" int   NOT NULL,
    "veteran" boolean   NOT NULL,
    "inactive" boolean   NOT NULL,
    "freshBlood" boolean   NOT NULL,
    CONSTRAINT "pk_master-league-ranked-5x5" PRIMARY KEY (
        "summonerID"
     )
);

CREATE TABLE "challenger-league-ranked-5x5" (
    "summonerID" varchar   NOT NULL,
    "summonerName" varchar   NOT NULL,
    "leaguePoints" int   NOT NULL,
    "rank" varchar   NOT NULL,
    "wins" int   NOT NULL,
    "losses" int   NOT NULL,
    "veteran" boolean   NOT NULL,
    "inactive" boolean   NOT NULL,
    "freshBlood" boolean   NOT NULL,
    CONSTRAINT "pk_challenger-league-ranked-5x5" PRIMARY KEY (
        "summonerID"
     )
);

CREATE TABLE "diamond-league-ranked5x5" (
    "summonerId" varchar   NOT NULL,
    "summonerName" varchar   NOT NULL,
    "queueType" varchar   NOT NULL,
	"leagueId" varchar   NOT NULL,
    "leaguePoints" int   NOT NULL,
	"tier" varchar,
    "rank" varchar,
    "wins" int   NOT NULL,
    "losses" int   NOT NULL,
    "veteran" boolean   NOT NULL,
    "inactive" boolean   NOT NULL,
    "freshBlood" boolean   NOT NULL,
    CONSTRAINT "pk_diamond-league-ranked5x5" PRIMARY KEY (
        "summonerId"
     )
);



CREATE TABLE "champions" (
    "id" varchar   NOT NULL,
    "key" int   NOT NULL,
    "attack" int   NOT NULL,
    "defense" int   NOT NULL,
    "magic" int   NOT NULL,
    "difficulty" int   NOT NULL,
    "tag1" text   NOT NULL,
    "tag2" text   NOT NULL,
    "hp" double precision   NOT NULL,
    "hpperlevel" double precision   NOT NULL,
    "mp" double precision   NOT NULL,
    "mpperlevel" double precision   NOT NULL,
    "movespeed" int   NOT NULL,
    "armor" double precision   NOT NULL,
    "armorperlevel" double precision   NOT NULL,
    "spellblock" double precision   NOT NULL,
    "spellblockperlevel" double precision   NOT NULL,
    "attackrange" int   NOT NULL,
    "hpregen" double precision   NOT NULL,
    "hpregenperlevel" double precision   NOT NULL,
    "mpregen" double precision   NOT NULL,
    "mpregenperlevel" double precision   NOT NULL,
    "crit" int   NOT NULL,
    "critperlevel" int   NOT NULL,
    "attackdamage" double precision   NOT NULL,
    "attackdamageperlevel" double precision   NOT NULL,
    "attackspeedperlevel" double precision   NOT NULL,
    "attackspeed" double precision   NOT NULL,
    CONSTRAINT "pk_champions" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "summoners" (
    "summonerId" varchar   NOT NULL,
    CONSTRAINT "pk_summoners" PRIMARY KEY (
        "summonerId"
     )
);

SELECT "summonerName", "leaguePoints", "rank", "wins", "losses", "inactive" FROM
(SELECT * FROM "diamond-league-ranked5x5"  
UNION ALL 
SELECT * FROM "master-league-ranked5x5"
UNION ALL
SELECT * FROM "grandmaster-league-ranked5x5"
UNION ALL
SELECT * FROM "challenger-league-ranked5x5" ) X 
GROUP BY summonerName 
ORDER BY 1;
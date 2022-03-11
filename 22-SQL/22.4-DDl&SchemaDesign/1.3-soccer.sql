-- Schema design
CREATE TABLE teams(
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE,
  city TEXT
)

CREATE TABLE players(
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE,
  current_id INTEGER REFERENCES teams(id)
)

CREATE TABLE referes(
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE
)

CREATE TABLE season(
  id SERIAL PRIMARY KEY,
  start_date DATE,
  end_date DATE
)

CREATE TABLE matches(
  id SERIAL PRIMARY KEY,
  home_team_id INTEGER REFERENCES teams(id),
  opponent_team_id INTEGER REFERENCES teams(id),
  season_id INTEGER REFERENCES seasons(id),
  referee_1_id INTEGER REFERENCES referee(id),
  referee_2_id INTEGER REFERENCES referee(id),
  referee_3_id INTEGER REFERENCES referee(id),
)

CREATE TABLE results(
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id),
  match_id INTEGER REFERENCES matches(id),
  result INTEGER
)

CREATE TABLE goals(
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players(id),
  match_id INTEGER REFERENCES matches(id),
)

CREATE TABLE lineups(
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players(id),
  match_id INTEGER REFERENCES matches(id),
  team_id INTEGER REFERENCES teams(id),
)

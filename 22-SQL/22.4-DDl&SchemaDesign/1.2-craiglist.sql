-- Schema design

CREATE TABLE locations(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    pref_location INTEGER REFERENCES locations(id)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE
);

CREATE TABLE regions(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    cat_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
    title TEXT,
    descrption TEXT,
    creator INTEGER REFERENCES users(id) ON DELETE SET NULL,
    location INTEGER REFERENCES locations(id) ON DELETE SET NULL,
    region INTEGER REFERENCES regions(id) ON DELETE SET NULL
);


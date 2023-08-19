DROP DATABASE IF EXISTS avengers_dev;
CREATE DATABASE avengers_dev;

\c avengers_dev;

CREATE TABLE avengers (
    id SERIAL PRIMARY KEY,
    vigilante_title TEXT NOT NULL,
    abilities TEXT,
    birthplace TEXT,
    is_ally BOOLEAN NOT NULL DEFAULT FALSE,
    power_scale INTEGER,
    alter_ego TEXT,
    issue_appearance INTEGER,
    file_photo TEXT
);

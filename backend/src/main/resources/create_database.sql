CREATE TABLE services
(
    id          SERIAL PRIMARY KEY NOT NULL,
    name        VARCHAR            NOT NULL,
    from_amount NUMERIC            NOT NULL,
    to_amount   NUMERIC
);
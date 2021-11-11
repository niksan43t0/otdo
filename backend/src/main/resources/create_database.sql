CREATE TABLE services
(
    id          SERIAL PRIMARY KEY NOT NULL,
    name        VARCHAR            NOT NULL,
    from_amount NUMERIC            NOT NULL,
    to_amount   NUMERIC,
    del_flag    BOOLEAN            NOT NULL DEFAULT FALSE
);

CREATE TABLE posts
(
    id               SERIAL PRIMARY KEY NOT NULL,
    text             VARCHAR            NOT NULL,
    background_color VARCHAR            NOT NULL,
    img_src          VARCHAR            NOT NULL,
    del_flag         BOOLEAN            NOT NULL DEFAULT FALSE
);
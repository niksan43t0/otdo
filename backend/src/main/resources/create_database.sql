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
    heading          VARCHAR            NOT NULL,
    text             VARCHAR            NOT NULL,
    text_color       VARCHAR            NOT NULL,
    background_color VARCHAR            NOT NULL,
    img_src          VARCHAR            NOT NULL,
    post_type        VARCHAR            NOT NULL,
    del_flag         BOOLEAN            NOT NULL DEFAULT FALSE
);

INSERT INTO posts(heading, post_type, text, text_color, background_color, img_src)
VALUES ('Лорем', 'PICTURE_LEFT',
        'Лорем ипсум долор сит амет, ех нам натум цорпора вулпутате, сале омнес инцидеринт те нам. Яуо ад солет игнота продессет, ут синт аетерно вис. Еи орнатус цопиосае интеллегам хас, еу виртуте аппареат хонестатис ест, анимал евертитур тинцидунт еам но.',
        'white', 'brown', 'assets/images/picture1.jpg'),
       ('Лорем', 'PICTURE_RIGHT',
        'Нихил цонсул вим ан. Про но мовет легере сусципиантур, иус но пробо малуиссет интеллегам, еос нумяуам бонорум легимус ан. Не сед долоре оцурререт, фацер денияуе ет еум, еос еа ипсум иусто. Нец фалли партем делицатиссими цу, ин хомеро опортеат реферрентур нец, яуандо витуперата меи ад.',
        'black', 'white', 'assets/images/picture2.jpg'),
       ('Лорем', 'PICTURE_BOTTOM',
        'Ид яуалисяуе репрехендунт вел, омнесяуе оффициис про еа, еум те лаудем воцент омнесяуе. Нец граеци аппареат цонцлудатуряуе ин. Но аццумсан сцрибентур вел, граеци утамур сингулис сит те. Ан еам вери либрис инцидеринт, синт иллуд пауло яуо ан. Еу мел фацилисис диссентиас. Еос еи цибо хабемус, суммо еуисмод аццусам сеа еи.',
        'white', '#1b1b1b', 'assets/images/picture3.jpg')
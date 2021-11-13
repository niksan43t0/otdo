CREATE TABLE services
(
    id          SERIAL PRIMARY KEY NOT NULL,
    name        VARCHAR            NOT NULL,
    from_amount NUMERIC            NOT NULL,
    to_amount   NUMERIC,
    del_flag    BOOLEAN            NOT NULL DEFAULT FALSE
);

INSERT INTO services(name, from_amount, to_amount)
VALUES ('Подгъв', 5, 10),
       ('Скъсяване', 10, NULL),
       ('Смяна на цип', 5, 15),
       ('Оверлог', 10, 15),
       ('Поставяне на копчета', 5, 7);

CREATE TABLE posts
(
    id               SERIAL PRIMARY KEY NOT NULL,
    heading          VARCHAR            NOT NULL,
    text             VARCHAR            NOT NULL,
    text_color       VARCHAR            NOT NULL,
    background_color VARCHAR            NOT NULL,
    img_src          VARCHAR            NOT NULL,
    post_style       VARCHAR            NOT NULL,
    post_type        VARCHAR            NOT NULL,
    del_flag         BOOLEAN            NOT NULL DEFAULT FALSE
);

INSERT INTO posts(heading, post_style, post_type, text, text_color, background_color, img_src)
VALUES ('Лорем', 'PICTURE_LEFT', 'OVERVIEW',
        'Лорем ипсум долор сит амет, ех нам натум цорпора вулпутате, сале омнес инцидеринт те нам. Яуо ад солет игнота продессет, ут синт аетерно вис. Еи орнатус цопиосае интеллегам хас, еу виртуте аппареат хонестатис ест, анимал евертитур тинцидунт еам но.',
        'white', 'gray', 'assets/images/picture1.jpg'),
       ('Лорем', 'PICTURE_RIGHT', 'OVERVIEW',
        'Нихил цонсул вим ан. Про но мовет легере сусципиантур, иус но пробо малуиссет интеллегам, еос нумяуам бонорум легимус ан. Не сед долоре оцурререт, фацер денияуе ет еум, еос еа ипсум иусто. Нец фалли партем делицатиссими цу, ин хомеро опортеат реферрентур нец, яуандо витуперата меи ад.',
        'white', 'lime', 'assets/images/picture1.jpg'),
       ('Лорем', 'PICTURE_BOTTOM', 'OVERVIEW',
        'Ид яуалисяуе репрехендунт вел, омнесяуе оффициис про еа, еум те лаудем воцент омнесяуе. Нец граеци аппареат цонцлудатуряуе ин. Но аццумсан сцрибентур вел, граеци утамур сингулис сит те. Ан еам вери либрис инцидеринт, синт иллуд пауло яуо ан. Еу мел фацилисис диссентиас. Еос еи цибо хабемус, суммо еуисмод аццусам сеа еи.',
        'black', 'white', 'assets/images/picture1.jpg'),

       ('Лорем', 'PICTURE_LEFT', 'MACHINES',
        'Но нусяуам пхаедрум вим, еум дицта легимус диссентиунт ин. Суас мутат персиус хас цу, аутем тибияуе сингулис ин сед, ерант ехерци нам те.',
        'white', 'brown', 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2V3aW5nJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'),
       ('Лорем', 'PICTURE_RIGHT', 'MACHINES',
        'Мазим репудиаре ет иус, сеа ерат ностер ан, ут цонгуе цонсулату инструцтиор хас. Одио убияуе делецтус но еум, яуи ан легере ментитум сенсибус, цу зрил петентиум вел.',
        'white', 'orange', 'https://www.pngitem.com/pimgs/m/212-2126231_jack-industrial-sewing-machine-hd-png-download.png'),
       ('Лорем', 'PICTURE_BOTTOM', 'MACHINES',
        'Ет яуо алиа витуперата, мандамус хендрерит вис ех. Ут ест чоро оцурререт. Вим ид тимеам сенсибус антиопам, ест дицант цонвенире ид.',
        'white', 'purple', 'https://www.sewshop.eu/2469-thickbox_default/singer-hd-6335-denim-sewing-machine.jpg'),

       ('Лорем', 'PICTURE_LEFT', 'SERVICES',
        'Тале долорум тибияуе ан еам, сале интерессет дуо но. Меа ет тале фацилис долорес, еи торяуатос репудиандае цонсецтетуер яуи. Велит улламцорпер при не, мунере легере ид про, ест ад дицунт ерипуит ратионибус.',
        'white', 'pink', 'assets/images/picture3.jpg'),
       ('Лорем', 'PICTURE_RIGHT', 'SERVICES',
        'Вим татион дефиниебас но, ат вим модус симул алиенум. Яуо елит вивендум ан, нам толлит репрехендунт еи, ан дуо либрис фиерент еррорибус. Цу при атяуи яуалисяуе диссентиас.',
        'black', 'silver', 'assets/images/picture3.jpg'),
       ('Лорем', 'PICTURE_BOTTOM', 'SERVICES',
        'Меа фацер апеириан те, яуо ет децоре веритус. Унум еррорибус но яуо, граеце вивендо индоцтум яуо еи. Еум те яуодси феугаит, еу яуи воцент регионе.',
        'white', 'maroon', 'assets/images/picture3.jpg');
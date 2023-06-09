ALTER SEQUENCE users_id_seq RESTART WITH 1;
INSERT INTO users (user_name, email, password, avatar, role)
VALUES
  ('User 1', 'user1@example.com', 'password1', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  ('User 2', 'user2@example.com', 'password2', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  ('User 3', 'user3@example.com', 'password3', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  ('User 20', 'user20@example.com', 'password20', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER');

ALTER SEQUENCE restaurant_id_seq RESTART WITH 1;
  INSERT INTO restaurant (name, address, photo_url, active_time, is_draft)
VALUES
('ハノイの食堂', 'ハノイ市中心部、ホーンキエム地区', 'https://example.com/restaurant1.jpg', '11:00 - 22:00', false),
('フーコックレストラン', 'ホーチミン市、ドンコイ通り', 'https://example.com/restaurant2.jpg', '10:30 - 21:00', false),
('ダナン焼きそば', 'ダナン市、マイケービーチ', 'https://example.com/restaurant3.jpg', '12:00 - 23:00', false),
('ベトナム料理レストラン', 'ハノイ市、オールドクォーター地区', 'https://example.com/restaurant4.jpg', '10:00 - 22:30', false),
('サイゴンバー＆レストラン', 'ホーチミン市、ディストリクト1', 'https://example.com/restaurant5.jpg', '17:00 - 02:00', false),
('ハロンベイシーフードレストラン', 'クアンニン省、ハロンベイ', 'https://example.com/restaurant6.jpg', '09:00 - 21:30', false),
('フーコックフードコート', 'ホーチミン市、フーコック地区', 'https://example.com/restaurant7.jpg', '10:00 - 22:00', false),
('ベトナム伝統料理レストラン', 'ハノイ市、フランス通り', 'https://example.com/restaurant8.jpg', '11:30 - 23:00', false),
('ダナンストリートフード', 'ダナン市、ハイヴァン区', 'https://example.com/restaurant9.jpg', '18:00 - 02:00', false),
('ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant10.jpg', '16:00 - 23:30', false),
('ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant11.jpg', '16:00 - 23:30', false),
('ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant12.jpg', '16:00 - 23:30', false),
('ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant13.jpg', '16:00 - 23:30', false);

ALTER SEQUENCE food_id_seq RESTART WITH 1;
INSERT INTO food (name, photo_url, price, restaurant_id, is_draft, is_food)
VALUES
('ラーメン', 'https://example.com/food1.jpg', 50000, 1, false, true),
('寿司', 'https://example.com/food2.jpg', 30000, 1, false, true),
('うどん', 'https://example.com/food3.jpg', 45000, 1, false, true),
('お好み焼き', 'https://example.com/food4.jpg', 40000, 2, false, true),
('たこ焼き', 'https://example.com/food5.jpg', 25000, 2, false, true),
('天ぷら', 'https://example.com/food6.jpg', 35000, 3, false, true),
('お寿司', 'https://example.com/food7.jpg', 28000, 3, false, true),
('そば', 'https://example.com/food8.jpg', 32000, 4, false, true),
('おでん', 'https://example.com/food9.jpg', 22000, 4, false, true),
('焼き鳥', 'https://example.com/food10.jpg', 18000, 4, false, true),
('とんかつ', 'https://example.com/food11.jpg', 38000, 5, false, true),
('おすし', 'https://example.com/food12.jpg', 29000, 5, false, true),
('もんじゃ焼き', 'https://example.com/food13.jpg', 42000, 6, false, true),
('鍋', 'https://example.com/food14.jpg', 55000, 6, false, true),
('すき焼き', 'https://example.com/food15.jpg', 48000, 6, false, true),
('おばんざい', 'https://example.com/food16.jpg', 25000, 7, false, true),
('押し寿司', 'https://example.com/food17.jpg', 32000, 7, false, true),
('ラーメン', 'https://example.com/food18.jpg', 40000, 8, false, true),
('おでん', 'https://example.com/food19.jpg', 28000, 8, false, true),
('焼肉', 'https://example.com/food20.jpg', 55000, 9, false, true),
('天ぷら', 'https://example.com/food21.jpg', 46000, 9, false, true),
('お好み焼き', 'https://example.com/food22.jpg', 38000, 10, false, true),
('もつ鍋', 'https://example.com/food23.jpg', 52000, 10, false, true),
('寿司', 'https://example.com/food24.jpg', 35000, 11, false, true),
('うどん', 'https://example.com/food25.jpg', 28000, 11, false, true),
('そば', 'https://example.com/food26.jpg', 32000, 11, false, true),
('煮込みうどん', 'https://example.com/food27.jpg', 40000, 12, false, true),
('海鮮丼', 'https://example.com/food28.jpg', 45000, 12, false, true),
('おしるこ', 'https://example.com/food29.jpg', 18000, 13, false, true),
('もち', 'https://example.com/food30.jpg', 22000, 13, false, true);

ALTER SEQUENCE review_id_seq RESTART WITH 1;
INSERT INTO review (rate, content, food_id, restaurant_id, user_id)
VALUES
(5, '美味しいラーメンでした。また来たいです。', 1, 1, 1),
(4, 'お寿司の新鮮さに感動しました。', 2, 1, 2),
(3, 'うどんがちょっと固かったです。', 3, 1, 3),
(5, 'お好み焼きは絶品でした。', 4, 2, 4),
(4, 'たこ焼きの味が懐かしくて美味しかったです。', 5, 2, 4),
(5, '天ぷらのサクサク感が最高です。', 6, 3, 1),
(3, 'お寿司は普通でした。', 7, 3, 2),
(4, 'そばは風味が豊かで美味しかったです。', 8, 4, 3),
(5, 'おでんの具材がたくさん入っていて満足です。', 9, 4, 4),
(3, '焼き鳥の味付けが少し濃すぎました。', 10, 4, 1),
(5, 'とんかつはジューシーで美味しかったです。', 11, 5, 1),
(4, 'おすしのネタの新鮮さに感動しました。', 12, 5, 2),
(4, 'もんじゃ焼きの焼き加減がちょうど良かったです。', 13, 6, 3),
(5, '鍋のスープが絶品でした。', 14, 6, 4),
(3, 'すき焼きのお肉が少し硬かったです。', 15, 6, 3),
(5, 'おばんざいの種類が豊富で楽しめました。', 16, 7, 1),
(4, '押し寿司の盛り付けが綺麗でした。', 17, 7, 2),
(5, 'ラーメンのスープが濃厚で美味しかったです。', 18, 8, 3),
(3, 'おでんの具材の種類が少なかったです。', 19, 8, 4),
(4, '焼肉のお肉の質が良かったです。', 20, 9, 2),
(5, 'このラーメンは絶品です。スープの味付けが絶妙で、具材も新鮮です。', 1, 1, 1),
(4, '寿司のネタが新鮮で美味しいです。特にトロは絶品です。', 2, 1, 2),
(4, 'このうどんはコシがあり、出汁の味わいも良いです。', 3, 1, 3),
(3, 'お好み焼きは美味しいですが、もう少し焼き加減が欲しいです。', 4, 2, 4),
(4, 'たこ焼きの生地がふわふわで、たこも柔らかくて美味しいです。', 5, 2, 4),
(5, '天ぷらはサクサクで揚げたてが最高です。', 6, 3, 1),
(3, 'お寿司のネタのバリエーションが少ないですが、味は良いです。', 7, 3, 2),
(4, 'そばの風味が良く、つるつるとした食感が楽しめます。', 8, 4, 3),
(3, 'おでんの具材の種類が少ないですが、味は普通です。', 9, 4, 4),
(4, '焼き鳥はジューシーで、タレの味が良いです。', 10, 4, 1);



DELETE FROM review;
DELETE FROM food;
DELETE FROM restaurant;
DELETE FROM users;


INSERT INTO users (id,user_name, email, password, avatar, role)
VALUES
  (1,'Viet', 'user1@example.com', 'password1', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (2,'QAnh', 'user2@example.com', 'password2', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (3,'Kien', 'user3@example.com', 'password3', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (4,'vuong', 'user20@example.com', 'password20', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER');


INSERT INTO restaurant (id, name, address, photo_url, active_time, is_draft)
VALUES
(1,'ハノイの食堂', 'ハノイ市中心部、ホーンキエム地区', 'https://example.com/restaurant1.jpg', '11:00 - 22:00', false),
(2,'フーコックレストラン', 'ホーチミン市、ドンコイ通り', 'https://example.com/restaurant2.jpg', '10:30 - 21:00', false),
(3,'ダナン焼きそば', 'ダナン市、マイケービーチ', 'https://example.com/restaurant3.jpg', '12:00 - 23:00', false),
(4,'ベトナム料理レストラン', 'ハノイ市、オールドクォーター地区', 'https://example.com/restaurant4.jpg', '10:00 - 22:30', false),
(5,'サイゴンバー＆レストラン', 'ホーチミン市、ディストリクト1', 'https://example.com/restaurant5.jpg', '17:00 - 02:00', false),
(6,'ハロンベイシーフードレストラン', 'クアンニン省、ハロンベイ', 'https://example.com/restaurant6.jpg', '09:00 - 21:30', false),
(7,'フーコックフードコート', 'ホーチミン市、フーコック地区', 'https://example.com/restaurant7.jpg', '10:00 - 22:00', false),
(8,'Vietストラン', 'ハノイ市、フランス通り', 'https://example.com/restaurant8.jpg', '11:30 - 23:00', false),
(9,'ダナンストリートフード', 'ダナン市、ハイヴァン区', 'https://example.com/restaurant9.jpg', '18:00 - 02:00', false),
(10,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant10.jpg', '16:00 - 23:30', false),
(11,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant11.jpg', '16:00 - 23:30', false),
(12,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant12.jpg', '16:00 - 23:30', false),
(13,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://example.com/restaurant13.jpg', '16:00 - 23:30', false);


INSERT INTO food (id,name, photo_url, price, restaurant_id, is_draft, is_food)
VALUES
(1,'ラーメン', 'https://example.com/food1.jpg', 50000, 1, false, true),
(2,'寿司', 'https://example.com/food2.jpg', 30000, 1, false, true),
(3,'うどん', 'https://example.com/food3.jpg', 45000, 1, false, true),
(4,'お好み焼き', 'https://example.com/food4.jpg', 40000, 2, false, true),
(5,'たこ焼き', 'https://example.com/food5.jpg', 25000, 2, false, true),
(6,'天ぷら', 'https://example.com/food6.jpg', 35000, 3, false, true),
(7,'お寿司', 'https://example.com/food7.jpg', 28000, 3, false, true),
(8,'そば', 'https://example.com/food8.jpg', 32000, 4, false, true),
(9,'おでん', 'https://example.com/food9.jpg', 22000, 4, false, true),
(10,'焼き鳥', 'https://example.com/food10.jpg', 18000, 4, false, true),
(11,'とんかつ', 'https://example.com/food11.jpg', 38000, 5, false, true),
(12,'おすし', 'https://example.com/food12.jpg', 29000, 5, false, true),
(13,'もんじゃ焼き', 'https://example.com/food13.jpg', 42000, 6, false, true),
(14,'鍋', 'https://example.com/food14.jpg', 55000, 6, false, true),
(15,'すき焼き', 'https://example.com/food15.jpg', 48000, 6, false, true),
(16,'おばんざい', 'https://example.com/food16.jpg', 25000, 7, false, true),
(17,'押し寿司', 'https://example.com/food17.jpg', 32000, 7, false, true),
(18,'ラーメン', 'https://example.com/food18.jpg', 40000, 8, false, true),
(19,'おでん', 'https://example.com/food19.jpg', 28000, 8, false, true),
(20,'焼肉', 'https://example.com/food20.jpg', 55000, 9, false, true),
(21,'天ぷら', 'https://example.com/food21.jpg', 46000, 9, false, true),
(22,'お好み焼き', 'https://example.com/food22.jpg', 38000, 10, false, true),
(23,'もつ鍋', 'https://example.com/food23.jpg', 52000, 10, false, true),
(24,'寿司', 'https://example.com/food24.jpg', 35000, 11, false, true),
(25,'うどん', 'https://example.com/food25.jpg', 28000, 11, false, true),
(26,'そば', 'https://example.com/food26.jpg', 32000, 11, false, true),
(27,'煮込みうどん', 'https://example.com/food27.jpg', 40000, 12, false, true),
(28,'海鮮丼', 'https://example.com/food28.jpg', 45000, 12, false, true),
(29,'おしるこ', 'https://example.com/food29.jpg', 18000, 13, false, true),
(30,'もち', 'https://example.com/food30.jpg', 22000, 13, false, true);


INSERT INTO review (id,rate, content, food_id, restaurant_id, user_id)
VALUES
(1,5, '美味しいラーメンでした。また来たいです。', 1, 1, 1),
(2,4, 'お寿司の新鮮さに感動しました。', 2, 1, 2),
(3,3, 'うどんがちょっと固かったです。', 3, 1, 3),
(4,5, 'お好み焼きは絶品でした。', 4, 2, 4),
(5,4, 'たこ焼きの味が懐かしくて美味しかったです。', 5, 2, 4),
(6,5, '天ぷらのサクサク感が最高です。', 6, 3, 1),
(7,3, 'お寿司は普通でした。', 7, 3, 2),
(8,4, 'そばは風味が豊かで美味しかったです。', 8, 4, 3),
(9,5, 'おでんの具材がたくさん入っていて満足です。', 9, 4, 4),
(10,3, '焼き鳥の味付けが少し濃すぎました。', 10, 4, 1),
(11,5, 'とんかつはジューシーで美味しかったです。', 11, 5, 1),
(12,4, 'おすしのネタの新鮮さに感動しました。', 12, 5, 2),
(13,4, 'もんじゃ焼きの焼き加減がちょうど良かったです。', 13, 6, 3),
(14,5, '鍋のスープが絶品でした。', 14, 6, 4),
(15,3, 'すき焼きのお肉が少し硬かったです。', 15, 6, 3),
(16,5, 'おばんざいの種類が豊富で楽しめました。', 16, 7, 1),
(17,4, '押し寿司の盛り付けが綺麗でした。', 17, 7, 2),
(18,5, 'ラーメンのスープが濃厚で美味しかったです。', 18, 8, 3),
(19,3, 'おでんの具材の種類が少なかったです。', 19, 8, 4),
(20,4, '焼肉のお肉の質が良かったです。', 20, 9, 2),
(21,5, 'このラーメンは絶品です。スープの味付けが絶妙で、具材も新鮮です。', 1, 1, 1),
(22,4, '寿司のネタが新鮮で美味しいです。特にトロは絶品です。', 2, 1, 2),
(23,4, 'このうどんはコシがあり、出汁の味わいも良いです。', 3, 1, 3),
(24,3, 'お好み焼きは美味しいですが、もう少し焼き加減が欲しいです。', 4, 2, 4),
(25,4, 'たこ焼きの生地がふわふわで、たこも柔らかくて美味しいです。', 5, 2, 4),
(26,5, '天ぷらはサクサクで揚げたてが最高です。', 6, 3, 1),
(27,3, 'お寿司のネタのバリエーションが少ないですが、味は良いです。', 7, 3, 2),
(28,4, 'そばの風味が良く、つるつるとした食感が楽しめます。', 8, 4, 3),
(29,3, 'おでんの具材の種類が少ないですが、味は普通です。', 9, 4, 4),
(30,4, '焼き鳥はジューシーで、タレの味が良いです。', 10, 4, 1);
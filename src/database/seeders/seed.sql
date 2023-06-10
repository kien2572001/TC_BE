


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
(1,'ハノイの食堂', 'ハノイ市中心部、ホーンキエム地区', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '11:00 - 22:00', false),
(2,'フーコックレストラン', 'ホーチミン市、ドンコイ通り', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '10:30 - 21:00', false),
(3,'ダナン焼きそば', 'ダナン市、マイケービーチ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXMg', '12:00 - 23:00', false),
(4,'ベトナム料理レストラン', 'ハノイ市、オールドクォーター地区', 'hhttps://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '10:00 - 22:30', false),
(5,'サイゴンバー＆レストラン', 'ホーチミン市、ディストリクト1', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '17:00 - 02:00', false),
(6,'ハロンベイシーフードレストラン', 'クアンニン省、ハロンベイ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '09:00 - 21:30', false),
(7,'フーコックフードコート', 'ホーチミン市、フーコック地区', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '10:00 - 22:00', false),
(8,'Vietストラン', 'ハノイ市、フランス通り', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '11:30 - 23:00', false),
(9,'ダナンストリートフード', 'ダナン市、ハイヴァン区', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '18:00 - 02:00', false),
(10,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '16:00 - 23:30', false),
(11,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '16:00 - 23:30', false),
(12,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '16:00 - 23:30', false),
(13,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR1vvkJjuWFmPg3T0WCJDUebTMQnfUmnNdoZTHhiaKA2tR0n-I2SP02PkXM', '16:00 - 23:30', false);


INSERT INTO food (id, name, photo_url, price, restaurant_id, is_draft, is_food)
VALUES
(1, 'ラーメン', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 50000, 1, false, true),
(2, '寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 1, false, true),
(3, 'うどん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 45000, 1, false, true),
(4, 'お好み焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 2, false, true),
(5, 'たこ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 25000, 2, false, true),
(6, '天ぷら', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 35000, 3, false, true),
(7, 'お寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 28000, 3, false, true),
(8, 'そば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 32000, 4, false, true),
(9, 'おでん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 22000, 4, false, true),
(10, '焼き鳥', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 18000, 4, false, true),
(11, 'とんかつ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 38000, 5, false, true),
(12, 'おすし', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 29000, 5, false, true),
(13, 'もんじゃ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 42000, 6, false, true),
(14, '鍋', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 55000, 6, false, true),
(15, 'すき焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 48000, 6, false, true),
(16, 'おばんざい', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 25000, 7, false, true),
(17, '押し寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 32000, 7, false, true),
(18, 'ラーメン', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 8, false, true),
(19, 'おでん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 28000, 8, false, true),
(20, '焼肉', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 55000, 9, false, true),
(21, '天ぷら', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 46000, 9, false, true),
(22, 'お好み焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 38000, 10, false, true),
(23, 'もつ鍋', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 42000, 10, false, true),
(24, '寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 32000, 11, false, true),
(25, '焼き魚', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 38000, 11, false, true),
(26, 'そば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 32000, 11, false, true),
(27, '煮込みうどん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 12, false, true),
(28, '海鮮丼', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 45000, 12, false, true),
(29, 'おしるこ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 18000, 13, false, true),
(30, 'もち', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 22000, 13, false, true);

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
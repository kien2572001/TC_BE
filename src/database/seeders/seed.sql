


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
(1,'ハノイの食堂', 'ハノイ市中心部、ホーンキエム地区', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '11:00 - 22:00', false),
(2,'フーコックレストラン', 'ホーチミン市、ドンコイ通り', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '10:30 - 21:00', false),
(3,'ダナン焼きそば', 'ダナン市、マイケービーチ', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQg', '12:00 - 23:00', false),
(4,'ベトナム料理レストラン', 'ハノイ市、オールドクォーター地区', 'hhttps://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '10:00 - 22:30', false),
(5,'サイゴンバー＆レストラン', 'ホーチミン市、ディストリクト1', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '17:00 - 02:00', false),
(6,'ハロンベイシーフードレストラン', 'クアンニン省、ハロンベイ', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '09:00 - 21:30', false),
(7,'フーコックフードコート', 'ホーチミン市、フーコック地区', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '10:00 - 22:00', false),
(8,'Vietストラン', 'ハノイ市、フランス通り', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '11:30 - 23:00', false),
(9,'ダナンストリートフード', 'ダナン市、ハイヴァン区', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '18:00 - 02:00', false),
(10,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '16:00 - 23:30', false),
(11,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '16:00 - 23:30', false),
(12,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '16:00 - 23:30', false),
(13,'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2021-08-20-611fc4cd9d52b.png?fbclid=IwAR1_TrWphC__T3vWXwiME5T2hX0R8zI8XErzpXUvd1209NMBK4oOf7rDreQ', '16:00 - 23:30', false);


INSERT INTO food (id, name, photo_url, price, restaurant_id, is_draft, is_food, description)
VALUES
(1, 'ラーメン', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 50000, 1, false, true, '日本の伝統的な麺料理です。スープと麺、具材が特徴で、様々なバリエーションがあります。'),
(2, '寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 1, false, true, '新鮮な魚介類や野菜を寿司飯と組み合わせた日本の伝統的な料理です。'),
(3, 'うどん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 45000, 1, false, true, '太い麺が特徴の日本の麺料理です。出汁と一緒に食べることが多く、地域ごとに異なる味わいがあります。'),
(4, 'お好み焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 2, false, true, '大阪や広島などで有名な日本の鉄板焼き料理です。キャベツや豚肉を主な材料とし、ソースやマヨネーズをトッピングします。'),
(5, 'たこ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 35000, 2, false, true, '小麦粉の生地にタコやネギを入れ、特殊な鉄板で丸い形に焼き上げる日本の屋台料理です。ソースやマヨネーズをかけて食べます。'),
(6, 'てんぷら', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 55000, 2, false, true, '日本の伝統的な揚げ物料理で、海鮮や野菜などを衣で包んで揚げたものです。サクサクとした食感が特徴です。'),
(7, 'すき焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 60000, 3, false, true, '和牛や野菜を甘辛いたれで煮込んだ日本の鍋料理です。具材を生卵につけて食べるのが一般的です。'),
(8, 'お寿司', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 35000, 4, false, true, '新鮮な魚介類や野菜を寿司飯と組み合わせた日本の伝統的な料理です。'),
(9, 'とんかつ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 45000, 4, false, true, '豚肉をパン粉で衣をつけて揚げた日本の料理です。キャベツやソースと一緒に食べるのが一般的です。'),
(10, '焼き鳥', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 5, false, true, '串に刺した鶏肉を焼いた日本の屋台料理です。タレや塩で味付けされています。'),
(11, 'もんじゃ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 5, false, true, '鉄板で具材を焼き、生地と一緒に食べる日本の鉄板焼き料理です。キャベツや海鮮を使用します。'),
(12, 'そば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 50000, 6, false, true, '細い麺が特徴の日本の麺料理です。温かい汁に入れて食べることが一般的です。'),
(13, 'おでん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 6, false, true, '大根やこんにゃくなどの具材をだし汁で煮込んだ日本の料理です。あんかけやからしをつけて食べます。'),
(14, '天丼', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 55000, 7, false, true, '海鮮や野菜を天ぷらにしてごはんの上に盛り付けた日本の丼物料理です。つゆやタレをかけて食べます。'),
(15, 'おにぎり', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 7, false, true, 'ごはんを手で握って形を作り、海苔で包んだ日本のお弁当の一品です。具材を中に入れることもあります。'),
(16, 'うな丼', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 60000, 7, false, true, '鰻の蒲焼をごはんの上に乗せた日本の丼物料理です。特製のたれをかけて食べます。'),
(17, 'たい焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 20000, 8, false, true, '日本の伝統的な焼き菓子で、中にはあんこ（甘いこしあん）が入っています。外側はサクッとしており、中のあんこはふんわりとした食感です。'),
(18, 'そば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 8, false, true, '細長い麺が特徴の日本の麺料理で、主に蕎麦粉を使用しています。つゆや薬味と一緒に食べることが一般的です。'),
(19, 'もんじゃ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 50000, 9, false, true, '関東地方（特に東京）で有名な鉄板焼き料理で、主にキャベツや豚肉、海鮮などの具材を生地と一緒に焼きます。ソースやマヨネーズをかけて食べます。'),
(20, 'おでん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 9, false, true, '日本の冬季に食べられる温かい煮物料理です。大根やこんにゃく、たまごなどの具材を出汁で煮込んだもので、様々なバリエーションがあります。'),
(21, '唐揚げ', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 35000, 10, false, true, '鶏肉を衣で揚げた日本の料理です。外側はカリッとしており、中はジューシーで柔らかい食感です。ソースやマヨネーズを添えて食べることが一般的です。'),
(22, 'お茶漬け', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 25000, 10, false, true, 'ご飯の上にお茶やだしをかけて食べる日本の料理です。具材としては魚や海苔、梅干しなどが使われることがあります。シンプルな味わいでありながら、食欲をそそる一品です。'),
(23, '焼きそば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 11, false, true, '中華麺を野菜や肉などと一緒に炒めた料理で、ソースやお好み焼きソースを使って味付けされます。香ばしくてボリュームのある一品です。'),
(24, 'おにぎり', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 15000, 11, false, true, 'ご飯を手で握り、海苔で包んだ日本のお弁当の一部です。具材としては梅干し、鮭、昆布などが一般的です。手軽に食べられるおかずとして人気があります。'),
(25, '天ぷら', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 50000, 12, false, true, '野菜や海鮮類を衣で包み、油で揚げた料理です。サクサクとした食感と香ばしい味わいが特徴で、天つゆや塩で食べることが一般的です。'),
(26, '豚まん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 30000, 12, false, true, 'もちもちした皮で包まれた豚肉の蒸しパンです。中には豚肉のほか、野菜やキノコなどが入っています。ふんわりとした食感とジューシーな具材が特徴です。'),
(27, 'おでん', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclidoIwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 13, false, true, '日本の冬の定番料理で、さまざまな具材を出汁で煮込んだものです。大根やこんにゃく、たまごなどがよく使われ、あったかい状態で食べることが多いです。'),
(28, 'そば', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclid=IwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 45000, 13, false, true, 'そば粉を使って作られる日本の麺料理です。茹でた麺をつゆにつけて食べることが一般的で、夏には冷たいざるそばも楽しまれます。'),
(29, 'お好み焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclidoIwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 40000, 13, false, true, '大阪や広島などで有名な日本の鉄板焼き料理です。キャベツや豚肉を主な材料とし、ソースやマヨネーズをトッピングします。'),
(30, 'たこ焼き', 'https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-612007ca5affc.png?fbclidoIwAR2LFGZDAGS14m3dFoL1INuZaM0oGOPW5KcL78wKRK9WkEVXdZs25kyuuMA', 35000, 13, false, true, '小麦粉の生地にタコやネギを入れ、特殊な鉄板で丸い形に焼き上げる日本の屋台料理です。ソースやマヨネーズをかけて食べます。');

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
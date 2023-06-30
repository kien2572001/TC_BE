DELETE FROM review;
DELETE FROM food;
DELETE FROM restaurant;
DELETE FROM users;

-- MK 123456abc
INSERT INTO users (id,user_name, email, password, avatar, role)
VALUES
  (1,'Viet', 'viet@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (2,'QAnh', 'qanh@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (3,'Kien', 'kien@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (4,'vuong', 'vuong@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (5,'Hoang', 'hoang@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (6,'Dung', 'dung@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'USER'),
  (7,'admin', 'admin@gmail.com', '$2b$10$lGuDddRkEDS67.ZwUpM9AO5ZAX1gGJQZaKWHopqXlYTVhi0VrLj9C', 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg', 'ADMIN');


INSERT INTO restaurant (id, name, address, photo_url, active_time, is_draft, status)
VALUES
(1, 'ハノイの食堂', 'ハノイ市中心部、ホーンキエム地区', 'https://tblg.k-img.com/restaurant/images/Rvw/4564/320x320_square_4564732.jpg', '11:00 - 22:00', false, 'ACTIVE'),
(2, 'フーコックレストラン', 'ホーチミン市、ドンコイ通り', 'https://tblg.k-img.com/restaurant/images/Rvw/170359/320x320_square_8ee16e4c8bed69204340e7d00d78469a.jpg', '10:30 - 21:00', false, 'ACTIVE'),
(3, 'ダナン焼きそば', 'ダナン市、マイケービーチ', 'https://tblg.k-img.com/restaurant/images/Rvw/56172/320x320_square_56172742.jpg', '12:00 - 23:00', false, 'ACTIVE'),
(4, 'ベトナム料理レストラン', 'ハノイ市、オールドクォーター地区', 'https://tblg.k-img.com/restaurant/images/Rvw/135805/320x320_square_135805608.jpg', '10:00 - 22:30', false, 'ACTIVE'),
(5, 'サイゴンバー＆レストラン', 'ホーチミン市、ディストリクト1', 'https://tblg.k-img.com/restaurant/images/Rvw/77192/320x320_square_77192284.jpg', '17:00 - 02:00', false, 'ACTIVE'),
(6, 'ハロンベイシーフードレストラン', 'クアンニン省、ハロンベイ', 'https://tblg.k-img.com/restaurant/images/Rvw/46683/320x320_square_46683795.jpg', '09:00 - 21:30', false, 'ACTIVE'),
(7, 'フーコックフードコート', 'ホーチミン市、フーコック地区', 'https://tblg.k-img.com/restaurant/images/Rvw/73451/320x320_square_73451780.jpg', '10:00 - 22:00', false, 'ACTIVE'),
(8, 'Vietストラン', 'ハノイ市、フランス通り', 'https://tblg.k-img.com/restaurant/images/Rvw/36464/320x320_square_36464109.jpg', '11:30 - 23:00', false, 'ACTIVE'),
(9, 'ダナンストリートフード', 'ダナン市、ハイヴァン区', 'https://tblg.k-img.com/restaurant/images/Rvw/36464/320x320_square_36464109.jpg', '18:00 - 02:00', false, 'ACTIVE'),
(10, 'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://tblg.k-img.com/restaurant/images/Rvw/152198/320x320_square_152198474.jpg', '16:00 - 23:30', false, 'ACTIVE'),
(11, 'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://tblg.k-img.com/restaurant/images/Rvw/33192/320x320_square_33192557.jpg', '16:00 - 23:30', false, 'ACTIVE'),
(12, 'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://tblg.k-img.com/restaurant/images/Rvw/206149/320x320_square_12fd94e8bbcde918098cc3de9beae59c.jpg', '16:00 - 23:30', false, 'ACTIVE'),
(13, 'ベトナム屋台料理', 'ホーチミン市、ベンタイン市場', 'https://tblg.k-img.com/restaurant/images/Rvw/183339/320x320_square_7953cc3c0ebbda857d3aca4223bebb18.jpg', '16:00 - 23:30', false, 'ACTIVE');


INSERT INTO food (id, name, photo_url, price, restaurant_id, is_draft, is_food, description,status)
VALUES
(1, 'フォー', 'https://lee.hpplus.jp/wp-content/uploads/2022/06/14/DMA-180515-040-1024x958.jpg', 50000, 1, false, true, 'ベトナムの伝統的な麺料理で、スープと麺が特徴で、さまざまなトッピングがあります。', 'ACTIVE'),
(2, 'バインミー', 'https://www.asahibeer.co.jp/tools/image_quality.psp.html?CMD=onAspect&PATH=/web-service/common/util/recipe/pic/0000002467a.jpg&w=750', 30000, 1, false, true, 'ベトナム発祥のパンで、さまざまな具材で詰められた美味しいサンドイッチです。', 'ACTIVE'),
(3, 'ゴイクオン', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Summer_roll.jpg/800px-Summer_roll.jpg', 45000, 2, false, true, '新鮮な野菜やハーブ、豚肉などを使ったベトナムのサラダで、さっぱりとした味わいが特徴です。', 'ACTIVE'),
(4, 'ベトナム春巻き', 'https://www.ienomistyle.com/sites/default/files/styles/news_contents_img1/public/article_img1/recipe200331_03.jpg', 35000, 2, false, true, '米紙で包まれた野菜やエビ、豚肉などの具材を詰めたベトナムの伝統的な巻き物です。', 'ACTIVE'),
(5, 'ボンボー・ヒュー', 'https://www.marionskitchen.com/wp-content/uploads/2021/09/Bun-Bo-Hue8624.jpg', 60000, 3, false, true, 'ベトナム中部のフエ地方の伝統料理で、牛肉や豚肉、魚などを使ったスープです。', 'ACTIVE'),
(6, 'バインセオ', 'https://www.cotta.jp/special/article/wp-content/uploads/2023/02/20230212_yochinmama_eye.jpg', 40000, 3, false, true, '薄くてパリッとした皮に、豚肉やエビ、豆もやしなどが入ったベトナムのクレープです。', 'ACTIVE'),
(7, 'コムタム', 'https://wkvetter.com/wp-content/uploads/2020/01/116main-e1578374127169.jpg', 55000, 4, false, true, '香り高いジャスミンライスに、グリルされた肉やサラダ、魚のソースなどが添えられたベトナムのご飯料理です。', 'ACTIVE'),
(8, 'ベトナムコーヒー', 'https://danang.style/upload/InfoContents/images/img_ja1_365_5f55f240-3e70-4e42-b5b0-6d159d07c69f.jpg', 25000, 4, false, false, '濃厚で香り高いコーヒーで、コンデンスミルクを加えて飲むのが特徴です。', 'ACTIVE'),
(9, 'フォー', 'https://lee.hpplus.jp/wp-content/uploads/2022/06/14/DMA-180515-040-1024x958.jpg', 50000, 4, false, true, '米粉の麺を使ったベトナムのスープで、牛肉や鶏肉、新鮮なハーブがたっぷりと入っています。', 'ACTIVE'),
(10, 'バインミー', 'https://www.asahibeer.co.jp/tools/image_quality.psp.html?CMD=onAspect&PATH=/web-service/common/util/recipe/pic/0000002467a.jpg&w=750', 40000, 5, false, true, 'フレンチバゲットに詰められたベトナムのサンドイッチで、パテ、豚肉、野菜などが入っています。', 'ACTIVE'),
(11, 'ミ・クアン', 'https://cheritheglutton.com/wp-content/uploads/2019/05/3AnhEm04.jpg', 45000, 5, false, true, '米粉の麺を使ったベトナムのスープで、牛肉や豚肉、海鮮、野菜が具材として使われます。', 'ACTIVE'),
(12, 'ベトナムコーヒー', 'https://danang.style/upload/InfoContents/images/img_ja1_365_5f55f240-3e70-4e42-b5b0-6d159d07c69f.jpg', 18000, 6, false, false, '鶏肉を使ったベトナムのカレーで、ココナッツミルクをベースにしたスパイシーな味わいが特徴です。', 'ACTIVE'),
(13, 'ミ・クアン・ボ', 'https://cheritheglutton.com/wp-content/uploads/2019/05/3AnhEm04.jpg', 55000, 6, false, true, '麺と野菜、海鮮、豚肉などを使ったベトナムの鍋料理で、スープとしても食べられます。', 'ACTIVE'),
(14, 'バインミー・チャー・シュー', 'https://i.kobe-np.co.jp/news/sougou/202302/img/b_16044836.jpg', 42000, 7, false, true, 'バインミーにチャーシュー（焼豚）を詰めたベトナムの料理で、絶妙なバランスの味わいが楽しめます。', 'ACTIVE'),
(15, 'チャー・ゴーイ', 'https://imagel.sekainavi.com/images/templates/VIETNAM/5024256/1ef97fe4beb835da_S.jpg', 25000, 8, false, true, 'ベトナムのミルクティーで、凍ったコンデンスミルクと紅茶が特徴です。', 'ACTIVE'),
(16, 'チェー', 'https://www.vietnam-sketch.com/wp-content/uploads/2020/04/VNS_202005_HanoiPress_RauCauChanhLeo-edit-570x380.jpg', 35000, 8, false, false, 'ベトナムのココナッツミルクとフルーツを使ったスムージーで、爽やかな味わいが楽しめます。', 'ACTIVE'),
(17, 'スー・ダー・フエ', 'https://vinmec-prod.s3.amazonaws.com/images/20220120_124148_031610_tra-thao-moc.max-800x800.jpg', 30000, 9, false, false, 'ベトナムのハーブティーで、ハーブの香りと風味が特徴的です。', 'ACTIVE'),
(18, 'コム・ラー', 'https://cdn.tgdd.vn/Files/2021/08/03/1372738/cach-lam-com-rang-thap-cam-vua-dep-mat-lai-ngon-mieng-202206031508341436.jpg', 40000, 9, false, true, 'ベトナムの黒糖コーヒーで、濃厚で甘い味わいが楽しめます。', 'ACTIVE'),
(19, 'カ・プー・チャン', 'https://lambanhngon.com/news_pictures/ubv1605250661.jpg', 32000, 10, false, true, 'ベトナムのコーヒーゼリーで、コーヒーの香りとぷるぷるとした食感が特徴です。', 'ACTIVE'),
(20, 'ソ・ダー・チャン', 'https://assets.htv.com.vn/Images/1/News/87791/1.png', 28000, 10, false, false, 'ベトナムのヨーグルトドリンクで、さっぱりとした口当たりが楽しめます。', 'ACTIVE'),
(21, 'フー・ティウ・ナム・ヴァン', 'https://img01.vietnhat.tv/usr/c/h/o/cholon/datthanhsk4k.jpg', 30000, 11, false, true, 'ベトナムの米粉スープで、牛肉や豚肉、シーフードと共に食べられます。', 'ACTIVE'),
(22, 'プー・チャ', 'https://delightfulplate.com/wp-content/uploads/2018/08/Vietnamese-Grilled-Pork-Meatballs-with-Vermicelli-Noodles-Bun-Cha-2.jpg', 35000, 11, false, true, 'ベトナムの焼きそばで、豚肉やエビ、野菜と共に炒められます。', 'ACTIVE'),
(23, 'コム・タム', 'https://wkvetter.com/wp-content/uploads/2020/01/116main-e1578374127169.jpg', 32000, 12, false, true, 'ベトナムの炊き込みご飯で、豚肉やエビ、サラダと一緒に食べられます。', 'ACTIVE'),
(24, 'ブン・チャー・カ・ダ', 'https://gucci-vietnam.com/wp-content/uploads/2016/05/PC011775.jpg', 40000, 12, false, true, 'ベトナムの冷たい麺料理で、豚肉、エビ、野菜と共に食べられます。', 'ACTIVE'),
(25, 'トム・ラン', 'https://cdn.tgdd.vn/2022/09/CookDish/2-cach-lam-tom-chien-xu-rao-dau-gion-rum-ai-cung-me-avt-1200x676.jpg', 38000, 13, false, true, 'ベトナムのエビのフライで、サクサクとした食感が特徴です。', 'ACTIVE'),
(26, 'ベトナム風サラダ', 'https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/thum-1-1.jpg', 28000, 13, false, true, 'ベトナムのガラス麺サラダで、エビや豚肉、野菜と共に食べられます。', 'ACTIVE'),
(27, 'ブン・チャー・カ・ダ', 'https://gucci-vietnam.com/wp-content/uploads/2016/05/PC011775.jpg', 30000, 13, false, true, 'ベトナムの牛肉のヌードルスープで、さっぱりとした味わいが楽しめます。', 'ACTIVE'),
(28, 'ゴイクオン', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Summer_roll.jpg/800px-Summer_roll.jpg', 35000, 13, false, true, 'ベトナムの春巻きで、豚肉やエビ、野菜が具材となっています。', 'ACTIVE'),
(29, 'ベトナムコーヒー', 'https://danang.style/upload/InfoContents/images/img_ja1_365_5f55f240-3e70-4e42-b5b0-6d159d07c69f.jpg', 32000, 13, false, false, 'ベトナムの冷たいベトナムコーヒーで、氷とコンデンスミルクが特。', 'ACTIVE'),
(30, 'チェー・ダー', 'https://bizweb.dktcdn.net/100/004/714/articles/ca-phe-da.png?v=1586258829727', 12000, 1, false, false, 'ベトナムの伝統的なお茶で、香り高くてリフレッシュメント効果があります。', 'ACTIVE'),
(31, 'ビール', 'https://salt.tikicdn.com/ts/product/5b/8d/20/27172d82b5c2f3a6aa4c41f0b6fe62f1.jpg', 15000, 2, false, false, 'ベトナムのビールで、軽やかな味わいと爽快感が特徴です。', 'ACTIVE'),
(32, 'コー・ダー', 'https://bizweb.dktcdn.net/100/452/264/products/ca-phe-den.jpg?v=1652252354573', 10000, 2, false, false, 'ベトナムのコーヒーで、濃厚な味わいと豊かな香りが楽しめます。', 'ACTIVE'),
(33, 'ミルクコーヒー', 'https://comgasg.com/wp-content/uploads/2019/11/cafe-sua-da.jpg', 14000, 3, false, false, 'ベトナムの牛乳コーヒーで、ミルクのまろやかさとコーヒーの苦味が絶妙です。', 'ACTIVE'),
(34, 'オレンジジュース', 'https://static-images.vnncdn.net/files/publish/2022/6/5/nuoccam-365.jpg', 12000, 3, false, false, 'ベトナムの柑橘類のジュースで、さっぱりとした酸味と甘さがあります。', 'ACTIVE'),
(35, 'チェー・サイ・ダー', 'https://pds.exblog.jp/pds/1/201008/09/04/f0179404_2222121.jpg', 10000, 4, false, false, 'ベトナムの緑茶で、すっきりとした味わいと健康効果が期待できます。', 'ACTIVE'),
(36, 'ハーブティー', 'https://image.news.livedoor.com/newsimage/b/2/b217a_1556_6102cc10_df1064e6.jpg', 12000, 4, false, false, 'ベトナムのハーブティーで、リラックス効果や消化促進効果があります。', 'ACTIVE'),
(37, 'チェー・レー', 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-117.jpg', 13000, 5, false, false, 'ベトナムのジャスミンティーで、芳醇な香りと優雅な味わいが特徴です。', 'ACTIVE'),
(38, 'チェー', 'https://www.vietnam-sketch.com/wp-content/uploads/2020/04/VNS_202005_HanoiPress_RauCauChanhLeo-edit-570x380.jpg', 16000, 5, false, false, 'ベトナムのフルーツスムージーで、新鮮な果物の風味が楽しめます。', 'ACTIVE'),
(39, 'チェー・ルアット', 'https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/che-dau-den-nuoc-cot-dua-thumbnail.jpg', 11000, 6, false, false, 'ベトナムのハーブティーで、健胃効果やストレス解消効果があります。', 'ACTIVE'),
(40, '水筒', 'https://cooponline.vn/wp-content/uploads/2015/05/Lavie-Nuoc-khoang-thien-nhien-chai-500ML.jpg', 15000, 6, false, false, 'ベトナムのミントティーで、さっぱりとした味わいと口当たりが特徴です。', 'ACTIVE');


INSERT INTO review (id,rate, content, food_id, restaurant_id, user_id)
VALUES
(1,5, '美味しいラーメンでした。また来たいです。', 1, 1, 3),
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
(21,5, 'このラーメンは絶品です。スープの味付けが絶妙で、具材も新鮮です。', 1, 1, 4),
(22,4, '寿司のネタが新鮮で美味しいです。特にトロは絶品です。', 2, 1, 2),
(23,4, 'このうどんはコシがあり、出汁の味わいも良いです。', 3, 1, 3),
(24,3, 'お好み焼きは美味しいですが、もう少し焼き加減が欲しいです。', 4, 2, 4),
(25,4, 'たこ焼きの生地がふわふわで、たこも柔らかくて美味しいです。', 5, 2, 4),
(26,5, '天ぷらはサクサクで揚げたてが最高です。', 6, 3, 1),
(27,3, 'お寿司のネタのバリエーションが少ないですが、味は良いです。', 7, 3, 2),
(28,4, 'そばの風味が良く、つるつるとした食感が楽しめます。', 8, 4, 3),
(29,3, 'おでんの具材の種類が少ないですが、味は普通です。', 9, 4, 4),
(30,4, '焼き鳥はジューシーで、タレの味が良いです。', 10, 4, 1);
USE master
GO

DROP DATABASE IF EXISTS Shopee
GO

CREATE DATABASE Shopee
GO

USE Shopee
GO

CREATE TABLE [roles] (
  [id] varchar(10) PRIMARY KEY,
  [name] nvarchar(30)
)
GO

CREATE TABLE [accounts] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [email] varchar(30) UNIQUE,
  [username] varchar(30) UNIQUE,
  [password] varchar(100),
  [fullname] nvarchar(50),
  [phone] varchar(11),
  [gender] bit,
  [date_of_birth] date,
  [img] varchar(255),
  [created_at] date,
  [updated_at] date,
  [deleted_at] date,
  [role_id] varchar(10)
)
GO

CREATE TABLE [addresses] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [fullname] nvarchar(50),
  [phone] varchar(11),
  [city] nvarchar(100),
  [district] nvarchar(100),
  [wards] nvarchar(100),
  [specific_address] nvarchar(100),
  [is_default] bit,
  [account_id] integer
)
GO

CREATE TABLE [categories] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(100),
  [description] nvarchar(255),
  [created_at] date,
  [updated_at] date,
  [deleted_at] date
)
GO

CREATE TABLE [discount] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [description] nvarchar(255),
  [discount_percent] integer,
  [is_active] bit,
  [created_at] date,
  [updated_at] date
)
GO

CREATE TABLE [products] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name_product] nvarchar(200),
  [description] nvarchar(255),
  [price] int,
  [img] varchar(255),
  [quantity] integer,
  [created_at] date,
  [updated_at] date,
  [deleted_at] date,
  [category_id] integer
)
GO

CREATE TABLE [galery] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [level] integer,
  [img] varchar(255),
  [product_id] integer
)
GO

CREATE TABLE [reviews] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [comment] nvarchar(255),
  [created_at] date,
  [account_id] integer,
  [product_id] integer
)
GO

CREATE TABLE [order_status] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [status] nvarchar(50)
)
GO

CREATE TABLE [orders] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [created_at] date,
  [status_id] integer,
  [total_amount] bigint,
  [fullname] nvarchar(50),
  [phone] varchar(11),
  [city] nvarchar(100),
  [district] nvarchar(100),
  [wards] nvarchar(100),
  [specific_address] nvarchar(100),
  [account_id] integer,
  [discount_id] integer
)
GO

CREATE TABLE [order_details] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [product_id] integer,
  [order_id] integer,
  [quantity] integer,
  [amount] int
)
GO

ALTER TABLE [accounts] ADD FOREIGN KEY ([role_id]) REFERENCES [roles] ([id])
GO

ALTER TABLE [addresses] ADD FOREIGN KEY ([account_id]) REFERENCES [accounts] ([id])
GO

ALTER TABLE [products] ADD FOREIGN KEY ([category_id]) REFERENCES [categories] ([id])
GO

ALTER TABLE [galery] ADD FOREIGN KEY ([product_id]) REFERENCES [products] ([id])
GO

ALTER TABLE [reviews] ADD FOREIGN KEY ([account_id]) REFERENCES [accounts] ([id])
GO

ALTER TABLE [reviews] ADD FOREIGN KEY ([product_id]) REFERENCES [products] ([id])
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([status_id]) REFERENCES [order_status] ([id])
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([account_id]) REFERENCES [accounts] ([id])
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([discount_id]) REFERENCES [discount] ([id])
GO

ALTER TABLE [order_details] ADD FOREIGN KEY ([product_id]) REFERENCES [products] ([id])
GO

ALTER TABLE [order_details] ADD FOREIGN KEY ([order_id]) REFERENCES [orders] ([id])
GO

-- Chèn dữ liệu mới vào bảng role
INSERT INTO roles ([id], [name])
VALUES ('admin', N'Quản trị viên'),
       ('user', N'Người dùng');
GO 

-- Chèn dữ liệu mới vào bảng account
INSERT INTO accounts ([email],  [username],  [password],  [fullname],  [phone],  [gender],  [date_of_birth],  [img], [created_at],  [updated_at],  [role_id])
VALUES
	('admin@gmail.com',    'admin123',   '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',   N'Minh Thư',   '0341287223',   1,   '2003-02-01',   'https://i.pinimg.com/750x/42/6e/72/426e7248106e39fdbfecc84c08fca83c.jpg',  '2022-12-10',  '2023-09-01',  'admin'),
	('user@gmail.com',	'user123',	'8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',	N'User 123', '0256456588',	0,	'2003-01-01',	'https://i.pinimg.com/564x/44/34/d6/4434d6fa92e52e36a2cabe468390f264.jpg',		'2019-01-01',	'2023-08-08','user'),
	('test@gmail.com',	'test',	'8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',	N'Test 123', '0123456789',	0,	'2003-03-04',	'https://i.pinimg.com/564x/44/34/d6/4434d6fa92e52e36a2cabe468390f264.jpg',		'2023-12-13',	null,'admin'),
	('minthu1203@gmail.com',		'mthusayhi123',	'71f4f6a4107717d7290a7af99563eb534f41c44c50f055835f97b8abec26393d',	N'Minh Thư','0252488655',	0,	'2006-1-10',	'https://i.pinimg.com/564x/83/0e/31/830e314f163e3fc5ebb071f3db124c93.jpg',		'2020-02-02',	'2022-12-12','user'),
	('vuthanhtrung@gmail.com',	'trung123',	'69596fe31f8b339800ca34029a2dc3aa14710b616b043e896e091db62203edf4', N'Trung',		'0332414841',	0,	'2003-04-09',	'https://i.pinimg.com/736x/8c/8b/8a/8c8b8a236086a28253dda4bf407bb3bb.jpg',		'2019-05-17',	'2022-04-23','user'),
	('nguyenhoangyen@gmail.com',	'yen123',	'c6b83ce863d571f7a51291d06a872ac070a8f9c95666cc39d44ef8571c3c65a6',	N'Yến',	'0211648711',	1,	'1999-04-24',	'https://i.pinimg.com/564x/b9/fb/93/b9fb93a07520a543e1b3c9a017d4b2da.jpg',		'2015-01-09',	'2020-10-10','user')
GO

-- Chèn dữ liệu mới vào bảng addresses
INSERT INTO addresses ([fullname],  [phone],  [city],  [district],  [wards],  [specific_address],  [is_default],  [account_id])
VALUES
	(N'Phạm Trần Minh Thư',		'0247259910',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'123 Khu phố 1',	1,	1),
	(N'Nguyễn Ngọc Bảo Anh',	'0123599522',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-12-i-761',	N'Phường-Trung-Mỹ-Tây-i-26785',	N'123 Khu phố 1',		0,	1),
	(N'Nguyễn Hoàng Duy',	'0575114554',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'123 Khu phố 1',		1,	2),
	(N'Nguyễn Bảo Ngọc',		'0235799112',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-2673',	N'Khu phố 4',	1,	3),
	(N'Trương Kiều Oanh',	'0974757373',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'Khu phố 5',		1,	4),
	(N'Nguyễn Bích Quyên',	'0154448487',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'Khu phố 6',		1,	5),
	(N'Nguyễn Hoàng Yến',	'0148481533',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'Khu phố 7',		0,	5)
GO

-- Chèn dữ liệu mới vào bảng categories
INSERT INTO categories ([name],  [description], [created_at], [updated_at], [deleted_at]) VALUES
  (N'Điện thoại',					 N'Danh mục sản phẩm điện thoại di động', '2023-01-01', '2023-01-01', NULL),
  (N'Laptop',						 N'Danh mục sản phẩm laptop',				'2023-03-08','2023-03-08',NULL),
  (N'Quần áo nam nữ ',				 N'Danh mục sản phẩm quần áo nam nữ',			 '2023-01-03', '2023-01-03', NULL),
  (N'Giày thể thao',				 N'Danh mục sản phẩm giày thể thao', '2023-01-05', '2023-01-05', NULL),
  (N'Đồng hồ',						 N'Danh mục sản phẩm đồng hồ', '2023-01-06', '2023-01-06', NULL),
  (N'Túi xách',						 N'Danh mục sản phẩm túi xách và balo', '2023-01-07', '2023-01-07', NULL),
  (N'Phụ kiện điện thoại',			 N'Danh mục sản phẩm phụ kiện điện thoại', '2023-01-08', '2023-01-08', NULL),
  (N'Phụ kiện nội thất',			 N'Danh mục sản phẩm nội thất', '2023-01-09', '2023-01-09', NULL),
  (N'Máy ảnh',						 N'Danh mục sản phẩm máy ảnh và máy quay phim', '2023-01-10', '2023-01-10', NULL),
  (N'Cute',							 N'Danh mục các sản phẩm dễ thương','2023-01-10', '2023-01-10', NULL),
  (N'Mỹ phẩm',						 N'Danh mục sản phẩm mỹ phẩm','2023-01-10', '2023-01-10', NULL),
  (N'Học tập',						 N'Danh mục sản phẩm học tập', '2023-01-10', '2023-01-10', NULL);
GO

  --Chèn dữ liệu mới vào bảng discount
INSERT INTO discount ([name], [description], [discount_percent], [is_active], [created_at], [updated_at])
VALUES ('XTRA', 'Voucher free ship', 10, 1, '2023-09-03', '2023-09-04'),
       ('Shop', 'VoucherShop', 20, 1, '2023-09-03', '2023-09-04');
GO

--Chèn dữ liệu mới vào bảng products
INSERT INTO products ([name_product], [description], [price], [quantity], [img], [created_at], [updated_at], [category_id])
VALUES 
-- 1
(N'Áo khoác len MIKENCO Monogram cardigan',	N'Sản phẩm:Áo khoác len MIKENCO Monogram cardigan',							950000,	50, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-i51z5ni30olvf8', '2023-09-03', '2023-09-03', 3),
       (N'Áo khoác nam MIKENCO Fancy varsity',		N'Sản phẩm:Áo khoác nam MIKENCO Fancy varsity',								130000,	30, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-exq71yxtktlvf8', '2023-09-03', '2023-09-03', 3),
	   (N'Giày_Jordan',								N'Giày Jordan Paris 2 Phối Màu Nhẹ Nhàng Bản sịn Đủ Size Nam Nữ',			950000,	50, 'https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f', '2023-09-03', '2023-09-03', 4),
       (N'Bút dạ quang 6 màu highlight',				N'Văn phòng phẩm LENG KENG chuyên cung cấp những vật phẩm đơn giản phục vụ cho các hoạt động văn phòng như: giấy in, sổ, giấy note',		10000,	30, 'https://down-vn.img.susercontent.com/file/2f4754cba01b090b26316fdf0fbffc71', '2023-09-03', '2023-09-03', 12),
	   (N'Sổ còng A4 A5 B5',							N'sổ ghi chép, take notes, bujo CS0',										15000,		50, 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-po7j7wmmhjnv6d',  '2023-09-03', '2023-09-03', 12),
       (N'Áo Baby Tee',								N'Áo Thun form nữ',															100000,		30, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lijy4lg57geq27', '2023-09-03', '2023-09-03', 3),
	   (N'Gấu Bông MINISO We Bare Bears ',			N'Gấu Bông Lets Bare Bear Fun Pose Miniso cute mềm mại chính hãng',			350000,		50, 'https://down-vn.img.susercontent.com/file/4c312f44880fc1866ba97f9590bcb2d4', '2023-09-03', '2023-09-03', 11),
       (N'Đệm Ngồi Bệt',								N'Ghế Dercor mẫu mới Siêu Ngộ Nghĩnh Vải Nỉ nhung mềm mịn',					500000,		30, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lg0m4pbe0u801e', '2023-09-03', '2023-09-03', 8),
	   (N'Kem Nền Fit Me',							N'Tint C Tươi Mướt Chống Nắng với Vitamin C & SPF50 Maybelline',				200000,		50, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lifr5pgus7o280', '2023-09-03', '2023-09-03', 11),
       (N'Túi Vải Đeo Vai',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 6),
-- 11
	   (N'Áo thun Futuristic Unisex nam nữ Cotton 100%', N'Áo thun Futuristic Unisex nam nữ Cotton 100% form oversize LUNACY', 239000, 50, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfrt2qac7hb2f', '2023-01-09', '2023-05-01',3),
	   (N'Áo sơ mi caro form rộng OHOH', N'Áo sơ mi caro form rộng OHOH (CARO FLANNEL)', 240000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv3wwyn83cy15','2023-01-01','2023-01-02',3),
	   (N'Áo Khoác cardigan Dệt Kim Mềm Mại Phối Ren Thắt Nơ Xinh Xắn', N'Áo Khoác cardigan Dệt Kim Mềm Mại Phối Ren Thắt Nơ Xinh Xắn',399000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmhc740spucffa','2023-02-03','2023-04-03',3),
	   (N'Balo EDMOND MASION MONOGRAM', 'Balo EDMOND MASION MONOGRAM tặng ví nhỏ và cardholder EDM size M/L', 720000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkb3t5awdxnsae','2023-01-01','2023-01-02',6),
	   (N'MOLLYNISTA Áo kem thiết kế organza', N'MOLLYNISTA (SALE 20%)(ORIGINAL) Áo kem thiết kế organza trễ eo bẹt vai Freesize thanh lịch nữ tính cao cấp tôn dáng',576000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llepppf7fpva89','2023-02-03','2023-04-03',3),
	   (N'Đèn ngủ để bàn',N'Hình dạng hoa đèn ngủ đèn sinh nhật nhỏ đèn ngủ để bàn sinh viên quà tặng sinh nhật',59000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdj-lik2lqmnrhu563','2023-01-01','2023-01-02',10),
	   (N'Jumiso serum vitamin 30ml', N'Jumiso serum vitamin 30ml Làm Sáng Da Ban Ngày',345000,50,'https://down-vn.img.susercontent.com/file/sg-11134207-7rbmq-llvfc3wd5tfd9d','2023-01-01','2023-01-02',11),
	   (N'Tinh chất dưỡng da Ốc sên JUMISO', N'Tinh chất dưỡng da Ốc sên JUMISO Snail Mucin 95 + Peptide 140ml',370000,50,'https://down-vn.img.susercontent.com/file/sg-11134207-7rbl9-llvsjt5i2per6d','2023-01-01','2023-01-02',11),
	   (N'Waterfull Hyaluronic Serum', N'Waterfull Hyaluronic Serum 50ml/ Serum dưỡng ẩm JUMISO',325000,50,'https://down-vn.img.susercontent.com/file/8156ed74cb01f14bcf8fe170ea277ce0','2023-01-01','2023-01-02',11),
	   (N'Tất cổ cao đen trắng', N'Tất cổ cao đen trắng sét 10 đôi tất quốc dân T09', 34000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-23030-xrdt7x4l3dova9','2023-01-01','2023-01-02',4),
-- 21
	   (N'Gối ôm Vịt Duck', N'Gối ôm Vịt Duck hand warmer 3 trong 1', 289000,50,'https://down-vn.img.susercontent.com/file/4137ee25917a362461303633c045069f','2023-01-01','2023-01-02',10),
	   (N'Dép Đi Trong Nhà Chống Trượt Họa Tiết Thỏ Dễ Thương', N'Dép Đi Trong Nhà Chống Trượt Họa Tiết Thỏ Dễ Thương Thời Trang Mùa Hè 2023 Cho Bạn Gái',336000,50,'https://down-vn.img.susercontent.com/file/1d278ceb7926ed715ade258c3ae38fc7','2023-01-01','2023-01-02',10),
	   (N'Gấu Bông Ếch Cười Ngỗng Nhồi Bông','Gấu Bông Ếch Cười Ngỗng Nhồi Bông Cho Bé',570000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmscyqn61xr62b','2023-01-01','2023-01-02',10),
	   (N'Nến Thơm Giáng Sinh Quà Tặng Noel',N'Nến Thơm Giáng Sinh Quà Tặng Noel HENY GARDEN',279000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp3wk4lq8dam8e','2023-01-01','2023-01-02',10),
	   (N'Cây Thông Noel',N'Cây Thông Trang Trí Giáng Sinh Full Phụ Kiện',589000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lon2f3ohqp8w2e','2023-01-01','2023-01-02',10),
	   (N'Ốp Điện Thoại Hình Cây Kem / Vịt ',N'Ốp Điện Thoại Hình Cây Kem / Vịt ',60000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk4-ll68hk62ityse4','2023-01-01','2023-01-02',7),
	   (N'Ốp Điện Thoại Mềm Hình Thỏ / Hoa',N'Ốp Điện Thoại Mềm Hình Thỏ / Hoa',50000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7r99n-llogx0vq7srd75','2023-01-01','2023-01-02',7),
	   (N'Áo Polo Phối Bóng Rổ Karants Local Brand',N'Áo Polo Phối Bóng Rổ Karants Local Brand Streetwear Form Oversize',195000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lklwk5lgjxeyd6','2023-01-01','2023-01-02',3),
	   (N'Ly cốc sứ uống nước dễ thương tạo hình Vịt', N'Ly cốc sứ uống nước dễ thương tạo hình Vịt',150000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm8lwsjhr8wv89','2023-01-01','2023-01-02',10),
	   (N'Ghế Nhựa Gác Chân Con Vịt',N'Ghế Nhựa Gác Chân Con Vịt',59000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowcguu32urya4','2023-01-01','2023-01-02',10),
-- 31
	   (N'Giày Converse Run Star Legacy CX',N'Giày Converse Run Star Legacy CX Pink White ( full box )',812000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg82bkwxgik715','2023-01-01','2023-01-02',4),
	   (N'Cốc sứ CÓ QUAI CHÚM BÓNG',N'Cốc sứ CÓ QUAI CHÚM BÓNG',250000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm8ecpxgtu5b55','2023-01-01','2023-01-02',10),
	   (N'Cốc Uống Nước Bằng Gốm Sứ Họa Tiết Vịt Vàng',N'Cốc Uống Nước Bằng Gốm Sứ Họa Tiết Vịt Vàng Hoạt Hình Dễ Thương',159000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-23010-olufedky4pmv1b','2023-01-01','2023-01-02',10),
	   (N'Điện thoại Apple iPhone 15 128GB', N'Điện thoại Apple iPhone 15 128GB',22999000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nq118f5','2023-01-01','2023-01-02',1),
	   (N'Điện thoại Apple iPhone 15 Pro 256GB', N'Điện thoại Apple iPhone 15 Pro 256GB',30690000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxdtnk0u7rza7','2023-01-01','2023-01-02',1),
	   (N'Apple MacBook Air (2020)', N'Máy tính xách tay Apple MacBook Air (2020) M1 Chip, 13.3-inch, 8GB, 256GB SSD',19190000,50,'https://down-vn.img.susercontent.com/file/9e51bfb9d5fd5e4f975b5121d69473b0','2023-01-01','2023-01-02',2),
	   (N'Đồng hồ Apple Watch SE (2023)',N'Đồng hồ Apple Watch SE (2023) 44mm (GPS + Cellular) Viền nhôm - Dây quấn thể thao',8909000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9o7h447','2023-01-01','2023-01-02',5),
	   (N'Converse Chuck Taylor All Star Move Canvas Platform Women Sneakers-Black/White/White', N'Converse Chuck Taylor All Star Move Canvas Platform Women Sneakers-Black/White/White', 16150000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbly-lom18b0hgc01f9','2023-01-01','2023-01-02',4),
	   (N'Điện thoại Apple iPhone 14 128GB', N'Điện thoại Apple iPhone 14 128GB', 24900000,50,'https://down-vn.img.susercontent.com/file/0982de1d517eed28495a9bbcaced5881','2023-01-01','2023-01-02',1),
	   (N'Điện thoại Apple iPhone 13 128GB', N'Điện thoại Apple iPhone 13 128GB', 15990000,50,'https://down-vn.img.susercontent.com/file/a5a089cdb8c1dcb5d5217771db5eb2b0','2023-01-01','2023-01-02',1),
--41
	   (N'Điện thoại Apple iPhone 15 128GB', N'Điện thoại Apple iPhone 15 128GB', 21990000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nq118f5','2023-01-01','2023-01-02',1),
	   (N'Điện thoại Apple iPhone 12 64GB', N'Điện thoại Apple iPhone 12 64GB', 13390000,50, 'https://down-vn.img.susercontent.com/file/c571780f3a85716c7aa3ec70360b1807','2023-01-01','2023-01-02',1),
	   (N'Apple iPhone 14 Plus 128GB', N'Apple iPhone 14 Plus 128GB',22140000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-23020-kp1wp9s91cnv9e','2023-01-01','2023-01-02',1),
	   (N'Điện Thoại Samsung Galaxy Z Flip4 128GB',N'Điện Thoại Samsung Galaxy Z Flip4 128GB', 14590000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljfe62qovsuq52','2023-01-01','2023-01-02',1),
	   (N'Điện thoại Apple iPhone 12 Chính hãng VN/A', N'Điện thoại Apple iPhone 12 Chính hãng VN/A', 20990000,50,'https://down-vn.img.susercontent.com/file/cf0f5048bd23c9c0fba412ce2b97cca7','2023-01-01','2023-01-02',1),
	   (N'Apple iPhone 13 Chính hãng VN/A', N'Apple iPhone 13 Chính hãng VN/A',16690000,50,'https://down-vn.img.susercontent.com/file/0e6e784efa929ec7a5f265842d8bf19f','2023-01-01','2023-01-02',1),
	   (N'Bộ phụ kiện bảo vệ cáp và củ sạc cho iphone',N'Bộ phụ kiện bảo vệ cáp và củ sạc cho iphone',45000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmzv8vjk7gvn2d','2023-01-01','2023-01-02',7),
	   (N'Bộ phụ kiện bảo vệ củ sạc và cáp sạc cho iphone', N'Bộ phụ kiện bảo vệ củ sạc và cáp sạc cho iphone',23900,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmy67or7pd5r64','2023-01-01','2023-01-02',7),
	   (N'Ốp Điện Thoại Silicon Chống Rơi Họa Tiết Ếch Hoạt Hình', N'Ốp Điện Thoại Silicon Chống Rơi Họa Tiết Ếch Hoạt Hình',34500,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7qved-ljnvhx50hjg43f','2023-01-01','2023-01-02',7),
	   (N'Ốp Điện Thoại Họa Tiết Tai Thỏ Dễ Thương',N'Ốp Điện Thoại Họa Tiết Tai Thỏ Dễ Thương',24900,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7r9ah-llq5u53jbot5f1','2023-01-01','2023-01-02',7),
--51
	   (N'Bộ Củ Cáp Sạc nhanh PD 20W',N'Bộ Củ Cáp Sạc nhanh PD 20W',209000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lloczx77r4jg4c','2023-01-01','2023-01-02',7),
	   (N'Máy tính xách tay Apple MacBook Pro 14 inch M2 Pro 2023',N'Máy tính xách tay Apple MacBook Pro 14 inch M2 Pro 2023',47490000,50,'https://down-vn.img.susercontent.com/file/0a1320ecaa96143f789443105196d8db','2023-01-01','2023-01-02',2),
	   (N'Máy tính xách tay MacBook Pro- M3 Chip, 14-inch, 1TB', N'Máy tính xách tay MacBook Pro- M3 Chip, 14-inch, 1TB',44490000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loxtcqt9a0yje7','2023-01-01','2023-01-02',2),
	   (N'Máy tính xách tay Apple MacBook Air 15 inch (2023) M2 Chip 8GB, 512GB',N'Máy tính xách tay Apple MacBook Air 15 inch (2023) M2 Chip 8GB, 512GB',37990000,50,'https://down-vn.img.susercontent.com/file/f43ff45df09ca9b9c3056c2ff5704e5b','2023-01-01','2023-01-02',2),
	   (N'Laptop LG Gram 14ZD90R-G.AX51A5 14'', Core i5 Gen 13, 8GB, 256GB',N'Laptop LG Gram 14ZD90R-G.AX51A5 14'', Core i5 Gen 13, 8GB, 256GB',22390000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg42bnk8uv6yfc','2023-01-01','2023-01-02',2),
	   (N'Laptop HP Pavilion 15',N'Laptop HP Pavilion 15', 15690000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-22120-smmct9odf6kv87','2023-01-01','2023-01-02',2),
	   (N'Surface Laptop 4 | Core i5 1135G7 / RAM 16GB / SSD 512GB / Màn 13.5 in',N'Surface Laptop 4 | Core i5 1135G7 / RAM 16GB / SSD 512GB / Màn 13.5 in',25990000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmzvfbzm4na09d','2023-01-01','2023-01-02',2),
	   (N'Laptop LG Gram Style 2023 14Z90RS-G.AH54A5 (i5-1340P | 16GB | 512GB)',N'Laptop LG Gram Style 2023 14Z90RS-G.AH54A5 (i5-1340P | 16GB | 512GB)',30690000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg42bnk97iay76','2023-01-01','2023-01-02',2),
	   (N'Đồng hồ Apple Watch SE (2023) 40mm (GPS) Viền nhôm - Dây cao su', N'Đồng hồ Apple Watch SE (2023) 40mm (GPS) Viền nhôm - Dây cao su',6190000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9sf6g3e','2023-01-01','2023-01-02',5),
	   (N'Đồng hồ Apple Watch Series 9 41mm (GPS + Cellular) Viền nhôm - Dây cao su',N'Đồng hồ Apple Watch Series 9 41mm (GPS + Cellular) Viền nhôm - Dây cao su',12690000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln9ajpad5rub9d','2023-01-01','2023-01-02',5),
--61
	   (N'Apple Watch SE GPS Sport Band', N'Apple Watch SE GPS Sport Band',6920000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-23020-g7mqnnch0cnv8e','2023-01-01','2023-01-02',5),
	   (N'Đồng hồ Apple Watch SE (2023) 44mm (GPS + Cellular) Viền nhôm - Dây quấn thể thao',N'Đồng hồ Apple Watch SE (2023) 44mm (GPS + Cellular) Viền nhôm - Dây quấn thể thao',7990000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9mswo7c','2023-01-01','2023-01-02',5),
	   (N'Đồng hồ Nam Daniel Wellington dây Kim loại - Iconic Link 40mm DW00100482',N'Đồng hồ Nam Daniel Wellington dây Kim loại - Iconic Link 40mm DW00100482',8537000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj55jdxojyfg25','2023-01-01','2023-01-02',5),
	   (N'Đồng Hồ Casio Nam Dây Da MTP-1381L-1AVDF Chính Hãng',N'Đồng Hồ Casio Nam Dây Da MTP-1381L-1AVDF Chính Hãng',1189000,50,'https://down-vn.img.susercontent.com/file/05be61452ee86024a93ed314ef721f7f','2023-01-01','2023-01-02',5),
	   (N'Đồng Hồ Nam Dây Da Casio MTP-VT01L-2BUDF Chính Hãng',N'Đồng Hồ Nam Dây Da Casio MTP-VT01L-2BUDF Chính Hãng',805000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lomq9bvs3n63da','2023-01-01','2023-01-02',5),
	   (N'Đồng Hồ Casio Nữ Dây Nhựa Trẻ Trung W-218HC-4A2VDF Chính Hãng',N'Đồng Hồ Casio Nữ Dây Nhựa Trẻ Trung W-218HC-4A2VDF Chính Hãng',642000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loplhiyqu6tnd2','2023-01-01','2023-01-02',5),
	   (N'OLEVS Đồng hồ nữ chính hãng',N'OLEVS Đồng hồ nữ chính hãng',620000,50,'https://down-vn.img.susercontent.com/file/68fcce1f038ec9da314c5956ee85c8fe','2023-01-01','2023-01-02',5),
	   (N'MLB - Giày sneakers unisex cổ thấp Chunky Liner Mid Classic Monogram 3ASXLM13N-50BKS',N'MLB - Giày sneakers unisex cổ thấp Chunky Liner Mid Classic Monogram 3ASXLM13N-50BKS',3790000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-li1hmx1ieq4hda','2023-01-01','2023-01-02',4),
	   (N'Run Star Hike Black High Top | Giày Converse Thể Thao Đế Cao 166800C',N'Run Star Hike Black High Top | Giày Converse Thể Thao Đế Cao 166800C',22000000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-23020-dv41ql8liknv32','2023-01-01','2023-01-02',4),
	   (N'Giày Vans Old Skool Black White SKU VN000D3HY28',N'Giày Vans Old Skool Black White SKU VN000D3HY28',1572000,50,'https://down-vn.img.susercontent.com/file/0aa4ae42807e05273a8bb84a0f731c32','2023-01-01','2023-01-02',4),
--71
	   (N'Cameljeans Giày thể thao nữ L23A283039',N'Cameljeans Giày thể thao nữ L23A283039',764000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljpeqlfbx95pc9','2023-01-01','2023-01-02',4),
	   (N'Giày sneaker nam G2 Athena Mid cổ cao',N'Giày sneaker nam G2 Athena Mid cổ cao',420000,40,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmc5jnj36orja7','2023-01-01','2023-01-02',4),
	   (N'Giày da nam g2 kiểu boot cao',N'Giày da nam g2 kiểu boot cao',725000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmc5jnj2vg7z1d','2023-01-01','2023-01-02',4),
	   (N'Giày MLB Chunky Bigbal Boston Chính Hãng',N'Giày MLB Chunky Bigbal Boston Chính Hãng',1250000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lodx807j27xzce','2023-01-01','2023-01-02',4),
	   (N'Giày MLB Chunky Liner Monogram B Chính Hãng',N'Giày MLB Chunky Liner Monogram B Chính Hãng',1750000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyrcjwk59l772','2023-01-01','2023-01-02',4),
	   (N'Nike Air Force 1',N'Nike Air Force 1',1635000,50,'https://down-vn.img.susercontent.com/file/fd0ad48aa3e8e17703f41f1f3c7072f9','2023-01-01','2023-01-02',4),
	   (N'Louis Vuitton / Pochette Félicie túi dây xích ba trong một dành cho nữ / chính hãng 100%',N'Louis Vuitton / Pochette Félicie túi dây xích ba trong một dành cho nữ / chính hãng 100%',11300000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lezlj54jrafe23','2023-01-01','2023-01-02',6),
	   (N'Dior/Mini LADY Túi DIOR',N'Dior/Mini LADY Túi DIOR',36000000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf7pcr6d61cn63','2023-01-01','2023-01-02',6),
	   (N'Dior/túi xách BOOK TOTE',N'Dior/túi xách BOOK TOTE',27000000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf7qtfsjdy6vfc','2023-01-01','2023-01-02',6),
	   (N'MOSSDOOM Túi Đeo Chéo Nữ Thời Trang Phong Cách Hàn Quốc MDB2301',N'MOSSDOOM Túi Đeo Chéo Nữ Thời Trang Phong Cách Hàn Quốc MDB2301',229000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp7gzaa2nty44c','2023-01-01','2023-01-02',6),
--81
	   (N'MOSSDOOM Cặp đi học nhẹ thời trang mới',N'MOSSDOOM Cặp đi học nhẹ thời trang mới',339000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp7stgl2z6xj0b','2023-01-01','2023-01-02',6),
	   (N'MOSSDOOM Túi Xách Nữ Đơn Giản Chất Lượng Cao',N'MOSSDOOM Túi Xách Nữ Đơn Giản Chất Lượng Cao',299000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp7mv74kvv87c3','2023-01-01','2023-01-02',6),
	   (N'Balo nữ thời trang phong cách dễ thương YUUMY', N'Balo nữ thời trang phong cách dễ thương YUUMY',155000,50,'https://down-vn.img.susercontent.com/file/939330ad887ec202af1d8ed0fa97c0b6','2023-01-01','2023-01-02',6),
	   (N'Túi Xách Nhỏ JUNO Đeo Chéo Khóa Bấm',N'Túi Xách Nhỏ JUNO Đeo Chéo Khóa Bấm',545000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-22120-wtmckqb6blkv49','2023-01-01','2023-01-02',6),
	   (N'Túi Xách Nữ Thời TRang JUNO Cỡ Nhỏ Đeo Vai Họa Tiết Logo Jn', N'Túi Xách Nữ Thời TRang JUNO Cỡ Nhỏ Đeo Vai Họa Tiết Logo Jn',882000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lonfygewww9c93','2023-01-01','2023-01-02',6),
	   (N'Túi Xách Nữ thời Trang JUNO Cỡ Nhỏ Hình Hộp Đeo Vai Phối Tweed',N'Túi Xách Nữ thời Trang JUNO Cỡ Nhỏ Hình Hộp Đeo Vai Phối Tweed',784000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmzj33na4a8va2','2023-01-01','2023-01-02',6),
	   (N'Giá Đỡ Điện Thoại Hình Gấu Violent Dễ Thương',N'Giá Đỡ Điện Thoại Hình Gấu Violent Dễ Thương',72000,50,'https://down-vn.img.susercontent.com/file/b8add0dd00183cffe9fffbe129e20de6','2023-01-01','2023-01-02',7),
	   (N'Tượng gấu bê khay ôm tô decor Lily',N'Tượng gấu bê khay ôm tô decor Lily',495000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7qve1-lfqb2dus17ric3','2023-01-01','2023-01-02',8),
	   (N'Đèn Ngủ Hoa Tulip',N'Đèn Ngủ Hoa Tulip',119000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-23020-o1qietztcynv4a','2023-01-01','2023-01-02',8),
	   (N'Gương Toàn Thân - DEELY HOME',N'Gương Toàn Thân - DEELY HOME',1950000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lov8lueianobc4','2023-01-01','2023-01-02',8),
--91
	   (N'Kệ sách đa năng chất liệu gỗ MDF màu full trắng',N'Kệ sách đa năng chất liệu gỗ MDF màu full trắng',425000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd1h4md8rmn0a','2023-01-01','2023-01-02',8),
	   (N'Tượng Gấu ngồi bê khay',N'Tượng Gấu ngồi bê khay',395000,50,'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljduys1l431yff','2023-01-01','2023-01-02',8),
	   (N'Gương Toàn Thân DEELY HOME',N'Gương Toàn Thân DEELY HOME',3650000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkw4bbfgmf80a','2023-01-01','2023-01-02',8),
	   (N'Ghế nhựa gấp gọn thông minh chân sắt',N'Ghế nhựa gấp gọn thông minh chân sắt',319000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhn5daux316p15','2023-01-01','2023-01-02',8),
	   (N'Bàn Dã Ngoại Gấp Gọn Hợp Kim Nhôm',N'Bàn Dã Ngoại Gấp Gọn Hợp Kim Nhôm',577000,50,'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewl1fft5krb25','2023-01-01','2023-01-02',8),
	   (N'LENOVO LX-1 Set Máy ảnh Đa chức năng High Charity AF',N'LENOVO LX-1 Set Máy ảnh Đa chức năng High Charity AF',277000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7qves-lgomwh7kw53f15','2023-01-01','2023-01-02',9),
	   (N'Máy Chụp Hình Retro 48MP Quay phim 4K UltraHD',N'Máy Chụp Hình Retro 48MP Quay phim 4K UltraHD',1850000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lna1wwgn7fu5a5','2023-01-01','2023-01-02',9),
	   (N'Instax Mini 11 / 12 - Máy ảnh lấy liền Fujifilm',N'Instax Mini 11 / 12 - Máy ảnh lấy liền Fujifilm',195000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lipsaybntb7w44','2023-01-01','2023-01-02',9),
	   (N'Máy ảnh Canon G7X Mark II ',N'Máy ảnh Canon G7X Mark II ',14260000,50,'https://down-vn.img.susercontent.com/file/81a554237440ad71919ecae31bf16d93','2023-01-01','2023-01-02',9),
	   (N' Máy ảnh Canon EOS R5',N' Máy ảnh Canon EOS R5',119000000,50,'https://down-vn.img.susercontent.com/file/9c84d5f6ee2b6b8465128fd92b9835fc','2023-01-01','2023-01-02',9),
--101
	   (N'Bộ xương lắc lư nhảy múa, đồ chơi lên dây cót vui nhộn giúp giảm căng thẳng',N'Bộ xương lắc lư nhảy múa, đồ chơi lên dây cót vui nhộn giúp giảm căng thẳng',125000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbkw-lo6i0j38f9sh46','2023-01-01','2023-01-02',10),
	   (N'Con Vịt Nhảy Múa Đồ Chơi Vô Tri',N'Con Vịt Nhảy Múa Đồ Chơi Vô Tri',169000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lne28gt4b4dp38','2023-01-01','2023-01-02',10),
	   (N'Đồ Chơi Mô Hình 3d Nhảy Thẳng mini Không Có Tiếng Kêu Giảm Căng Thẳng Cho Trẻ Em',N'Đồ Chơi Mô Hình 3d Nhảy Thẳng mini Không Có Tiếng Kêu Giảm Căng Thẳng Cho Trẻ Em',32000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbl2-llltnpi67klf4c','2023-01-01','2023-01-02',10),
	   (N'Vịt / Hoa Hướng Dương Nhồi Bông Dễ Thương Dùng Trang Trí Ghế Sofa',N'Vịt / Hoa Hướng Dương Nhồi Bông Dễ Thương Dùng Trang Trí Ghế Sofa',116000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-22120-qgkskk8jl2kv76','2023-01-01','2023-01-02',10),
	   (N'Set mô hình Gấu trúc thùng giấy',N'Set mô hình Gấu trúc thùng giấy',90000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk801bcv2neq23','2023-01-01','2023-01-02',10),
	   (N'Mô hình Gấu trúc Panda vịt vàng ',N'Mô hình Gấu trúc Panda vịt vàng ',92000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8wj8lmzroz30','2023-01-01','2023-01-02',10),
	   (N'Kem Chống Nắng Chiết Xuất Rau Má Skin1004',N'Kem Chống Nắng Chiết Xuất Rau Má Skin1004',276000,50,'https://down-vn.img.susercontent.com/file/4f77ca38764c01dd7740b8078006bce5','2023-01-01','2023-01-02',11),
	   (N'Serum siêu cấp ẩm & giảm nếp nhăn LOreal Paris Revitalift Pure Hyaluronic Acid 1.5% 30ml',N'Serum siêu cấp ẩm & giảm nếp nhăn LOreal Paris Revitalift Pure Hyaluronic Acid 1.5% 30ml',359000,50,'https://down-vn.img.susercontent.com/file/vn-50009109-2b373951cc4f1044f2e4cbeef15571d9','2023-01-01','2023-01-02',11),
	   (N'Kem Nền Mịn Nhẹ Kiềm Dầu Fit Me Maybelline New York Matte Poreless Foundation 30ml',N'Kem Nền Mịn Nhẹ Kiềm Dầu Fit Me Maybelline New York Matte Poreless Foundation 30ml',199000,50,'https://down-vn.img.susercontent.com/file/vn-50009109-74f0be1e0d8ff17b72423e7b8dce9eaf','2023-01-01','2023-01-02',11),
	   (N'Kem dưỡng ngăn ngừa lão hóa, làm săn chắc da Vichy Liftactiv Collagen Specialist 50ml',N'Kem dưỡng ngăn ngừa lão hóa, làm săn chắc da Vichy Liftactiv Collagen Specialist 50ml',979000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-22100-m5y40i7trbive4','2023-01-01','2023-01-02',11),
--111
	   (N'Serum làm dịu da Super Soothing Cica & Aloe Jumiso/Jumiso Super Soothing Cica & Aloe facial serum 30 ml',N'Serum làm dịu da Super Soothing Cica & Aloe Jumiso/Jumiso Super Soothing Cica & Aloe facial serum 30 ml',310000,50,'https://down-vn.img.susercontent.com/file/sg-11134207-7rbk5-lp7k9bzjuh7p67','2023-01-01','2023-01-02',11),
	   (N'JUMISO Kem chống nắng Awe-Sun Airy-fit Daily Moisturizer Sunscreen SPF50+',N'JUMISO Kem chống nắng Awe-Sun Airy-fit Daily Moisturizer Sunscreen SPF50+',295000,50,'https://down-vn.img.susercontent.com/file/sg-11134207-7rbms-lp7kk5ftxhl2d0','2023-01-01','2023-01-02',11),
	   (N'Nước cân bằng JUMISO 125ml tinh chất rau má',N'Nước cân bằng JUMISO 125ml tinh chất rau má',295000,50,'https://down-vn.img.susercontent.com/file/6b76cc499c37358428e12e551aa23536','2023-01-01','2023-01-02',11),
	   (N'Tinh Chất Vitamin C Giúp Mờ Thâm Nám, Trắng Sáng',N'Tinh Chất Vitamin C Giúp Mờ Thâm Nám, Trắng Sáng',332000,50,'https://down-vn.img.susercontent.com/file/2590571b2d592ba9141c7301c118d9a4','2023-01-01','2023-01-02',11),
	   (N'Phấn Nước Cho Da Căng Bóng Romand Bare Water Cushion SPF38 PA+++',N'Phấn Nước Cho Da Căng Bóng Romand Bare Water Cushion SPF38 PA+++,',359000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-23020-ohn4chs487mv1c','2023-01-01','2023-01-02',11),
	   (N'Nước Tẩy Trang Loreal',N'Nước Tẩy Trang Loreal',99000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgdl9ru56lwq3a','2023-01-01','2023-01-02',11),
	   (N'COLORKEY Watery Matte Lip Tint',N'COLORKEY Watery Matte Lip Tint',122000,50,'https://down-vn.img.susercontent.com/file/vn-50009109-70dbab24b337e242ae7734f0e7f555c6','2023-01-01','2023-01-02',11),
	   (N'Giấy Note Ghi Chú 100 Tờ Giấy',N'Giấy Note Ghi Chú 100 Tờ Giấy',8500,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbl1-lmitr7exjsw530','2023-01-01','2023-01-02',12),
	   (N'Dao Rọc Giấy Lưỡi Thép SK5 Mini',N'Dao Rọc Giấy Lưỡi Thép SK5 Mini',20000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loce84ztfkv2f1','2023-01-01','2023-01-02',12),
	   (N'Gọt Bút Chì Chuốt Bút Chì Cute',N'Gọt Bút Chì Chuốt Bút Chì Cute',23000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbm0-lnih38eoatgm36','2023-01-01','2023-01-02',12),
--121
	   (N'Sổ Còng Sổ Tay A5 B5',N'Sổ Còng Sổ Tay A5 B5',69000,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnwl7lss4ry2f5','2023-01-01','2023-01-02',12),
	   (N'Bút bi nước mực gel 0.5mm',N'Bút bi nước mực gel 0.5mm',5500,50,'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmr1r5e6zen3a3','2023-01-01','2023-01-02',12),
	   (N'Bút Sáp Màu Hữu Cơ Cute ',N'Bút Sáp Màu Hữu Cơ Cute ',82000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbl2-ln8jw0w2ilv9b2','2023-01-01','2023-01-02',12)
GO

--Chèn dữ liệu mới vào bảng galery
INSERT INTO galery (level, img, product_id)
VALUES (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-i51z5ni30olvf8', 1),
       (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-81xn8ly30olv49', 1),
       (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-exq71yxtktlvf8', 2),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf5gkjt0353ea0', 2),
       (1, 'https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f', 3),
       (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-0qwb5epo50hv68', 3),
	   (1, 'https://down-vn.img.susercontent.com/file/2f4754cba01b090b26316fdf0fbffc71', 4),
       (2, 'https://down-vn.img.susercontent.com/file/f7671ed5567fe2b271bcd2fe0b9a670d', 4),
       (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-po7j7wmmhjnv6d', 5),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-lpgpktmmhjnv49', 5),
       (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lijy4lg57geq27', 6),
       (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj6lawrf6pxu64', 6),
	   (1, 'https://down-vn.img.susercontent.com/file/4c312f44880fc1866ba97f9590bcb2d4', 7),
       (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-s720wsp4mskv3f', 7),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lg0m4pbe0u801e', 8),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdy-lg0m4onsv4n797', 8),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lifr5pgus7o280', 9),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lifr5pgucrf6b7', 9),
	   (1, 'https://down-vn.img.susercontent.com/file/3a8cf1ebf3b7d5b4f732b1d597c5ee61', 10),
       (2, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', 10),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmh0837fw63j83', 11),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmh0837fxknz84', 11),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmh0837fqjtrdc', 11),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv3wx1eol2s21', 12),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv3wwynnjlu5b', 12),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv3wx1eokxu87', 12),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmhc772e9gine9', 13),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmpqlqaq4r1g19', 13),
	   (3, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmpqlqaq65lw0a', 13),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkb2cja81y9405', 14),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnlgul0g8mb1b0', 14),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llepppf709meb5', 15),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llepppf6yuvce5', 15),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhx781z4nw01db', 15),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmz-ln6smv78z79n1c', 16),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk0-lkoxl5cfbol4a7', 16),
	   (3, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk0-lkoxl6yyy0zb0b', 16),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm3acarcalen5c', 17),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llzylzuy2rj38d', 18),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llzylzuyb6xr02', 18),
	   (1, 'https://down-vn.img.susercontent.com/file/5f6055b8aa4e6ae2e23ea3bd89dbc7e6', 19),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134207-7rbml-lp7kk5ftw30mfc', 19),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-278dcv3l3dove0', 20),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-4mbpy14l3dov0b', 20),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lnjp38wpkf4805', 21),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lnjp38woa2dkda', 21),
	   (3, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lnjp38wov4w887', 21),
	   (1, 'https://down-vn.img.susercontent.com/file/0d9f7024b2e5c3d7ada1111df7397789', 22),
	   (2, 'https://down-vn.img.susercontent.com/file/110b33165867d14e2ba169037ab57d8a', 22),
	   (3, 'https://down-vn.img.susercontent.com/file/8d694ef18ee9a0a4758c87c8118dc467', 22),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lmscyqn60j6qbe', 23),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llu4fa6uz0gy72', 23),
	   (3, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llu4fa6uw7hg77', 23),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loe919bhpxo78b', 24),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loe919bhu5dj60', 24),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loe919bhsqt3d8', 24),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lon2f3ohmhjkbb', 25),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lon2f3ohl2z421', 25),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-ll68hjmnb9971c', 26),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbm2-ll68hlve13u48d', 26),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn3-llogx18hp4d55b', 27),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmq-llogx1wcq6z498', 27),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lklwk5lgjxeyd6', 28),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll2xb59ambwr25', 28),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llu15b9jr6xr9d', 28),
	   (4, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llu15b8zs06768', 28),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm8ltqcb7rof21', 29),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljl2i0vir5duf0', 29),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowcguu301n247', 30),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg82bkwxdpfb0a', 31),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg82bkwxf3zrbd', 31),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkul12apg5rvae', 31),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm8dtxr8mztr65', 32),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm8dtxr8psyn14', 32),
	   (3, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmsmvmnggz4v3f', 32),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-sgel8xky4pmvb2', 33),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-d0zu9fly4pmv8b', 33),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nltbw4f', 34),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nrfloa9', 34),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxdtnk0st7j8b', 35),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxdtnk0vmcfba', 35),
	   (1, 'https://down-vn.img.susercontent.com/file/8bede43e38bd49328c7ecd2ff40c8ea5', 36),
	   (2, 'https://down-vn.img.susercontent.com/file/10b97021ed63dc92c1aa647efbd0fade', 36),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9lec816', 37),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9pm1ka5', 37),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmz-lom18cajkxgg2e', 38),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn3-lom18b9d4qi251', 38),
	   (1, 'https://down-vn.img.susercontent.com/file/39c9bb82bbf0dbe7d573ebec7c0bbfac', 39),
	   (2, 'https://down-vn.img.susercontent.com/file/8b299a01bed582fe9b285405833dff97', 39),
	   (1, 'https://down-vn.img.susercontent.com/file/a3e6b06718e9445012997852c5c44145', 40),
	   (2, 'https://down-vn.img.susercontent.com/file/376a1782e3fa6f29bf64c5dc2b4593b1', 40),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nrfloa9', 41),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nltbw4f', 41),
	   (1, 'https://down-vn.img.susercontent.com/file/146d4d0a6a85cda8db8e25ea3ff1fdab', 42),
	   (2, 'https://down-vn.img.susercontent.com/file/44b0e19f108b44121c0185eae182b34d', 42),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22090-gxm7kfer3yhv46', 43),
	   (2, 'https://down-vn.img.susercontent.com/file/e625c9a19529704912dab4f16969ffa4', 43),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljfe634ub2to48', 44),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ljfe62q4wm3642', 44),
	   (1, 'https://down-vn.img.susercontent.com/file/60a0c70f542b0971a21e6208b5932f09', 45),
	   (2, 'https://down-vn.img.susercontent.com/file/0997ec1b7da0b8eea6e3133afdc49b17', 45),
	   (1, 'https://down-vn.img.susercontent.com/file/97ffdaf8cfa25f78d7d47b22be062785', 46),
	   (2, 'https://down-vn.img.susercontent.com/file/57b58fb035cea7d9b9e2876ebe1a8f17', 46),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmzkhxyyg6vsb4', 47),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmzkhxi14yjc78', 47),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmy67pm0gau7c4', 48),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lmy67qhn60gv4c', 48),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdi-ljnvhwe3mbre53', 49),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdd-ljnvhybgrfnidc', 49),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdh-ljnw1wbi4r2q14', 50),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qves-ljnw1xgkdukyd8', 50),
	   (3, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdi-ljnw1xxhp3l713', 50),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lklvxawwizfub9', 51),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lklvxawwn756ae', 51),
	   (1, 'https://down-vn.img.susercontent.com/file/7011256549fe40425e8fe83080fe3325', 52),
	   (2, 'https://down-vn.img.susercontent.com/file/5efbc82862f50b090e410775f27df311', 52),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loxtcqt91ljv81', 53),
	   (2, 'https://down-vn.img.susercontent.com/file/a13c70ff102044c054ebdf74c2da6fc9', 53),
	   (1, 'https://down-vn.img.susercontent.com/file/4085e1ad54085dc1639aa6cbe94e6cf5', 54),
	   (2, 'https://down-vn.img.susercontent.com/file/64b55a87c3d0911ac0b1b5230e905038', 54),
	   (1, 'https://down-vn.img.susercontent.com/file/c7d5c3daeaedb597205ecb237a3e53c1', 55),
	   (2, 'https://down-vn.img.susercontent.com/file/d0da2a5410dedd9b0cab0507a97967eb', 55),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-1a2b08odf6kv36', 56),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-1a2b08odf6kv36', 56),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgitkdrzch9m74', 57),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmjszve6513z68', 57),
	   (1, 'https://down-vn.img.susercontent.com/file/765d5ceb801824edafdce6af809ea606', 58),
	   (2, 'https://down-vn.img.susercontent.com/file/84ac8769fac2ca57adf4d730cde79fb3', 58),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9v8bc9a', 59),
	   (2, 'https://down-vn.img.susercontent.com/file/3b3f30298b9fccba8f7dad774478da27', 59),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln9ajpad8kz7fa', 60),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln9ajpad9zjn02', 60),
	   (1, 'https://down-vn.img.susercontent.com/file/32ee9bec17a459c1ed82f82dd9480204', 61),
	   (2, 'https://down-vn.img.susercontent.com/file/7f7f3e8115fae964a4d912a9c8da57b9', 61),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9pm1ka5', 62),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8b27j9lec816', 62),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljm9zzrdq4g2a2', 63),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj55je9c2wi493', 63),
	   (1, 'https://down-vn.img.susercontent.com/file/c088b74d9ad916796b2a803f31aedcfb', 64),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lotvk101zjt7a2', 64),
	   (1, 'https://down-vn.img.susercontent.com/file/c55bea80e458cf835cdaf32deaa63984', 65),
	   (2, 'https://down-vn.img.susercontent.com/file/e79fb8ebb15c6f3ecc76e4a6825f66a1', 65),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3jeigm0esz97', 66),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3jeiglxlo328', 66),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-itr8tha6r2iv2d', 67),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-zmilxq8frgkv44', 67),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj10ipg4pjo23b', 68),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lj10iq1hua4y6e', 68),
	   (1, 'https://down-vn.img.susercontent.com/file/5cc9403e9475daf567e7b519f940afe8', 69),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li2upw29azmac6', 69),
	   (1, 'https://down-vn.img.susercontent.com/file/e6d315e3c90a3ee943ae9ae8e309085a', 70),
	   (2, 'https://down-vn.img.susercontent.com/file/ccef022e98bc3a63a97cb87aab6a21aa', 70),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljpa3mz3swpp09', 71),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljpeqlfbynq57c', 71),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-jxg5bs5o9nlv99', 72),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-sbnt5a5o9nlv7b', 72),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-bbkbznvp0qjva9', 73),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnlpm9p18ustc1', 73),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyzss7e6z8d0f', 74),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyzss7e2rj187', 74),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyrcjwjznbff0', 75),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyrcjwk9haj90', 75),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-rbu6zz4iieovb8', 76),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-zx96pz4iieov3a', 76),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-les3p5wy26vr54', 77),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-les3q0t0w77u87', 77),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf706w9d507r29', 78),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf7pcr6cz0if80', 78),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6d7cp5zlhm81', 79),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6d7cp657reaf', 79),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llimb7oaxxv0e3', 80),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llilo6acdl3o99', 80),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-loui0dugciuk10', 81),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-loui0dugdxf0a1', 81),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-litwuzt7fx8s3a', 82),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-litwuzt7d43w90', 82),
	   (1, 'https://down-vn.img.susercontent.com/file/7b0cdeaa909f987b69a4dfddfabda2ce', 83),
	   (2, 'https://down-vn.img.susercontent.com/file/58df7afbc47795120324252d24accd3c', 83),
	   (1, 'https://down-vn.img.susercontent.com/file/dd5cffa2512ca108de41a40810ee44d3', 84),
	   (2, 'https://down-vn.img.susercontent.com/file/81620929328c00e1f87c340a7ad28bda', 84),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lonfygewyats5d', 85),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lonfygex3x3k85', 85),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmzj33n90ycf62', 86),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmzj33n8zjrz26', 86),
	   (1, 'https://down-vn.img.susercontent.com/file/d140f4ab6b1d89290a73dc6f1365e407', 87),
	   (2, 'https://down-vn.img.susercontent.com/file/fd87239336e04dc50ab40360934c90de', 87),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvcr-lfqaz7kt83p024', 88),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvff-lfqaz7gxdsjl97', 88),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhr8k3zl4hadbb', 89),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-smrf2j1tcynv7f', 89),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkw4bbg33ic0c', 90),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd1h4mdczbzf5', 91),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd1h4mcp3off1', 91),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qve2-li7ggbsplzwtaf', 92),
	   (2, 'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljduys1l2ohicc', 92),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkw4bbfgmetda', 93),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkw4bbpg7t073', 93),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhn5dawb101xca', 94),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewl1fi12bnu82', 95),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewl1fhh351z3f', 95),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvfk-lgomwhno8laj8e', 96),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvfg-lgomwktfm433ad', 96),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-j6zfgd35bqov70', 97),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-ohbach35bqov97', 97),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lipsaybmyeq4ee', 98),
	   (2, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lipsaybnduz04d', 98),
	   (1, 'https://down-vn.img.susercontent.com/file/8630c8c8a197189a5dc01dde9abcab22', 99),
	   (2, 'https://down-vn.img.susercontent.com/file/20e9a41538d7b66bc93c63fac86e59df', 99),
	   (1, 'https://down-vn.img.susercontent.com/file/5688d31cb25b8d17df9722ebb79fed47', 100),
	   (2, 'https://down-vn.img.susercontent.com/file/3858442ef0a3ebadca8747d1ad3fe898', 100),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmg-lo6i0jppidcv2b', 101),
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk3-lo6i0keejnf58d', 101),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-l5u11y9fhsjv4a', 102),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbku-llirkodj7cm30f', 103),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-7wjv5r5jl2kv48', 104),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk801bcv6v4240', 105),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8wj8ln6sj73e', 106),
	   (1, 'https://down-vn.img.susercontent.com/file/b712241dbc7414d1de21425fd603ce49', 107),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-d8s9mjgxobov7a', 108),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnktv2vu0kq5b5', 109),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lloslaxx8rfj89', 110),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-sektuo3ma6jv43', 111),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lew9tvblamhjbb', 112),
	   (1, 'https://down-vn.img.susercontent.com/file/628ee025208a816e92b2340df1c1bc29', 113),
	   (1, 'https://down-vn.img.susercontent.com/file/33ef3e2787002c111ac7802f1cc8d5d4', 114),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-wfzhdox487mv5b', 115),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134201-23030-z67xgst1vqov9f', 116),
	   (1, 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp9ofoh6jt1zdf', 117),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbki-llu5tt5v7dib47', 118),
	   (1, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljnpu2rlp43mfc', 119),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rblm-lnih38tdpabw53', 120),
	   (1, 'https://down-vn.img.susercontent.com/file/76748bdfdbbf4faeec3348c452c41139', 121),
	   (1, 'https://down-vn.img.susercontent.com/file/f6b20193985467a3057e2858a4c49f04', 122),
	   (1, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk5-ln8jw1cztulxdb', 123)
GO	

-- Add Data
INSERT INTO reviews (comment,created_at ,account_id, product_id)
VALUES 
(N'Tuyệt vời',								'2023-08-04', 1, 1),
(N'Chất lượng cao',							'2023-09-08', 2, 2),
(N'Rẻ',										'2023-02-10', 3, 3),
(N'Tuyệt vời',								'2023-08-15', 1, 2),
(N'Chất lượng sản phẩm tuyệt vời',			'2023-12-01', 3, 1),
(N'Thời gian giao hàng nhanh',				'2023-12-02', 3, 4),
(N'Sản phẩm y hình. Hài lòng',				'2023-11-01', 4, 3),
(N'Giao hàng nhanh quá chưa có đủ tiền nhận hàng','2023-10-01',4,2),
(N'Đóng gói cẩn thận',						'2023-10-10',3,1),
(N'Sản phẩm chất lượng',					'2023-01-01',3,2),
(N'Sản phẩm đẹp,chắc chắn,giao hàng nhanh đầy đủ','2023-02-02',3,3),
(N'Đã nhận hàng',							'2023-04-02',3,4),
(N'Đã nhận hàng của shop hỗm giờ mà quên đánh giá cho shop','2023-05-05',3,5),
(N'Vừa nhận hàng chưa bóc ra đã ngửi thấy mùi thơm rồi ưng lém hihiiiii', '2023-05-07',4,1),
(N'Mình mua sản phẩm của shop nhiều lần rồi, nên yên tâm về chất lượng sản phẩm lắm','2023-07-09',4,2),
(N'Thật sự ưng ý với giá này luôn nhaaaa',	'2023-11-02',4,3),
(N'Trời ơi mình mua đồ của shop không biết bao nhiêu lầm rồi mà lần nào cũng như lần nào ưng lắm ạ', '2023-08-11',4,4),
(N'Mẫu đơn giản nhưng đẹp',					'2023-02-02',4,5),
(N'Giao hàng sau 1 tuần đặt, đóng gói cẩn thận','2023-04-03',4,1),
(N'Sản phẩm xink và có quà tặng nữa nè',	'2023-01-09',4,3),
(N'Đóng gói cẩn thận trong hộp xịn xò 😚 sẽ quay lại ủng hộ tiếp','2023-10-01',3,1),
(N'Sản phẩm đúng với hình ảnh mà shop cung cấp','2023-11-29',3,3),
(N'Giao hàng nhanh, shipper thân thiện',	'2023-09-20',3,1),
(N'Săn sale giá rẻ nhưng mà chất lượng không hề rẻ', '2023-07-15',3,2),
(N'Sốp giao hàng cực nhanh luôn, đóng gói rất đẹp','2023',3,1),
(N'Lần thứ 2 mua hàng của shop mà chất lượng vẫn như lần đầu tiên','2023-10-23',4,2),
(N'Chất liệu sản phẩm và tốc độ giao hàng khỏi chê nhé','2023-11-02',4,1),
(N'Rất đáng để mua í chắc tui phải mua hết tất cả các màu của mẫu này quáaa', '2023-08-19',3,4),
(N'Hàng oke nha có túi zip chống nước', '2023-07-09',3,1),
(N'Xinh nha mọi ngừi ơi xinh vãi shop đáng iuu 10 điểm k có nhưng rất yêuu','2023-09-03',1,1),
(N'Săn giá trên live 93k rất đẹp',		'2023-12-02',1,2),
(N'Shop chuẩn bị hàng và giao hàng khá nhanh đóng gói cẩn thận và đẹp mắt','2023-03-15',1,2),
(N'Shop phục vụ rất tốt. Rất đáng tiền','2023-01-07',1,3),
(N'Ghế đẹp phù hợp giá tiền, nên mua nha mọi người ','2023-03-25',1,4)
GO

INSERT INTO order_status (status)
VALUES
(N'Chờ xác nhận'),
(N'Đang giao'),
(N'Đã giao'),
(N'Đã hủy')
GO

INSERT INTO orders (created_at, status_id, total_amount, account_id, fullname,  phone, city, district, wards, specific_address, discount_id)
VALUES
('2023-01-04', 1, 950000, 1, N'Minh Thư', '0123456789', N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123', null),
('2023-01-04', 2, 1900000, 2, N'Minh Thư', '0123456789', N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',  null),
('2023-09-29', 1, 40000,  3, N'Thái Dương', '0233438893',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',  null),
('2023-08-29', 2, 1036800,  3, N'Quốc Hào', '0895422101',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',  1),
('2023-02-16', 1, 589000, 3, N'Tú Anh', '0908055625',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-03-11', 1, 578000,3,N'Bình Minh','0323366710',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-02-04', 2, 816000,3,N'Phương Ly','0214115778',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',2),
('2023-05-05', 3, 1000000, 3,N'Triệu Vân','0112247854',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-01-01', 3, 1562400 , 3, 'Minh Anh','0221160981',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',  1),
('2023-10-12', 3,  400000, 3, N'Minh Hằng','0551148770',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-12-07', 4, 2041000,3, N'Phương Vy','0117544100',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',2),
('2023-12-06', 4,1984000,3,N'Minh Trang','0987456478', N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-04-23', 2,395000,3,N'Thanh Tuấn','02236874112',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-05-01',3,338000,3,N'Bảo Ngọc','0112354770',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-07-29',3,276000,3,N'Bảo Lâm','0211447421',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',null),
('2023-11-09',1,162000,3,N'Bảo Nhi','0221032554',N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',1)
GO

INSERT INTO order_details (order_id, product_id, quantity, amount)
VALUES
(1, 1, 1, 950000),
(2, 1, 2, 1900000),
(3, 5, 2, 30000),
(3, 4, 1, 10000),
(4, 20, 10, 340000),
(4, 32, 1, 812000),
(5, 25, 1, 589000),
(6, 21, 2, 578000),
(7, 18, 1,370000),
(7, 19, 2,650000),
(8, 8,  2, 1000000),
(9 ,21, 2,596000),
(9, 23, 2,1140000),
(10, 9, 2, 400000),
(11,14, 2, 1440000),
(11, 15, 2, 1152000),
(12, 24, 5, 1395000),
(12, 25, 1, 589000),
(13, 92,1,395000),
(14,102,2,338000),
(15,107,1,276000),
(16,105,2,162000)
GO
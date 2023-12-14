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
	(N'Nguyễn Bảo Ngọc',		'0235799112',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường 4',	N'Khu phố 4',	1,	3),
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
(N'Áo khoác len MIKENCO Monogram cardigan',	N'Sản phẩm:Áo khoác len MIKENCO Monogram cardigan',							9500000,	50, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-i51z5ni30olvf8', '2023-09-03', '2023-09-03', 3),
       (N'Áo khoác nam MIKENCO Fancy varsity',		N'Sản phẩm:Áo khoác nam MIKENCO Fancy varsity',								13000000,	30, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-exq71yxtktlvf8', '2023-09-03', '2023-09-03', 3),
	   (N'Giày_Jordan',								N'Giày Jordan Paris 2 Phối Màu Nhẹ Nhàng Bản sịn Đủ Size Nam Nữ',			9500000,	50, 'https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f', '2023-09-03', '2023-09-03', 4),
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
	   (N'Converse Chuck Taylor All Star Move Canvas Platform Women Sneakers-Black/White/White', N'Converse Chuck Taylor All Star Move Canvas Platform Women Sneakers-Black/White/White', 16150000,50,'https://down-vn.img.susercontent.com/file/sg-11134201-7rbly-lom18b0hgc01f9','2023-01-01','2023-01-02',4)
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
	   (2, 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn3-lom18b9d4qi251', 38)
GO

-- Add Data

INSERT INTO reviews (comment,created_at ,account_id, product_id)
VALUES 
(N'Tuyệt vời','2023-08-04', 1, 1),
(N'Chất lượng cao','2023-09-08', 2, 2),
(N'Rẻ','2023-02-10', 3, 3),
(N'Tuyệt vời','2023-08-15', 1, 2)
GO

INSERT INTO order_status (status)
VALUES
(N'Cho xac nhan'),
(N'Dang giao'),
(N'Da giao'),
(N'Da huy')
GO

INSERT INTO orders (created_at, status_id, total_amount, account_id, fullname,  phone, city, district, wards, specific_address, discount_id)
VALUES
('2023-08-04', 1, 9500000, 1, N'Minh Thư', '0123456789', N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123', null),
('2023-08-04', 2, 13000000, 2, N'Minh Thư', '0123456789', N'Thành-phố-Hồ-Chí-Minh-i-79', N'Quận-1-i-760', N'Phường-Tân-Định-i-26734', N'A123',  null)
GO

INSERT INTO order_details (order_id, product_id, quantity, amount)
VALUES
(1, 1, 1, 9500000),
(2, 1, 2, 13000000)
GO
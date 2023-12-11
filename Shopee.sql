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
  [name_product] nvarchar(50),
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
	('minthu1203@gmail.com',		'mthusayhi123',	'71f4f6a4107717d7290a7af99563eb534f41c44c50f055835f97b8abec26393d',	N'Minh Thư','0252488655',	0,	'2006-1-10',	'https://i.pinimg.com/564x/83/0e/31/830e314f163e3fc5ebb071f3db124c93.jpg',		'2020-02-02',	'2022-12-12','user'),
	('vuthanhtrung@gmail.com',	'trung123',	'69596fe31f8b339800ca34029a2dc3aa14710b616b043e896e091db62203edf4', N'Trung',		'0332414841',	0,	'2003-04-09',	'https://i.pinimg.com/736x/8c/8b/8a/8c8b8a236086a28253dda4bf407bb3bb.jpg',		'2019-05-17',	'2022-04-23','user'),
	('nguyenhoangyen@gmail.com',	'yen123',	'c6b83ce863d571f7a51291d06a872ac070a8f9c95666cc39d44ef8571c3c65a6',	N'Yến',	'0211648711',	1,	'1999-04-24',	'https://i.pinimg.com/564x/b9/fb/93/b9fb93a07520a543e1b3c9a017d4b2da.jpg',		'2015-01-09',	'2020-10-10','user')
GO

-- Chèn dữ liệu mới vào bảng addresses
INSERT INTO addresses ([fullname],  [phone],  [city],  [district],  [wards],  [specific_address],  [is_default],  [account_id])
VALUES
	(N'Phạm Trần Minh Thư',		'0247259910',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-1-i-760',	N'Phường-Tân-Định-i-26734',	N'123 Khu phố 1',	1,	1),
	(N'Nguyễn Ngọc Bảo Anh',	'0123599522',	N'Thành-phố-Hồ-Chí-Minh-i-79',	N'Quận-12-i-761',	N'Phường-Trung-Mỹ-Tây-i-26785',	N'123 Khu phố 1',		0,	1),
	(N'Nguyễn Hoàng Duy',	'0575114554',	N'Thành phố HCM',	N'Quận 3',	N'Phường 3',	N'Khu phố 3',		1,	2),
	(N'Nguyễn Bảo Ngọc',		'0235799112',	N'Thành phố HCM',	N'Quận 4',	N'Phường 4',	N'Khu phố 4',	1,	3),
	(N'Trương Kiều Oanh',	'0974757373',	N'Thành phố HCM',	N'Quận 5',	N'Phường 5',	N'Khu phố 5',		1,	4),
	(N'Nguyễn Bích Quyên',	'0154448487',	N'Thành phố HCM',	N'Quận 6',	N'Phường 6',	N'Khu phố 6',		1,	5),
	(N'Nguyễn Hoàng Yến',	'0148481533',	N'Thành phố HCM',	N'Quận 7',	N'Phường 7',	N'Khu phố 7',		0,	5)
GO

-- Chèn dữ liệu mới vào bảng categories
INSERT INTO categories ([name],  [description], [created_at], [updated_at], [deleted_at]) VALUES
  (N'Điện thoại',					 N'Danh mục sản phẩm điện thoại di động', '2023-01-01', '2023-01-01', NULL),
  (N'Laptop',						 N'Danh mục sản phẩm laptop',				'2023-03-08','2023-03-08',NULL),
  (N'Quần áo nam form rộng',		 N'Danh mục sản phẩm quần áo nam',			 '2023-01-03', '2023-01-03', NULL),
  (N'Quần áo nữ',					 N'Danh mục sản phẩm quần áo nữ', '2023-01-04', '2023-01-04', NULL),
  (N'Giày thể thao',				 N'Danh mục sản phẩm giày thể thao', '2023-01-05', '2023-01-05', NULL),
  (N'Đồng hồ',						 N'Danh mục sản phẩm đồng hồ', '2023-01-06', '2023-01-06', NULL),
  (N'Túi xách',						 N'Danh mục sản phẩm túi xách và balo', '2023-01-07', '2023-01-07', NULL),
  (N'Phụ kiện điện thoại',			 N'Danh mục sản phẩm phụ kiện điện thoại', '2023-01-08', '2023-01-08', NULL),
  (N'Phụ kiện nội thất',			 N'Danh mục sản phẩm nội thất', '2023-01-09', '2023-01-09', NULL),
  (N'Máy ảnh',						 N'Danh mục sản phẩm máy ảnh và máy quay phim', '2023-01-10', '2023-01-10', NULL);

  --Chèn dữ liệu mới vào bảng discount
INSERT INTO discount ([name], [description], [discount_percent], [is_active], [created_at], [updated_at])
VALUES ('XTRA', 'Voucher free ship', 10, 1, '2023-09-03', '2023-09-04'),
       ('Shop', 'VoucherShop', 20, 1, '2023-09-03', '2023-09-04');
GO

--Chèn dữ liệu mới vào bảng products
INSERT INTO products ([name_product], [description], [price], [quantity], [img], [created_at], [updated_at], [category_id])
VALUES (N'Áo khoác len MIKENCO Monogram cardigan',	N'Sản phẩm:Áo khoác len MIKENCO Monogram cardigan',							9500000,	50, 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-i51z5ni30olvf8', '2023-09-03', '2023-09-03', 1),
       (N'Áo khoác nam MIKENCO Fancy varsity',		N'Sản phẩm:Áo khoác nam MIKENCO Fancy varsity',								13000000,	30, 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-exq71yxtktlvf8', '2023-09-03', '2023-09-03', 2),
	   (N'Giày_Jordan',								N'Giày Jordan Paris 2 Phối Màu Nhẹ Nhàng Bản sịn Đủ Size Nam Nữ',			9500000,	50, 'https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f', '2023-09-03', '2023-09-03', 3),
       (N'Bút dạ quang 6 màu highlight',				N'Văn phòng phẩm LENG KENG chuyên cung cấp những vật phẩm đơn giản phục vụ cho các hoạt động văn phòng như: giấy in, sổ, giấy note',		10000,	30, 'https://down-vn.img.susercontent.com/file/2f4754cba01b090b26316fdf0fbffc71', '2023-09-03', '2023-09-03', 4),
	   (N'Sổ còng A4 A5 B5',							N'sổ ghi chép, take notes, bujo CS0',										15000,		50, 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-po7j7wmmhjnv6d',  '2023-09-03', '2023-09-03', 5),
       (N'Áo Baby Tee',								N'Áo Thun form nữ',															100000,		30, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lijy4lg57geq27', '2023-09-03', '2023-09-03', 6),
	   (N'Gấu Bông MINISO We Bare Bears ',			N'Gấu Bông Lets Bare Bear Fun Pose Miniso cute mềm mại chính hãng',			350000,		50, 'https://down-vn.img.susercontent.com/file/4c312f44880fc1866ba97f9590bcb2d4', '2023-09-03', '2023-09-03', 7),
       (N'Đệm Ngồi Bệt',								N'Ghế Dercor mẫu mới Siêu Ngộ Nghĩnh Vải Nỉ nhung mềm mịn',					500000,		30, 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lg0m4pbe0u801e', '2023-09-03', '2023-09-03', 8),
	   (N'Kem Nền Fit Me',							N'Tint C Tươi Mướt Chống Nắng với Vitamin C & SPF50 Maybelline',				200000,		50, 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lifr5pgus7o280', '2023-09-03', '2023-09-03', 9),
       (N'Túi Vải Đeo Vai',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10),
	   (N'Túi Vải',							N'Dạng form túi lớn',														50000,		20, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10),
	   (N'Túi Vải Lớn',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10),
	   (N'Áo thun',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10),
	   (N'Áo hoodie',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10),
	   (N'Túi Vải Đeo Vai',							N'Dạng form túi lớn',														50000,		30, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', '2023-09-03', '2023-09-03', 10);
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
       (2, 'https://down-vn.img.susercontent.com/file/d3fe7006b6d4ad4ec63b970732d7dc5a', 10);
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
('2023-08-04', 1, 9500000, 1, N'Minh Thư', '0123456789', N'HCM', N'District 1', N'Abc', N'A123', null),
('2023-08-04', 2, 13000000, 2, N'Minh Thư', '0123456789', N'HCM', N'District 1', N'Abc', N'A123',  null)
GO

INSERT INTO order_details (order_id, product_id, quantity, amount)
VALUES
(1, 1, 1, 9500000),
(2, 1, 2, 13000000)
GO

select * from categories
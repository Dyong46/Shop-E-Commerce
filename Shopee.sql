CREATE TABLE [roles] (
  [id] char(10) PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(30)
)
GO

CREATE TABLE [accounts] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [email] varchar(30) UNIQUE,
  [username] varchar(30) UNIQUE,
  [password] varchar(100),
  [firstname] nvarchar(30),
  [lastname] nvarchar(30),
  [phone] varchar(11),
  [gender] bit,
  [date_of_birth] date,
  [img] varchar(255),
  [token] varchar(255),
  [created_at] date,
  [updated_at] date,
  [deleted_at] date,
  [role_id] char(10)
)
GO

CREATE TABLE [addresses] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [fullname] nvarchar(50),
  [phone] varchar(11),
  [city] nvarchar(20),
  [district] nvarchar(20),
  [wards] nvarchar(20),
  [specific_address] nvarchar(100),
  [is_default] bit,
  [account_id] integer
)
GO

CREATE TABLE [categories] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(50),
  [img] varchar(255),
  [desc] nvarchar(255),
  [created_at] date,
  [updated_at] date,
  [deleted_at] date
)
GO

CREATE TABLE [discount] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [desc] nvarchar(255),
  [discount_percent] integer,
  [is_active] bit,
  [created_at] date,
  [updated_at] date
)
GO

CREATE TABLE [products] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name_product] nvarchar(50),
  [desc] nvarchar(255),
  [price] long,
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
  [status_is] integer,
  [account_id] integer,
  [discount_id] integer
)
GO

CREATE TABLE [order_details] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [product_id] integer,
  [order_id] integer,
  [quantity] integer,
  [price] long
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

ALTER TABLE [orders] ADD FOREIGN KEY ([status_is]) REFERENCES [order_status] ([id])
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([account_id]) REFERENCES [accounts] ([id])
GO

ALTER TABLE [orders] ADD FOREIGN KEY ([discount_id]) REFERENCES [discount] ([id])
GO

ALTER TABLE [order_details] ADD FOREIGN KEY ([product_id]) REFERENCES [products] ([id])
GO

ALTER TABLE [order_details] ADD FOREIGN KEY ([order_id]) REFERENCES [orders] ([id])
GO

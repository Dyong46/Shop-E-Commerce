# Shopee-Clone - Thương mại điện tử

Đây là dự án được thực hiện bởi nhóm 1 mã lớp PRO2112.03.
Các thành viên bao gồm: Vũ Thái Dương, Phạm Trần Minh Thư, Trương Thanh Toàn, Nguyễn Thành Nam, Lê Như Hoàng
Với sự dẫn dắt của giảng viên hướng dẫn: Giảng viên Cao Hoàng Phúc

Dự án Shopee-Clone là một phiên bản tương tự trang Shopee, một nền tảng thương mại điện tử nổi tiếng. Dự án này sử dụng ReactJS cho phía frontend và Spring Boot cho phía backend. Mục tiêu của dự án là cung cấp một trải nghiệm mua sắm trực tuyến tương tự với các tính năng chính như hiển thị sản phẩm, thêm vào giỏ hàng, thanh toán và quản lý đơn hàng.

## Chức năng chính

### 1. User

**Hiển thị danh sách sản phẩm**: Hiển thị danh sách các sản phẩm với hình ảnh, giá, và tên sản phẩm.

**Tìm kiếm và lọc sản phẩm**: Cho phép người dùng tìm kiếm sản phẩm theo từ khóa và lọc theo các tiêu chí như loại sản phẩm, giá, đánh giá, v.v.

**Chi tiết sản phẩm**: Hiển thị thông tin chi tiết của một sản phẩm cụ thể khi người dùng nhấp vào.

**Thêm vào giỏ hàng**: Người dùng có thể thêm sản phẩm vào giỏ hàng và quản lý số lượng.

**Quản lý giỏ hàng**: Hiển thị danh sách sản phẩm trong giỏ hàng, cho phép người dùng thay đổi số lượng hoặc xóa sản phẩm.

**Thanh toán**: Cho phép người dùng thực hiện thanh toán cho các sản phẩm trong giỏ hàng thông qua các phương thức thanh toán khác nhau.

**Quản lý đơn hàng**: Hiển thị danh sách các đơn hàng đã đặt và trạng thái của chúng.

### 2. Admin

**Dashboard**: Cung cấp tổng quan về các chỉ số chính như tổng doanh số bán hàng, số lượng sản phẩm hoạt động, đơn hàng mới. Hiển thị đồ thị và biểu đồ cho việc hiển thị trực quan hơn.

**Quản lý Sản phẩm**: Thêm, sửa hoặc xóa sản phẩm từ kho hàng. Quản lý danh mục sản phẩm, thuộc tính và giá cả.

**Quản lý Đơn hàng**: Xem và quản lý đơn hàng, bao gồm chi tiết đơn hàng, thông tin khách hàng và trạng thái đơn hàng. Cập nhật trạng thái đơn hàng (ví dụ: đang xử lý, đã gửi, đã giao) bằng cách thủ công.

**Quản lý Người dùng**: Thêm, sửa hoặc xóa người dùng. Xem tài khoản người dùng và lịch sử hoạt động của họ. Tạm dừng, kích hoạt lại hoặc xóa tài khoản người dùng khi cần thiết.

**Khuyến mãi và Giảm giá**: Tạo và quản lý các khuyến mãi đặc biệt, mã giảm giá và sự kiện giảm giá. Thiết lập các quy tắc áp dụng giảm giá hoặc khuyến mãi.

**Phân tích và Báo cáo**:Tạo báo cáo về doanh số bán hàng, doanh thu, sản phẩm phổ biến, v.v.

## Công cụ và kỹ thuật

**Frontend**: Reactjs, Axios, TailwindCSS, ReactQuery, ReachHookForm, ...

**Backend**: Spring Boot, Spring Secutiry, Swagger, JPA Hibernate, ...

**Database**: MS SQL Server

## Installation

Use the git clone to download project

```bash
git clone https://github.com/Dyong46/Shopee.git
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

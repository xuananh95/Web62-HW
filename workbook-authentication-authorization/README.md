#Workbook 2 - Authentication + Authorization

## API documentation
- Authentication: /auth
  - login: POST /auth/login
  - register: POST /auth/register
  - register-confirm: POST /auth/register-confirm (+ register token) (If user doesn't confirm their register => permission = GUEST)
- Movie: /films
  - get a list of all movies: GET /films
  - add new movie: POST /films (admin only)
  - update movie: PUT /films/:id (admin only)
  - delete movie: DEL /films/:id (admin only) 

## Permission

### Người dùng khách (GUEST):

- Chỉ có thể truy cập các bộ phim được đánh dấu miễn phí.

### Người dùng với tài khoản thành viên (MEMBER):

- Để trở thành member bạn phải đăng ký với hệ thống thông qua API /auth/register (username hoặc email đăng kí phải là duy nhất)
- Bạn phải đăng nhập với tài khoản đã đăng ký để truy cập các bộ phim trả phí

### Admin hệ thống (ADMIN):

- Được cấp sẵn tài khoản admin
- Có thể truy cập tất cả các bộ phim (cả miễn phí và trả phí)
- Có thể xem, thêm, sửa, xoá các bộ phim của nền tảng

### Nâng cao

- Khi người dùng đăng ký với hệ thống qua API, người dùng sẽ nhận được JWT token với thời gian expire ngắn (1 - 2m), người dùng sẽ gửi thêm 1 API kèm theo đoạn token để xác thực quá trình đăng ký
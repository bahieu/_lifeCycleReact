#  Life Cycle React 

## Component Life cycle (Vòng đời của 1 component)

- Có 3 giai đoạn:
    -  Được tạo ra (Mounting)
    - Qua nhiều thay đổi (Updating)
    -  Bị hủy bỏ (Unmounting)
 
### constructor()
- Được phép dùng
- Nhớ có super(props)
- Khai báo state
- Định nghĩa properties của component

### componentDidMount()

- Được phép dùng
- Khởi tạo dữ liệu cho component: call API, biến đổi dữ liệu, update state
- Gửi tracking page view (GA, FacebookPixel,...)

### componentWillUnmount()

- Được phép dùng
- Clear timeout or interval nếu có dùng
- Reset dữ liệu trên redux nếu cần thiết


-------------------------------------------------------------

 ## Mounted:

- Là thuật ngữ nói đến lúc đưa component vào sử dụng

## Unmounted

- Là thời điểm gỡ component ra không sử dụng nưadx
 
------------------------------------------------------------



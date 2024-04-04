//hook
//HOC
//render props


useCallback
-React useCallback()là một hook ghi nhớ định nghĩa hàm và đảm bảo tính toàn vẹn tham chiếu của nó giữa các lần hiển thị lại của thành phần React. Nó hoạt động bằng cách chấp nhận hàm làm đối số, ghi nhớ nó và sau đó trả về hàm đã ghi nhớ. Sau đó, hàm được ghi nhớ có thể được truyền xuống các thành phần con và được gọi từ đó.
-useCallback nhận vào hai tham số: 
+hàm mà phiên bản memoized của nó sẽ được lưu trữ
+một mảng dependencies - những giá trị nào khi thay đổi sẽ làm cho useCallback tạo lại phiên bản mới của hàm
-khi useCallback được sử dụng, React sẽ tạo một phiên bản memoized của hàm được truyền vào và trả về nó. Nếu dependencies không thay đổi, useCallBack sẽ trả về phiên bản memoized nó đã ghi nhớ trước đó, nếu dependencies thay đổi, nó sẽ tạo lại phiên bản mới của hàm và ghi nhớ nó.

sơ đồ tư duy : 
https://drive.google.com/file/d/1lA7FiqdyPW9thqjIdCNyuF8O3qXAV44V/view?usp=sharing
// Các toán tử so sánh

// 1. So sánh bằng (==)
let hoTenDong = "Đông Trần"
let hoTen = "Đông Sun"

let diemVan = 9
let diemToan = "9"

let ketQuaSoSanh = diemToan == diemVan
console.log(ketQuaSoSanh)

// 2. So sánh khác (!=) khác => true, giống => false
let ketQuaSoSanhKhac = diemVan != diemToan
console.log(ketQuaSoSanhKhac)

// 3. So sánh bằng giá trị và kiểu (===)
let ketQuaSoSanhBangGiaTriVaKieu = diemToan === diemVan
console.log(ketQuaSoSanhBangGiaTriVaKieu)

// 4. So sánh khác giá trị hoặc kiểu (!==)
let ketQuaSoSanhKhacGiaTriHoacKieu = diemVan !== diemToan
console.log(ketQuaSoSanhKhacGiaTriHoacKieu)

console.log(4 > 5)

// Toán tử phủ định
let emDung = false
console.log(!emDung)

// Toán tử &&
let diemTrungBinh = 8
let thanhTich = "Khá"
let diemVungMien = 5
// Điểm trung bình lớn hơn hoặc bằng 8 và thành tích đạt giỏi, điểm vùng miền > 3 thì trả true còn tất cả trường hợp khác là false
let ketQua1 = diemTrungBinh >= 8 && thanhTich == "Giỏi" && diemVungMien > 3
console.log(ketQua1)

// Toán tử ||
let ketQua2 = diemTrungBinh >= 8 || thanhTich == "Giỏi" || diemVungMien > 3
console.log(ketQua2)

// Cấu trúc điều kiện (if)
let monSu = 9
let monAnh = 6
let monToan = 10

// Kiểm tra giúp trung bình 3 môn nếu lớn hơn 8 thì có một thông báo sinh viên đạt xuất sắc còn không thì ko xử lý
let diemTrungBinhSinhVien = (monAnh + monToan + monSu) / 3
if (diemTrungBinhSinhVien > 8) {
  console.log("Sinh viên này đạt xuất sắc")
}

// Yêu cầu bài tập tính tiền phạt thẻ tín dụng
// Thực hiện tạo 1 sự kiện click dành cho nút button tính tiền
// Truy xuất dữ liệu người dùng nhập và lưu trữ để tính toán
// Với 2 giá trị từ người dùng nhập vào, tính toán xem người dùng có bị phạt tiền hay không
// Nếu có thì áp dụng công thức số tiền còn thiếu * 1.5% để tính số tiền bị phạt
// chuyển đổi số tiền bị phạt thành kiểu tiền tệ và hiển thị lên giao diện người dùng
document.querySelector(".btn-dark").onclick = function () {
  // Truy xuất dữ liệu
  let soTienVay = document.getElementById("soTienVay").value * 1
  let soTienDaTra = document.getElementById("soTienDaTra").value * 1

  // xử lí với vấn đề trả thiếu
  let soTienConLai = soTienVay - soTienDaTra
  let soTienPhatTheoThang = 0
  //   if (soTienConLai > 0) {
  //     soTienPhatTheoThang = soTienConLai * (1.5 / 100)
  //     document.querySelector("#ketQua").innerHTML =
  //       soTienPhatTheoThang.toLocaleString("vi", {
  //         style: "currency",
  //         currency: "VND",
  //       })
  //   }
  //   console.log(soTienPhatTheoThang)

  // TH2 : Khách hàng đã trả hết tiền vay hoặc trả dư
  // Thực hiện thông báo cho khách hàng về việc đã trả hết vd : Khách hàng không còn khoản nợ tại đây
  // soTienConLai = 0 soTienConLai < 0
  //   if (soTienConLai <= 0) {
  //     document.querySelector("#ketQua").innerHTML =
  //       "Khách hàng không còn khoản nợ tại đây"
  //   }

  // Sử dụng cấu trúc điều kiện if else để kiểm tra các TH xảy ra
  let theP = document.querySelector("#ketQua")
  if (soTienConLai > 0) {
    soTienPhatTheoThang = soTienConLai * (1.5 / 100)
    theP.innerHTML = soTienPhatTheoThang.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })
  } else {
    // xử lí những hành động khi soTienConLai < 0 hoặc = 0
    theP.innerHTML = "Khách hàng không còn khoản nợ tại đây"
  }
}

// 50 = 40 * soTienLuong + 10 * soTienLuong * 1.5
// Tạo một chức năng xử lí khi người dùng bấm vào tính tiền lương sẽ trả kết quả tiền lương trong tuần của họ
// dựa số giờ làm, lưu ý nếu làm trên 40h thì công thức tính sẽ là:  soTien * 40 + soTien * số giờ làm trên 40 * 1.5
document.querySelector("#baiTap2 .btn-success").onclick = function () {
  // truy xuất dữ liệu
  let soTien = document.getElementById("soTien").value * 1
  let soGioLam = document.getElementById("soGioLam").value * 1
  // TH1 : làm việc từ 0 đến 40t ==> soTien * soGioLam
  // TH2: làm việc trên 40t ==> soTien * 40 + (soGioLam - 40) * soTien * 1.5
  let tongTienLuong = 0
  if (soGioLam > 40) {
    tongTienLuong = soTien * 40 + (soGioLam - 40) * soTien * 1.5
  } else {
    // 0 < soGioLam <= 40
    tongTienLuong = soTien * soGioLam
  }
  // Xử lí đưa dữ liệu lên giao diện
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tổng tiền lương tuần này của bạn là: ${tongTienLuong.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`
}

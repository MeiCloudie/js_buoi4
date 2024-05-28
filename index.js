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

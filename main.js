/**
 * Bài 1: TÍNH LƯƠNG NHÂN VIÊN
 * 
 * Đầu vào:
 * - Lương 1 ngày
 * - Ngày làm
 * 
 * Xử lý:
 * - Tạo biến luong1Ngay cho Lương 1 ngày và tạo biến ngayLam cho Ngày làm
 * - Tạo biến luong cho tiền lương nhân viên
 * - Gán giá trị cho luong1Ngay và ngayLam
 * - Sử dụng công thức : luong = luong1Ngay * ngayLam
 * 
 * Đầu ra:
 * - lương nhân viên
 */
var luong1Ngay = document.getElementById('luong1Ngay');
console.log(luong1Ngay);
var ngayLam = document.getElementById('ngayLam');
var result = document.getElementById('result');
var luong;

function XuLy(){
    luong = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(luong1Ngay.value * ngayLam.value);
    result.innerHTML = luong;
}

/**
 * Bài 2: Tính giá trị trung bình
 * 
 * Đầu vào:
 * - 5 số thực
 * 
 * Xử lý:
 * - Tạo biến cho 5 số thực: st1, st2, st3, st4, st5
 * - Tạo biến cho giá trị trung bình: tb
 * - Gán giá trị cho 5 số thực vào st1, st2, st3, st4, st5
 * - Sử dụng công thức: tb = (st1 + st2 + st3 + st4 + st5) / 5
 * 
 * Đầu ra:
 * - Giá trị trung bình
 */

var st1 = document.getElementById('st1');
var st2 = document.getElementById('st2');
var st3 = document.getElementById('st3');
var st4 = document.getElementById('st4');
var st5 = document.getElementById('st5');
var result2 = document.getElementById('result2');

var tb ;
function Bai2(){
    st1 = Number(st1.value);
    
    st2 = Number(st2.value);
    st3 = Number(st3.value);
    st4 = Number(st4.value);
    st5 = Number(st5.value);

    tb = (st1 + st2 + st3 + st4 + st5) / 5;

    result2.innerHTML = tb;
}
console.log("Gia tri trung binh: "+ tb);

/**
 * Bài 3: Quy đổi tiền
 * 
 * Đầu vào:
 * - Số tiền USD
 * - Giá USD hiện nay 
 * 
 * Xử lý:
 * - Tạo biến cho Số tiền USD là stUSD và tạo biến cho Giá USD hiện nay là giaUSD
 * - Tạo biến cho Số tiền quy đổi là soTienQuyDoi
 * - Gán giá trị cho stUSD và giaUSD
 * - Sử dụng công thức: soTienQuyDoi = stUSD * giaUSD
 * 
 * Đầu ra:
 * - Số tiền quy đổi
 */

var stUSD = document.getElementById('sotien');
const giaUSD = 23500;
var result3 = document.getElementById('result3');

var soTienQuyDoi ;

function Bai3 (){
    stUSD = stUSD.value;
    soTienQuyDoi = new Intl.NumberFormat('en-US').format(stUSD * giaUSD);;
    result3.innerHTML = soTienQuyDoi;
}
// console.log("So tien quy doi: "+ new Intl.NumberFormat().format(soTienQuyDoi) + " VND");

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * Đầu vào:
 * - Chiều dài
 * - Chiều rộng
 * 
 * Đầu ra:
 * - Tạo biến cho chiều dài và chiều rộng là: cd và cr
 * - Tạo biến cho chu vi và diện tích là : cv và dt
 * - Gán giá trị chiều dài cho cd và chiều rộng cho cr
 * - Sử dụng công thức: 
 * +dt = cd * cr
 * +cv = (cd + cr) * 2
 * 
 * Đầu ra:
 * - Diện tích
 * - Chu vi
 */

var cd = document.getElementById('chieuDai');
var cr = document.getElementById('chieuRong');
var result4 = document.getElementById('result4');

var dt = cd * cr;
var cv = (cd + cr) * 2;

function Bai4(){
    cd = Number(cd.value);
    cr = Number(cr.value);

    dt = cd * cr;
    cv = (cd + cr) * 2;

    result4.innerHTML = "Diện tích: "+ dt + "; Chu vi: "+ cv;
}

console.log("Dien tich: "+ dt);
console.log("Chu vi: "+ cv);

/**
 * Bài 5: Tính tổng 2 ký số
 * 
 * Đầu vào:
 * - Số có 2 chữ số
 * 
 * Xử lý:
 * - Tạo biến cho số có 2 chữ số là so
 * - Tạo biến cho số hàng đơn vị và số hàng chục là: soHDV và soHC
 * - Tạo biến tong cho tổng 2 ký số
 * - Sử dụng công thức: 
 * + soHDV = so % 10
 * + soHC = Math.floor(so / 10) : để lấy phần nguyên
 * - tính tổng 2 ký số theo công thức : tong = soHDV + soHC
 * 
 * Đầu ra:
 * - Tổng 2 ký số
 */

var so = document.getElementById('kySo');
var result5 = document.getElementById('result5');
var soHDV = so % 10;
var  soHC = Math.floor(so / 10);

var tong = soHDV + soHC;

function Bai5() {
    soHDV = Number(so.value % 10);
    soHC = Number(Math.floor(so.value / 10));

    tong = soHDV + soHC;

    result5.innerHTML = tong;

}
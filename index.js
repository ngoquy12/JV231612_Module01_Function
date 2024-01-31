// Cú pháp khai báo hàm
// function func_name(paramters) {}
// Xây dựng hàm in ra "Xin chào các bạn"
function say() {
  console.log("Xin chào các bạn");
}

// Mỗi hàm được tạo ra thì chúng ta phải gọi nó thì hàm mới được thực thi
say();

// Quy tắc đặt tên hàm
// 1. Tên hàm phải là một động từ: run, say, getName,...
// 2. Viết theo kiểu Camel Case: getName, handleIncrease,...
// 3. Viết bằng tiếng anh và phải có nghĩa để biểu đạt chức năng của hàm
// 4. Không có các ký tự đặc biệt: *, %, @ ,...
// 5. Không bắt đầu bằng một số

// Viết hàm tính tổng hai số
// Tham số trong hàm: là những giá trị được truyền vào hàm tại thời điểm hàm được khai báo
// Đối số trong hàm: là những giá trị được truyền vào hàm tại thời điểm hàm được gọi
// return là từ khóa bắt buộc để trả về giá trị cho hàm
// function sum(a, b) {
//   return a + b;
// }

// let result = sum(10, 20);

// console.log("result: ", result);
// sum(30, 40);

// B1: Tạo hàm
// B2: Xác định tham só của hàm (Diểm bắt đầu và kết thúc)
// B3: Tiến hành lặp qua các số từ a => n
// B4: Lưu trữ giá trị sau mỗi lần cộng vào trong biến
// B5: return giá trị của biến trả về

function total(start, end) {
  var sum = 0;
  if (end > start) {
    for (let i = start; i <= end; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    return "Giá trị bắt đầu không được lớn hơn giá trị kết thúc";
  }
}

console.log(total(11, 10));

// Kiểu tham chiếu và kiểu nguyên thủy trong JS là gì?
// Kiểu nguyên thủy: number, string, boolean, null, NaN, undefined
// Kiểu tham chiếu: array, function, object
// Từ khóa const có thể bị gán lại giá trị không?
const PI = 3.14;
// PI = 2.3;
// console.log(PI);

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

let a = 10;
console.log("Giá trị trước đó của a = ", a); // 10

let b = a * 2;

// let input = prompt("Nhập từ khóa tìm kiếm: ");
let input = "JS";
let array = ["HTML", "CSS", "JS", "JSX", "SCSS"];

function filter(array, inputValue) {
  // Mảng lưu trữ những dữ liệu tìm thấy
  const newArray = [];

  // CHuyển đổi inputValue thành chuỗi chữ thường
  let inputConvert = inputValue.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    // Chuyển đổi các phần tử trong mảng thành chữ viết thường
    let elementConvert = array[i].toLowerCase();
    if (inputConvert === elementConvert) {
      // Push phần tử tìm thấy vào trong mảng
      newArray.push(array[i]);
    }
  }

  // Trả về mảng phần tử tìm thấy
  return newArray;
}

console.log(filter(array, input));

// Các phương thức làm việc với chuỗi: toString(), toLowerCase(),...
// Các phương thức làm việc với số: Math.random(), Math.ceil(),...
// Các tính năng của ES6

// Bài 1 Đề bài:
// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b(a < b).Hiển thị tổng các số nguyên tố trong khoảng a và b.
// Tạo giao diện nhập 2 số và in kết quả trên giao diện web
function totalPrime() {
    const a = Number(document.querySelector('#bai1_a').value);
    const b = Number(document.querySelector('#bai1_b').value);

    if (a < 2) {
        alert("Nhập số lớn hơn 1")
        return
    }
    else if (a > b) {
        alert(" Nhập vào a nhỏ hơn b")
        return
    }
    const arr = [];
    for (let i = a; i <= b; i++) {
        let isPrime = false
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = true
            }
        }
        if (!isPrime) {
            arr.push(i);

        }
    }

    const res = arr.reduce((a, b) => a + b, 0)
    document.querySelector('#result_1').innerHTML = `Tổng các số nguyên tố trong khoảng ${a} và ${b} là : ${res}`

}


// Bai 2 Đề bài
// Viết một function có tên numberOneTriangle(). 
// Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác

function numberOneTriangle() {
    const num = Number(document.querySelector('#bai2_num').value);
    if (num < 1 || num > 10) {
        alert("Nhập số trong khoang 1-10")
        return
    }
    let text = []
    for (let i = 1; i <= num; i++) {
        let star = ''

        for (j = 1; j <= i; j++) {
            star += '*'

        }
        text.push(star)
    }
    const res = text.join("\n")
    document.querySelector('#result_2').innerText = res;

}

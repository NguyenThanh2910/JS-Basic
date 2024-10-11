//Bài 1 
function celsiusToFahrenheit() {
  const celsius = document.getElementById("numCelsius").value * 1;

  const fahrenheit = celsius * (9 / 5) + 32;
  document.getElementById("numFahrenheit").innerHTML = `${fahrenheit}`;
}

//Bài 2:
function copyStr() {
  const str = document.getElementById("string").value * 1;

  const pass = Array(10).fill(str).join("-");
  document.getElementById("passStr").innerHTML = `${pass}`;
}

//Bài 3:
function findNumber() {
  const a = document.getElementById("num1").value * 1;
  const b = document.getElementById("num2").value * 1;
  let resultCompare;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("compare").innerHTML = `<h2 class="mt-5 text-danger text-center">Cả 2 tham số phải là number  </h2>`;
    return;
  }


  if (a > b) {
    resultCompare = ` <h2 class="mt-5 text-danger text-center">${a} là số lớn nhất  </h2>`;
  } else if (b > a) {
    resultCompare = ` <h2 class="mt-5 text-danger text-center">${b} là số lớn nhất  </h2>`;
  } else {
    resultCompare = ` <h2 class="mt-5 text-danger text-center">Cả 2 số bằng nhau </h2>`;
  }
  document.getElementById("compare").innerHTML = resultCompare;
}

//Bài 4 
function factorial() {
  const n = document.getElementById("numF").value * 1;
  if (isNaN(n) || !Number.isInteger(n) || n < 0) {
    document.getElementById(
      "checkNumF"
    ).innerHTML = ` <h2 class="mt-5 text-danger text-center">Tham số phải là số nguyên và lớn hơn không 0 </h2>`;
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  document.getElementById(
    "numFactorial"
  ).innerHTML = ` <h2 class="mt-5 text-danger text-center">
  Giai thừa của ${n} là ${result}</h2>`;
}

/*Bài 5. .*/
function cutChain() {
  const str = document.getElementById("string15").value;
  if (str.length <= 15) {
    document.getElementById("cutStr").innerHTML = ` <h2 class="mt-5 text-danger text-center">
      Tham số phải là chuỗi và phải dài hơn 15 kí tự`;
   
  }else{
    let cut= str.slice(0, 10) + " ...";
      document.getElementById("cutStr").innerHTML = ` <h2 class="mt-5 text-danger text-center">
Chuỗi sau khi được cắt là: ${cut} `;
  }
}

//Bài 6. 

function firstUpperCase() {
    const str = document.getElementById("uppStr").value;
  if (str.length === 0) {
    document.getElementById("uppWrite").innerHTML= ` <h2 class="mt-5 text-danger text-center">
Tham số truyền vào là chuỗi`;
  }
  else{
    let upp= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    document.getElementById("uppWrite").innerHTML = ` <h2 class="mt-5 text-danger text-center">
Chữ sau khi chỉnh sửa là: ${upp} `;
    

  }

}


//Bài 7.
function numEvenDesc() {
    const input = document.getElementById("arrNum").value;
    const arr=input.split(',').map(Number);
    sortEven= arr.filter((n) => n % 2 == 0).sort((a, b) => b - a)
    document.getElementById("sort").innerHTML = ` <h2 class="mt-5 text-danger text-center">
    Sắp xếp từ lớn đến bé là: ${sortEven} `;
        

}

/*Bài 8. */

function validateUser() {
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirm = document.getElementById("confirmInput").value;

  if (!username || username.length > 20) {

    document.getElementById("register").innerHTML = ` <h2 class="mt-5 text-danger text-center">Fall! User không được để trống và không được vượt quá 20 ký tự  </h2>`;
    return;
}

  if (password.length < 6 || password.length > 32) {
    document.getElementById("register").innerHTML = ` <h2 class="mt-5 text-danger text-center">Fall!  Password phải có độ dài từ 6 đến 32 ký tự  </h2>`;
    return;
}
  if (password !== confirm) {
    document.getElementById("register").innerHTML = ` <h2 class="mt-5 text-danger text-center">Fall! Confirm phải giống Password  </h2>`;
    return;
}

  document.getElementById("register").innerHTML = ` <h2 class="mt-5 text-success text-center">True! Đăng ký thành công </h2>`;
}



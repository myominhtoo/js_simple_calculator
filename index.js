//Calculator

class Calculator {
  #preview = document.querySelector(".preview");
  #result = document.querySelector(".result");
  constructor(cols) {
    this.cols = cols;
  }

  click = () => {
    this.cols.forEach((col) => {
      col.addEventListener("click", () => {
        let data = col.textContent;
        let content = this.#preview.textContent;
        if (
          data == "sq" ||
          data == "+" ||
          data == "-" ||
          data == "%" ||
          data == "/" ||
          data == "sqrt" ||
          data == "*"
        ) {
          // make calculation
          let sign = data;
          let number = Number(content);
          this.showResult(this.compute(number, sign));
          this.#preview.textContent = "";
        } else if (data == "CE") {
          // to reset
          this.#preview.textContent = "";
          this.#result.textContent = 0;
        } else if (data == ".") {
          // for decimal to click only one
          if (!content.includes(".")) {
            this.#preview.textContent += data;
          }
        } else if (data == "Del") {
          //for backspace
          if (content.length > 0) {
            this.#preview.textContent = content.slice(0, -1);
          }
        } else {
          this.#preview.textContent += data;
        }
      });
    });
  };

  showResult = (result) => {
    this.#result.textContent = "";
    this.#result.textContent += result;
  };

  compute = (num, sign) => {
    let result = Number(this.#result.textContent);
    num = Number(num);

    switch (sign) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result = result == 0 ? num * 1 : result * num;
        break;
      case "/":
        result /= num;
        break;
      case "%":
        result %= num;
        break;
      case "sq":
        result += Math.pow(num, 2);
        break;
      case "sqrt":
        result += Math.sqrt(num);
        break;
    }
    return result;
  };
}

//declaring variables
var cols = document.querySelectorAll(".col");

let calculator = new Calculator(cols);
calculator.click();

window.addEventListener("load", () => {
  let layer = document.getElementById("layer");
  layer.style.display = "flex";

  setTimeout(animate, 2000);
});

let animate = () => {
  let layer = document.getElementById("layer");
  layer.style.display = "none";
};

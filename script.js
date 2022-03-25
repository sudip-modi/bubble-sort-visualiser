var container = document.getElementById("array");
var rangel = document.getElementById("range-input");

var delayValue = document.getElementById("range-input").value;
console.log(delayValue);
// function to generate the array of blocks

rangel.onchange = (e) => {
  console.log(e.srcElement.value);
};

function generateArray() {
  var number = Math.ceil(Math.random() * 150);
  console.log(number);
  for (var i = 0; i < number; i++) {
    // return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

    // creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    // creating label element for displaying size of a particular block

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");

    array_ele_label.innerText = value;

    // appending created elements to container
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
  //   end of for loop
}

// a promise to swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    console.log("el1 transform");
    console.log(el1.style.transform);

    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // for waiting 0.25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 100);
    });
  });
}

// the bubble sort function
async function BubbleSort(delay = delayValue) {
  var blocks = document.querySelectorAll(".block");

  // the algo
  for (var i = 0; i < blocks.length; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      //   changing background color of the blocks to be compared
      blocks[j].style.backgroundColor = "#FF4949";
      console.log(blocks[j + 1]);
      blocks[j + 1].style.backgroundColor = "#FF4949";

      //   wait 0.1 sec
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });

      console.log("run");

      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      //  compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }
      //   if end
      // change color to previous
      blocks[j].style.backgroudColor = "#6f459e";
      blocks[j + 1].style.backgroundColor = "#6f459e";
    }

    // changing the color of the greatest element found in the above traversal
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
  //   top for loop end
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button "Bubble Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}
// generate when page loads for the first time
generateArray();

// generate a new array, basically reaload the page, that will call the generateArray function
function generate() {
  window.location.reload();
}

function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Bubble Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = value / 2 + "%";
  slideValue.classList.add("show");
};
inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};

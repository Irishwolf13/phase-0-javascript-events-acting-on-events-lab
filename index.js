const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";
dodger.style.bottom = "0";
dodger.style.left = "0";
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 380) {
      dodger.style.left = `${left + 1}px`;
    }
  }

// document.addEventListener("keydown", function (event) {
//     moveDodger(event.key);
//   });
// I made it better below... but it didn't 'pass the test'  
//   function moveDodger(keydown) {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
//     const bottomNumbers = dodger.style.bottom.replace("px", "");
//     const bottom = parseInt(bottomNumbers, 10);

//     if (keydown === "ArrowLeft" && left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//     if (keydown === "ArrowRight" && left < 360){
//         dodger.style.left = `${left + 1}px`;
//     }
//     if (keydown === "ArrowUp" && bottom < 380){
//         dodger.style.bottom = `${bottom + 1}px`
//     }
//     if (keydown === "ArrowDown" && bottom > 0){
//         dodger.style.bottom = `${bottom - 1}px`
//     }
//   }
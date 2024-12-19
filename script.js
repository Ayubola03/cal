const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const noBtn = document.getElementById("noBtn")
let count = 0

increaseBtn.onclick = () => {
    count++;
    noBtn.textContent = count
}
decreaseBtn.onclick = () => {
    count--;
    noBtn.textContent = count
}
resetBtn.onclick = () => {
    count = 0;
    noBtn.textContent = count
}




  

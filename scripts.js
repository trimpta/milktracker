let Amount = 1;

amt = document.getElementById("amt")

function setAmount(val) {
    amt.textContent = val + "L"
}

function updateAmount(val) {
    if(Amount+val>0){
        Amount += val
        setAmount(Amount)
    }
}



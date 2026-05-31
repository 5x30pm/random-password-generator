let genPassBtn = document.querySelector("#gen-pass");
let copyBtn = document.querySelector("#copy-img-btn");
let passInp = document.querySelector("#pass-inp");
let prePass = document.querySelector("#pre-pass");
let passList = document.querySelector("#pass-list");
const len = 16;
let storage = [];



// genrate password and push on text value 
genPassBtn.addEventListener("click", () => {
    const randomPass = genPass();
    passInp.value = randomPass;
    storage.push(randomPass);
}
)

// Function for copying Password
copyBtn.addEventListener('click', () => {
    passInp.select();
    document.execCommand("copy");
})

// For listing Previous Password 
prePass.addEventListener("click", () => {
    if (storage.length > 0) {
        // clean the div ( remove previous element)
        passList.classList.add("pass-list");
        passList.innerHTML = "";

        // add heading
        let heading = document.createElement("h2");
        heading.innerText = "Previous Password List :";
        passList.appendChild(heading);

        // pring previous pass
        let j = 1;
        for (let i = 0; i < storage.length; i++) {
            let p = document.createElement("p");
            p.textContent = `${j}. ${storage[i]}`;
            passList.appendChild(p);
            j++;
        }
    }
})



// Function for genrating Random Password 
function genPass() {
    let pass = '';
    let lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let symbol = '!@#$%^&*()_-+';
    let num = '1234567890';

    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    pass += num[Math.floor(Math.random() * num.length)];

    let allChar = lowerCase + upperCase + symbol + num;
    let i = 0;
    while (i < len - 4) {
        pass += allChar[Math.floor(Math.random() * allChar.length)];
        i++;
    }
    // Shuffle characters
    pass = pass
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
    return pass;
}

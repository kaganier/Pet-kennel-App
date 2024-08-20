console.log("hello world");


let state = {
    name: "",
    birthday: "",
    zipCode: 0
};

let saveBtn = document.getElementById("saveButton");
let nameInput = document.getElementById("userName");
let birthdayInput = document.getElementById("birthday");
let zipCodeInput = document.getElementById("zipCode");

function handleSave() {
    console.log("save button has been clicked");

    let name = nameInput.value;
    state.name = name;
    console.log("Added name" + state.name);


    state.birthday = birthdayInput.value;
    state.zipCode = zipCode.value;

    console.log(state);
}
saveBtn.addEventListener("click, handleSave");



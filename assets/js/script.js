// name 
const nameid = document.getElementById("nameId");
const namespan = document.getElementById("nameSpan");

// email 
const emailid = document.getElementById("emailId");
const emailspan = document.getElementById("emailSpan");


// password 
const passwordid = document.getElementById("passwordId");
const passwordspan = document.getElementById("passwordSpan");

// address
const addressid = document.getElementById("addressId");
const addressspan = document.getElementById("addressSpan");

// table body
const tBody = document.getElementById("tBody");

function saveFormButton() {
    // name
    if (!nameid.value) {
        namespan.style.display = 'block';
        nameid.style.border = '1px solid #EB5757';
    }
    else {
        namespan.style.display = 'none';
        nameid.style.border = '1px solid black';
    }

    // email
    if (!emailid.value) {
        emailspan.style.display = 'block';
        emailid.style.border = '1px solid #EB5757';
    }
    else {
        emailspan.style.display = 'none';
        emailid.style.border = '1px solid black';
        console.log('its ok');
    }
    

    // password 
    if (passwordid.value.length < 4 || passwordid.value.length > 12) {
        passwordspan.style.display = 'block';
        passwordid.style.border = '1px solid #EB5757';

    }
    else {
        passwordspan.style.display = 'none';
        passwordid.style.border = '1px solid black';
    }


    // address
    if (!addressid.value) {
        addressspan.style.display = 'block';
        addressid.style.border = '1px solid #EB5757';

    }
    else {
        addressspan.style.display = 'none';
        addressid.style.border = '1px solid black';
    }
    
    // checkbox
    const checkedElements = document.querySelectorAll("input[name='sport']:checked");
    const checkSpan = document.getElementById("checkSpan");
    if (checkedElements.length > 0) {
        checkSpan.style.display = 'none';
    }
    else {
        checkSpan.style.display = 'block';
    }

 

 
    // radio 
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const genderSpan = document.getElementById("genderSpan");
    if (genderElements.length > 0) {
        genderSpan.style.display = 'none';
    }
    else {
        genderSpan.style.display = 'block';

    }



    // select 
    const selectid = document.getElementById("mySelect");
    const selectspan = document.getElementById("selectSpan");
    
    // console.log(selectid.value);
    if (!selectid.value) {
        selectspan.style.display = 'block';
    }
    else {
        selectspan.style.display = 'none';
    }
    
    // span message for all values
    
    
    // message "please fill the form "
    // const thisIsComplete = document.getElementById("thisIsComplete");
    // const allSpanvalue = document.querySelectorAll(".name-span")
    // if (nameid.value == "" || emailid.value == "" || passwordid.value == "" || addressid.value == "" || checkedElements.length == 0 || genderElements.length == 0 || selectid.value == "") {
    //     thisIsComplete.style.display = 'none';
    //     allSpanvalue.style.display = 'none';
    // }
    // else {
    //     thisIsComplete.style.display = 'block';
    //     allSpanvalue.style.display = 'none';

    
    // }
    
    
    if (nameid.value &&
        emailid.value &&
        passwordid.value.length > 4 &&
        passwordid.value.length < 12 &&
        addressid.value &&
        checkedElements.length != 0 &&
        genderElements.length != 0 &&
        selectid.value 

    ) {
        

        const formData = {
            name: nameid.value,
            email: emailid.value,
            password: passwordid.value,
            address: addressid.value,
            country: selectid.value,
        };
        addTableData(formData);
        resetAfterSave();
        // console.log(formData.country.value);
        

    //    console.log(formData);
       
      

    }
}

function addTableData(formData) {
    
    const tr = document.createElement("tr");
    // console.log(tr);
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const AddressTd = document.createElement("td");
    const checkTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const selectTd = document.createElement("td");

    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    passwordTd.innerHTML = formData.password;
    AddressTd.innerHTML = formData.address;
    selectTd.innerHTML = formData.country;
    


    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        AddressTd,
        checkTd,
        genderTd,
        selectTd
    );
    // console.log(tBody);
    tBody.appendChild(tr);
}



// reset 
function resetAfterSave() {
    nameid.value = "";
    emailid.value = "";
    passwordid.value = "";
    addressid.value = "";
    selectid.value = "" ;
// console.log(selectid.value);

}
 








// function resetFormButton() {
//     document.getElementById("myForm").reset();
// }
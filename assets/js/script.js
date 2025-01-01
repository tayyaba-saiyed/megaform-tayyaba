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
// sports 
const checkedElements = document.querySelectorAll("input[name='sport']");
// gender 
const genderElements = document.querySelectorAll('input[name="gender"]');
// country 
const countryid = document.getElementById("mySelect");
// tbody
const tBody = document.getElementById("tBody");
// data not found
const noDataFound = document.getElementById("dataNotFound");
// data found
const dataFound = document.getElementById("dataFoundOnSave");
// edit
const editImage = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4_383" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<rect width="18" height="18" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4_383)">
<path d="M2.625 18C2.31825 18 2.05406 17.8904 1.83244 17.6711C1.61081 17.4519 1.5 17.1865 1.5 16.875C1.5 16.5682 1.61081 16.304 1.83244 16.0824C2.05406 15.8608 2.31825 15.75 2.625 15.75H15.375C15.6818 15.75 15.9459 15.8596 16.1676 16.0789C16.3892 16.2981 16.5 16.5635 16.5 16.875C16.5 17.1817 16.3892 17.4459 16.1676 17.6675C15.9459 17.8892 15.6818 18 15.375 18H2.625ZM4.5 12.3101H5.42737L11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L4.5 11.3827V12.3101ZM3.375 12.7571V11.1866C3.375 11.0962 3.39012 11.0102 3.42037 10.9284C3.45075 10.8467 3.501 10.7707 3.57113 10.7004L11.7823 2.50817C11.8909 2.39954 12.0142 2.31735 12.1523 2.2616C12.2901 2.20585 12.4326 2.17798 12.5798 2.17798C12.7317 2.17798 12.8763 2.20585 13.0133 2.2616C13.1502 2.31735 13.2769 2.40342 13.3933 2.51979L14.2946 3.43273C14.411 3.54135 14.4951 3.66535 14.547 3.80473C14.599 3.94423 14.625 4.08992 14.625 4.24179C14.625 4.38129 14.599 4.51998 14.547 4.65785C14.4951 4.79585 14.411 4.92304 14.2946 5.03942L6.10238 13.2317C6.03212 13.3019 5.95619 13.3534 5.87456 13.386C5.79281 13.4187 5.70675 13.4351 5.61637 13.4351H4.053C3.85963 13.4351 3.69831 13.3704 3.56906 13.241C3.43969 13.1118 3.375 12.9505 3.375 12.7571ZM11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L11.6524 6.09654Z" fill="#636363"/>
</g>
</svg>`;

// delete
const deleteImage = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4_497" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
<rect width="15" height="15" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4_497)">
<path d="M4.375 13.125C4.03125 13.125 3.73698 13.0026 3.49219 12.7578C3.2474 12.513 3.125 12.2188 3.125 11.875V3.75H2.5V2.5H5.625V1.875H9.375V2.5H12.5V3.75H11.875V11.875C11.875 12.2188 11.7526 12.513 11.5078 12.7578C11.263 13.0026 10.9688 13.125 10.625 13.125H4.375ZM10.625 3.75H4.375V11.875H10.625V3.75ZM5.625 10.625H6.875V5H5.625V10.625ZM8.125 10.625H9.375V5H8.125V10.625Z" fill="#636363"/>
</g>
</svg>`;

var isEdit = '';

var count = 0;
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
    // const  = document.querySelectorAll("input[name='sport']:checked");
    const checkSpan = document.getElementById("checkSpan");
    const checkedItem = [];
    for (let i = 0; i < checkedElements.length; i++) {
        if (checkedElements[i].checked)
            checkedItem.push(checkedElements[i].value);
    }

    if (checkedItem.length > 0) {
        checkSpan.style.display = 'none';
    }
    else {
        checkSpan.style.display = 'block';
    }

    // radio 
    // const genderElements = document.querySelectorAll('input[name="gender"]:checked'); 
    const genderSpan = document.getElementById("genderSpan");
    const genderItem = [];
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked)
            genderItem.push(genderElements[i].value);
    }

    if (genderItem.length > 0) {
        genderSpan.style.display = 'none';
    }
    else {
        genderSpan.style.display = 'block';

    }



    // select 
    const selectspan = document.getElementById("selectSpan");

    // console.log(countryid.value);
    if (!countryid.value) {
        selectspan.style.display = 'block';
    }
    else {
        selectspan.style.display = 'none';
    }

    // data not found 
    if (!nameid.value == "" || !emailid.value == "" || !passwordid.value == "" || !addressid.value == "" || !checkedElements.length > 0 || !genderElements.length > 0 || !countryid.value == "") {
        noDataFound.style.display = 'none';
        dataFound.style.display = 'block';
    }
    else {
        noDataFound.style.display = 'block';
        dataFound.style.display = 'none';
    }


    if (nameid.value &&
        emailid.value &&
        passwordid.value.length > 4 &&
        passwordid.value.length < 12 &&
        addressid.value &&
        checkedItem.length != 0 &&
        genderItem.length != 0 &&
        countryid.value

    ) {


        const formData = {
            name: nameid.value,
            email: emailid.value,
            password: passwordid.value,
            address: addressid.value,
            country: countryid.value,
            sport: checkedItem,
            gender: genderItem

        };

        count++;
        console.log(count);
        addTableData(formData);
        resetAfterSave();
        // console.log(formData.country.value);


        //    console.log(formData);



    }
}

function addTableData(formData) {

    var tr;
    if (isEdit) {
        tr = document.getElementById(isEdit);
        tr.innerHTML = '';
        isEdit = ''
    } else {
        tr = document.createElement("tr");

    }
    let id = "list_" + count;
    tr.id = id;
    console.log(tr);
    // console.log(tr);
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const AddressTd = document.createElement("td");
    const checkTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const selectTd = document.createElement("td");
    const editTd = document.createElement("td");
    const deleteTd = document.createElement("td");

    editTd.addEventListener("click", () => {
        editButton(id);
    });
    // console.log('here');

    deleteTd.addEventListener("click", () => {
        deleteButton(id);
    })

    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    passwordTd.innerHTML = formData.password;
    AddressTd.innerHTML = formData.address;
    selectTd.innerHTML = formData.country;
    checkTd.innerHTML = formData.sport;
    genderTd.innerHTML = formData.gender;
    editTd.innerHTML = editImage;
    deleteTd.innerHTML = deleteImage;


    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        AddressTd,
        checkTd,
        genderTd,
        selectTd,
        editTd,
        deleteTd
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
    countryid.value = "";




    if (checkedElements.length > 0) {
        for (let i = 0; i < checkedElements.length; i++) {
            checkedElements[i].checked = false;

        }
    }


    if (genderElements.length > 0) {
        for (let i = 0; i < genderElements.length; i++) {
            genderElements[i].checked = false;

        }
    }




}


function editButton(value) {

    isEdit = value;
    console.log("edit button", value);

    const allElement = document.getElementById(value);
    console.log(allElement.children[0].innerHTML);
    console.log(allElement.children[1].innerHTML);
    console.log(allElement.children[2].innerHTML);
    console.log(allElement.children[3].innerHTML);
    console.log(allElement.children[4].innerHTML);
    console.log(allElement.children[5].innerHTML);
    console.log(allElement.children[6].innerHTML);


    nameid.value = allElement.children[0].innerHTML;
    emailid.value = allElement.children[1].innerHTML;
    passwordid.value = allElement.children[2].innerHTML;
    addressid.value = allElement.children[3].innerHTML;
    countryid.value = allElement.children[6].innerHTML;



    if (checkedElements.length > 0) {
        for (let i = 0; i < checkedElements.length; i++) {
            const element = checkedElements[i];
            const valueAll = allElement.children[4].innerHTML.split(",");
            if (valueAll.includes(element.value)) {
                element.checked = true;
            }
        }
    }

    if (genderElements.length > 0) {
        for (let i = 0; i < genderElements.length; i++) {
            const elementG = genderElements[i];
            const valueGender = allElement.children[5].innerHTML;
            if (valueGender.includes(elementG.value)) {
                elementG.checked = true;
            }

        }
    }
};

function deleteButton(id) {
    const tr = document.getElementById(id);
    // console.log('delete');

    if (tr) {
        tr.remove()
        resetAfterSave();
    }
}




// function resetFormButton() {
//     document.getElementById("myForm").reset();
// }
//function test() {
// alert("hello")
//}

function submit() {
    let name = document.getElementById('id1')
    let address = document.getElementById('id2')
    let email = document.getElementById('id3')
    var pass = document.getElementById('id4')
    let comment = document.getElementById('id5')
    if (name.value === "" || address.value === "" || email.value === "" || pass.value === "" || comment.value === "") {
        alert("champs vide")
    }


    //test pass
    else

    if (pass.value.length < 8) {
        alert("The password has less than 8 characters")
    }

    //test email
    else
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)) {
        alert("Doesn't have a valid e-mail adress")
    }

}
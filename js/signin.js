function refreshSignin() {
if (localStorage.getItem("lastname")) {
    document.getElementById("signintext").innerHTML = 'Signed in as ' + localStorage.getItem("lastname");
    document.getElementById("signintext").style.display = 'block';
    document.getElementById("signinbtn").style.display = 'none';
    document.getElementById("addrestbtn").style.display = 'block';
    document.getElementById("signoutbtn").style.display = 'block';
} else {
    document.getElementById("signintext").innerHTML = '';
    document.getElementById("signintext").style.display = 'none';
    document.getElementById("signinbtn").style.display = 'block';
    document.getElementById("addrestbtn").style.display = 'none';
    document.getElementById("signoutbtn").style.display = 'none';
}
}
refreshSignin()



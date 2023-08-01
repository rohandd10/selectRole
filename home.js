const show=()=> {
    let type = document.getElementById("item1").value;
    if (type == "Admin") {
        let pass = prompt("enter password");
        if (pass == "1234") {
            location.href="admin.html";
        }
        else {
            alert("Invalid Password");
        }
    }
    else if(type == "Member") {
        let pass = prompt("enter password");
        if (pass == "6789") {
            location.href="member.html";
        }
        else {
            alert("Invalid Password");
        }
    }
}
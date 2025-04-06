function user(){

            var usr = document.getElementById('un').value
            var pw = document.getElementById('pw').value
            
    if(usr === "talha" && pw === "meawmeaw")
        window.location = "users/user1.html";
    if(usr === "muzamil" && pw === "itachi")
        window.location = "users/user2.html";
        else
        alert("incorrect username or password")
}

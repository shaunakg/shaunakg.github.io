var i,ctext="T25l\nU2l4\nT25l\nRWlnaHQ=\nWmVybw==\nVGhyZWU=\nVGhyZWU= \nTmluZQ==\nRWlnaHQ=\nRWlnaHQ=\nU2V2ZW4=\nRml2ZQ==";console.log(ctext);

function check_passphrase(pw_input, p_title, pw_wrapper, p_ready) {
    console.log("checked");
    if (md5(pw_input.value.toLowerCase()) == "c773fdef3889bdadbe809f1e8aaeea46") {
        p_title.innerHTML = "<span class=\"readys\" id=\"ready1\">[re</span><span class=\"readys\" id=\"ready2\">ad</span><span class=\"readys\" id=\"ready3\">y?]</span><br><p>Type your answer</p>";
        p_title.classList = ["solved-title"];
        pw_wrapper.style.display = "none";
        p_ready.focus();
    } else {
        pw_input.style.color = "red";
    }
}

function check_ready(ready_input, action) {
    console.log("Sup");

    if (action == "oninput") {
        var ready1 = document.getElementById("ready1");
        var ready2 = document.getElementById("ready2");
        var ready3 = document.getElementById("ready3");
        
        if (ready_input.value.toLowerCase() == "y") {
            ready1.style.color = "yellow";
            ready1.style.backgroundColor = "black";
            ready1.style.fontFamily = "monospace";

            ready2.style.color = "red";
            ready2.style.backgroundColor = "inherit";
            ready3.style.fontFamily = "inherit";

            ready3.style.color = "red";
            ready3.style.backgroundColor = "inherit";
            ready3.style.fontFamily = "inherit";

        } else if (ready_input.value.toLowerCase() == "ye") {

            ready1.style.color = "yellow";
            ready1.style.backgroundColor = "black";
            ready1.style.fontFamily = "monospace";

            ready2.style.color = "yellow";
            ready2.style.backgroundColor = "black";
            ready2.style.fontFamily = "monospace";

            ready3.style.color = "red";
            ready3.style.backgroundColor = "inherit";
            ready3.style.fontFamily = "inherit";

        } else if (ready_input.value.toLowerCase() == "yes") {

            ready1.style.color = "yellow";
            ready1.style.backgroundColor = "black";
            ready1.style.fontFamily = "monospace";

            ready2.style.color = "yellow";
            ready2.style.backgroundColor = "black";
            ready2.style.fontFamily = "monospace";

            ready3.style.color = "yellow";
            ready3.style.backgroundColor = "black";
            ready3.style.fontFamily = "monospace";

        } else {

            ready1.style.color = "red";
            ready1.style.backgroundColor = "inherit";
            ready1.style.fontFamily = "inherit";

            ready2.style.color = "red";
            ready2.style.backgroundColor = "inherit";
            ready2.style.fontFamily = "inherit";

            ready3.style.color = "red";
            ready3.style.backgroundColor = "inherit";
            ready3.style.fontFamily = "inherit";

        }

    } else if (action == "onchange") {
        if (ready_input.value.toLowerCase() == "yes") {
            document.location.href = "../2/2.html";
        }
    }
}

// var i,ctext="T25l\nU2l4\nT25l\nRWlnaHQ=\nWmVybw==\nVGhyZWU=\nTmluZQ==\nRWlnaHQ=\nU2V2ZW4=\nRml2ZQ==\n";for(i=0;i<ctext.split("\n").length;i++)console.log(ctext.split("\n")[i]);function check(n){"c773fdef3889bdadbe809f1e8aaeea46"==md5(n.value)?n.style.color="green":n.style.color="red"}
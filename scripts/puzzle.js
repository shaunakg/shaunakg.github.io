const lock1 = document.getElementById("puzzle01");
const key1 = document.getElementById("key01");
const answer1 = document.getElementById("answer01");
const answer1link = document.getElementById("answer01_link");

lock1.oninput = function() {
	if (lock1.value == key1.src) {
		lock1.style.display = "none";
		lock1.value = "";

		answer1.style.opacity = "1";
		answer1.style.height = "100px";
		answer1.style.cursor = "pointer";
		answer1.src = key1.src;
		key1.src = "images/other/lockopen.svg"
	} else {
        console.log("WRONG: " + lock1.value)
        lock1.value = "";
	}
}

answer1link.onclick = function () {
	document.body.style.transition = "0.5s";
    document.body.style.opacity = "0";
    window.location.replace("puzzle/index.html");
}
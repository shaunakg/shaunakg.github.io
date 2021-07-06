const usp = new URLSearchParams(location.search);

if (usp.get("url") && usp.get("line")) {

    document.getElementById("script_link").href = usp.get("url");
    document.getElementById("linenum").innerText = usp.get("line");

    document.getElementById("desc").style.display = "block";

}
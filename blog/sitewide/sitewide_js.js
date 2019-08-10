window.onscroll = function() {scrollProgress()};

const progress_background = document.getElementById("myBar");
const progress_wrapper = document.getElementById("scroll_wrapper");
const progress_end = document.getElementById("scroll_done_msg");
const content_wrapper = document.getElementById("content_wrapper");

var article_title = document.getElementById("article_title").innerText;

const twitter_intent_top = document.getElementById("twitter_intent_top_link");
const tumblr_intent_top = document.getElementById("tumblr_intent_top_link");

twitter_intent_top.href = "https://twitter.com/intent/tweet?text=" + "Check out this new blog post!" + "&url=" + document.URL;
tumblr_intent_top.href = "https://embed.tumblr.com/share/?posttype=link&title=" + article_title.replace(" ", "%20") + "&content=" + document.URL + "&caption=This%20is%20a%20great%20blog!";

var winScroll, height, scrolled;

function scrollProgress() {
	winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	scrolled = (winScroll / height) * 100;
	progress_background.style.width = scrolled + "%";
	progress_background.style.filter = "hue-rotate(" + (scrolled/100)*360+ "deg)";

	if (scrolled == 100) {
		progress_wrapper.style.height = "10em";
		progress_end.style.userSelect = "inherit";
		progress_end.style.display = "block";
		progress_end.style.transitionDuration = "2s";
		progress_end.style.opacity = 1;
		progress_background.style.backgroundColor = "black";
	} else {
		progress_wrapper.style.height = "0.5em";
		progress_end.style.userSelect = "none";
		progress_background.style.backgroundColor = "orange";
		progress_end.style.display = "none";
		progress_end.style.opacity = 0;
	}
}
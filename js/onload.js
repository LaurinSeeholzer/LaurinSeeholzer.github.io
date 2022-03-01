function loaded() {
    document.getElementById("loader-div").classList.add("onload-end")
    setTimeout(function() {
        document.getElementById("loader-div").style.display = "none"
    }, 950)
}
$(document).ready(function() {
    $(".icon").hover(function(){
        $(this).toggleClass("icon-large");
    })
})

function getRepos(){

    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        let response = "";
        for (i = 0; i < gitObject.length; i++){
            response+= `<a href="${gitObject[i].html_url}" target="_blank">${gitObject[i].name}</a> <br/>`;
        }
        document.getElementById("repos").innerHTML = response;
      }
    };
    gitHubRequest.open("GET", "https://api.github.com/users/IAmSamFrancis/repos", true);
    gitHubRequest.send();
}
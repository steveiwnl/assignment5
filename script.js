(function () {

var homeHtml = "https://davids-restaurant.herokuapp.com/categories.json";

document.addEventListener("DOMContentLoaded", function () {

$ajaxUtils.sendGetRequest(homeHtml, buildAndShowCategoriesHTML);

});

function buildAndShowCategoriesHTML(categories) {

var html = "<ul>";

for (var i = 0; i < categories.length; i++) {

html += "<li>";
html += categories[i].name + " (" + categories[i].short_name + ")";
html += "</li>";

}

html += "</ul>";

document.getElementById("main-content").innerHTML = html;

}

})();

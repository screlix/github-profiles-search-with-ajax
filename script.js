//github api id  : a6d54450d36e46e8d4f2
// key : 970bc1d8d5eb796acd2ece298b39f0183fe86a58
//https://github.com/login/oauth/access_token?client_id=a6d54450d36e46e8d4f2&client_secret=970bc1d8d5eb796acd2ece298b39f0183fe86a58

//1787bea6235f3eaaabdbfc1e924efd7de37715d9

//IN JQUERY
// $("input").on("input", function () {
//   $("#hh h2").css({ display: "block" });
//   $("#ff ul").remove();
//   $("#hh ul").remove();
//   $("button").css({ display: "block" });
//   var co = $("input").val();
//   $.ajax({
//     method: "GET",
//     headers: {
//       Authorization: "token 1787bea6235f3eaaabdbfc1e924efd7de37715d9",
//       "User-Agent": "screlix",
//     },
//     url: "https://api.github.com/users/" + co,
//     data: {
//       client_id: "a6d54450d36e46e8d4f2",
//       client_key: "970bc1d8d5eb796acd2ece298b39f0183fe86a58",
//     },
//     cache: "false",
//     // timeout: 200,
//     // async: false,
//     success: function (response, status, xhr) {
//       $("img").attr("src", response.avatar_url);
//       var all = response;
//       $("#ff ul").append(
//         $("<li><strong>Name :</strong>" + response.name + "</li>")
//       );
//       $("#ff ul").append(
//         $("<li><strong>Location :</strong>" + response.location + "</li>")
//       );
//       $("#ff ul").append(
//         $("<li><strong>Bio :</strong>" + response.bio + "</li>")
//       );
//       $("#ff ul").append(
//         $("<li><strong>Company :</strong>" + response.company + "</li>")
//       );
//       $("#ff ul").append(
//         $("<li><strong>Followers :</strong>" + response.followers + "</li>")
//       );
//       $("#ff ul").append(
//         $("<li><strong>Following :</strong>" + response.following + "</li>")
//       );
//       $("#ff ul").append(
//         $(
//           "<li><strong>Repositories :</strong>" +
//             response.public_repos +
//             "</li>"
//         )
//       );
//       callme(response);
//       var url = "https://api.github.com/users/" + co + "/repos";
//       $.get(url, function (resp, status, xhr) {
//         // var mk = response.repos_url
//         resp.forEach((element) => {
//           $("#hh ul").append("<li>" + element.name + "</li>");
//         });
//         //
//       });
//     },
//     error: function () {
//       console.log("profile not foud");
//     },
//   });
//   $("img").css({ display: "block" });
//   $("#ff").append("<ul></ul>");
//   $("#hh").append("<ul></ul>");
// });
// $("button").on("click", callme());
// function callme(res) {
//   $("a").attr("href", res.html_url);
// }

//IN JAVASCRIPT

var sec1 = document.querySelector("#ff");
var input = document.querySelector("input");
var myimg = document.querySelector("img");
var sec2 = document.querySelector("#hh");
var ul1 = document.querySelector("#ff ul");
var ul2 = document.querySelector("#hh ul");

var obj = new XMLHttpRequest();
input.addEventListener("input", function () {
  var op = document.querySelectorAll("[class='all']");
  for (var i = 0; i < op.length; i++) op[i].style.display = "block";

  // document.querySelector(".all").style.display = "block";
  var df = document.createElement("ul");
  sec1.append(df);
  var ko = document.createElement("ul");
  sec2.append(ko);
  var ino = input.value;
  obj.onreadystatechange = function () {
    if (obj.status === 200 && obj.readyState === 4) {
      var response = JSON.parse(obj.responseText);
      console.log(response);
      myimg.setAttribute("src", response.avatar_url);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Name : </strong>" + response.name;
      ul1.appendChild(ee);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Bio : </strong>" + response.bio;
      ul1.appendChild(ee);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Company : </strong>" + response.company;
      ul1.appendChild(ee);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Followers : </strong>" + response.followers;
      ul1.appendChild(ee);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Following : </strong>" + response.following;
      ul1.appendChild(ee);

      var ee = document.createElement("li");
      ee.innerHTML = "<strong>Reposotories : </strong>" + response.public_repos;
      ul1.appendChild(ee);
      // document.getElementsByTagName("h2")[1].style.display = "block";
    }
    callus(response);
  };
  var n2 = new XMLHttpRequest();
  var urlll = "https://api.github.com/users/" + ino + "/repos";
  n2.onload = function () {
    var rr = JSON.parse(this.responseText);
    console.log(rr);
    rr.forEach((element) => {
      var jazi = document.createElement("li");
      jazi.innerHTML = element.name;
      // console.log(element.name);
      ul2.append(jazi);
    });
  };
  n2.open("GET", urlll);
  n2.send();
  df.remove();
  ul1.querySelectorAll("*").forEach((n) => n.remove());
  ko.remove();
  ul2.querySelectorAll("*").forEach((n) => n.remove());
  var urll = "https://api.github.com/users/" + ino;
  obj.open("GET", urll);
  obj.send();
});
document.querySelector("button").addEventListener("click", callus());
function callus(respi) {
  document.getElementsByTagName("a")[0].setAttribute("href", respi.html_url);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {

    $scope.post = function() {
        var payload = {
          name:$scope.unameR,
          email:$scope.emailR,
          pwd:$scope.pwdR
        };

$http({
  method: 'POST',
 url: 'http://localhost:8086/Getuser',
  // url: 'http://localhost:8086/Postbird',
  data:payload,
  headers:{'Content-Type': 'application/json'},
}).then(function successCallback(response) {
      console.log("Entered in successCallback ");
      console.log(JSON.stringify(response.data));
      console.log(response.status);
      console.log(response.statusText);
      alert('Success');

  }, function errorCallback(response) {
      console.log("Entered in errorCallback ");
      console.log(response.xhrStatus);
      console.log(response.status);
      console.log(response.statusText);
});   
      };


      // var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      // var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

      // $scope.checkpwdStrength = {
      //   "width": "150px",
      //   "height": "25px",
      //   "float": "right"
      // };

      // $scope.validationInputPwdText = function(value) {
      //   if (strongRegularExp.test(value)) {
      //     $scope.checkpwdStrength["background-color"] = "green";
      //   } else if (mediumRegularExp.test(value)) {
      //     $scope.checkpwdStrength["background-color"] = "orange";
      //   } else {
      //     $scope.checkpwdStrength["background-color"] = "red";
      //   }
      // };
});


// function login(){
//     if (document.getElementById("uname").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd").value == "") {
//         alert("Password may not be blank.");
//     }
//     if((document.getElementById("uname").value == "anu") && (document.getElementById("pwd").value == "anu")){
//         window.open("loginsucess.html");
//     }
//      if((document.getElementById("uname").value != "anu") && (document.getElementById("pwd").value != "anu")){
//         alert("Please enter correct Username and Password");
//     }

// }

// function register(){
//     if (document.getElementById("uname1").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd1").value == "") {
//         alert("Password may not be blank.");
//     }else if (document.getElementById("email1").value == "") {
//         alert("Email may not be blank.");
//     }
//     if((document.getElementById("uname1").value != "") && (document.getElementById("pwd1").value != "") && (document.getElementById("email1").value != "")){
//         alert("Registered Sucessfully");
//     }

// }

// function Validate(uname)
// {
//   uname.value=uname.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
// }

// function eValidate(email)
// {
//   var regMail=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;


//   if (regMail.test(email)==false)
//   {
//     document.getElementById("status").innerHTML="<span class='warning'>Email not valid</span>";
//   }
//   else{
//     document.getElementById("status").innerHTML="<span class='valid'>you Entereda valid Password</span>";
//   }
// }

// function pwdValidate(pwd)
// {
// var regPwd=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}/;
// {
//   if (regPwd.test(pwd)==false)
//   {
//     document.getElementById("statusPWD").innerHTML="<span class='warning'>please follow the pattern: afghgh1A@</span>";
//   }
//   else
//   {
//     document.getElementById("statusPWD").innerHTML="<span class='valid'></span>";
//   }
//   }
// }




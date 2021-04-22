class Main {
//https://tuhrig.de/basic-auth-log-out-with-javascript/
  function logOut() {
    jQuery.ajax({
      type: "GET",
      url: "/ui",
      async: false,
      username: "logmeoutplease",
      password: "123alphabet123",
      headers: {"Authorization": "Basic xxxx" }
    })
  .done(function() {
      // logOut() should fail as a 401
    })
  .fail(function() {
      window.location = "/ui.html";
   });
 return false;   
 }
}

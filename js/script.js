$(document).ready(function() {
    
function Account(username,pass,email){
    this.username = username;
    this.password = pass;
    this.email = email;
}










    $('#menu').click(function() {
        $('#hiddenAgenda').show();
        $('.feed').addClass('dim');
    });

      $('#unMenu').click(function () {
          $('#hiddenAgenda').hide().slideUp(500);
          $('.feed').removeClass('dim');
      });
});
setTimeout(function() {
    $('.form').trigger('click');
}, 3000);
$(".form").on('click', function(){
  $(this).addClass('active');
});

$(".submit").on('click', function() {
  $(this).parent().parent().hide(300);
  $(".ok_message").addClass("active");
	timeout();
});

$(".ok_message").on('click', function() {
  location.href = 'http://backup8.herokuapp.com/';
});
function timeout(){
setTimeout(function() {
    $('.ok_message').trigger('click');
}, 5000);
}
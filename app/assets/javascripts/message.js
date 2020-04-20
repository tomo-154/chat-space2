$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="message__upper-info">
           <p class="message__upper-info__name">
             ${message.user_name}
           </p>
           <p class="message__upper-info__date">
             ${message.created_at}
           </p>
         </div>
         <div class="message__item">
           <p class="message__item__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="message__upper-info">
           <p class="message__upper-info__name">
             ${message.user_name}
           </p>
           <p class="message__upper-info__date">
             ${message.created_at}
           </p>
         </div>
         <div class="message__item">
           <p class="message__item__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.message').append(html);
    $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
    $('form')[0].reset();
  })
})
});
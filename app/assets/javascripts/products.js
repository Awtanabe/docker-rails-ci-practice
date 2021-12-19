

document.addEventListener('turbolinks:load', function(){

  if ($('#btn-click')) {
    $('#btn-click').on('click', () => {
      $.ajax({
        type: 'get',
        url: '/products/get_products',
        dataType: 'json'
      })
      .done(function(template) {
        document.getElementById("target-container").insertAdjacentHTML('beforebegin',template.html_data)
      }).fail((result)=>{
        console.log(result.status)
        console.log(result.responseText)
      })
    })
  }
})
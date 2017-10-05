$search.on('change paste keyup',function(){
    var value = $(this).val().toLowerCase();
    if(!value){
      $('.list-search-style').html('');
    }
    else{
      _searchStart(value);
    }
  function _searchStart(v){
    $('.list-search-style').html(
      '#container .content li:not([data-title*="' + v + '"]) {display: none;}'
    );
  }
}
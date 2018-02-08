function activeTab(id){
  $('#navbar0 li').each(function(index, element){
      $('#'+element.id).removeClass("active");
  });
  $('#'+id).addClass("active");
}
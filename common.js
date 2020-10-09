$(document).ready(function () {

  // fullpage
  function fullpage_init(){
    $('#contents').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['메인', '학과소개', '교수진 소개'],
      showActiveTooltip: true,
      menu: '#navi'
      
    });
  
    $('#contentsNoToolTip').fullpage({
      //options here
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true
    });
  }



// search
function searchPageOpen_init(){
  $('header > nav.menu li.search').click(function(){
    searchPageOpen();
  });

  $('#search .close-btn').click(function(){
    searchPageClose();
  });

  function searchPageOpen(){
    $('#search').addClass('active');
  }
  function searchPageClose(){
    $('#search').removeClass('active');
  }

}




  fullpage_init();
  searchPageOpen_init();


});
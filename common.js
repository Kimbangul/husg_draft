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
      autoScrolling: true,
    });
  }








  fullpage_init();


});
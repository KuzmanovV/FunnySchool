
export default function toggleMenu() {
  $(document).ready(function(){
    $(".headerHide").click(function(){
      $("header").hide(1000);
      $(".headerShow").show(1000)
    });
    
    $(".headerShow").click(function(){
      $(".headerShow").hide(1000);
      $("header").show(1000)
    });
  });
}

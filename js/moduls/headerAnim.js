import * as utils from './utils.js';

export default function toggleMenu() {
  $(document).ready(function(){
    $(".headerHide").click(function(){
      utils.sound('../static/audio/lightsaberOff.wav');
      $("header").hide(1000);
      $(".headerShow").show(1000)
    });
    
    $(".headerShow").click(function(){
      utils.sound('../static/audio/lightsaber.mp3');
      $(".headerShow").hide(1000);
      $("header").show(1000)
    });
  });
}

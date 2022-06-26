window.addEventListener('DOMContentLoaded', function() {
  
  var category = ["test"];
  for (i = 0; i < category.length; i++) {
    $(".list .category").append('\<li\>\<a href\=\"' + $("#article").data("categoryPath") + category[i] + '\/index\.html\"\>' + category[i].toUpperCase() + '\<\/a\>\<\/li\>');
    console.log(test);
  };
  var auther_data = $("#article").data("auther");
  console.log(auther_data);
  var auther = ["gitman", "GitMan"];
  var auther_info = [
    [
      "GitManTechnologies代表<br>面倒見がよく、好きなことにはとことん熱中する。<br>GitManTechnologiesでは多種多様な分野を担当しチーム随一の万能エンジニア。",
      "https:/www.youtube.com/channel/UC3uNGvURCrOedpiGdTARs5w",
      "https:/twitter.com/GitManTech",
      "https:/github.com/GitManTechnologies",
      "https:/note.com/gitmantech"
    ]
  ];
  var auther_index = $.inArray(auther_data, auther);
  console.log(auther_index);
  var auther_html = '<img src="../../../../resource/icon/astronaut.svg">'+ 
                    '<div class="auther">' +
                    '<h3>この記事を書いた人</h3>' +
                    '<a href="../../../../pages/comingsoon.html"><p>' + auther[auther_index + 1] +
                    '</p></a>' +
                    '</div>' +
                    '<div class="auther-info">' +
                    '<p>' + auther_info[auther_index][0] +
                    '</p><a href="' + auther_info[0][1] + '"><i class="fa-brands fa-youtube fa-2x"></i></a>' +
                    '<a href="' + auther_info[0][2] + '"><i class="fa-brands fa-twitter fa-2x"></i></a>' +
                    '<a href="' + auther_info[0][3] + '"><i class="fa-brands fa-github fa-2x"></i></a>' +
                    '<a href="' + auther_info[0][4] + '"><img src="../../../../resource/icon/note-logo.svg" width="40px"></a>' +
                    '</div>';
  $(".info .writer").append(auther_html);

});


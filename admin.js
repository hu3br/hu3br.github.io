var site= {
  title: "titulo",
  subtitle: "subtitulo",
  zuera: "zuera"
};
$(document).ready(function() {
  $("[data-admin]").each(function(){
    var admin = $(this).attr("data-admin");
	$(this).html(site[admin]);
  }) 
});


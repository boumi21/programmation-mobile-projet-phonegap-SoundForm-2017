var MenuVue = function()
{

    this.afficher = function()
    {
        $("body").html(MenuVue.pageMenu);
        var htmlMenu = $("#page-menu");

		document.getElementById('playButton').onclick = function(e){
		            move('.box')
		          .set('background-color', 'red')
		          .x(150)
		          .then()
		          .y(200)
		          .set('background-color', 'green')
		          .end();

		        };
        
        var myElement = document.getElementById('testHammer');
        var mc = new Hammer(myElement);
        mc.on("panleft panright tap press swiperigh swipeleft rotate pinch", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});
    }
}
MenuVue.pageMenu = $("#page-menu").html();
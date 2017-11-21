var MenuVue = function()
{
    this.afficher = function()
    {
        $("body").html(MenuVue.pageMenu);
        var htmlMenu = $("#page-menu");
    }
}
MenuVue.pageMenu = $("#page-menu").html();
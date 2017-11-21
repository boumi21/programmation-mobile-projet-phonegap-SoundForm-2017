var applicationSoundForm =
{
    lancer:function()
        {
            $(window).on('hashchange',$.proxy(this.naviguer, this));
            this.naviguer();
        },
}
applicationListeNoel.lancer();
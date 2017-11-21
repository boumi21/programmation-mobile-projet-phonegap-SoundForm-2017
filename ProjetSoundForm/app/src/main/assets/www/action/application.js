var applicationSoundForm =
{
    sampleDAO : new SampleDAO(),
    lancer:function()
    {
        $(window).on('hashchange',$.proxy(this.naviguer, this));
        this.naviguer();
    },
    naviguer:function()
    {
        var ancre = window.location.hash;

         else if(ancre.match(/^#ajouter-sample/))
                {
                    this.ajouterSampleVue.afficher();
                }
    }
}
applicationListeNoel.lancer();
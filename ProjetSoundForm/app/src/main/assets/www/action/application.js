var applicationSoundForm =
{
	ajouterSampleVue : new AjouterSampleVue(),
    sampleDAO : new SampleDAO(),
    lancer:function()
    {
        $(window).on('hashchange',$.proxy(this.naviguer, this));
        this.naviguer();
    },
    naviguer:function()
    {
        var ancre = window.location.hash;

         if(!ancre){
			var listeSample = this.sampleDAO.getListeSample();

			var menuVue = new MenuVue();
			menuVue.afficher();
		}else if(ancre.match(/^#ajouter-sample/)){
                    this.ajouterSampleVue.afficher();
        }else if(ancre.match(/^#AjouterSampleVue:NouveauSample/)){
        	console.log("mdrrrr");
            var sample = this.ajouterSampleVue.sample;
			this.sampleDAO.ajouterSample(sample);
			window.location.hash = "#";
        }
    }
}
applicationSoundForm.lancer();
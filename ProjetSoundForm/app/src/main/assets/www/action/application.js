var applicationSoundForm = 
{
	ajouterSampleVue : new AjouterSampleVue(),
    sampleDAO : new SampleDAO(),
    modifierSampleVue: new ModifierSampleVue(),
    supprimerSampleVue: new SupprimerSampleVue(),
    listeSampleVue : new ListeSampleVue(),
    sampleVue : new SampleVue(),

    lancer:function()
    {
        $(window).on('hashchange',$.proxy(this.naviguer, this));
        this.naviguer();
    },

    naviguer:function()
    {
        var ancre = window.location.hash;

        if(!ancre){
			var menuVue = new MenuVue();
			menuVue.afficher();

        }else if(ancre.match(/^#page-liste-sample/)){
            var listeSample = this.sampleDAO.getListeSample();
            var listeSampleVue = new ListeSampleVue(listeSample);
            listeSampleVue.afficher();

		}else if(ancre.match(/^#ajouter-sample/)){
            this.ajouterSampleVue.afficher();

        }else if(ancre.match(/^#modifier-sample\/([0-9]+)/)){
        	var trouvaille = ancre.match(/^#modifier-sample\/([0-9]+)/);
            var id = trouvaille[1];
            var sample = this.sampleDAO.getSampleParId(id);
            this.modifierSampleVue.afficher(sample);

        }else if(ancre.match(/^#supprimer-sample\/([0-9]+)/)){
            var trouvaille = ancre.match(/^#supprimer-sample\/([0-9]+)/);
            var id = trouvaille[1];
            var sample = this.sampleDAO.getSampleParId(id);
            this.supprimerSampleVue.afficher(sample);

        }else if(ancre.match(/^#page-editeur-sample/)){
            var listeSample = this.sampleDAO.getListeSample();
            var editeurSampleVue = new EditeurSampleVue(listeSample);
            editeurSampleVue.afficher();

        }else if(ancre.match(/^#page-sample/)){
            var listeSample = this.sampleDAO.getListeSample();
            this.sampleVue.afficher(listeSample);

        }else if(ancre.match(/^#AjouterSampleVue:NouveauSample/)){
            var sample = this.ajouterSampleVue.sample;
			this.sampleDAO.ajouterSample(sample);
			window.location.hash = "#page-liste-sample/";

        }else if(ancre.match(/^#ModifierSampleVue:NouveauSample/)){
            var sample = this.modifierSampleVue.sample;
			this.sampleDAO.modifierSample(sample);
			window.location.hash = "#page-liste-sample/";
        }else if(ancre.match(/^#SupprimerSampleVue:NouveauSample/)){
            var id = this.supprimerSampleVue.id;
            this.sampleDAO.supprimerSample(id);
            window.location.hash = "#page-liste-sample/";
        }
    }
}
applicationSoundForm.lancer();
var AjouterSampleVue = function(){
	instance = this;
	this.afficher = function(){

		this.sample = null;
		$("body").html(AjouterSampleVue.pageAjouterSample);
		$("#formulaire-ajouter").on("submit", function(evenement){
			evenement.preventDefault();

			var nom = $("#nom").val();
			var forme = $("#forme").val();
			var fichier = $("#fichier").val();
			var couleur = $("#couleur").val();
			var dimension = $("#dimension").val();
			instance.sample = new Sample(nom, forme, fichier, couleur, dimension);
			window.location.hash = "#AjouterSampleVue:NouveauSample";

		});

		
	}
}

AjouterSampleVue.pageAjouterSample = $("#page-ajouter-sample").html();
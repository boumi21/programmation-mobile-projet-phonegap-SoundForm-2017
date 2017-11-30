var SupprimerSampleVue = function(){
	instance3 = this;
	this.afficher = function(sample){
		console.log(sample.id);
		var id = sample.id;
		this.sample = null;
		$("body").html(SupprimerSampleVue.pageSupprimerSample);
		$("#formulaire-modifier").on("submit", function(evenement){
			evenement.preventDefault();

			var nom = $("#nom").val();
			var forme = $("#forme").val();
			var fichier = $("#");
			var couleur = $("#couleur").val();
			var dimension = $("#dimension").val();
			instance2.sample = new Sample(id, nom, forme, fichier, couleur, dimension);
			window.location.hash = "#ModifierSampleVue:NouveauSample";

		});

		
	}
}

ModifierSampleVue.pageModifierSample = $("#page-modifier-sample").html();
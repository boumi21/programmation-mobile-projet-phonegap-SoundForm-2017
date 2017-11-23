var ModifierSampleVue = function(){
	instance2 = this;
	this.afficher = function(sample){
		console.log(sample.id);
		var id = sample.id;
		this.sample = null;
		$("body").html(ModifierSampleVue.pageModifierSample);
		document.getElementById("nom").value = sample.nom;
		document.getElementById("forme").value = sample.forme;
		document.getElementById("couleur").value = sample.couleur;
		document.getElementById("dimension").value = sample.dimension;
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
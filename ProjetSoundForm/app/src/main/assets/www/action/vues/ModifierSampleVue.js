var ModifierSampleVue = function(){
	instance2 = this;
	this.afficher = function(sample){
		var id = sample.id;
		this.sample = null;
		$("body").html(ModifierSampleVue.pageModifierSample);
		document.getElementById("nom").value = sample.nom;
		document.getElementById("forme").value = sample.forme;
		document.getElementById("fichier").value = sample.fichier;
		document.getElementById("couleur").value = sample.couleur;
		document.getElementById("dimension").value = sample.dimension;
		$("#formulaire-modifier").on("submit", function(evenement){
			evenement.preventDefault();

			var nom = $("#nom").val();
			var habitants_million = $("#forme").val();
			var capitale = $("#fichier").val();
			var capitale = $("#couleur").val();
			var capitale = $("#dimension").val();
			instance2.sample = new Sample(nom, forme, fichier, couleur, dimension, id);
			window.location.hash = "#ModifierSampleVue:NouveauSample";

		});

		
	}
}

ModifierSampleVue.pageModifierSample = $("#page-modifier-sample").html();
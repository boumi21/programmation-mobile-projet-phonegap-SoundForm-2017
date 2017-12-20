var AjouterSampleVue = function(){
	instance = this;
	this.afficher = function(){

		this.sample = null;
		$("body").html(AjouterSampleVue.pageAjouterSample);
		$("#formulaire-ajouter").on("submit", function(evenement){
			evenement.preventDefault();

			var nom = $("#nom").val();
			var forme = $("#forme").val();
			var couleur = $("#couleur").val();
			var dimension = $("#dimension").val();
			var positionX = $("#positionX").val();
			var positionY = $("#positionY").val();
			instance.sample = new Sample(undefined, nom, forme, couleur, dimension, positionX, positionY);
			window.location.hash = "#AjouterSampleVue:NouveauSample";

		});

		
	}
}

AjouterSampleVue.pageAjouterSample = $("#page-ajouter-sample").html();
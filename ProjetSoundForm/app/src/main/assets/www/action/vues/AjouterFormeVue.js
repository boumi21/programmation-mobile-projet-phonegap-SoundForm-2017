var AjouterFormeVue = function(){
	instance = this;
	this.afficher = function(){

		this.forme = null;
		$("body").html(AjouterFormeVue.pageAjouterForme);
		$("#formulaire-ajouter").on("submit", function(evenement){
			evenement.preventDefault();

			var nom = $("#nom").val();
			var forme = $("#forme").val();
			var fichier = $("#fichier").val();
			var couleur = $("#couleur").val();
			var dimension = $("#dimension").val();
			instance.forme = new Forme(nom, forme, fichier, couleur, dimension);
			window.location.hash = "#AjouterFormeVue:NouvelleForme";

		});

		
	}
}

AjouterFormeVue.pageAjouterForme = $("#page-ajouter-forme").html();
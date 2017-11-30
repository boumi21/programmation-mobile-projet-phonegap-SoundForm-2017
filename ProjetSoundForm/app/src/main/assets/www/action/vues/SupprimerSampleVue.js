var SupprimerSampleVue = function(){
	instance3 = this;
	this.afficher = function(sample){
		console.log(sample.id);
		this.id = sample.id;
		$("body").html(SupprimerSampleVue.pageSupprimerSample);
		
	}
}

SupprimerSampleVue.pageSupprimerSample = $("#page-supprimer-sample").html();
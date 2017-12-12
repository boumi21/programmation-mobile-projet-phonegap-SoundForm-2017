var EditeurSampleVue = function(){
	instance4 = this;
	this.afficher = function(){
		$("body").html(EditeurSampleVue.pageEditeurSample);
		
	}
}

EditeurSampleVue.pageEditeurSample = $("#page-editeur-sample").html();
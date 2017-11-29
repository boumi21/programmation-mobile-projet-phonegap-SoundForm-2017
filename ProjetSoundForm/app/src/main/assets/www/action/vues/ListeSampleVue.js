var ListeSampleVue = function(listeSample){

	this.afficher = function(){
		$("body").html(ListeSampleVue.pageListeSample);

		var htmlListeSample = $("#liste-sample");

		var liste = "";
		console.log(listeSample);

		for(var indiceSample in listeSample){
			liste += '<li class="list-group-item"><a href="#/'+listeSample[indiceSample].id+'"><button type="button" class="btn btn-info">'+listeSample[indiceSample].nom+'</button></a>'+listeSample[indiceSample].forme+'<a href="#modifier-sample/'+listeSample[indiceSample].id+'"><button type="button" class="btn btn-primary">Modifier</button></a></li>'
		}

		htmlListeSample.html(liste);
	}
}

ListeSampleVue.pageListeSample = $("#page-liste-sample").html();
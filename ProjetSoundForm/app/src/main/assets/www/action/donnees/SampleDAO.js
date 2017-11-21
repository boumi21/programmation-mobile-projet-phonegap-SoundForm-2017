var SampleDAO = function(){

	listeSample = [];

	this.getListeSample = function(){
		return listeSample;
	}

	this.getSampleParId = function(id){
		for(var indiceSample in listeSample){
			sample = listeSample[indiceSample];
			if(sample.id == id) return sample;
		}
	}

	trouverNouvelId = function(){
		return listeSample[listeSample.lenght - 1].id + 1;
	}

	this.ajouterSample = function(sample){
		sample.id = trouverNouvelId();
		listeSample.push(sample);
	}
	
}
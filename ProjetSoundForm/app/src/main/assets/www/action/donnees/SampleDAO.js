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
	
}
var SampleDAO = function(){

	listeSample = [];

	initialiser = function(){
		if(localStorage['sample']){
			listeAnonyme = JSON.parse(localStorage['sample']);
			for(var indiceAnonyme in listeSample){
				sampleAnonyme = listeAnonyme[indiceAnonyme];
				sample = new Sample(sampleAnonyme.id,
									sampleAnonyme.nom,
									sampleAnonyme.forme,
									sampleAnonyme.fichier,
									sampleAnonyme.couleur,
									sampleAnonyme.dimension);
				listeSample.push(sample);
			}
		}
	}

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
		localStorage['sample'] = JSON.stringify(listeSample);
	}

	this.modifierSample = function(sample){
		for (var indiceSample in listeSample){
			sampleTemp = listeSample[indiceSample];
			if(sampleTemp.id == sample.id){
				listeSample[indiceSample] = sample;
			}
		}
	}

	this.supprimerSample = function(id){
		for(var indiceSample in listeSample){
			sample = listeSample[indiceSample];
			if(sample.id == id){
				listeSample.splice(indiceSample,indiceSample+1);
			}
		}
	}

	initialiser();
	
}
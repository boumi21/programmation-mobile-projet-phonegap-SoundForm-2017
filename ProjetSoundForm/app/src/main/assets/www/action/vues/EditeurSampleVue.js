var EditeurSampleVue = function(listeSample){
	instance4 = this;
	this.sampleDAO = new SampleDAO();
	this.afficher = function(){
		$("body").html(EditeurSampleVue.pageEditeurSample);

		var canvas = new fabric.Canvas('canvasEditeurSampler',{width: 1000, height:1100});

        for (sample of listeSample){
            if (sample.forme == "rectangle"){
                var rect = new fabric.Rect({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                    
                });
                console.log(rect);
                canvas.add(rect);

            } else if(sample.forme == "triangle"){
                var triangle = new fabric.Circle({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                });

                canvas.add(triangle);

            } else if(sample.forme == "cercle") {
                var cercle = new fabric.Circle({
                    radius: sample.dimension,
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur
                });

                canvas.add(cercle);
            }
            rect.on('selected', function() {
			
  			var audio = new Audio('test.mp3');
		audio.play();
		});
        }
		console.log(canvas);

		displayDate = function(){
			console.log(listeSample);
			for (sample of listeSample){
				console.log(sample);
				this.sampleDAO.modifierSample(sample);
			}
		}


		document.getElementById("btnEnregistrer").addEventListener("click", displayDate);

		
	}
}

EditeurSampleVue.pageEditeurSample = $("#page-editeur-sample").html();
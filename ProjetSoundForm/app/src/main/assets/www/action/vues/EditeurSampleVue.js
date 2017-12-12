var EditeurSampleVue = function(listeSample){
	instance4 = this;
	this.afficher = function(){
		$("body").html(EditeurSampleVue.pageEditeurSample);


		var canvas = new fabric.Canvas('canvasEditeurSampler',{width: 500, height:300});

        for (sample of listeSample){
            if (sample.forme == "rectangle"){
                var rect = new fabric.Rect({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: '#000000',
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
        }
		console.log(canvas);
	}
}

EditeurSampleVue.pageEditeurSample = $("#page-editeur-sample").html();
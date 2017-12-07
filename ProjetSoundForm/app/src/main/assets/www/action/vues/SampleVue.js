var SampleVue = function(){

    this.afficher = function(listeSample){
        var canvas = new fabric.Canvas('sampleur');

        for (sample of listeSample){
            if (sample.forme == "Rectangle"){
                var rect = new fabric.Rect({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                });

                canvas.add(rect);

            } else if(sample.forme == "Triangle"){
                var triangle = new fabric.Circle({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                });

                canvas.add(triangle);

            } else if(sample.forme == "Cercle") {
                var cercle = new fabric.Circle({
                    radius: sample.dimension,
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur
                });

                canvas.add(cercle);
            }
        }
    }
}
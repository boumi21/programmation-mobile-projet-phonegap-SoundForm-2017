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

            }
        }
    }
}
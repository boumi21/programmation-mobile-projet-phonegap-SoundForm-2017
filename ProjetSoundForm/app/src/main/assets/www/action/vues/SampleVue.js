var SampleVue = function(){

    this.afficher = function(listeSample){
        $("body").html(SampleVue.pageSampleVue);

        var canvas = new fabric.Canvas('canvasSampleur',{width: 1000, height:1050});

        for (sample of listeSample){
            if (sample.forme == "rectangle"){
                var rect = new fabric.Rect({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                });

                rect.lockMovementY = true;
                rect.lockMovementX = true;
                rect.lockScalingX = true;
                rect.lockScalingY = true;
                rect.lockRotation = true;
                rect.hasBorders = false;
                rect.hasControls = false;
                rect.hasRotatingPoint = false;
                rect.on('selected',function(){
                    var audio = new Audio('Snare_5.wav');
                    audio.play();
                });

                canvas.add(rect);

            } else if(sample.forme == "triangle"){
                var triangle = new fabric.Circle({
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur,
                    width: sample.dimension,
                    height: sample.dimension
                });

                triangle.lockMovementX = true;
                triangle.lockMovementY = true;
                triangle.lockScalingX = true;
                triangle.lockScalingY = true;
                triangle.lockRotation = true;
                triangle.hasBorders = false;
                triangle.hasControls = false;
                triangle.hasRotatingPoint = false;
                triangle.on('selected',function(){
                    var audio = new Audio('Hat_3.wav');
                    audio.play();
                })

                canvas.add(triangle);

            } else if(sample.forme == "cercle") {
                var cercle = new fabric.Circle({
                    radius: sample.dimension,
                    left: sample.positionX,
                    top: sample.positionY,
                    fill: sample.couleur
                });

                cercle.lockMovementX = true;
                cercle.lockMovementY = true;
                cercle.lockScalingX = true;
                cercle.lockScalingY = true;
                cercle.lockRotation = true;
                cercle.hasBorders = false;
                cercle.hasControls = false;
                cercle.hasRotatingPoint = false;
                cercle.on('selected',function(){
                    var audio = new Audio('Kick.wav');
                    audio.play();
                })

                canvas.add(cercle);
            }
        }
    }
}
SampleVue.pageSampleVue = $("#page-sample").html();
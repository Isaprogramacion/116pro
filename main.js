function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true}) ;
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0PG4y8qzH/model.json')
}


function modelReady(){
    classifier.classify(gotResults);
}
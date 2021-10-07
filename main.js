Webcam.set ({
    width:335,
    height:290,
    png_quality:90,
    image_format: 'png'
})

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot()
{
 Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 })
}

console.log('ml5 version;', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OHPIi9cC3/model.json')

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first perererere is" + prediction_1;
    speak_data_2 = " and The second plolol is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
//import Webcam from 'webcam-easy';

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});

function tomarFoto() {
    console.log('tomada');
    let picture = webcam.snap();
    document.querySelector('#download-photo').href = picture;
    console.log(picture);
    /*picture.then((response)=>{
        console.log(response);
        }
    ).catch((error)=>{
        console.log(error);
    })*/
    let data=picture.split(',')[1];
    console.log(data);
    this.toBin(data); 
    //document.querySelector('#foto_tomada').src=picture;
}

function toBin(data){
    var binArray = []
    var datEncode = "";

    for (i=0; i < data.length; i++) {
        binArray.push(data[i].charCodeAt(0).toString(2)); 
    } 
    for (j=0; j < binArray.length; j++) {
        var pad = padding_left(binArray[j], '0', 8);
        datEncode += pad + ' '; 
    }
    function padding_left(s, c, n) { if (! s || ! c || s.length >= n) {
        return s;
    }
    var max = (n - s.length)/c.length;
    for (var i = 0; i < max; i++) {
        s = c + s; } return s;
    }
    console.log(binArray);
}
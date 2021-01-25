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
    console.log(typeof(picture)); 
    //document.querySelector('#foto_tomada').src=picture;
}
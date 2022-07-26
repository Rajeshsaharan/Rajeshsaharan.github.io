var file = document.querySelector('.file')
var canvas = new fabric.Canvas('drawarea');	
file.addEventListener('change', (e)=>{
    const filereader = new FileReader() //web api to read data from files/input/url
    filereader.onload = (e) =>{
        const image = new Image() //new image instance
        image.src = e.target.result //fileloader.result
        image.onload = () =>{
            var img = new fabric.Image(image); //creating instance of Fabric image object
            img.set({
              left: 100, //alignment to refernce canvas
              top: 60
            });
            img.scaleToWidth(200); //set width to canvas alignment
            canvas.add(img).setActiveObject(img).renderAll(); // to add image to canvas & set to active image that we currntly passed
          }
        }
    filereader.readAsDataURL(e.target.files[0])

    }
)





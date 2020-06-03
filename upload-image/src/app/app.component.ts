import { Component } from '@angular/core';
import { UploadimageService } from './services/uploadimage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upload-image';

  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  }

  constructor(private uploadService: UploadimageService){}

  //seleccion del archivo
  seleccionarArchivo(event){
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent){
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload(){
    console.log(this.archivo);
    this.uploadService.upload(this.archivo).subscribe(
      datos => {
        if (datos['result']=='OK') {
          alert(datos['mensaje']);
        }
      }
    );
  }
}

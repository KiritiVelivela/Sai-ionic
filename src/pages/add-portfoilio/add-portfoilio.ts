import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ActionSheetController } from 'ionic-angular';
import { AddStartupProvider } from '../../providers/add-startup/add-startup';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-add-portfoilio',
  templateUrl: 'add-portfoilio.html',
})
export class AddPortfoilioPage {
  images: any = [];
  // img1: any;

  startupcreds = {
    startupname: '',
    startupvision: '',
    startupmission: '',
    startupproblem: '',
    startupsolution: '',
    startupdescription: '',
    startupurl: '',
    files: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public addservice: AddStartupProvider, public alertCtrl: AlertController,
  private camera: Camera, private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPortfoilioPage');
  }

  newStartup(startupcreds) {
    console.log(startupcreds);
     this.addservice.addstartup(startupcreds).then(data => {
       console.log(data)
       if(data == true) {
         console.log(data);
         console.log(startupcreds);
         var alert = this.alertCtrl.create({
           title: 'Startup Successful Create',
           buttons: [
             {
               text:'List of Startups',
               handler: () => {
                 this.navCtrl.pop();
               }
            }]
         });
         alert.present();
         console.log(data);
       }
       else {
         console.log(data);
         var alertfail = this.alertCtrl.create({
           title: 'Startup Creation failed',
           subTitle: 'Please enter valid details!',
           buttons: [
             {
               text:'Try Again',
               handler: () => {
                 // this.navCtrl.pop();
               }
            }]
         });
         alertfail.present();
         console.log(data);
       }
     });
   }

// reloadImages() {
//   this.imagesProvider.getImages().subscribe(data => {
//     this.images = data;
//   });
// }


   presentActionSheet() {
     let actionSheet = this.actionSheetCtrl.create({
       title: 'Select Image Source',
       buttons: [
         {
           text: 'Load from Library',
           handler: () => {
             this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
           }
         },
         {
           text: 'Use Camera',
           handler: () => {
             this.takePicture(this.camera.PictureSourceType.CAMERA);
           }
         },
         {
           text: 'Cancel',
           role: 'cancel'
         }
       ]
     });
     actionSheet.present();
   }

   public takePicture(sourceType) {
     // Create options for the Camera Dialog
     var options = {
       quality: 100,
       destinationType: this.camera.DestinationType.FILE_URI,
       sourceType: sourceType,
       saveToPhotoAlbum: false,
       correctOrientation: true
     };

     // Get the data of an image
     this.camera.getPicture(options).then((imagePath) => {
        console.log("image path coming up");
        console.log(imagePath);
        this.images = imagePath;
        console.log(this.images.url)
       // let modal = this.modalCtrl.create('UploadModalPage', { data: imagePath });
       // modal.present();
       // modal.onDidDismiss(data => {
       //   if (data && data.reload) {
       //     this.reloadImages();
       //   }
       // });
     }, (err) => {
       console.log('Error: ', err);
     });
   }

   fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.images = event.target.result;
      }
      console.log(this.images);
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      console.log(file);
  }


}

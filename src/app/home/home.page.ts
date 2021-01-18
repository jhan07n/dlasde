import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { iosTransitionAnimation } from '@ionic/angular';
import { platform } from 'process';

const {Device} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  plat:any;
  os:string;
  android: boolean;
  ios: boolean;

  constructor() {
    this.plat=[];
    this.os="";
    this.ios=false
    this.android=false
    
    this.plat = Device.getInfo()
    this.os = this.plat["__zone_symbol__value"].operatingSystem

    if(this.os == "ios"){
     this.ios=true
     this.android=false
    }
    else if(this.os== "android"){
      this.ios=false
      this.android=true
    }    

  }

}

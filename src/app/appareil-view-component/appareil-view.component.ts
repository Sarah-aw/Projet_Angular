import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../model/device-service';
import { DeviceData } from '../model/DevisData';

@Component({
  selector: 'app-appareil-view-component',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  devicesList: DeviceData[] = []; 
  constructor(private _deviceService: DeviceService) { }

  ngOnInit(): void {
    this._deviceService.getDevices()
      .subscribe(devicesList => this.devicesList = devicesList);
  }

  turnOffAll(): void{
    const isSure : boolean = window.confirm('On éteint ?');
    if(isSure){
      this._deviceService.turnOnAll();
    }
  }
  turnOnAll(): void{
    this._deviceService.turnOnAll();
  }

}
import { Component, OnInit } from '@angular/core';
import { PostListItemComponent } from '../component/post-list-item/post-list-item.component';
import { DeviceService } from '../model/device-service';
import { DeviceData } from '../model/DevisData';
import { Post } from '../model/interface/post';

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
    const isSure : boolean = window.confirm('Tu es sûre de ne rien maîtriser ?');
    if(isSure){
      this._deviceService.turnOffAll();
    }
  }

  turnOnAll(): void{
    this._deviceService.turnOnAll();
  }
}
import { Component, OnInit, Input } from '@angular/core';

// Models
import { DeviceData } from '../model/DevisData';
import { DeviceService } from '../model/device-service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() deviceData?: DeviceData;

  constructor(private _deviceService: DeviceService ) { }

  ngOnInit(): void {
    
  }

  getState(): string {
    if(this.deviceData){
      if(this.deviceData.Status){
        return 'Je maitrise';
      }
      else{
        return 'Je ne maitrise pas';
      }
    }
    return '';
  }

  turnOn(name: string): void{
    this._deviceService.turnOn(name);
  }
  turnOff(name: string): void{
    this._deviceService.turnOff(name);
  }

}

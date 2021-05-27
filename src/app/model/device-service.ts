import { DeviceData } from '../model/DevisData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devicesList : DeviceData[] = [
    new DeviceData("Maîtriser les fondamentaux de l’informatique décisionnelle et du Big data", true),
    new DeviceData("Mettre en œuvre des architectures Big Data de type Hadoop ou NoSQL", true),
    new DeviceData("Gérer un projet de développement d’une plateforme web", false),
    new DeviceData("Maîtriser les technologies Open Source, front-end et back-end", true),
    new DeviceData("Mettre en œuvre les bonnes pratiques de développement et des outils de maîtrise de la qualité", false),
    new DeviceData("Maîtriser les techniques de management du SI et de gestion de projet", true),
    new DeviceData("Exploiter le référentiel ITIL et les principales briques du SI (ERP, CRM, BI, …)", true),
    new DeviceData("Concevoir une architecture technologique et fonctionnelle et l’intégration de fonctionnalités web & mobile", false),
    new DeviceData("Contrôler la cohérence de la réalisation avec les procédures d’exploitation", false),
    new DeviceData("Assurer une veille technologique concernant les nouveaux langages de programmation", true),
    new DeviceData("Assurer la transcription des besoins en architectures techniques", false),
    new DeviceData("Mettre en place le développement des frameworks", true),
    new DeviceData("Maîtrise des architectures des systèmes web", true),
    new DeviceData("Maîtrise de la conduite de projet et des méthodes orientées objet", true),
    new DeviceData("Maîtrise des bases de données et des langages de programmation : Java/J2EE, PHP, .net", false),
  ];

  constructor() {

  }

  getDevices(): Observable<DeviceData[]> {
    return of(this.devicesList);
  }
  turnOn(name : string): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Name == name && !device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }
  turnOff(name : string): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Name == name && device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }

  turnOffAll(): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }
  turnOnAll(): void{
    this.devicesList = this.devicesList.map((device) =>{
      if(!device.Status){
        device.Status = !device.Status;
      }
      return device;
    })
  }

}

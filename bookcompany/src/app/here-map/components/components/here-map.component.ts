import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html', 
    styleUrls: ['./here-map.component.scss']
})


export class HereMapMainComponent implements OnInit{

  constructor(private titleService: Title){}
  ngOnInit(): void {
    this.titleService.setTitle("Start Here | Directions");
  }
 

  public title = 'playground';
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''

  userAddress2: string = ''
  userLatitude2: string = ''
  userLongitude2: string = ''
 

    public lat: number;
    public lng: number;


    handleAddressChange(address: any) {
        this.userAddress = address.formatted_address
        this.userLatitude = address.geometry.location.lat()
        this.userLongitude = address.geometry.location.lng()
    }

    handleAddressChange2(address: any) {
        this.userAddress2 = address.formatted_address
        this.userLatitude2 = address.geometry.location.lat()
        this.userLongitude2 = address.geometry.location.lng()
    }

  public origin: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Wall Street';
  public destination: string | google.maps.Place | google.maps.LatLng | google.maps.LatLngLiteral = 'Central Park';
 
  public renderOptions: google.maps.DirectionsRendererOptions = { suppressMarkers: true };
  public markerOptions = { origin: { draggable: true }, destination: { draggable: true } };

  public change(event: google.maps.DirectionsResult) {
    const start = event.routes[0].legs[0].start_location;
    const end = event.routes[0].legs[0].end_location;
  }



  public dir: any
  public newLat: number;
  public newLng: number;
  public getDirection_A() {
      this.dir = {
          origin: { lat: this.userLatitude, lng: this.userLongitude },
          destination: { lat: this.userLatitude2, lng: this.userLongitude2 }
      }
  }
  
  



}
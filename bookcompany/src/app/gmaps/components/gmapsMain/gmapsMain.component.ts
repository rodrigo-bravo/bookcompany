import { Component, OnInit, ElementRef, ViewChild, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-gmapsMain',
  templateUrl: './gmapsMain.component.html',
  styleUrls: ['./gmapsMain.component.scss'],
})
export class GmapsMainComponent implements OnInit {
  
  title: string = 'Location Search';
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''
  latitude: number = 40.785091 ; //starting lat
  longitude: number = -73.968285; // starting lng
  zoom:number = 12;
  address: string = 'Central Park, NY, United States';
  private geoCoder: google.maps.Geocoder;

  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
  }

  @ViewChild('googleMap', { static: true })
  googleMapRef: ElementRef;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  map: google.maps.Map;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private titleService: Title) { }

  ngOnInit():void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
    this.titleService.setTitle("Locations");
  }

  private setCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    } else {
      throw new Error("Your browser does not support Geolocation!");
    }
  }

  markerDragEnd($event: google.maps.MouseEvent) {
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }
  getAddress(latitude1: number, longitude1: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude1, lng: longitude1 } }, (results, status) => {
      this.ngZone.run(() => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found!');
        }
      } 
    })
    });
  }

}



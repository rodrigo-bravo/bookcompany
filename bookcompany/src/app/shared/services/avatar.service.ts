import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class avatarService {

  constructor() { }

  getUserAvatar(email: string) {
    if (email) {
      return `https://38.media.tumblr.com/cab51a1ca7c93ed6637cac37e6adc149/tumblr_neitigAqpR1raiktro1_500.gif`;
    } else{
      return 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg'
    }
  }
}

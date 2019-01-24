import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {}

   public arrayRemoveById(arr, id) {

    return arr.filter(function(ele){
        return ele.Id != id;
    });
 
 }
}

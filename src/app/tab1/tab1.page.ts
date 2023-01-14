import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  res:any;

  constructor(private http:HttpClient) {}
ngOnInit(): void {
  let url = "https://sangria-walkingstick-kit.cyclic.app/api/movies"
  this.http.get(url).subscribe((res)=>{
    console.log(res);
    this.res = res
  })
  
}
}

interface Result {
  bgImage:string,
  description:string,
  dureeTotale:number, 
  imageUrl:string,
  realisateur:string,
  titre:string,
  view:number,
  years:number,
  _id:string
}
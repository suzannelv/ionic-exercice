import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  res:any;
  constructor(public http: HttpClient) {}
ngOnInit(): void {
 this.http.get("http://sangria-walkingstick-kit.cyclic.app/api/movies").subscribe((res)=>{
  console.log(res)
  this.res=res
 })
  
}
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
res:any;
  constructor(public http: HttpClient) {}
ngOnInit(): void {
 this.http.get("http://sangria-walkingstick-kit.cyclic.app/api/movies").subscribe((res)=>{
  console.log(res)
  this.res=res
 })
  
}
loadData(e:any){
  setTimeout(()=>{
e.target.complete()
  },2000)
}

doRefresh(e:any){
setTimeout(()=>{
  e.target.complete()
},2000)
}
}

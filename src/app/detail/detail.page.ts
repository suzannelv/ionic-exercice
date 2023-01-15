import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  res:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://sangria-walkingstick-kit.cyclic.app/api/movies").subscribe((res)=>{
      console.log(res)

      this.res=res
    })
  }

}

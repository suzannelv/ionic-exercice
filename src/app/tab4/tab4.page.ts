import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
name='';
pwd='';
  constructor(public http:HttpClient, public alertC: AlertController) { }
  ngOnInit() {
  }
  login(){
   let url = "http://101.96.128.94:9999/data/user/login.php";
  //  post 方式要求：路径和参数必须分开
  let params = `uname=${this.name}&${this.pwd}`
  // 添加特殊的内容类型配置
  let options = {
    headers:new HttpHeaders ({
      "content-type": "application/x-www-form-urlenconded"
    }) 
  };
  this.http.post(url, params, options).subscribe((res)=>console.log(res));
  }

}

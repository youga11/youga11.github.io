import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
date=new Date;
langue:any;
setLangue(){
  console.log('langue');
  if(this.langue=='fr')
  console.log('fr')
  else if(this.langue=='es')
  console.log('es');
}
}

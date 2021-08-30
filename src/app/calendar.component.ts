import {Component} from '@angular/core';
import { newWork } from './calendar.newWork';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector:'calendar',
    templateUrl:'calendar.html'
    
})
export class CalendarComponent{
constructor( private cookieService: CookieService ) { };
calendarDate=new Date();
work=new newWork('','',this.calendarDate.getMonth()+1+"/"+this.calendarDate.getDate());
affairs=this.cookieService.get('affairs')==""?[{workDate:"",work:"",time:""}]:JSON.parse(this.cookieService.get('affairs'));

ngOnInit(): void {
 setInterval(() => {
   this.calendarDate = new Date();
 }, 1000);
 if(this.cookieService.get('affairs')!=""){
     for (let index = 0; index < this.affairs.length; index++) {
        if(this.affairs[index].time<this.calendarDate.getMonth()+1+"/"+this.calendarDate.getDate()&&this.affairs[index].work!=''){
            this.affairs.splice(index,1);
        }
     }
 }
}
add(form){
    this.affairs.push(this.work);
    if(this.affairs[0].work==""){
        this.affairs.splice(0,1);
    }
    this.affairs=this.affairs.sort((a,b)=>{return a.workDate>b.workDate?1:-1})
    this.work={workDate:"",work:"",time:this.calendarDate.getMonth()+1+"/"+this.calendarDate.getDate()};
    form.form.markAsPristine();
    form.resetForm();
}

delete(number){
    this.affairs.splice(number,1);
}


save(){
    this.cookieService.set( 'affairs', JSON.stringify(this.affairs),7 );
}
}
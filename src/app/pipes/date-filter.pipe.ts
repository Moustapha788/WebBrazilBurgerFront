import { TypeofExpr } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from 'src/models/Commande';

@Pipe({
  name: 'dateFilte'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: Commande[], date: string=new Date().toDateString()): Commande[] {


    
    let tab: Commande[] = []
    

    
    if (!value) return [];
    if (!date){
      tab=value
      return tab;  
    } 

    
console.log(date);

    

    
    value.forEach((commande:Commande)=>{
      console.log(new Date(date));
      if(new Date(commande.registrationDate).toDateString()==new Date(date).toDateString()){

        tab.push(commande);
        
      }
    })
    console.log("tab", tab);

    console.log("value.length: "+value.length);
 
    return tab;

  }
}



//# sourceMappingURL=ng2-filter.pipe.d.ts.map
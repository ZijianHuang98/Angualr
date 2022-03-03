import { Pipe } from "@angular/core";

@Pipe({
    name:'sex'
})
export class sexFilter{    
    transform(val){
        if(val < 50000)
        return 'rich'
        else
        return 'poor'
    }

}
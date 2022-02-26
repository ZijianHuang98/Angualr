import { Pipe } from "@angular/core";

@Pipe({
    name:'sexFilter'
})
export class sexFilter{ 
    transform(val){
        if(val < 50000)
        return 'rich'
        else
        return 'poor'
    }

}
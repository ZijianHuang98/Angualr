import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root' //mean the service  serve the root
})
export class LogService{
    doLog(action){
        let uname = "admin4"
        let time = new Date().getTime()
        console.log(`admin:${uname} time:${time} action: ${action}`)
    }
}
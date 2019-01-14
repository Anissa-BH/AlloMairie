
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Page } from "ionic-angular/umd/navigation/nav-util";


@Injectable()
    export class UsersProvider {
        header: HttpHeaders;
       
        constructor(public http: HttpClient){

            this.header = new HttpHeaders();
            this.header = this.header.append('Content-type', 'application/json');
            this.header = this.header.append('Accept', 'application/json');
        }
        login(user){
            let url = '/alloMairie/user/_search?q=username:'+ user.username;
            return this.http.get(url, {headers: this.header}) 
        }
    }

 
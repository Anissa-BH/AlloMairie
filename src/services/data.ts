import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Page } from "ionic-angular/umd/navigation/nav-util";


@Injectable()
    export class DataProvider {
        header: HttpHeaders;
       
        constructor(public http: HttpClient){

            this.header = new HttpHeaders();
            this.header = this.header.append('Content-type', 'application/json');
            this.header = this.header.append('Accept', 'application/json');
        }

        all(){
            let url = '/description/coord/_search';
            return this.http.get(url, {headers: this.header})
        }

        add(coord){
           let url = '/description/coord/'+ coord.id;
            return this.http.post(url, {"id": coord.id, "latitude": coord.lat, "longitude": coord.lng, "adresse": coord.adresse, "categorie": coord.categorie}, {headers: this.header});
       }
       
    
    }
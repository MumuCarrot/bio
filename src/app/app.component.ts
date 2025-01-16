import { Component } from "@angular/core";

import {HeaderComponent} from "../header/header.component";
import {ContentComponent} from "../content/content.component";
     
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html',
    styleUrl: 'app.component.css'
})
export class AppComponent {}
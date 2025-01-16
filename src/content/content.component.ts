import { Component } from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
    selector: "content-comp",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "content.component.html",
    styleUrl: "content.component.css"
})
export class ContentComponent {}
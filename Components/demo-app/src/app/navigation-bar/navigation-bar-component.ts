import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation-bar',
    template: `<div class="nav-bar">
        <div>{{title}}</div>
        <div class="nav-button">Home</div>
        <div class="nav-button">Contacts</div>
        <div class="nav-button">About</div>
    </div>`,
    styles:`.nav-bar{
        width:100%;
        height:30px;
        padding:10px;
        background-color:skyblue;
        color:#000;
        display:flex;
        justify-content:center;
        align-items:center;

        .nav-button{
            margin-left:10px;
            border: 1px solid black;
            padding:10px;
        }

        .nav-button:hover{
            cursor:pointer;
            background-color:grey;
            color:#fff;
        }
    }`,

    standalone:true,
})

export class NavigationBarComponent{
   title = "My Navigation Component";
}


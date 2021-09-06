import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from "./tutorial.model";; 
import { TutorialService } from 'src/app/tutorial/tutorial.service'; 
@Component({ 
    selector: 'app-tutorial-add', 
    templateUrl: './tutorial-add.component.html', 
    styleUrls: [] }) 
export class TutorialAddComponent implements OnInit {
    public tutorial: Tutorial = new Tutorial();
    constructor(private tutorialService: TutorialService, 
                private router: Router) {}
    ngOnInit(): void {
    } 
    
    // Tutorial를 추가한다.
    public createTutorial(): void { 
        this.tutorialService.createTutorial(this.tutorial) 
            .subscribe(response => { 
                if (response) { 
                    this.router.navigate(['/tutorial/list']);
                } else { 
                console.log(response);
                }
            });
    }
}




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from "./tutorial.model";;
import { TutorialService } from 'src/app/tutorial/tutorial.service';

@Component({ selector: 'app-tutorial-detail', templateUrl: './tutorial-detail.component.html', styleUrls: [] })

export class TutorialDetailComponent implements OnInit {
    public tutorial: Tutorial = new Tutorial();
    constructor(private tutorialService: TutorialService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit(): void {
        this.getTutorial(this.route.snapshot.params.id);
    }
    // 단일 튜토리얼 목록 가져온다.
    public getTutorial(id: string): void {
        this.tutorialService.getTutorial(id)
            .subscribe(response => {
                if (response) {
                    this.tutorial = response;
                } else {
                    console.log(response);
                }
            });
    }
    // 단일 튜토리얼 수정한다.
    public updateTutorial(): void {
        if (!this.tutorial.id) {
            return;
        } this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial)
            .subscribe(response => {
                if (response) {
                    this.router.navigate(['/tutorial/list']);
                } else {
                    console.log(response);
                }
            });
    }
    // 단일 튜토리얼 삭제한다.
    public deleteTutorial(): void {
        if (!this.tutorial.id) {
            return;
        }

        this.tutorialService.deleteTutorial(this.tutorial.id)
            .subscribe(response => {
                if (response) {
                    this.router.navigate(['/tutorial/list']);
                } else {
                    console.log(response);
                }
            });
    } 

    updatePublished(isXx: boolean) {
    
    }

}


    // Update tutorial status public updatePublished(status: boolean): void { if (!this.tutorial.id) { return; } this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial) .subscribe(response => { if (response) { this.tutorial.published = status; } else { console.log(response); } }); } }
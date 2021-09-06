import { Component, OnInit } from '@angular/core'; 
import { Tutorial } from "./tutorial.model";; 
import { TutorialService } from 'src/app/tutorial/tutorial.service'; 

@Component({ 
    selector: 'app-tutorial-list', 
    templateUrl: './tutorial-list.component.html', 
    styleUrls: [] 
}) 

export class TutorialListComponent implements OnInit { 

    public tutorialList: Tutorial[] = []; 
    public tutorial: Tutorial = new Tutorial(); 
    public keyword = ''; 

    // input은 기본값이 '' 최소 빈문자열이여야한다.
    

    constructor(private tutorialService: TutorialService) {} 
    
    ngOnInit(): void { 
        this.retrieveTutorialList(); 
    } 
        
        // 튜토리얼 목록 가져온다.
        public retrieveTutorialList(): void { 
            this.tutorialService.getTutorialList() 
            .subscribe(response => { 
                if (response) { 
                    this.tutorialList = response; 
                } else { 
                    console.log(response); 
                } 
            }); 
        } 
        // 튜토리얼 조회한다.
        public searchTutorial(): void { 
            this.tutorialService.searchTutorial(this.keyword) 
            .subscribe(response => { 
                if (response) { 
                    this.tutorialList = response; 
                } else { 
                    console.log(response); 
                } 
            }); 
        } 
    }


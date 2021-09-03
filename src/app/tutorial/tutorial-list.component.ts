import { Component, OnInit } from '@angular/core'; 
import { Tutorial } from 'src/app/tutorial/tutorial.value'; 
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
    
    constructor(private tutorialService: TutorialService) {} 
    
    ngOnInit(): void { 
        this.retrieveTutorialList(); 
    } 
        
        // 
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


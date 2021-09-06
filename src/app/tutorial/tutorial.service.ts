import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Tutorial } from "./tutorial.model";
// import { Tutorial } from '../ src/app/tutorial/tutorial.value'; 
const baseUrl = 'http://localhost:3000/api/tutorial'; 

/*
 * HTTP 요청을 위해 Service 만들기
 * @Injectable() 데코레이터를 사용하여 같은 모듈 내의 component에서 호출할 수 있도록 해준다.
 */
@Injectable({
    providedIn: 'root'
}) 
export class TutorialService { 
    constructor(private http: HttpClient) {} 
    
    // Retrieve all tutorials 
    public getTutorialList(): Observable<Tutorial[]> { 
        return this.http.get<Tutorial[]>(baseUrl);
    } 
     
    // Retrieve tutorial by id 
    public getTutorial
    (id: string): Observable<Tutorial> { 
        return this.http.get(`${baseUrl}/${id}`); 
    } 
        
    // Search tutorial by keyword
    public searchTutorial(keyword: string): Observable<Tutorial[]> { 
        return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`); 
    } 
    
    // 튜토리얼 생성한다.
    public createTutorial(data: Tutorial): Observable<any> { 
        return this.http.post(baseUrl, data); } 
        
    // 튜토리얼 수정한다.
    public updateTutorial(id: string, data: Tutorial): Observable<any> { 
        return this.http.put(`${baseUrl}/${id}`, data); 
    } 
    
    // 튜토리얼 삭제한다.
    public deleteTutorial(id: string): Observable<any> { 
        return this.http.delete(`${baseUrl}/${id}`); 
    } 

}



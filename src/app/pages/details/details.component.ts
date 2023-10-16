import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiListService } from 'src/app/apilist.service';
import { singoloMovie } from 'src/app/int_movie';
import { tipo_dati } from 'src/app/interfaceM';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  datiMovie!: singoloMovie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiListService ) {


    this.activatedRoute.params.pipe(

      switchMap(
        (params)=> {
          return this.ApiService.getByID(params['id'])
        }
      )
    ).subscribe((data : singoloMovie) => {
      this.datiMovie = data;
      console.log(this.datiMovie);
    })
   
    
  }
}


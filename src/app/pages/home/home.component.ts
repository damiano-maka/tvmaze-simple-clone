import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiListService } from 'src/app/apilist.service';
import { tipo_dati } from 'src/app/interfaceM';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movieListHome: Array<tipo_dati> = []
  filtroPerNome: string = '';
 

  constructor(
    private apiService : ApiListService, private router: Router, private activatedRoute: ActivatedRoute) {
      
      this.apiService.getAll().pipe()
        .subscribe((datiALL: Array<tipo_dati>) => {
          this.movieListHome = datiALL;
        })
  }
  
  onCardClicked(movieId: number): void {
    this.router.navigate(['/detail', movieId]);
  }


  filterByNome(filtroPerNome: string): void {
    if (filtroPerNome) {
      // Filtra i film per nome
      this.movieListHome = this.filterByNomeS(filtroPerNome);
    } else {
      // Ottieni tutti i film dall'API
      this.apiService.getAll().subscribe((datiALL: Array<tipo_dati>) => {
        this.movieListHome = datiALL;
      });
    }
  }
  
  public filterByNomeS(nome: string): Array<tipo_dati> {
    return this.movieListHome.filter(movie =>
      movie.name.toLowerCase().includes(nome.toLowerCase())
    );
  }
  
} 

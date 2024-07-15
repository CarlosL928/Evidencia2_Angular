import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';

import { MaterialModule } from '../../material/material/material.module';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MaterialModule, 
    HttpClientModule
  ],
  providers: [RickAndMortyService],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent implements OnInit{
  personajes : any = {}
  
nexturl: any;

  constructor(private RyM : RickAndMortyService,
    private dialog: MatDialog
  ) {}


  ngOnInit(): void {
      this.RyM.obtenerPersonajes().subscribe({
        next: (data) => {
          this.personajes = data
          console.log(this.personajes);

        },
        error: (error) => {
          console.error(error)
        }
      })
      
    }

    paginaSiguiente(): void {
      this.RyM.NextPage(this.personajes.info.next).subscribe({
        next: (data) => {
          this.personajes = data
          console.log(this.personajes);
        },
        error: (error) => {
          console.error(error)
        }
      })
    }

    paginaAnterior(): void {
      this.RyM.NextPage(this.personajes.info.prev).subscribe({
        next: (data) => {
          this.personajes = data
          console.log(this.personajes);
        },
        error: (error) => {
          console.error(error)
        }
      })
    }

    openDialog(id : string) {
      this.dialog.open(TarjetasComponent,{
        data: {
          id
        },
      });
    }

    
    
    
  }


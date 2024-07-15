import { Component, Inject } from '@angular/core';
import { MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent } from '@angular/material/dialog';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material/material.module';

@Component({
  selector: 'app-tarjetas',
  standalone: true,

  imports: [MaterialModule, MatDialogTitle, MatDialogContent, HttpClientModule],
  providers: [RickAndMortyService],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss'
})
export class TarjetasComponent {

  personaje: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private RyM: RickAndMortyService){}

  ngOnInit(): void {
    this.RyM.obtenerPersonaje(this.data.id).subscribe({
      next: respuesta => {
        this.personaje = respuesta
      }
    })
    
  }

}



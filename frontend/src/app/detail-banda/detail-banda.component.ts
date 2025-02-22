import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Banda } from '../model/banda';
import { BandaService } from '../services/banda.service';
import { Album } from '../model/album';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-banda',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './detail-banda.component.html',
  styleUrl: './detail-banda.component.css'
})


export class DetailBandaComponent implements OnInit {

    idbanda='';
    banda!:Banda;
    albuns!:Album[];

    constructor(private route: ActivatedRoute, private bandaService: BandaService) {

    }

    ngOnInit(): void {

        this.idbanda = this.route.snapshot.params["id"];
        this.bandaService.getBandaPorId(this.idbanda).subscribe(response =>{
          // debugger;
          this.banda = response;
          // console.log(this.banda);
          
        }); 
        
        this.bandaService.getAlbunsBanda(this.idbanda).subscribe(response => {
          this.albuns = response;
          console.log(this.albuns);
        });
    }
}

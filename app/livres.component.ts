import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {LivresService} from './livres.service';
import {PanierService} from './panier.service';
import {Livre} from './livre';


@Component({
    selector: 'livres',
    templateUrl: "../app/html/Livres.html"
})


export class LivresComponent implements OnInit {

    livres:Livre[] = [];

    MaxPrix = 0;

    constructor(private route:ActivatedRoute,
                private livresService:LivresService,
                private panierService:PanierService) {
    }

    //with server
    ngOnInit() {
        this.route.params.subscribe(params => {
            let category = params['Category'];
            console.log('ngOnInit', category);
            if (category != null) {
                this.livresService.ChercherParCategorie(category).subscribe(p => {
                    this.livres = p;
                }, err => {
                    console.log(err);
                });
            } else {
                this.livresService.RecupererLivres().subscribe(p => {
                    this.livres = p;
                }, err => {
                    console.log(err);
                });
            }
        });
    }


    AjouterLivrePanier(item:Livre) {
        this.panierService.AjouterLivre(item);
    }
}
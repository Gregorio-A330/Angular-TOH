import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];
// criando um serviço de heroi privado
constructor(private heroService: HeroService, private messageService: MessageService) { }
//criando a função GET dos herois e dando "bind" ao array criado acima
  getHeroes(): void {
    //quando for realizar uma chamada desse padrão e vier de um servidor, sempre utilizar uma função assincrona
    //para que tenha o devido efeito
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);//utilizando este metodo, pois não estamos consumindo de um servidor remoto
  }
//ao iniciar ele chama a função get e plota dentro do array
  ngOnInit() {
    this.getHeroes();
  }
// caso selecione um heroi ele seta o heroi selecionado que vem de "hero"

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides-planning',
  templateUrl: './guides-planning.component.html',
  styleUrls: ['./guides-planning.component.scss']
})
export class GuidesPlanningComponent implements OnInit {

  plan: any = [
    {
      days: 5,
      tasks: [
        {
          color: "green",
          name: "Module d'authentification"
        },
        {
          color: "blue",
          name: "Module des guides"
        },
      ]
    },
    {
      days: 1,
      tasks: [
        {
          color: "yellow",
          name: "réunion - présentation"
        },
      ]
    },
    {
      days: 4,
      tasks: [
        {
          color: "red",
          name: "Module Gestion du contenu"
        },
        {
          color: "indigo",
          name: "Module des Statistiques"
        },
      ]
    },
    {
      days: 1,
      tasks: [
        {
          color: "yellow",
          name: "réunion - présentation"
        },
      ]
    },
    {
      days: 5,
      tasks: [
        {
          color: "green",
          name: "Module Gestion du formulaire"
        },
      ]
    },
    {
      days: 1,
      tasks: [
        {
          color: "yellow",
          name: "réunion - présentation"
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.plan = this.plan.map((p: any) => { return Array.from({ length: p.days }).fill(p) }).reduce(function (a : any, b : any) { return a.concat(b) }).map((p: any, i: number) => { return { ...p, day: i + 1 } });
    console.log(this.plan)
  }

}

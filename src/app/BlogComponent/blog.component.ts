import { Component, OnInit } from '@angular/core';
import { Post } from '../model/interface/post';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[]= [
    {
      title: 'Taha',
      content: "Avant tout je tiens à remercier l'équipe Admissions et Placement (!!) qui a pu me proposer jusqu'à 4 entretiens en moins d'une semaine. Au niveau des locaux, des travaux de rénovation ont été réalisés, environnement de travail irréprochable. Des formateurs à l'écoute, expérimentés, et surtout PEDAGOGUES !! Ne regrettant pas mon inscription, je tiens à préciser un point essentiel contrairement à d'autre écoles qui se vantent de détenir des partenariats d'entreprises par milliers, j'ai parrainé 3 amis qui ont pu également décrocher chacun d'eux une alternance grâce à l'IPSSI. Pour finir ils proposent des plateformes E-learning (en ligne) gratuit permettant d'approfondir ses compétences dans chaque domaine. #TeamIpssi Merci !!",
      lovesIts: +2,
      created_at: new Date()
    },{
      title: 'Jérémy',
      content: "Entré à l'IPSSI par la voix de l'alternance, j'ai pu suivre le coaching ainsi que le jobdating. Il était difficile pour moi de trouver une alternance et je peux remercier l'accompagnement et l'encadrement de l'école pour les opportunités que j'ai décroché..",
      lovesIts: 0,
      created_at: new Date()
    },{
      title: 'Mathieu',
      content: "Je recommande à tous les étudiants qui comme moi ont du mal à trouver une alternance par eux-mêmes. Inscrits depuis quelques semaines sur la formation Bac+5 Architecture Web et Data engineering, les chargés de placement en entreprise de l'école m'ont accompagné et coaché, grâce à eux j'ai trouvé mon entreprise en seulement 1 semaine. Merci IPSSI !",
      lovesIts: +10,
      created_at: new Date()
    },{
      title: 'Laurent',
      content: "J’ai beaucoup apprécié mes années à l’IPSSI. On y rencontre des intervenants pro et compétents, le personnel est à l’écoute et les promos sont à taille humaine. Le service admissions et placements a toujours su me trouver de belles opportunités pro. Personnellement, j’aimerai avoir plus d’événements avec les autres diplômés, mais une fois qu’on est sur le marché du travail, c’est toujours difficile de se libérer. En tout cas, je recommande l’école aux étudiants qui voudraient se lancer dans l’informatique..",
      lovesIts: -3,
      created_at: new Date()
    },{
      title: 'Vincy',
      content: "J'étais à la recherche d'un établissement pour une rentrée décalée, et par l'intermédiaire d'un ami j'ai connue l'IPSSI (Institut Privée Supérieure des Systèmes de l'Information). Après avoir passer mon test, j'ai pue intégrer l'école en 3ème année Administration du SI. La formation est très bonne et les cours sont pour ma part diversifiés et d'actualités sans compter sur le corps professoral qui est assez compétent. Aussi, le service Admission et placement reste très actif en ce sens qu'il nous permet d'obtenir facilement des entretiens auprès des entreprises. J'aimerais d'ailleurs les remercier ici de m'avoir permis d'obtenir mon alternance. J'ai donc décidé de poursuivre ma formation Mastère 2 Cyber Sécurité & Cloud à l'école IPSSI",
      lovesIts: +9,
      created_at: new Date()
    },
  ]

  constructor() { }

  ngOnInit(): void {
  
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, empty } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { ProjectsService } from '../../projects/services/projects.service';
import { getUser } from '../../auth/store/auth.selectors';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  projectsSub: Subscription;
  projects = [
    {
      title: 'The Giver',
      description: 'Set in a society which at first appears to be utopian but is revealed to be dystopian as the story progresses. The novel follows a 12-year-old boy named Jonas. The society has taken away pain and strife by converting to "Sameness", a plan that has also eradicated emotional depth from their lives.',
      bookCoverUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/The_Giver_first_edition_1993.jpg/220px-The_Giver_first_edition_1993.jpg'
    },
    {
      title: 'Ulysses',
      description: 'Chronicles the appointments and encounters of the itinerant Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904. Ulysses is the Latinised name of Odysseus, the hero of Homer\'s epic poem the Odyssey, and the novel establishes a series of parallels between the poem and the novel, with structural correspondences between the characters and experiences of Bloom and Odysseus, Molly Bloom and Penelope, and Stephen Dedalus and Telemachus, in addition to events.',
      bookCoverUrl:
        'https://d3i5mgdwi2ze58.cloudfront.net/usuab7s8yuwlcmadwx9woy746lvi'
    },
    {
      title: 'Don Quixote',
      description: 'Revolves around the adventures of a member of the lowest nobility, an hidalgo ("Son of Someone"), from La Mancha named Alonso Quixano, who reads so many chivalric romances that he either loses or pretends to have lost his mind in order to become a knight-errant to revive chivalry and serve his nation, under the name Don Quixote de la Mancha.',
      bookCoverUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91lQnuACgZL.jpg'
    },
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      description: 'Follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort.',
      bookCoverUrl:
        'https://d1ldy8a769gy68.cloudfront.net/300/978/059/035/340/3/9780590353403.jpg'
    },
    {
      title: 'The Great Gatsby',
      description: 'Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
      bookCoverUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg'
    },
    {
      title: 'Heart of Darkness',
      description: 'Details an incident when Marlow, an Englishman, took a foreign assignment from a Belgian trading company as a ferry-boat captain in Africa. Although Conrad does not specify the name of the river, at this time Congo Free State, the location of the large and important Congo River, was a private colony of Belgium\'s King Leopold II. Marlow is employed to transport ivory downriver; however, his more pressing assignment is to return Kurtz, another ivory trader, to civilization in a cover up. Kurtz has a reputation throughout the region.',
      bookCoverUrl:
        'https://d3i5mgdwi2ze58.cloudfront.net/tyxilwq93riaj4702yj9ntkf6o8g'
    },
  ];


  constructor(
    private store: Store<AppState>,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit() {
    this.initProjects();
  }

  ngOnDestroy() {
    if (this.projectsSub) {
      this.projectsSub.unsubscribe();
    }
  }

  initProjects() {
    this.projectsSub = this.store
      .pipe(
        select(getUser),
        switchMap((user: any) => {
          if (user) {
            return this.projectsService.get(user.uid);
          } else {
            return empty();
          }
        }),
        take(1)
      )
      .subscribe(projects => {
        if (projects.length === 0) {
          this.projectsService.addProjects(this.projects);
        }
      });
  }

}

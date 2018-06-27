import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy {
  forum: Forum;
  private _paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumsService: ForumsService) { }

  ngOnInit() {

    this._paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.forum = this.forumsService.forum(params['forum_alias']);
      if (!this.forum) {
        this.router.navigate(['/not-found']);
      }
    });

  }

  //  In this case you can omit this
  //  since Angular will destroy params observable
  //  as soon as the active route no longer exists
  //  but generally, bear in mind to always unsubscribe, or you will face memory leaks
  ngOnDestroy() {
    this._paramsSubscription.unsubscribe();
  }

}

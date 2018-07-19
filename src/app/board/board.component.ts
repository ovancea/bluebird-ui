import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../domain/user-model';
import {UserStory} from '../domain/userStory';
import {UserStoryService} from '../service/user-story.service';
import {Bug} from '../domain/bug';
import {Task} from '../domain/task';
import {TaskService} from '../service/task.service';
import {BugService} from '../service/bug.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  users: UserModel[] = [];

  userStories: UserStory[] = [];

  task: Task[] = [];

  bugs: Bug[] = [];

  newStatus = 'NEW';
  inProgressStatus = 'IN_PROGRESS';
  inReviewStatus = 'IN_REVIEW';
  doneStatus = 'DONE';

  constructor(private userService: UserService, private userStoryService: UserStoryService,
              private taskService: TaskService, private bugService: BugService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response: UserModel[]) => this.users = response);
    this.userStoryService.getAllUserStories().subscribe((response: UserStory[]) => this.userStories = response);
    // this.bugService.getAllUserStories().subscribe((response: UserStory[]) => this.userStories = response);
    // this.taskService.getAllUserStories().subscribe((response: UserStory[]) => this.userStories = response);
  }

}

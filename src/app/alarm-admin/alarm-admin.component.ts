import {Component, OnInit} from '@angular/core';
import {HttpService} from "../service/http.service";
import {FormControl, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-alarm-admin',
  templateUrl: './alarm-admin.component.html'
})
export class AlarmAdminComponent implements OnInit {

  public emails: Set<string> = new Set();
  public isLoading = false;

  formControl = new FormControl(['email']);

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getEmails();
  }

  public getEmails(): void {
    this.httpService.getEmails().subscribe(value => {
      for(let email of value.emails.split(',')){
        this.emails.add(email);
      }
      this.isLoading = false;
    }, error => {this.isLoading = false});
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.emails.add(event.value);
      this.updateEmails();
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.emails.delete(keyword);
    this.updateEmails();
  }

  private updateEmails() {
    this.httpService.updateEmails([...this.emails].join(',')).subscribe();
  }

}

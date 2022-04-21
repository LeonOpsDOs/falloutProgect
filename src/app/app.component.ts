import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Forma: FormGroup = new FormGroup({
    id: new FormControl(nanoid()),
    name: new FormControl(),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    categories: new FormControl([]),
  });

  public GenerateButton(): void {
    this.Forma.get('id').setValue(nanoid());
  }

  public onSubmit(): void {
    if (this.Forma.invalid) {
      alert('Форма не валидна');
      return
    }


    const log = this.Forma.value


    console.log(log);
  }
}

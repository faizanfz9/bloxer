import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  blogsCat = ["All", "Travel", "Fashion", "Tech", "Photography"];
  @Output() onClickCat = new EventEmitter();
  @Input() currentCat: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  catChanged(category: string) {
      this.router.navigate(['/'], { queryParams: {cat: category.toLowerCase()} })
      this.onClickCat.emit(category);
  }

}

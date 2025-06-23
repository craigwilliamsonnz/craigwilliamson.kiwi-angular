import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-music',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit, OnDestroy {
  output: number = 0;
  private destroy = false;

  // Define a utility sleep function
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  ngOnInit(): void {
    this.output = 0;
    this.increaseCount();
  }

  ngOnDestroy(): void {
    this.destroy = true;
  }

  async increaseCount(): Promise<void> {
    try{
      for (let i = 0; i <= 10; i++) {
        if (this.destroy) break;
        await this.sleep(1000);
        this.output = i;
      }
    } catch (error) {
      console.error('Error in increaseCount:', error);
    }
  }
}

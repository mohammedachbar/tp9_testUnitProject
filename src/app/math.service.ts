import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
    count = 0;

    incrementCount() {
        this.count++;
    }
}

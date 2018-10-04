import { Pipe, PipeTransform } from '@angular/core';

const measures = [
  "Large",
  "TSP",
  "TBSP",
  "C",
  "OZ",
  "Prepared"
]

@Pipe({
  name: 'measureDescription'
})
export class MeasureDescriptionPipe implements PipeTransform {

  transform(value: number): any {
    return measures[value].toLocaleLowerCase();
  }

}

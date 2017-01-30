import { Pipe, PipeTransform } from '@angular/core';
import { Guest } from './guest.model';


@Pipe ({
  name: "filter",
  pure: false
})


export class FilterPipe implements PipeTransform {

  transform(input: Guest[], desiredFilter){
    var output: Guest[] = [];
    if (desiredFilter === "vips") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].vip) {
          output.push(input[i])
        }
      }
      return output;
    } else if (desiredFilter === "notEntered") {
      for (var i=0; i<input.length; i++) {
        if (input[i].inside === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCase'
})
export class CustomCasePipe implements PipeTransform {

  transform(value: String): String {
    let strArr = value.split('');
    let newStr = "";

    for (var i = 0; i < strArr.length; i++) {
      if (this.isOdd(i))
        newStr += (strArr[i].toUpperCase());
      else
        newStr += (strArr[i].toLowerCase());
    }
    return newStr;
  }

  isOdd(value: number) {
    return value % 2 != 0;
  }
}

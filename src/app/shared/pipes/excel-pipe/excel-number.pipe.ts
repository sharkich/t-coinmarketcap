import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "excelNumber"
})
export class ExcelNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return ("" + value).replace(".", ",");
  }

}

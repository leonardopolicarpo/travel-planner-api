import { MissingParamsError } from '../../errors';
import { Validation } from '../../protocols';

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate(input: any): Error | undefined {
    if(input[this.fieldName] === undefined || input[this.fieldName] === null) {
      return new MissingParamsError(this.fieldName)
    }
  }
}
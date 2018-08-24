export class EditModel {
    constructor(
      public username: string,
      public name: string,
      public phone: number,
      public email: string,
      public address?: string
    ) { }
  }
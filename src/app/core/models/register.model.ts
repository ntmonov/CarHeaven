export class RegisterModel {
  constructor(
    public username: string,
    public password: string,
    public repeatPass: string,
    public name: string,
    public phone: number,
    public email: string,
    public isBlocked: boolean,
    public address?: string
  ) { }
}
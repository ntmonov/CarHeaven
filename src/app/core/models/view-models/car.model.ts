export class CarModel {
  constructor(
    public make: string,
    public model: string,
    public displacement: number,
    public fuel: string,
    public yearOfProduction: number,
    public kilometers: number,
    public description?: string
  ) { }
}
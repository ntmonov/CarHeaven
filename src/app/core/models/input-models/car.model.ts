export class CarModel {
  constructor(
    public make: string,
    public model: string,
    public power: number,
    public fuel: string,
    public yearOfProduction: number,
    public kilometers: number,
    public price: number,
    public imageUrl?: string,
    public description?: string
  ) { }
}
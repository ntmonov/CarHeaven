export class CarModel {
    constructor(
      public id: string,
      public userId: string,  
      public make: string,
      public model: string,
      public power: number,
      public fuel: string,
      public yearOfProduction: number,
      public kilometers: number,
      public price: number,
      public created: Date,
      public imageUrl?: string,
      public description?: string
    ) { }
  }
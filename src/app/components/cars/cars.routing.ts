import { CarCreateComponent } from "./car-create/car-create.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";

export const carRoutes = [
  { path: 'create', component: CarCreateComponent},
  { path: 'list', component: CarListComponent},
  { path: 'details/:id', component: CarDetailsComponent }
]
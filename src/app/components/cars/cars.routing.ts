import { CarCreateComponent } from "./car-create/car-create.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { EditCarComponent } from "./edit-car/edit-car.component";
import { DeleteCarComponent } from "./delete-car/delete-car.component";

export const carRoutes = [
  { path: 'create', component: CarCreateComponent},
  { path: 'list', component: CarListComponent},
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'edit/:id', component: EditCarComponent },
  { path: 'delete/:id', component: DeleteCarComponent }
]
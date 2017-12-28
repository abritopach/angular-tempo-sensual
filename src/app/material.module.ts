import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule,
  MatInputModule  } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule, MatInputModule],
  exports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule, MatInputModule]
})
export class MyCustomMaterialModule {}

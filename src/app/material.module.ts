import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule],
  exports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule]
})
export class MyCustomMaterialModule {}

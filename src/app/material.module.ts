import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule,
  MatInputModule, MatButtonModule, MatGridListModule  } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule,
     MatInputModule, MatButtonModule, MatGridListModule],
  exports: [MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatChipsModule, MatFormFieldModule,
     MatInputModule, MatButtonModule, MatGridListModule]
})
export class MyCustomMaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule, MatBadgeModule, MatCheckboxModule, MatStepperModule, MatListModule, MatProgressSpinnerModule
} from '@angular/material';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatMenuModule,
    ClickOutsideModule,
    MatSelectModule,
    MatGridListModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatStepperModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatMenuModule,
    ClickOutsideModule,
    MatSelectModule,
    MatGridListModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatStepperModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  declarations: []
})
export class SharedModule { }

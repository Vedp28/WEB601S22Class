import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { DefaultTypePipe } from './pipes/default-type.pipe';
import { ContentTaggedPipe } from './pipes/content-tagged.pipe';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DirectivePlaygroundComponent } from './directive-playground/directive-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    TemplateSyntaxComponent,
    DataBindingComponent,
    PipesExampleComponent,
    DefaultTypePipe,
    ContentTaggedPipe,
    HighlighterDirective,
    DirectivePlaygroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

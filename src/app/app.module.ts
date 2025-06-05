import {HashLocationStrategy, LocationStrategy} from "@angular/common";

providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
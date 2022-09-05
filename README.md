# JobPortalAngular

This is the basic replica of job.ch portal.
It includes 
    - Basic search with combination of skills and location and independent fields(either skill or location) search.
    - Displaying of search result and details with pagination
    - ngbTypeahead is used for typehead search(ng-bootstrap library)
    - proxy.conf.json is added for running in local
    - vercel.json is added for running in server

API's used:

    - To retrieve profession/company typehead field values:
        /api/v1/public/meta/typeahead?limit=5&query={{skill}}
        user input is passed as query and  the default row size is configured to 5 ,which indicates the number of records per search.

    - To retrieve place of work/region typehead field values :
       /api/v1/meta/gis/type-ahead?rows=5&subTypes[]=city&term={{location}}
        user input is passed as query and  the default row size is configured to 5 ,which indicates the number of records per search. by default subTypes[] is city

    - To retrieve list of jobs 
       /api/v1/public/search?location={{location}}&query={{skill}}&rows=20&page={{pageNumber}}
        The default row size is configured to 20 ,which indicates the number of records per search. location and query captures the input filter value entered in the respective typehead fields. This is a pagination supported Api

    - To retrieve individual job detail
        /api/v1/public/search/job/{{jobId}}

## Live Demo 

Navigate to https://job-portal-flax.vercel.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

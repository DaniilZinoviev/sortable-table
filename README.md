# Sortable table
There is an example of HTML table with implemented on JS sorting functionality.

## Screenshot:
![Screenshot](https://i.imgur.com/6TX0jh8.png)

## Implementation notes:
Sorting is based on an attribute the column header, that describe a type of sorting.
There are for now 3 types:
 - String ("string")
 - Number ("number")
 - Boolean ("bool")

## Launch

**Development:**
```shell
npm start
```
This command will start a web server for developing ( with configured live reloading ). After server launch you can easy update code in the `src/` folder.

**Production:**
```shell
npm run build
```
This command will build production-ready library file in the `dist/` folder.

## Usage

You can see an example in the `public/` folder. `index.html` file includes main library script from `dist/` folder and use via `example.js` script.

There is a production-ready library script in the dist folder, that you can use in your project.

# cali-cal

### What Is It?
A calendar application which provides functionality to add Tasks for a specific day.  This application is currently a work in progress.
Therefore, in this version, Tasks can only be entered for one week.  Check back for updates!

### How Do I Use It?
1. The application is hosted on *Heroku*.  [Click here](https://cali-cal.herokuapp.com/ "Cali-Cal") to start organizing your life.

  or

1. Clone this repo to your local environment, then execute the following commands:
    * ```cd ../cali-cal/yarn install```
    * ```cd ../cali-cal/client/yarn install```
    * ```cd ../cali-cal/server/yarn install```
2. Create a *MySQL* database and name it *calendar_db*
3. Start the *Express* server by executing the following command:
    * ```cd ../cali-cal/server/yarn start```
4. Start *React* by executing the following command:
    * ```cd ../cali-cal/client/yarn start```

### Under The Hood
The application has been created using the following technologies:
1. [React](https://reactjs.org/ "React")
2. [Redux](https://redux.js.org/ "Redux")

# Student Maintenence System

Student maintenence system created using ReactJS. It uses Spring Rest API and MYSQL as Database

Note : Update CORS Policy in Spring API.

* Add this Line in the top of all methods inside Controller class 

```
@CrossOrigin(origins = "http://localhost:3000")
```

## Components

- Home Component
- Add Student
- Delete Student
- Get Student
- Update Student
- Aggregate Marks
- NavBar

## Screenshots

### Home Component
![Home Component](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(455).png?alt=media&token=45d51c3a-11a3-4585-8ec8-87825fd1f3e2)

### Add Student

![Add Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(456).png?alt=media&token=b323f991-cd40-4e5a-9d36-cb98579ea425)
![Add Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(457).png?alt=media&token=a43df47e-0c9b-4577-aa71-dbd4175ef707)

### Get Student

![Get Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(458).png?alt=media&token=42590058-be4e-4c6c-bfaf-d9a829ca07c1)
![Get Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(459).png?alt=media&token=726e5f9e-9746-48f3-a94a-54dc7d861523)
### Delete Student

![Delete Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(460).png?alt=media&token=2be07dca-bb38-4169-a8c7-cd588a4b56f8)
![Delete Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(461).png?alt=media&token=610bec18-3140-4390-bb51-960379898234)
### Update Student

![Update Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(462).png?alt=media&token=e7d8d6ca-ddcd-4f23-b52f-c3f6713361c5)
![Update Student](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(463).png?alt=media&token=261936b2-63c2-4063-8ded-6141776f256f)
### Aggregate Marks And Grade

![Aggregate Marks And Grade](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(464).png?alt=media&token=f8b692d0-fd8a-47a8-8c73-fb46f05eadc6)
![Aggregate Marks And Grade](https://firebasestorage.googleapis.com/v0/b/student-maintenence.appspot.com/o/ScreenShots%2FScreenshot%20(465).png?alt=media&token=8c5ba6e6-f760-481b-a148-7105e456abe2)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


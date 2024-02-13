# glassvue-site
Main GlassVue website with React UI and JAVA Microservice Backend

# Requirements
- JDK 17 or higher
- Maven 3.6.0 or higher
- Node v20.3.1 or higher
- npm 9.7.2 or higher

# How to run  on Local
`mvn clean install`

- It wil build React app and put it inside /resource/static folder to access UI when we run Springboot app on port 8080.
- open this to access website after springboot run - `http://localhost:8080` 

# How to Run UI Project only
- do cd /src/main/glassvue-ui
- then run `npm install`
- then run `npm run build`
- Now you can access website on browser at - `http://localhost:3000`

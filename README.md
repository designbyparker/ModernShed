# ModernShed


### Get Started 
- Clone the repository
- Navigate to the root of the project directory
- Run `npm i` to install the package dependencies
  - If you don't have node installed, you will need to. 


### Run locally
- `npm run dev` will fire up a local server 
- navigate to http://localhost:3000


### Run a build
- `npm run build`


---

#### Master is the production branch. Please do not push to master until your pull request has been reviewed. 
#### Staging is the staging branch 
#### Create as many development branches as are needed. Please delete branches if you are no longer using them.


---

### Styling

This site uses SCSS, the SCSS files are imported into theme.scss. The theme file is preprocessed and minified into a theme.css file. The webpack is configured to for CSS notSCSS. This means that you must run the theme.scss file through a preprocessor like Gulp or Prepos during development.   

---
### Bug logging
Log bugs under issues tab.  Please include 
  * Bug type tag
  * Screen shot of bug
  * Device and browser type
  * If its a responsive bug please also include pixel breakpoint

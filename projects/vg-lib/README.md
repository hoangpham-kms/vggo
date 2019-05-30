# VgLib

This library has 4 independently components for demostrating the angular techniques:

  + Header component: configurable list of menu links, logo, avatar user, and avatar dropdown profile 
  + Left Sidebar component:  configurable list of navigation links
  + Footeer component: just static information
  + Login component: two way data binding and then show up submitted info

# How to use this library

1. We use bootstrap scss therefore you have to setting bootstrap for your application as following:
   + Install bootstrap with npm:   npm install bootstrap
   + Install jquery with npm (this is bootstrap dependency):   npm install jquery
   + Add bootstrap to you angular application angular.json file
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"                ---> to use bootstrap scss 
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",                          ---> bootstrap dependency  
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"           ---> to use dropdown widget of bootstrap
            ],

2. Install this library with npm: npm install vg-lib

3. Add vg-lib module to your module in order to use the components in your application
   
   import { VgLibModule } from 'vg-lib';
   @ NgModule({imports: [ VgLibModule ] })

4. Using the components in your template:

a) vg-header, Header component :

    <header>
      <vg-header [headerModel]=yourConfigurableHeaderModel></vg-header>
    </header>

    const yourConfigurableHeaderModel = {
      menus: ['Link 1', 'Link 2', 'Link 3'],
      logo: 'http://placehold.it/150x50?text=Logo',
      avatar: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg'
    };

b) vg-leftsidebar, Left Sidebar component :

    <nav>
      <vg-leftsidebar [leftSideBarModel]=yourConfigurableLeftSideBarModel></vg-leftsidebar>
    </nav>

    const yourConfigurableLeftSideBarModel = {
      menus: ['Left Menu Link 1', 'Left Menu Link 2', 'Left Menu Link 3', 'Left Menu Link 4']
    };

c) vg-footer, Footer component :

    <footer>
      <vg-footer></vg-footer>
    </footer>

d) vg-login, Login component :

    <vg-login></vg-login>
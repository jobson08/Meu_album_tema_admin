import Home from './pages/Home'
import NewFoto from './pages/NewFoto'

var Routes = [
    {
      path: "/Home",
      name: "Home",
      rtlName: "لوحة القيادة",
      icon: "fab fa-amazon",
      component: Home,
      layout: "/ViewMan"
    },
    {
        path: "/NewFoto",
        name: "NewFoto",
        rtlName: "لوحة القيادة",
        icon: "fab fa-amazon",
        component: NewFoto,
        layout: "/ViewMan"
      },
      
];

export default Routes
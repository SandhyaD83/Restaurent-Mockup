menu={
   appetizers:{
    friedMozzarella:"https://www.chef-in-training.com/blog/wp-content/uploads/2017/02/Crispy-Fried-Mozzarella-3.jpg",
    breadSticks:"https://www.kingarthurbaking.com/sites/default/files/2021-11/artisan-breadsticks_1021.jpg",
    toastedRavioli:"https://www.jcookingodyssey.com/wp-content/uploads/2022/07/air-fryer-ravioli-egg-free-vegan-6-500x500.jpg"
  },
  soups:{
     chicken:"https://amindfullmom.com/wp-content/uploads/2016/09/The-Best-Chicken-Soup.jpg",
     hotandsour:"https://www.jocooks.com/wp-content/uploads/2021/09/hot-and-sour-soup-1.jpg",
     vegitable:"https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"
  }  ,
//   salads:{
//     chickenSalad:,
//     VeggiSalad:,
//     shrimpSalad:
//  },
//   pasta:{
//     cheeseChickenPenne:,
//     shrimpAlfredo:,
//     macNcheese:
//   },
//   desserts:{
//    browny:,
//    chocolate:
//   }
}
// orders={
//     toGo:{
//         appetizers:{
//             friedMozzarella,
//             breadSticks,
//             toastedRavioli
//           },
//           soups:{
//              chicken,
//              hotandsour,
//              vegitable
//           }  ,
//           salads:{
//             chickenSalad,
//             VeggiSalad,
//             shrimpSalad
//          },
//           pasta:{
//             cheeseChickenPenne,
//             shrimpAlfredo,
//             macNcheese
//           },
//           desserts:{
//            browny,
//            chocolate
//           }
//     },
//     delivery:{
//      name:"",
//      address:"",
//      contact:""
//     }
// }
// contact={
//     location1:{
//       address1: "", 
//       city1:"",
//       state1:"",
//       num:""
//     },
//     location2:{
//         address2:"" , 
//         city1:"",
//         state1:"",
//         num:""
//     }
// }
// catering=
// {
//  events:{
//   birthday,
//   christmas,
//   wedding
//  } ,
//  cateringMenu:{
//   MealCombos:{
//     ChickenParmigiana,
//     LasagnaCombination
//   },
//   individuals:{
//     ChickenAlfredo,
//     Spaghetti
//   }

//  } ,
//  deliveryDetails:{
//     name:"",
//     address:"",
//     contact:""
//  }
// }

  const item1=()=>
   {
 
 let itemBoxes=document.querySelector(".itemsBox").children;
 newItem1=itemBoxes[0].children;
 newItem2=itemBoxes[1].children;
 newItem3=itemBoxes[2].children;
 newItem1[0].setAttribute('src',menu.appetizers.friedMozzarella)
 newItem1[1].innerHTML="Fried Mozzarella";
 newItem1[2].innerHTML="$19.99";
 newItem2[0].setAttribute('src',menu.appetizers.breadSticks);
 newItem2[1].innerHTML="Bread Sticks";
 newItem2[2].innerHTML="$4.99";
 newItem3[0].setAttribute('src',menu.appetizers.toastedRavioli);
 newItem3[1].innerHTML="Toasted Ravioli";
 newItem3[2].innerHTML="$9.99";
 
  let soupBoxes=document.querySelector(".soupsBox").children;
  soup1=soupBoxes[0].children;
  soup2=soupBoxes[1].children;
  soup3=soupBoxes[2].children;
  soup1[0].setAttribute('src',menu.soups.chicken)
  soup1[1].innerHTML="Chicken Soup";
  soup1[2].innerHTML="$6.99";
  soup2[0].setAttribute('src',menu.soups.hotandsour);
  soup2[1].innerHTML="Hot and Sour Soup";
  soup2[2].innerHTML="$4.99";
  soup3[0].setAttribute('src',menu.soups.vegitable);
  soup3[1].innerHTML="Vegitable soup";
  soup3[2].innerHTML="$4.99";
  let elem=document.querySelector(".itemsBox");
  elem.scrollIntoView();

}


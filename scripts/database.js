localStorage.removeItem("finalCart");

let signature = [
  {
    index: 0,
    name: "Jumbo Falafel Salsa Wrap",
    price: 200,
    rating: 4.3,
    description:
      "A jumbo wrap with a jumbo surprise it is! Crispy Mediterranean falafels, a generous drizzle of cheesy corn salsa, crunchy onions all wrapped in flaky paratha. It sounds, tastes and feels extraordinary.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617169423_Jumbo%20Falafel%20Salsa%20Wrap_.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 1,
    name: "Egg-citing Chicken Tikka Wrap",
    price: 210,
    rating: 4.5,
    description:
      "Full of flavour and protein! Succulent pieces of spiced chicken tikka along with soft and fresh boiled eggs, topped with mint and tangy mayonnaise and wrapped up in flaky laccha paratha.",
    image:
      "https://product-assets.faasos.io/production/product/image_1596037921775_Chicken%20Tikka%20with%20Boiled%20Egg%20Salad%20Wrap.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 2,
    name: "Jumbo Paneer Chloe Wrap",
    price: 210,
    rating: 4.5,
    description:
      "A perfect blend of soft masala paneer tikka and chatpate chole drizzled in flavorful mayonnaise and wrapped in flaky laccha paratha. A sure shot North-Indian treat!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598439696379_image_es_1596285117331_Jumbo%20Veg%20Wrap%20%28CF%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 3,
    name: "Baked Chicken Pizza Wrap",
    price: 252,
    rating: 4.4,
    description:
      "Break the norm & add some Italian glamour of sliced salamis, bell peppers, olives, jalapenos & sweet corn draped in cheese & wrapped in a crispy baked paratha.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617116194_Chicken%20Pizza%20Wrap.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
];
let classic = [
  {
    index: 4,
    name: "Cheesy Potato Wrap",
    price: 116,
    rating: 4.3,
    description:
      "The all-time fave potatoes just got amazing. Mashed potatoes seasoned with secret spices are lathered with a cheesy sauce, wrapped in a soft paratha.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598615931043_Cheesy%20Potato%20Wrap.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 5,
    name: "Mutton Boti Wrap",
    price: 231,
    rating: 4.4,
    description:
      "Your mutton affair is out! Oops no, it just got wrapped in some exotic Indian spices. Cooked to perfection adorned with sliced onions it is juicy, tender and yummy",
    image:
      "https://product-assets.faasos.io/production/product/image_1598615697802_Mutton%20Boti%20wrap.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 6,
    name: "Double Egg Chatpata Wrap",
    price: 104,
    rating: 4.5,
    description:
      "A perfect blend of soft masala paneer tikka and chatpate chole drizzled in flavorful mayonnaise and wrapped in flaky laccha paratha. A sure shot North-Indian treat!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598607550873_Double%20Egg%20Chatpata%20Wrap.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 7,
    name: "Cheesy Corn Salsa Wrap",
    price: 158,
    rating: 4.3,
    description:
      "Mexican inspired corn salsa with a generous serving of cheese wrapped in a wheat tortilla. A combination that tells you to think no more!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598607946940_Cheesy%20Corn%20Salsa%20Wrap.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];
let ricebowls = [
  {
    index: 8,
    name: "Mutton Bhuna Rice Bowl (Serves 1)",
    price: 357,
    rating: 4.1,
    description:
      "A regular-sized wholesome meal of dum-style flavorful rice with melt-in-your mouth boneless pieces of bhuna mutton cooked in a spiced Indian gravy.",
    image:
      "https://product-assets.faasos.io/production/product/image_1599488928253_Mutton%20Bhuna%20Rice%20Bowl%20%28Serves%201%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 9,
    name: "Mutton Bhuna Rice Bowl (Mini)",
    price: 257,
    rating: 4.4,
    description:
      "A mini bowl of dum-style flavorful rice with melt-in-your-mouth boneless pieces of bhuna mutton cooked in a spiced Indian gravy.",
    image:
      "https://product-assets.faasos.io/production/product/image_1599488901171_Mutton%20Bhuna%20Rice%20Bowl%20%28Mini%29%20%281%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 10,
    name: "Rajma Masala Rice Bowl (Serves 1)",
    price: 189,
    rating: 4.5,
    description:
      "A regular-sized bowl of aromatic spiced rice with your all-time favorite rajma slow-cooked in a mildly spiced onion-tomato gravy.",
    image:
      "https://product-assets.faasos.io/production/product/image_1599488976282_Rajma%20Masala%20Rice%20Bowl%20%28Serves%201%29%20%281%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 11,
    name: "Chole Signature Rice Bowl (Mini)",
    price: 147,
    rating: 4.6,
    description:
      "Break the norm & add some Italian glamour of sliced salamis, bell peppers, olives, jalapenos & sweet corn draped in cheese & wrapped in a crispy baked paratha.",
    image:
      "https://product-assets.faasos.io/production/product/image_1599488797365_Chole%20Signature%20Rice%20Bowl%20%28Mini%29%20%281%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];
let sides = [
  {
    index: 12,
    name: "Potato Wedges and Thumbsup",
    price: 121,
    rating: 4.2,
    description: "Potato Wedges (Medium) and Thumbsup (250ml)",
    image:
      "https://product-assets.faasos.io/production/product/image_1623075157591_Thumbs%20Up%20%28250%20mlll.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 13,
    name: "Falafel Nuggets with Mayo Dip",
    price: 95,
    rating: 4.4,
    description:
      "Mediterranean inspired crispy falafel made from the finest soaked chickpeas and spices, served with a cheesy mayonnaise dip.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598270705257_59987.webp",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 14,
    name: "Classic Cold Coffee (Frappe)",
    price: 170,
    rating: 4.8,
    description:
      "Nostalgia in a cup. This classic is always in vogue. SLAY Signature Espresso Single Shot + Blended Vanilla Ice Cream + Chilled Milk.",
    image:
      "https://product-assets.faasos.io/production/product/image_1599165932862_classic-cold-coffee-2.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 15,
    name: "SWIG Green Apple",
    price: 50,
    rating: 4.5,
    description:
      "Aerated drink flavored with the mouth-puckering green apple. Sure to refresh you completely!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598270496060_image_es_1596282536486_SWIG%20Green%20apple.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
];
// new addition
let allday = [
  {
    index: 16,
    name: "Omelette with Masala Bread (Double)",
    price: 163,
    rating: 4.5,
    description:
      "A protein-rich omelette with masala kulcha bread & butter on the side. Customize with chicken tikki or sausages - this is where your quintessential breakfast needs are met!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598438692391_image_es_1596284173570_Omelette%20with%20Masala%20Bread%20%28Double%29%20%28CF%29.jpg",
    isNonVeg: false,
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },

  {
    index: 17,
    name: "Aloo Paratha & Omelette Combo",
    price: 184,
    rating: 4.3,
    description:
      "Fusion mornings with two aloo parathas and a double-egg omelette, savoured with butter. For when you cant decide, why not have both!",
    image:
      "https://product-assets.faasos.io/production/product/image_1598615414405_aloo%20paratha%20with%20double%20omlete%20combo.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },

  {
    index: 18,
    name: "Jumbo Falafel Salsa Wrap",
    price: 200,
    rating: 4.3,
    description:
      "A jumbo wrap with a jumbo surprise it is! Crispy Mediterranean falafels, a generous drizzle of cheesy corn salsa, crunchy onions all wrapped in flaky paratha. It sounds, tastes and feels extraordinary.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617169423_Jumbo%20Falafel%20Salsa%20Wrap_.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },

  {
    index: 19,
    name: "Chicken Kheema Kulcha",
    price: 200,
    rating: 4.4,
    description:
      "[100% Safely Cooked Chicken] Minced chicken cooked with mild Indian spices and savored with 2 softly toasted masala kulchas.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598438567569_image_es_1596284112716_Chicken%20Kheema%20Kulcha%20%28CF%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];
let biryani = [
  {
    index: 20,
    name: "Paneer Awadhi Biryani (Serves 1)",
    price: 263,
    rating: 4.3,
    description:
      "Fragrant long-grain basmati rice and North-Indian paneer tikka cooked with aromatic whole spices.",
    image:
      "https://product-assets.faasos.io/production/product/image_1596122556137_Paneer%20Biryani%20%28Serves%201%29%20%28CF%29%20copy.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },

  {
    index: 21,
    name: "Mutton Awadhi Biryani (Serves 1)",
    price: 373,
    rating: 4.4,
    description:
      "Fragrant long-grain basmati rice and succulent boneless pieces of mutton cooked dum-style in aromatic whole spices.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598619557361_Mutton%20Biryani%20%28Boneless%29%20%28Serves%201%29%20%28Hyd%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 22,
    name: "Chicken Kheema Kulcha",
    price: 350,
    rating: 4.4,
    description:
      "Faasos finest for non-vegetarians in the house! A royal meal of aromatic long-grain basmati rice slow-cooked with boneless chicken and flavorful whole Indian spices, topped with juicy meatballs and served with a fried omlette.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598619710196_Royal%20Chicken%20Awadhi%20Biryani%20%28Serves%201%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 23,
    name: "Egg Awadhi Biryani (Serves 1)",
    price: 247,
    rating: 4.5,
    description:
      "Fragrant long-grain basmati rice and hard-boiled eggs simmered with aromatic whole spices and cooked dum-style.",
    image:
      "https://product-assets.faasos.io/production/product/image_1596122316577_Egg%20Biryani%20%28Serves%201%29%20%28CF%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
];
let quick = [
  {
    index: 24,
    name: "Chole Kulcha Meal",
    price: 194,
    rating: 4.4,
    description:
      "Fragrant long-grain basmati rice and hard-boiled eggs simmered with aromatic whole spices and cooked dum-style.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598616361404_Chole%20Kulcha%20Meal.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 25,
    name: "Mughlai Egg Curry Meal",
    price: 226,
    rating: 4.5,
    description:
      "Soft boiled eggs cooked in aromatic whole spices in a rich Mughlai gravy. Choose between 2 triangle parathas or 2 kulchas or a portion of flavorful rice alongside.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598705633176_Mughlai%20Egg%20curry%20combo%20%28Paratha%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 26,
    name: "Chicken Kheema Meal",
    price: 252,
    rating: 4.4,
    description:
      "Minced chicken cooked with mild Indian spices.Choose between 2 triangle parathas or 2 kulchas or a portion of flavorful rice alongside.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598708030175_Chicken%20Kheema%20Combo%20%28Paratha%29.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 27,
    name: "Sabudana Khichadi Meal",
    price: 200,
    rating: 4.3,
    description:
      "Turning your fast into a feast with this well balanced meal of Sabudana khichdi served with a side of curd.",
    image:
      "https://product-assets.faasos.io/production/product/image_1588937784813_Sabudana%20Khichdi%20_%20Curd%20Meal%20%28Shravan%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];
let royal = [
  {
    index: 28,
    name: "Rajma Masala Royal Meal",
    price: 240,
    rating: 4.5,
    description:
      "Protein-rich rajma beans, slowly cooked in a thick & spicy onion-tomato masala gravy. Served with basmati rice, a homestyle paratha and gulab jamun.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617827736_Rajma%20Masala%20Royal%20%20Combo-1.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 29,
    name: "Sabudana Khichadi Meal",
    price: 200,
    rating: 4.3,
    description:
      "Turning your fast into a feast with this well balanced meal of Sabudana khichdi served with a side of curd.",
    image:
      "https://product-assets.faasos.io/production/product/image_1588937784813_Sabudana%20Khichdi%20_%20Curd%20Meal%20%28Shravan%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 30,
    name: "Smoked Butter Chicken Royal Meal",
    price: 323,
    rating: 4.3,
    description:
      "Perfectly cooked tender pieces of smoked chicken blended with a rich tomato-based gravy enriched with butter and subtle spices. Served with basmati rice, dal makhni, a homestyle paratha and gulab jamun.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617858116_Smoked%20Butter%20Chicken%20Royal%20Combo-1.jpg",
    isNonVeg: true,
    vgIcon: "/images/non-veg.png",
    count: 1,
  },
  {
    index: 31,
    name: "Chicken Kheema Royal Meal",
    price: 310,
    rating: 4.4,
    description:
      "Finely minced and perfectly spiced chicken kheema is slow-cooked to perfection. Served with basmati rice, dal makhni, a homestyle paratha and gulab jamun.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617888174_Chicken%20Kheema%20Royal%20Combo-1.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];
let deserts = [
  {
    index: 32,
    name: "Gulab Jamun - Pack of 1",
    price: 25,
    rating: 4.6,
    description:
      "These melt in mouth sweet dumplings are the one dessert which can make your knees go weak in anticipation. Now served in a piece.",
    image:
      "https://product-assets.faasos.io/production/product/image_1527240875000_GUlab%20Jamun%20%28Single%29.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 33,
    name: "Chocolate Crusted Cheesecake",
    price: 163,
    rating: 4.8,
    description:
      "Can not choose between Chocolate & Cheesecake? This New York Style Chocolate Cheesecake, made with premium quality cream cheese and a crust made with chocolate crackers & butter, brings you the best of both flavors",
    image:
      "https://product-assets.faasos.io/production/product/image_1603182449409_Chocolate%20Cheesecake.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 34,
    name: "Mango Cheesecake",
    price: 163,
    rating: 4.8,
    description:
      "(Eggless) This New York Style Mango Cheesecake, made with premium quality cream cheese and a crust infused with delicious mango flavor, is any dessert lovers delight",
    image:
      "https://product-assets.faasos.io/production/product/image_1603182402903_Mango%20Cheesecake.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
  {
    index: 35,
    name: "Gulab Jamun (Pack Of 2)",
    price: 45,
    rating: 4.5,
    description:
      "Gulab Jamun. Soft. Plump and the way we are used to. There is nothing else in our gulab jamuns than authenticity and love.",
    image:
      "https://product-assets.faasos.io/production/product/image_1598617888174_Chicken%20Kheema%20Royal%20Combo-1.jpg",
    isNonVeg: false,
    vgIcon: "/images/veg.png",
    count: 1,
  },
];

let menu = document.querySelector("#menu");

function chBg() {
  document.querySelector("#m1").style.background = "none";
  document.querySelector("#m2").style.background = "none";
  document.querySelector("#m3").style.background = "none";
  document.querySelector("#m4").style.background = "none";
  document.querySelector("#m5").style.background = "none";
  document.querySelector("#m6").style.background = "none";
  document.querySelector("#m7").style.background = "none";
  document.querySelector("#m8").style.background = "none";
  document.querySelector("#m9").style.background = "none";
}
// console.log(menu);
// function decreaseCart() {
//   console.log(1);
// }
// function increaseCart() {
//   console.log(11);
//   let countInitial = document.getElementById("innerCountText");
//   console.log(countInitial);
//   countInitial++;
//   document.getElementById("innerCountText").innerHTML = countIntial;
// }

function showSignature() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < signature.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = signature[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = signature[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = signature[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = signature[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = signature[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = signature[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = signature[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = signature[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = signature[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (signature[i].index == cart[j].index) {
          signature[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      signature[i].count++;
      document.getElementById;
    }

    document.querySelector("#m1").style.background = "rgb(138, 43, 226, 0.2)";
    document.querySelector("#m1").style.borderTopLeftRadius = "15px";
    document.querySelector("#m1").style.borderTopRightRadius = "15px";
    document.querySelector("#m1").style.height = "100%";
    document.querySelector("#m1").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showClassic() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < classic.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = classic[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = classic[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = classic[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = classic[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = classic[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = classic[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = classic[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = classic[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = classic[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (classic[i].index == cart[j].index) {
          classic[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      classic[i].count++;
      document.getElementById;
    }

    document.querySelector("#m2").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m2").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m2").style.borderTopRightRadius = "15px";
    document.querySelector("#m2").style.height = "100%";
    document.querySelector("#m2").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showRice() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < ricebowls.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = ricebowls[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = ricebowls[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = ricebowls[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = ricebowls[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = ricebowls[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = ricebowls[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = ricebowls[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = ricebowls[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = ricebowls[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (ricebowls[i].index == cart[j].index) {
          ricebowls[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      ricebowls[i].count++;
      document.getElementById;
    }

    document.querySelector("#m3").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m3").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m3").style.borderTopRightRadius = "15px";
    document.querySelector("#m3").style.height = "100%";
    document.querySelector("#m3").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showSides() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < sides.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = sides[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = sides[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = sides[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = sides[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = sides[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = sides[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = sides[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = sides[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = sides[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (sides[i].index == cart[j].index) {
          sides[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      sides[i].count++;
      document.getElementById;
    }

    document.querySelector("#m4").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m4").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m4").style.borderTopRightRadius = "15px";
    document.querySelector("#m4").style.height = "100%";
    document.querySelector("#m4").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showAllDay() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < allday.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = allday[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = allday[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = allday[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = allday[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = allday[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = allday[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = allday[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = allday[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = allday[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (allday[i].index == cart[j].index) {
          allday[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      allday[i].count++;
      document.getElementById;
    }

    document.querySelector("#m5").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m5").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m5").style.borderTopRightRadius = "15px";
    document.querySelector("#m5").style.height = "100%";
    document.querySelector("#m5").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showBiryani() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < biryani.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = biryani[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = biryani[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = biryani[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = biryani[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = biryani[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = biryani[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = biryani[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = biryani[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = biryani[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (biryani[i].index == cart[j].index) {
          biryani[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      biryani[i].count++;
      document.getElementById;
    }

    document.querySelector("#m6").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m6").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m6").style.borderTopRightRadius = "15px";
    document.querySelector("#m6").style.height = "100%";
    document.querySelector("#m6").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showQuick() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < quick.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = quick[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = quick[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = quick[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = quick[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = quick[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = quick[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = quick[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = quick[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = quick[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (quick[i].index == cart[j].index) {
          quick[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      quick[i].count++;
      document.getElementById;
    }

    document.querySelector("#m7").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m7").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m7").style.borderTopRightRadius = "15px";
    document.querySelector("#m7").style.height = "100%";
    document.querySelector("#m7").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showRoyal() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < royal.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = royal[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = royal[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = royal[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = royal[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = royal[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = royal[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = royal[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = royal[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = royal[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (royal[i].index == cart[j].index) {
          royal[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      royal[i].count++;
      document.getElementById;
    }

    document.querySelector("#m8").style.background = "rgb(138, 43, 226, 0.2)";
    // document.querySelector("#m8").style.borderTopLeftRadius = "15px";
    // document.querySelector("#m8").style.borderTopRightRadius = "15px";
    document.querySelector("#m8").style.height = "100%";
    document.querySelector("#m8").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function showDeserts() {
  console.log("show sign");
  chBg();
  menu.innerHTML = "";

  for (let i = 0; i < deserts.length; i++) {
    let emenuItem = document.createElement("div");
    emenuItem.setAttribute("class", "menuItem");

    let emenuItem1 = document.createElement("div");
    emenuItem1.setAttribute("id", "menuItem1");
    let img1 = document.createElement("img");
    // img1.src = ''
    img1.src = deserts[i].image;

    let emenuItemPadding = document.createElement("div");
    emenuItemPadding.setAttribute("id", "menuItemPadding");

    let emenuItem2 = document.createElement("div");
    emenuItem2.setAttribute("id", "menuItem2");
    let emenuItem2Left = document.createElement("div");
    emenuItem2Left.setAttribute("id", "menuItem2Left");
    let emenuItemTitle = document.createElement("span");
    emenuItemTitle.setAttribute("id", "menuItemTitle");
    // emenuItemTitle.innerHTML = ''
    emenuItemTitle.innerHTML = deserts[i].name;

    let emenuItem2Right = document.createElement("div");
    emenuItem2Right.setAttribute("id", "menuItem2Right");
    let img2 = document.createElement("img");
    // img2.src = ''
    img2.src = deserts[i].vgIcon;

    let spanRup = document.createElement("span");
    spanRup.innerHTML = "₹";
    let emenuItemPrice = document.createElement("span");
    emenuItemPrice.setAttribute("id", "menuItemPrice");
    // emenuItemPrice.innerHTML = ''
    emenuItemPrice.innerHTML = deserts[i].price;

    let emenuDescription = document.createElement("p");
    emenuDescription.setAttribute("id", "menuDescription");
    emenuDescription.innerHTML = deserts[i].description;

    let epopDescription = document.createElement("div");
    epopDescription.setAttribute("id", "popDescription");
    epopDescription.style.display = "none";
    let divP = document.createElement("div");
    let img3 = document.createElement("img");
    img3.style.width = "350px";
    // img3.src = ''
    img3.src = deserts[i].image;

    let pD = document.createElement("p");
    // pD.innerHTML = ''
    pD.innerHTML = deserts[i].description;

    let emenuItem3 = document.createElement("div");
    emenuItem3.setAttribute("id", "menuItem3");

    let emenuItem3Left = document.createElement("div");
    emenuItem3Left.setAttribute("id", "menuItem3Left");
    let eratingButton = document.createElement("button");
    eratingButton.setAttribute("id", "ratingButton");
    let img4 = document.createElement("img");
    img4.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/768px-Empty_Star.svg.png";
    // eratingButton.innerHTML = ''
    eratingButton.innerHTML = deserts[i].rating;

    let emenuItem3Right = document.createElement("div");
    emenuItem3Right.setAttribute("id", "menuItem3Right");
    emenuItem3Right.style.display = "flex";
    let eaddCartButton = document.createElement("button");
    eaddCartButton.setAttribute("id", "addCartButton");
    eaddCartButton.innerHTML = "ADD";
    eaddCartButton.addEventListener("click", addtoCart);
    eaddCartButton.addEventListener("click", refreshCart);

    // let echeckout2Middle = document.createElement("div");
    // echeckout2Middle.setAttribute("id", "checkout2Middle");
    // let cbtn1 = document.createElement("button");
    // cbtn1.innerHTML = "-";
    // let ch4 = document.createElement("h4");
    // ch4.innerHTML = "0";
    // let cbtn2 = document.createElement("button");
    // cbtn2.innerHTML = "+";

    // emenuItem3.append
    // emenuItemPadding.append(emenuItem2, emenuDescription, epopDescription, emenuItem3);
    // emenuItem1.append(img1);

    eratingButton.append(img4);
    emenuItem3Left.append(eratingButton);
    emenuItem3.append(emenuItem3Left, emenuItem3Right);
    divP.append(img3, pD);
    epopDescription.append(divP);
    emenuItem3Right.append(eaddCartButton);
    emenuItem2Left.append(emenuItemTitle);
    emenuItem2Right.append(img2, spanRup, emenuItemPrice);
    emenuItem2.append(emenuItem2Left, emenuItem2Right);
    emenuItemPadding.append(
      emenuItem2,
      emenuDescription,
      epopDescription,
      emenuItem3
    );
    emenuItem1.append(img1);

    emenuItem.append(emenuItem1, emenuItemPadding);
    menu.append(emenuItem);

    let f = deserts[i];

    function addtoCart() {
      let elt = f;
      console.log(elt);
      let cart;
      cart = localStorage.getItem("finalCart");

      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("finalCart"));
      }

      for (let j = 0; j < cart.length; j++) {
        if (deserts[i].index == cart[j].index) {
          deserts[i].count++;
          cart.splice(j, 1);
          break;
        }
      }
      cart.push(elt);

      localStorage.setItem("finalCart", JSON.stringify(cart));
    }

    function increaseCount() {
      deserts[i].count++;
      document.getElementById;
    }

    document.querySelector("#m9").style.background = "rgb(138, 43, 226, 0.2)";
    document.querySelector("#m9").style.borderBottomLeftRadius = "15px";
    document.querySelector("#m9").style.borderBottomRightRadius = "15px";
    document.querySelector("#m9").style.height = "100%";
    document.querySelector("#m9").style.objectFit = "cover";
    // menu.append(menuItem);
  }
}

function refreshCart() {
  let cart1;
  cart1 = JSON.parse(localStorage.getItem("finalCart"));
  // ---------------------
  document.getElementById("emptyCart").style.display = "none";
  document.getElementById("cartFull").style.display = "block";
  // --------------------
  function calcFinalPrice() {
    let cartPrice = document.querySelector("#cartPrice");
    let finalPrice = 0;
    for (let m = 0; m < cart1.length; m++) {
      finalPrice += cart1[m].count * cart1[m].price;
    }
    cartPrice.innerHTML = finalPrice;
  }
  calcFinalPrice();
  // -------------------

  document.querySelector("#cartCount").innerHTML = cart1.length;

  // ------------------

  function increaseCart() {}
  // -----------------

  let echeckout2Container = document.querySelector("#checkout2Container");
  echeckout2Container.innerHTML = "";

  let thisCount = 1;
  // let curQunat = document.getElementById("curQuant");
  // curQunat.innerHTML = `${thisCount}`;

  for (let x = 0; x < cart1.length; x++) {
    let echeckout2 = document.createElement("div");
    echeckout2.setAttribute("id", "checkout2");
    let echeckout2Left = document.createElement("div");
    echeckout2Left.setAttribute("id", "checkout2Left");
    let img21 = document.createElement("img");
    // img2.src = ''
    img21.src = cart1[x].vgIcon;
    img21.style.width = "15px";
    img21.style.height = "15px";
    let p2 = document.createElement("p");
    p2.setAttribute("id", "oorikane");
    // p2.innerHTML = ''
    p2.innerHTML = cart1[x].name;

    let echeckout2Middle = document.createElement("div");
    echeckout2Middle.setAttribute("id", "checkout2Middle");

    let h42 = document.createElement("h4");
    h42.setAttribute("id", "curQunat");
    h42.innerHTML = cart1[x].count;
    // thisCount = h42.innerHTML;

    let btn21 = document.createElement("button");
    // btn21.setAttribute("id", "decrementQuant");
    btn21.innerHTML = "-";
    btn21.onclick = function () {
      console.log("dec trigg");
      cart1[x].count--;
      if (cart1[x].count < 1) {
        // cart1[x].count = 1;
        cart1.splice(x, 1);
      }
      h42.innerHTML = `${cart1[x].count}`;
      p2r.innerHTML = cart1[x].price * cart1[x].count;
      calcFinalPrice();
    };

    // h42.innerHTML = ''

    let btn22 = document.createElement("button");
    btn22.innerHTML = "+";
    btn22.onclick = function () {
      console.log("inc trigg");
      cart1[x].count++;
      h42.innerHTML = `${cart1[x].count}`;
      p2r.innerHTML = cart1[x].price * cart1[x].count;
      calcFinalPrice();
    };

    let echeckout2Right = document.createElement("div");
    echeckout2Right.setAttribute("id", "checkout2Right");
    let span21 = document.createElement("span");
    span21.innerHTML = "₹ ";
    let p2r = document.createElement("p");
    // p2r.innerHTML = '
    p2r.innerHTML = cart1[x].price * cart1[x].count;

    let echeckout2RightContainer = document.createElement("div");
    echeckout2RightContainer.setAttribute("id", "checkout2RightContainer");
    echeckout2RightContainer.style.display = "flex";

    echeckout2Left.append(img21, p2);
    echeckout2Middle.append(btn21, h42, btn22);
    echeckout2Right.append(span21, p2r);
    echeckout2RightContainer.append(echeckout2Middle, echeckout2Right);
    echeckout2.append(echeckout2Left, echeckout2RightContainer);

    echeckout2Container.append(echeckout2);
  }

  // let echeckout3 = document.createElement("div");
  // echeckout3.setAttribute("id", "checkout3");
  // let echeckout3Left = document.createElement("div");
  // echeckout3Left.setAttribute("id", "checkout3Left");
  // let h33 = document.createElement("h3");
  // h33.innerHTML = "SubTotal";
  // let span3l = document.createElement("span");
  // span31.innerHTML = "Extra Charges may apply!";
  // echeckout3Left.append(h33, span31);
  // echeckout3.append(echeckout3Left, echeckout3Right);

  // let echeckout3Right = document.createElement("div");
  // echeckout3Right.setAttribute("id", "checkout3Right");
  // let p3 = document.createElement("p");
  // let span31 = document.createElement("span");
  // span31.innerHTML = "₹";
  // let span32 = document.createElement("span");
  // span32.setAttribute("id", "cartPrice");
  // // span32.innerHTML = ''
  // p3.append(span31, span32);
  // echeckout3Right.append(p3);

  // echeckout3.append(echeckout3Left, echeckout3Right);

  // let echeckout4 = document.createElement("div");
  // let btn3 = document.createElement("button");
  // btn3.setAttribute("id", "checkout4");
  // btn3.innerHTML = "CHECKOUT";
  // echeckout4.append(btn3);
}

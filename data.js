// Aone's Cakes N Bakes - Initial Product Catalog Dataset
// You can edit prices, descriptions, and images directly here or via the website Photo Manager!

const BAKERY_CONFIG = {
  storeName: "Aone's Cakes N Bakes",
  tagline: "100% Eggless Pure Taste & Traditions Since 1952 • Pathankot",
  establishedYear: 1952,
  whatsappNumber: "919417024147",
  whatsappMessageHeader: "Hello Aone's Cakes N Bakes (Pathankot), I would like to order/inquire:",
  instagramHandle: "aone.cakesbakes1952",
  facebookHandle: "aonescakesnbakes",
  phoneNumber: "+91 94170 24147",
  storeAddress: "9, C Trust Road, near Peer Baba Chowk, Patel Nagar, Pathankot, Punjab 145001",
  storeTimings: "Open Daily: 8:30 AM - 9:30 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aone's+Cakes+N+Bakes+Patel+Nagar+Pathankot"
};

const CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '✨' },
  { id: 'cakes', name: 'Cakes & Pastries', icon: '🎂' },
  { id: 'cookies', name: 'Butter Cookies & Biscuits', icon: '🍪' },
  { id: 'sugarfree', name: 'Sugar-Free & Healthy', icon: '🌿' },
  { id: 'breads', name: 'Breads, Pav, Buns & Rusks', icon: '🍞' },
  { id: 'party', name: 'Birthday & Party Decor', icon: '🎈' },
  { id: 'confectionery', name: 'Imported Confectionery', icon: '🍬' },
  { id: 'frozen', name: 'Frozen Foods (Veg & Non-Veg)', icon: '❄️' },
  { id: 'hampers', name: 'Gifting & Hampers', icon: '🎁' }
];

const INITIAL_PRODUCTS = [
  // Custom Designer Cakes (Real Shop Creations)
  {
    id: 1,
    category: 'cakes',
    name: 'Custom Teacher\'s Day Celebration Cake',
    description: '100% Eggless customized cake crafted with hand-molded fondant books, chalkboard topper & pencil details.',
    price: 1500,
    unit: 'per kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/teachers_day_cake.png'
  },
  {
    id: 16,
    category: 'cakes',
    name: 'Cute Baby Bear & Balloon Theme Cake',
    description: '100% Eggless birthday cake decorated with 3D teddy bear, pastel balloons, clock & birth date blocks.',
    price: 1750,
    unit: 'per kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_baby_bear.png'
  },
  {
    id: 17,
    category: 'cakes',
    name: 'Two-Tier Pink Stars & Moon Birthday Cake',
    description: '100% Eggless double tier designer pink cake with golden stars, moon, miniature ladder & spheres.',
    price: 3500,
    unit: '2 Tier (2kg+)',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_pink_stars_2tier.png'
  },
  {
    id: 18,
    category: 'cakes',
    name: 'Thar 4x4 Jeep Adventure 2-Tier Cake',
    description: '100% Eggless 2-tier sky blue cake decorated with Thar 4x4 cars, green grass, clouds & custom name banner.',
    price: 4200,
    unit: '2 Tier (2kg+)',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_thar_jeep_2tier.jpg'
  },
  {
    id: 19,
    category: 'cakes',
    name: 'Janmashtami Flute & Makhan Matki Cake',
    description: '100% Eggless traditional celebration cake with purple butter pot, flute, peacock feather & Little Krishna.',
    price: 750,
    unit: 'half kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_krishna_matki.png'
  },
  {
    id: 20,
    category: 'cakes',
    name: '3D Red Glossy Makhan Matki Krishna Cake',
    description: '100% Eggless 3D pot cake with overflowing white butter cream, peacock feather & Little Krishna topper.',
    price: 700,
    unit: 'half kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_red_matki.jpg'
  },
  {
    id: 21,
    category: 'cakes',
    name: 'Mermaid Under-The-Sea 2-Tier Cake',
    description: '100% Eggless double tier oceanic cake decorated with mermaid tail, starfishes & sea pearls.',
    price: 4200,
    unit: '2 Tier (2kg+)',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_mermaid_tier.png'
  },
  {
    id: 22,
    category: 'cakes',
    name: 'Royal Princess Theme Birthday Cake',
    description: '100% Eggless pink designer birthday cake with 3D princess topper, pink spheres & personalized name lettering.',
    price: 1500,
    unit: 'per kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_princess_pink.png'
  },
  {
    id: 23,
    category: 'cakes',
    name: 'Vintage Piped Chocolate Velvet Cake',
    description: '100% Eggless rich chocolate cake layered with vintage shell piping, golden stars & chocolate pearls.',
    price: 750,
    unit: 'half kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_red_vintage.png'
  },
  {
    id: 24,
    category: 'cakes',
    name: 'Square Black Forest Celebration Cake',
    description: '100% Eggless square black forest cake decorated with fresh whipped cream rosettes & red maraschino cherries.',
    price: 1200,
    unit: '2 kg',
    isVeg: true,
    tag: 'Customised Cake',
    image: 'images/cake_black_forest.png'
  },

  // Sugar Free & Health Concept (Clean Product Catalog Items)
  // {
  //   id: 101,
  //   category: 'sugarfree',
  //   name: 'Sugar Free Tea',
  //   description: '100% Sugar-free & egg-free crunchy tea rusks baked daily for healthy morning & evening tea sessions.',
  //   price: 400,
  //   unit: 'per kg',
  //   isVeg: true,
  //   tag: 'Sugar Free Concept',
  //   image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  // },
  // {
  //   id: 102,
  //   category: 'sugarfree',
  //   name: 'Sugar Free Special Nankhatai',
  //   description: 'Traditional melt-in-mouth nankhatai cookies prepared with pure desi ghee and ZERO added sugar.',
  //   price: 400,
  //   unit: 'per kg',
  //   isVeg: true,
  //   tag: 'Sugar Free Concept',
  //   image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
  // },
  {
    id: 103,
    category: 'sugarfree',
    name: 'Sugar Free Butter Cookies',
    description: 'Savory roasted butter cookies crafted without sugar for diabetic-friendly light snacking.',
    price: null,
    unit: '',
    isVeg: true,
    tag: 'Sugar Free Concept',
    image: 'images/sugarfreecookies.jpeg'
  },
  // {
  //   id: 104,
  //   category: 'sugarfree',
  //   name: 'Sugar Free Gurma Almond Cookies',
  //   description: 'Healthy roasted almond & whole wheat cookies made with natural sweetness and zero sugar.',
  //   price: 400,
  //   unit: 'per kg',
  //   isVeg: true,
  //   tag: 'Sugar Free Concept',
  //   image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80'
  // },

  // Butter Cookies & Biscuits (Exclusive 2 Product Showcase & Hampers Range)
  {
    id: 201,
    category: 'cookies',
    name: 'Fresh Artisan Cookie & Biscuit Counter Showcase',
    description: 'Discover an extraordinary variety of freshly baked 100% pure butter cookies, traditional nankhatai, elaichi, cashew, almond, and chocolate biscuits. Available in custom gift hampers & daily tea-time selections!',
    price: null,
    unit: 'Counter Variety & Custom Hampers',
    isVeg: true,
    tag: 'Fresh Bakery Counter',
    image: 'images/cookies_display.jpg'
  },
  {
    id: 202,
    category: 'cookies',
    name: 'Sugar-Free & Healthy Gourmet Biscuit Collection',
    description: 'A dedicated health & dietary collection featuring sugar-free tea rusks, nankhatai, jeera cookies, and roasted almond biscuits. Uniquely packaged for health gift hampers and guilt-free daily snacking!',
    price: null,
    unit: 'Health Hampers & Gift Boxes',
    isVeg: true,
    tag: 'Sugar Free Concept',
    image: 'images/sugar_free_basket.jpg'
  },

  // Breads, Pav, Buns & Rusks
  {
    id: 401,
    category: 'breads',
    name: 'Crispy Premium Elaichi & Butter Tea Rusk',
    description: 'Golden crunchy double-baked tea rusks infused with cardamom (elaichi), pure butter & whole wheat flour. The ultimate morning & evening chai companion!',
    price: 120,
    unit: '400g Pack',
    isVeg: true,
    tag: 'Chai Time Special',
    image: 'images/kshitij_sugarfree.avif'
  },
  {
    id: 7,
    category: 'breads',
    name: 'Freshly Baked Soft Pav Buns',
    description: 'Ultra-soft, cloud-like golden ladi pav buns baked fresh every morning with pure butter & milk. Perfect for Pav Bhaji, Vada Pav & Maskapav!',
    price: 80,
    unit: 'Pack of 12',
    isVeg: true,
    tag: 'Fresh Morning Batch',
    image: 'images/images (1).jpeg'
  },
  {
    id: 8,
    category: 'breads',
    name: 'Golden Artisan Sesame Soft Burger Buns',
    description: 'Gourmet restaurant-quality soft burger buns baked fresh daily, topped with toasted white & black sesame seeds. Perfect for homemade veg & non-veg burgers!',
    price: 80,
    unit: 'Pack of 6',
    isVeg: true,
    tag: 'Bakery Fresh Bestseller',
    image: 'images/images.jpeg'
  },
  {
    id: 402,
    category: 'breads',
    name: 'Freshly Baked Soft White Sandwich Bread',
    description: 'Pillow-soft, freshly sliced white bread loaf prepared with pure milk & butter. Perfect for daily sandwiches, toast, and breakfast spreads!',
    price: 60,
    unit: 'Fresh Loaf',
    isVeg: true,
    tag: 'Daily Fresh Bake',
    image: 'images/Bread-Recipe-5-2.jpg'
  },
  {
    id: 403,
    category: 'breads',
    name: 'Healthy 100% Whole Wheat Brown Bread',
    description: 'Nutritious, high-fiber brown bread loaf baked fresh daily with 100% whole wheat flour and zero artificial colors. Perfect for healthy toasts & sandwiches!',
    price: 70,
    unit: 'Fresh Loaf',
    isVeg: true,
    tag: 'High Fiber Healthy',
    image: 'images/images (2).jpeg'
  },

  // Birthday & Party Decor
  {
    id: 501,
    category: 'party',
    name: 'Complete Birthday & Party Celebration Decor Showcase',
    description: 'Explore our dedicated party store aisle! Packed with party poppers, sparklers, foil number balloons, birthday banners, acrylic cake toppers, party hats, garlands, and return gift favors.',
    price: null,
    unit: 'Party Store Selection',
    isVeg: true,
    tag: 'A-One Party Store',
    image: 'images/ChatGPT Image Sep 23, 2026, 02_19_24 PM.png'
  },
  
  

  // Imported Confectionery
  {
    id: 12,
    category: 'confectionery',
    name: 'Imported & Gourmet Confectionery Collection',
    description: 'Explore a huge variety of confectionery items, imported & Indian gourmet delicacies including Davidoff coffee, Twinings teas, Ferrero Rocher, Swiss chocolates, Farmley dry fruit mixes, and specialty condiments!',
    price: null,
    unit: 'Gourmet Store Selection',
    isVeg: true,
    tag: 'Imported & Indian Gourmet',
    image: 'images/ChatGPT Image Sep 23, 2026, 02_35_59 PM.png'
  },

  // Frozen Foods
  {
    id: 13,
    category: 'frozen',
    name: 'Crispy Veg Herb Patties & Snacks',
    description: 'Ready-to-fry seasoned potato veg patties, perfect for quick evening snacks or burgers.',
    price: null,
    unit: 'Freezer variety Selection',
    isVeg: true,
    tag: 'Veg Frozen Range',
    image: 'images/ChatGPT Image Sep 23, 2026, 02_24_37 PM.png'
  },
  {
    id: 14,
    category: 'frozen',
    name: 'Premium Non-Veg Frozen Snacks Collection',
    description: 'Explore an exciting variety of non-veg frozen snacks including Keventer & Eatsy chicken sausages, juicy chicken momos, Lucknowi chicken kebabs, chicken seekh kebabs, chicken cutlets, and crispy chicken nuggets. Ready to heat, fry & serve in minutes!',
    price: null,
    unit: 'Freezer Variety Selection',
    isVeg: false,
    tag: 'Non-Veg Frozen Range',
    image: 'images/ChatGPT Image Sep 23, 2026, 02_22_10 PM.png'
  },

  // Gifting & Hampers (Clean Product Catalog Items)
  {
    id: 15,
    category: 'hampers',
    name: 'Royal "Happiness in a Box" Gift Hamper',
    description: 'Luxurious wooden hamper basket packed with pure butter cookie jars, artisanal treats, dry fruits & fresh bakes.',
    price: null,
    unit: 'Variety of Hampers',
    isVeg: true,
    tag: 'Happiness in a Box',
    image: 'images/ChatGPT Image Sep 23, 2026, 02_29_21 PM.png'
  },
  {
    id: 301,
    category: 'hampers',
    name: 'Premium Ribbon Cookie Jars Gift Set',
    description: 'Beautifully decorated clear cookie canisters tied with pink & silver satin ribbons, filled with fresh cookies.',
    price: null,
    unit: 'Set of 4 Jars',
    isVeg: true,
    tag: 'Premium Cookies Gift',
    image: 'images/hampers_display.jpg'
  }
];

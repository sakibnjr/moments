export interface Package {
  title: string;
  description: string;
  image: string; // Placeholder for the image URL
  details: PackageDetails;
}

export interface PackageDetails {
  price: string;
  duration: string;
  includes: string[];
  tablesAndSeating: string[];
  venueFeatures: string[];
  addOnServices: AddOnService[];
}

export interface AddOnService {
  name: string;
  price: string;
  description?: string;
}

export const packages: Package[] = [
  {
    title: "Birthday Parties",
    description:
      "Make your birthday unforgettable with a vibrant and personalized celebration at our event space.",
    image:
      "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Replace with actual image URL
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
  {
    title: "Baby Showers",
    description:
      "Celebrate the joy of new beginnings in a charming and cozy setting, perfect for your baby shower.",
    image:
      "https://plus.unsplash.com/premium_photo-1676049342411-c118fe1570b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
  {
    title: "Corporate Events",
    description:
      "Host your corporate events with style and sophistication in a professional and versatile environment.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
  {
    title: "Anniversary Celebration",
    description:
      "Cherish your milestone moments with an elegant and romantic anniversary celebration.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
  {
    title: "Intimate Weddings",
    description:
      'Say "I do" in an intimate, beautifully decorated venue designed for your special day.',
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
  {
    title: "Special Occasions",
    description:
      "Create lasting memories for any special occasion with our customizable and inviting event space.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    details: {
      price: "$3299",
      duration: "6 Hour Rental",
      includes: [
        "Decor, Setup, and Breakdown",
        "Standard Backdrop w/ Vinyl Sign (Choose from Printed, Arches, or Gold Hoop)",
        "1 Balloon Garland (up to 3 Colors)",
        "1 Standard Plinth",
        "Themed Centerpiece Arrangements for Guest Tables",
        "Buffet Table Setup (Table Linen W/ Chafing Dishes)",
        "1 Cake Stand",
        "1 Sofa for Guests to Sit on Stage (Black or Cream)",
        "Charger Plates with Coordinated Napkins for a Touch of Elegance",
        "Flatware and Dinnerware",
        "Custom Welcome Sign",
        "Full Setup and Breakdown",
      ],
      tablesAndSeating: [
        "80 Clear Chiavari Chairs",
        '8 Guest Tables (60" round with tablecloths)',
        '4 Food/Banquet Tables (72" rectangle with tablecloths)',
      ],
      venueFeatures: [
        "Front & Rear Entry",
        "Convenient Public Parking",
        "Microphone (2)",
        "WiFi",
        "Audiovisual Equipment (Projector)",
        "Bluetooth Speaker",
        "On-site Consumables (Paper Towels, Trash Bags, Hand Soap)",
        "His/Hers Bathroom (ADA Approved)",
        "Access to Catering Area",
      ],
      addOnServices: [
        { name: "DJ (5 Hour Play Time)", price: "$450" },
        { name: "Photography (2 Hours)", price: "$350" },
        {
          name: "1 Licensed Bartender + Bar Setup",
          price: "$450",
          description:
            "Custom Bar Menu, Cups, Straws, Napkins, Fruit Garnishes, Drink Mixers, Ice, Pineapple Juice, and Cranberry Juice, Standard Bar Tools: Including Shakers, Strainers, & Bottle Opener (5 Hour Pour Time)",
        },
        { name: "Security (Must have if serving Alcohol)", price: "$250" },
      ],
    },
  },
];

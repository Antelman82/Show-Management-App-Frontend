const mongoose = require("./connection");
const Customer = require("../models/Customer");
const Equipment = require("../models/Equipment");
const Product = require("../models/Product");
const Show = require("../models/Show");
const Type = require("../models/Type");
const User = require("../models/User");
const Venue = require("../models/Venue");
const DatasetShows = require('./DatasetShows-csvjson.json')


let usersArray = []
//  Run this command to seed the datafile from the mongoDB:
//  mongoimport --type csv -d show-management_db -c shows --headerline DatasetShows-csv.csv
//



//     Type.deleteMany({}).then(() => {
//         Type.collection.insertMany([
//         {
//             type: "Fireworks",
//             description: `A professional 'Fireworks' display refers to a show that is always conducted outdoors and typically consists of all or some of the following: aerial fireworks shells, ground effects incuding multi-shot barrage units (cakes), fireballs, set pieces (lance-work), close proximity mines, comets, gerbs to name a few. Examples of 'Fireworks' shows occur for July 4th Events, Town Celebrations, Weddings, Anniversaries and Corporate Events just to name a few.`,
//             pictures: ["WeddingFireworks1.png", "JC-FWX-Pond2.png"]
//         },
//         {
//             type: "Pyrotechnics",
//             description: `"Pyrotechnics" can be used in two different methods - Indoor Pyrotechinc Effects or Outdoor Close Proximity Effects. Indoor effects would include flames, mines, comets, gerbs (fountains), concussions, airbursts, flash pots, etc. Some of the uses for this type of effect would include sporting events, concerts, stage productions, corporate events, just to name a few. Outdoor Close Proximity Pyrotechnics include similar effects as indoor, but usually much bigger. Some examples are flames that can go as high as 150' and Gasoline Fireballs. Also Mines and Comets that can reach 300'`,
//             pictures: ["Pyro-ISU1.png", "Slipknot-pyro.jpg"]
//         },
//         {
//             type: "Special Effects",
//             description: `"Special Effects" are different effects which are used to enhance a performance, meeting, presentation, celebration or many other special occaisions. They include such things as confetti, streamers, balloons, atmospherics (fog, dry ice, haze, bubbles, snow) and cryo-jets. These items are typyically non-pyrotechnic and can be used indoors or outdoors.`,
//             pictures: ["Kiss-Confetti.png", "Nickelback-SFX.jpg"]
//         }
//     ])

//     .then(types => console.log(types))
//     .catch(err => console.log(err));
// });

    
//     Show.deleteMany({}).then(() => {
//         Show.collection.insertMany([
//         {
//             businessName: "ISU - Wrestling",
//             status: "Complete",
//             showDate: "01/13/2019",
//             venue: "Hilton Coliseum",
//             type: "Pyrotechnics",
//             user: ["Kelm Brueschke", "Anthony Antelman", "Mike Merrill", "Jacob Amsden",],
//             role: ["Lead Operator", "Assistant Operator", "Assistant Operator", "Assistant Operator",]
//         },
//         {
//             businessName: "RV One - Tampa",
//             status: "Complete",
//             showDate: "01/16/2019",
//             venue: "RV One Tampa Pond",
//             type: "Fireworks",
//             user: ["Kelm Brueschke",],
//             role: ["Lead Operator",]
//         },
//         {
//             businessName: "Iowa Wild",
//             status: "Complete",
//             showDate: "01/14/2019",
//             venue: "Wells Fargo Arena",
//             type: "Special Effects",
//             user: ["Mike Merrill",],
//             role: ["Lead Operator",]
//         },
//         {
//             businessName: "Disturbed Concert Tour",
//             status: "Complete",
//             showDate: "01/23/2019",
//             venue: "Sprint Center",
//             type: "Pyrotechnics",
//             user: ["Kelm Bruechke",],
//             role: ["Cover License",]
//         },
//         {
//             businessName: "Jordan Creek Town Center",
//             status: "Complete",
//             showDate: "06/30/2019",
//             venue: "Jordan Creek Mall Pond",
//             type: "Fireworks",
//             user: ["Kelm Brueschke", "Mike Merrill", "Jacob Amsden", "Anthony Antelman", "Ryan Hudson", "Doglas Gerwulf"],
//             role: ["Lead Operator", "Assistant Operator", "Assistant Operator", "Assistant Operator", "Assistant Operator", "Assistant Operator", "Assistant Operator",]
//         },
//         {
//             businessName: "KISS Tour",
//             status: "Cancelled",
//             showDate: "11/23/2019",
//             venue: "Qudos Bank Arena (Australia)",
//             type: "Pyrotechnics",
//             user: ["Kelm Bruechke",],
//             role: ["Cover License",]
//         },
//         {
//             businessName: "",
//             status: "",
//             showDate: "",
//             venue: "",
//             type: "",
//             user: ["",],
//             role: ["",]
//         }
//     ])
    

//     .then(shows => console.log(shows))
//     .catch(err => console.log(err));
// });
    

    User.deleteMany({}).then(() => {
        User.collection.insertMany([
        {
            firstName: 'Anthony',
            lastName: 'Antelman',
            userName: 'anthonyantelman',
            password: '12345',
            address: '6400 NW 86th Street',
            city: 'Johnston',
            state: 'IA',
            zip: 50131,
            phone: '515.267.4573',
            email: 'antelmananthonyj@johndeere.com'
        },    
        {
            firstName: 'Kelm',
            lastName: 'Brueschke',
            userName: 'kelmbrueschke',
            password: '54321',
            address: '4104 83rd Street',
            city: 'Urbandale',
            state: 'IA',
            zip: 50322,
            phone: '515.321.2761',
            email: 'kelmbrueschke@gmail.com'
        },
        {
            firstName: 'Mike',
            lastName: 'Merrill',
            userName: 'mikemerrill',
            password: '11111',
            address: '2002 East Main',
            city: 'Knoxville',
            state: 'IA',
            zip: 50138,
            phone: '641.891.9689',
            email: 'batman_EMT@yahoo.com'
        },
        {
            firstName: 'Douglas',
            lastName: 'Gerwulf',
            userName: 'douglasgerwulf',
            password: '22222',
            address: '1124 South Main Avenue',
            city: 'Sioux Center',
            state: 'IA',
            zip: 51250,
            phone: '712.578.9372',
            email: 'doug.fusionpros@gmail.com'
        },
        {
            firstName: 'Jacob',
            lastName: 'Amsden',
            userName: 'jacobamsden',
            password: '55555',
            address: '1712 Earlham Road',
            city: 'Winterset',
            state: 'IA',
            zip: 50320,
            phone: '515.991.9719',
            email: 'jakri1221@gmail.com'
        },
        {
            firstName: 'Ryan',
            lastName: 'Hudson',
            userName: 'ryanhudson',
            password: '44444',
            address: '2303 Eagle Point Court',
            city: 'Des Moines',
            state: 'IA',
            zip: 50273,
            phone: '515.770.1866',
            email: 'ryanhudson515@gmail.com'
        },
        {
            firstName: 'Robert',
            lastName: 'Myers',
            userName: 'robertmyers',
            password: '66666',
            address: '127 Blair Street',
            city: 'Kellogg',
            state: 'IA',
            zip: 50135,
            phone: '515.333.1901',
            email: 'Arboc_jr@msn.com'
        }
    ])

    .then(users => {
        usersArray = users.ops
        // console.log('usersArray ',users.ops)
        Show.deleteMany({})
        // return users
    })
    .then(()=>{
        // console.log('users[0]', users[0])
        console.log('usersArray.ops ',usersArray[0])
        DatasetShows.forEach(show => {
            show.user = [usersArray[Math.floor(Math.random()*usersArray.length)]._id]
            Show.create(show).then(show => console.log(show))
        })
        // Show.collection.insertMany(DatasetShows)
        // .then(shows => console.log(shows))
        .catch(err => console.log(err));
    })    
    .catch(err => console.log(err))
});

    Customer.deleteMany({}).then(() => {
        Customer.collection.insertMany([
        {
            businessName: 'Jordan Creek Town Center',
            firstName: 'Randy',
            lastName: 'Tennison',
            phone: '515.224.5000',
            email: 'randy.tennison@brookfieldproperties.com',
            comment: 'Great Venue - customer is very pleased with shows.'
        },
        {
            businessName: 'Iowa State University - Football',
            firstName: 'Mary',
            lastName: 'Pink',
            phone: '515.294.1534',
            email: 'mpink@iastate.edu',
            comment: 'Excellent Customer to work with'
        },
        {
            businessName: 'Iowa State University - Alumni Association',
            firstName: 'Mary Kate',
            lastName: 'Misak',
            phone: '515.294.2632',
            email: 'mkmisak@iastate.edu',
            comment: 'Fun Show - Shoots at midnight before Homecoming Game'
        },
        {
            businessName: 'Iowa State University - Wrestling',
            firstName: 'Laura',
            lastName: 'Spieth',
            phone: '515.357.6662',
            email: 'lspieth@iastate.edu',
            comment: 'I Love Wrestling!!!'
        },
        {
            businessName: 'Iowa Wild Hockey Team',
            firstName: 'Alexandra (Allie)',
            lastName: 'Brown',
            phone: '712.540.7865',
            email: 'alexandra.brown@iowawild.com',
            comment: '38 Regular Season Games'
        },
        {
            businessName: 'Prairie Meadows',
            firstName: 'Kayla',
            lastName: 'DeBruin',
            phone: '515.967.8504',
            email: 'kayla.debruin@prairiemeadows.com',
            comment: 'Favorite Show - raised budget to $40,000 for 2020.'
        },
        {
            businessName: 'Parks Area Foundation',
            firstName: 'Bill',
            lastName: 'Wheeler',
            phone: '515.770.6275',
            email: 'highlandhardware3613@yahoo.com',
            comment: 'New Venue this year.'
        },
        {
            businessName: 'KISS - Concert Tour',
            firstName: 'Yulia',
            lastName: 'Shibinskaya',
            phone: '310.600.6571',
            email: 'yulia@ffp-fx.net',
            comment: 'Best Indoor Gig Ever!!!'
        },
        {
            businessName: 'Disturbed - Concert Tour',
            firstName: 'Ariana',
            lastName: 'George',
            phone: '424.376.8014',
            email: 'arianna@ffp-fx.net',
            comment: 'Amazing Flames and very unique flame drop from ceiling'
        },
        {
            businessName: 'City of Fairmont MN',
            firstName: 'Sam',
            lastName: 'Cress',
            phone: '507.236.6413',
            email: 'scress@cressref.com',
            comment: 'Great Group of firefighters that work very hard as helpers.'
        },
        {
            businessName: 'Drake University - Drake Relays',
            firstName: 'Aimee',
            lastName: 'Lane',
            phone: '515.271.4003',
            email: 'aimee.schmidt@drake.edu',
            comment: 'Drake Stadium is a fun place to shoot!'
        },
    ])

    .then(customers => console.log(customers))
    .catch(err => console.log(err))
});

    Equipment.deleteMany({}).then(() => {
        Equipment.collection.insertMany([
        {
            name: '2 1/2 inch - 10 Shot Rack',
            size: '2 1/2 inch',
            description: 'Fiberglass - Wood',
            quantity: 50,
            type: 'Fireworks'
        },
        {
            name: '3 inch - 10 Shot Rack',
            size: '3 inch',
            description: 'Fiberglass - Wood',
            quantity: 75,
            type: 'Fireworks'
        },
        {
            name: '3 inch - 12 Shot Rack',
            size: '3 inch',
            description: 'Fiberglass - Wood',
            quantity: 50,
            type: 'Fireworks'
        },
        {
            name: '4 inch - 10 Shot Rack',
            size: '4 inch',
            description: 'Fiberglass - Wood',
            quantity: 50,
            type: 'Fireworks'
        },
        {
            name: '5 inch - 5 Shot Rack',
            size: '5 inch',
            description: 'Fiberglass - Wood',
            quantity: 25,
            type: 'Fireworks'
        },
        {
            name: '6 inch - 5 Shot Rack',
            size: '6 inch',
            description: 'Fiberglass - Wood',
            quantity: 15,
            type: 'Fireworks'
        },
        {
            name: '3 inch Steel Mortar',
            size: '3 inch',
            description: 'Steel',
            quantity: 10,
            type: 'Fireworks'
        },
        {
            name: '3 inch Fiberglass Mortar',
            size: '3 inch',
            description: 'Fiberglass',
            quantity: 40,
            type: 'Fireworks'
        },
        {
            name: '8 inch Fiberglass Mortar',
            size: '8 inch',
            description: 'Fiberglass',
            quantity: 10,
            type: 'Fireworks'
        },
        {
            name: '10 inch Fiberglass Mortar',
            size: '10 inch',
            description: 'Fiberglass',
            quantity: 5,
            type: 'Fireworks'
        },
        {
            name: '12 inch Fiberglass Mortar',
            size: '12 inch',
            description: 'Fiberglass',
            quantity: 2,
            type: 'Fireworks'
        },
        {
            name: 'Cobra 18R2',
            size: '18 Cue',
            description: 'Controller - programmable',
            quantity: 5,
            type: 'Fireworks'
        },
        {
            name: 'Cobra 18M',
            size: '18 Cue',
            description: 'Field Module Wireless LiPo',
            quantity: 30,
            type: 'Fireworks'
        },
        {
            name: 'Cobra 18R',
            size: '18 Cue',
            description: 'Controller - non-programmable',
            quantity: 2,
            type: 'Fireworks'
        },
        {
            name: 'Cobra 36M',
            size: '36 Cue',
            description: 'Field Module Wireless LiPo',
            quantity: 4,
            type: 'Fireworks'
        },
        {
            name: 'Delcor 200 Shot',
            size: '200 Cue',
            description: 'Controller - Wired',
            quantity: 2,
            type: 'Fireworks'
        },
        {
            name: 'Delcor 400 Shot',
            size: '400 Cue',
            description: 'Controller - Wired',
            quantity: 1,
            type: 'Fireworks'
        },
        {
            name: 'Flame System - Dragonfly',
            size: 'Large',
            description: '25 foot - 30 foot Flames',
            quantity: 4,
            type: 'Pyrotechnics'
        },
        {
            name: 'Flame System - Firefly',
            size: 'Small',
            description: '6 foot - 8 foot Flames',
            quantity: 4,
            type: 'Pyrotechnics'
        },
        {
            name: 'Flame System - Galaxis',
            size: 'Small',
            description: '25 foot - 30 foot flames Wireless DMX',
            quantity: 8,
            type: 'Pyrotechnics'
        },
        {
            name: 'Fog Machine - Omnisistem',
            size: 'Small',
            description: 'PyroFog Vertical',
            quantity: 2,
            type: 'Special Effects'
        },
        {
            name: 'Fog Machine - Martin',
            size: 'Large',
            description: 'Magnum 2000 Horizontal',
            quantity: 1,
            type: 'Special Effects'
        },
        {
            name: 'CryoFog Cryo Jet',
            size: 'Large',
            description: 'DMX with LED Programmable Lights',
            quantity: 2,
            type: 'Special Effects'
        }
    ])

    .then(equipments => console.log(equipments))
    .catch(err => console.log(err))
});

    Product.deleteMany({}).then(() => {
        Product.collection.insertMany([
        {
            name: 'Red Mine',
            size: '3 inch',
            description: 'Ground Effect',
            quantity: 100,
            type: 'Fireworks'
        },
        {
            name: 'Blue Comet',
            size: '3 inch',
            description: 'Ground Effect',
            quantity: 50,
            type: 'Fireworks'
        },
        {
            name: 'White Peony',
            size: '3 inch',
            description: 'Aerial Shell',
            quantity: 50,
            type: 'Fireworks'
        },
        {
            name: 'Green Chrysanthemum',
            size: '3 inch',
            description: 'Aerial Shell',
            quantity: 25,
            type: 'Fireworks'
        },
        {
            name: 'Purple Peony with Orange Pistol',
            size: '3 inch',
            description: 'Aerial Shell',
            quantity: 30,
            type: 'Fireworks'
        },
        {
            name: 'Wave to Varigated',
            size: '4 inch',
            description: 'Aerial Shell',
            quantity: 35,
            type: 'Fireworks'
        },
        {
            name: 'Brocade Ring',
            size: '5 inch',
            description: 'Aerial Shell',
            quantity: 55,
            type: 'Fireworks'
        },
        {
            name: 'Red Star',
            size: '5 inch',
            description: 'Aerial Pattern Shell',
            quantity: 10,
            type: 'Fireworks'
        },
        {
            name: 'White Butterfly',
            size: '5 inch',
            description: 'Aerial Pattern Shell',
            quantity: 15,
            type: 'Fireworks'
        },
        {
            name: 'Glittering Willow Waterfall',
            size: '8 inch',
            description: 'Aerial Shell',
            quantity: 7,
            type: 'Fireworks'
        },
        {
            name: 'Salute',
            size: '3 inch',
            description: 'No Color - Noise Only',
            quantity: 45,
            type: 'Fireworks'
        },
        {
            name: 'Blue Roman Candle Bundle',
            size: '.75 inch',
            description: 'V-Shaped 300 Shot',
            quantity: 20,
            type: 'Fireeworks'
        },
        {
            name: 'Indoor - 20 foot Red Mine',
            size: '.75 inch',
            description: 'Indoor mine',
            quantity: 10,
            type: 'Pyrotechnics'
        },
        {
            name: 'Indoor - 1 second x 65 foot Gerb',
            size: '.75 inch',
            description: 'Indoor fountain - gerb',
            quantity: 10,
            type: 'Pyrotechnics'
        },
        {
            name: 'Indoor - 5 second Whistling Rocket',
            size: '.50 inch',
            description: 'Grid Rocket - 500 foot Travel',
            quantity: 10,
            type: 'Pyrotechnics'
        },
        {
            name: 'Regular Fog Fluid',
            size: '1 Gallon',
            description: 'PyroFog fluid',
            quantity: 4,
            type: 'Special Effects'
        },
        {
            name: 'Red 30 foot - 1 inch Streamer Package',
            size: '1 inch',
            description: '12 pcs per pkg',
            quantity: 10,
            type: 'Special Effects'
        },
        {
            name: 'Blue 15 foot - 1 inch Stremer Package',
            size: '1 inch',
            description: '12 pcs per pkg',
            quantity: 10,
            type: 'Special Effects'
        }
    ])

    .then(products => console.log(products))
    .catch(err => console.log(err))
});

    Venue.deleteMany({}).then(() => {
        Venue.collection.insertMany([
        {
            venue: 'Jordan Creek Mall',
            address: '101 Jordan Creek Parkway, Suite 12518',
            city: 'West Des Moines',
            state: 'IA',
            country: 'USA',
            zip: '50266'
        },
        {
            venue: 'Jack Trice Stadium',
            address: '1732 South 4th Street',
            city: 'Ames',
            state: 'IA',
            country: 'USA',
            zip: '50011'
        },
        {
            venue: 'ISU Campanile',
            address: '2335 Union Drive',
            city: 'Ames',
            state: 'IA',
            country: 'USA',
            zip: '50011'
        },
        {
            venue: 'Hilton Coliseum',
            address: '1705 Center Drive',
            city: 'Ames',
            state: 'IA',
            country: 'USA',
            zip: '50011'
        },
        {
            venue: 'Wells Fargo Arena',
            address: '233 Center Street',
            city: 'Des Moines',
            state: 'IA',
            country: 'USA',
            zip: '50309'
        },
        {
            venue: 'Riverview Island',
            address: '710 Corning Avenue',
            city: 'Des Moines',
            state: 'IA',
            country: 'USA',
            zip: '50313'
        },
        {
            venue: 'Target Center',
            address: '600 North 1st Avenue',
            city: 'Minneapolis',
            state: 'MN',
            country: 'USA',
            zip: '55403'
        },
        {
            venue: 'Sprint Center',
            address: '1407 Grand Boulevard',
            city: 'Kansas City',
            state: 'MO',
            country: 'USA',
            zip: '56031'
        },
        {
            venue: 'City Park',
            address: '507 Lake Avenue',
            city: 'Fairmont',
            state: 'MN',
            country: 'USA',
            zip: '56031'
        },
        {
            venue: 'Drake Stadium',
            address: '2719 Forest Avenue',
            city: 'Des Moines',
            state: 'IA',
            country: 'USA',
            zip: '50311'
        },
        {
            venue: 'Qudos Bank Arena (Australia)',
            address: '19 Edwin Flack Avenue',
            city: 'Sydney Olympic Park',
            state: 'NSW',
            country: 'AUS',
            zip: ''
        },
        {
            venue: 'Prairie Meadows Racetrack',
            address: '1 Prairie Meadows Drive',
            city: 'Altoona',
            state: 'IA',
            country: 'USA',
            zip: '50009'
        }
        
    ])

    .then(venues => console.log(venues))
    .catch(err => console.log(err))
})
use countryHub;
db.dropDatabase();

db.countries.insertMany([
{Europe:[{
        name: "United Kingdom",
        population: 67220000,
        currency: "Pound Sterling",
        language: "English",
        captial: "London",
        continent: "Europe",
        flag: ""
        },
        {
        name: "France",
        population: 65660000,
        currency: "Euro",
        language: "French",
        captial: "Paris",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Spain",
        population: 47350000,
        currency: "Euro",
        language: "Spanish",
        captial: "Madrid",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Germany",
        population: 83240000,
        currency: "Euro",
        language: "German",
        captial: "Berlin",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Netherlands",
        population: 17440000,
        currency: "Euro",
        language: "Dutch",
        captial: "Amsterdam",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Italy",
        population: 59550000,
        currency: "Euro",
        language: "Italian",
        captial: "Milan",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Portugal",
        population: 10310000,
        currency: "Euro",
        language: "Portuguese",
        captial: "Lisbon",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Greece",
        population: 10720000,
        currency: "Euro",
        language: "Greek",
        captial: "Athens",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Sweden",
        population: 10350000,
        currency: "Swedish Krona",
        language: "Swedish",
        captial: "Stockholm",
        continent: "Europe",
        flag: ""
        },
        {
        name: "Ireland",
        population: 4955500,
        currency: "Euro",
        language: "Irish/English",
        captial: "",
        continent: "Europe",
        flag: ""
    }]},
{southAmerica:[
    {
        name: "Brazil",
        population: 212600000,
        currency: "Brazilian real",
        language: "Portuguese",
        captial: "Brasília",
        continent: "South America",
        flag: ""
    },
    {
        name: "Colombia",
        population: 50372000,
        currency: "Colombian Peso",
        language: "Spanish",
        captial: "Bogotá",
        continent: "South America",
        flag: ""
    },
    {
        name: "Argentina",
        population: 47320000,
        currency: "Argentine Peso",
        language: "Spanish",
        captial: "Buenos Aires",
        continent: "South America",
        flag: ""
    },
    {
        name: "Peru",
        population: 34300000,
        currency: "Sol",
        language: "Spanish",
        captial: "Lima",
        continent: "South America",
        flag: ""
    },
    {
        name: "Chile",
        population: 17500000,
        currency: "Chilean Peso",
        language: "Spanish",
        captial: "Santiago",
        continent: "South America",
        flag: ""
    },
    {
        name: "Venezuala",
        population: 28200000,
        currency: "Venezuelan Bolívar",
        language: "Spanish",
        captial: "Caracas",
        continent: "South America",
        flag: ""
    },
    {
        name: "Ecuador",
        population: 17700000,
        currency: "US Dollars",
        language: "Spanish",
        captial: "Quito",
        continent: "South America",
        flag: ""
    },
    {
        name: "Bolivia",
        population: 11420000,
        currency: "Boliviano",
        language: "Spanish",
        captial: "La Paz",
        continent: "South America",
        flag: ""
    },
    {
        name: "Uruguay",
        population: 3510000,
        currency: "Uruguayan peso",
        language: "Spanish",
        captial: "Montevideo",
        continent: "South American",
        flag: ""
    },
    {
        name: "Paraguay",
        population: 7300000,
        currency: "",
        language: "Spanish",
        captial: "Asunción",
        continent: "South America",
        flag: "Guaraní"
    }]},
{Asia:[{
        name: "Japan",
        population: 125900000,
        currency: "Yen",
        language: "Japanese",
        captial: "Tokyo",
        continent: "Asia",
        flag: ""
    },
    {
        name: "China",
        population: 1412600000,
        currency: "Renminbi",
        language: "Chinese",
        captial: "Beijing",
        continent: "Asia",
        flag: ""
    },
    {
        name: "India",
        population: 1407500000,
        currency: "Indian Rupee",
        language: "Hindi",
        captial: "New Deli",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Thailand",
        population: 66100000,
        currency: "Baht",
        language: "Thai",
        captial: "Bangkok",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Vietnam",
        population: 96200000,
        currency: "đồng",
        language: "Vietnamese",
        captial: "Hanoi",
        continent: "Asia",
        flag: ""
    },
    {
        name: "South Korea",
        population: 51740000,
        currency: "Korean Republic Won",
        language: "Korean",
        captial: "Seoul",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Pakistan",
        population: 242923000,
        currency: "Pakistani Rupee",
        language: "Punjabi",
        captial: "Islamabad",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Iran",
        population: 83183000,
        currency: "Iranian rial",
        language: "Persian",
        captial: "Tehran",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Qatar",
        population: 2795000,
        currency: "Qatari riyal",
        language: "Arabic",
        captial: "Doha",
        continent: "Asia",
        flag: ""
    },
    {
        name: "Jordan",
        population: 11000000,
        currency: "Jordinian Dinar",
        language: "Arabic",
        captial: "Amman",
        continent: "Asia",
        flag: ""
    }]},
{Africa:[{
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
        },
        {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Africa",
        flag: ""
    }]},
{NorthAndCentralAmerica:[{
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "North and Central America",
        flag: ""
    }]},
    {Oceana:[{
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    },
    {
        name: "",
        population: 0,
        currency: "",
        language: "",
        captial: "",
        continent: "Oceana",
        flag: ""
    }]},

])
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
        flag: "https://flagcdn.com/gb.svg"
        },
        {
        name: "France",
        population: 65660000,
        currency: "Euro",
        language: "French",
        captial: "Paris",
        continent: "Europe",
        flag: "https://flagcdn.com/fr.svg"
        },
        {
        name: "Spain",
        population: 47350000,
        currency: "Euro",
        language: "Spanish",
        captial: "Madrid",
        continent: "Europe",
        flag: "https://flagcdn.com/es.svg"
        },
        {
        name: "Germany",
        population: 83240000,
        currency: "Euro",
        language: "German",
        captial: "Berlin",
        continent: "Europe",
        flag: "https://flagcdn.com/de.svg"
        },
        {
        name: "Netherlands",
        population: 17440000,
        currency: "Euro",
        language: "Dutch",
        captial: "Amsterdam",
        continent: "Europe",
        flag: "https://flagcdn.com/nl.svg"
        },
        {
        name: "Italy",
        population: 59550000,
        currency: "Euro",
        language: "Italian",
        captial: "Milan",
        continent: "Europe",
        flag: "https://flagcdn.com/it.svg"
        },
        {
        name: "Portugal",
        population: 10310000,
        currency: "Euro",
        language: "Portuguese",
        captial: "Lisbon",
        continent: "Europe",
        flag: "https://flagcdn.com/pt.svg"
        },
        {
        name: "Greece",
        population: 10720000,
        currency: "Euro",
        language: "Greek",
        captial: "Athens",
        continent: "Europe",
        flag: "https://flagcdn.com/gr.svg"
        },
        {
        name: "Sweden",
        population: 10350000,
        currency: "Swedish Krona",
        language: "Swedish",
        captial: "Stockholm",
        continent: "Europe",
        flag: "https://flagcdn.com/se.svg"
        },
        {
        name: "Ireland",
        population: 4955500,
        currency: "Euro",
        language: "Irish/English",
        captial: "",
        continent: "Europe",
        flag: "https://flagcdn.com/ie.svg"
    }]},
{southAmerica:[
    {
        name: "Brazil",
        population: 212600000,
        currency: "Brazilian real",
        language: "Portuguese",
        captial: "Brasília",
        continent: "South America",
        flag: "https://flagcdn.com/br.svg"
    },
    {
        name: "Colombia",
        population: 50372000,
        currency: "Colombian Peso",
        language: "Spanish",
        captial: "Bogotá",
        continent: "South America",
        flag: "https://flagcdn.com/co.svg"
    },
    {
        name: "Argentina",
        population: 47320000,
        currency: "Argentine Peso",
        language: "Spanish",
        captial: "Buenos Aires",
        continent: "South America",
        flag: "https://flagcdn.com/ar.svg"
    },
    {
        name: "Peru",
        population: 34300000,
        currency: "Sol",
        language: "Spanish",
        captial: "Lima",
        continent: "South America",
        flag: "https://flagcdn.com/pe.svg"
    },
    {
        name: "Chile",
        population: 17500000,
        currency: "Chilean Peso",
        language: "Spanish",
        captial: "Santiago",
        continent: "South America",
        flag: "https://flagcdn.com/cl.svg"
    },
    {
        name: "Venezuela",
        population: 28200000,
        currency: "Venezuelan Bolívar",
        language: "Spanish",
        captial: "Caracas",
        continent: "South America",
        flag: "https://flagcdn.com/ve.svg"
    },
    {
        name: "Ecuador",
        population: 17700000,
        currency: "US Dollars",
        language: "Spanish",
        captial: "Quito",
        continent: "South America",
        flag: "https://flagcdn.com/ec.svg"
    },
    {
        name: "Bolivia",
        population: 11420000,
        currency: "Boliviano",
        language: "Spanish",
        captial: "La Paz",
        continent: "South America",
        flag: "https://flagcdn.com/bo.svg"
    },
    {
        name: "Uruguay",
        population: 3510000,
        currency: "Uruguayan peso",
        language: "Spanish",
        captial: "Montevideo",
        continent: "South American",
        flag: "https://flagcdn.com/uy.svg"
    },
    {
        name: "Paraguay",
        population: 7300000,
        currency: "Guarani",
        language: "Spanish",
        captial: "Asunción",
        continent: "South America",
        flag: "https://flagcdn.com/py.svg"
    }]},
{Asia:[{
        name: "Japan",
        population: 125900000,
        currency: "Yen",
        language: "Japanese",
        captial: "Tokyo",
        continent: "Asia",
        flag: "https://flagcdn.com/jp.svg"
    },
    {
        name: "China",
        population: 1412600000,
        currency: "Renminbi",
        language: "Chinese",
        captial: "Beijing",
        continent: "Asia",
        flag: "https://flagcdn.com/cn.svg"
    },
    {
        name: "India",
        population: 1407500000,
        currency: "Indian Rupee",
        language: "Hindi",
        captial: "New Deli",
        continent: "Asia",
        flag: "https://flagcdn.com/in.svg"
    },
    {
        name: "Thailand",
        population: 66100000,
        currency: "Baht",
        language: "Thai",
        captial: "Bangkok",
        continent: "Asia",
        flag: "https://flagcdn.com/th.svg"
    },
    {
        name: "Vietnam",
        population: 96200000,
        currency: "đồng",
        language: "Vietnamese",
        captial: "Hanoi",
        continent: "Asia",
        flag: "https://flagcdn.com/vn.svg"
    },
    {
        name: "South Korea",
        population: 51740000,
        currency: "Korean Republic Won",
        language: "Korean",
        captial: "Seoul",
        continent: "Asia",
        flag: "https://flagcdn.com/kr.svg"
    },
    {
        name: "Pakistan",
        population: 242923000,
        currency: "Pakistani Rupee",
        language: "Punjabi",
        captial: "Islamabad",
        continent: "Asia",
        flag: "https://flagcdn.com/pk.svg"
    },
    {
        name: "Iran",
        population: 83183000,
        currency: "Iranian rial",
        language: "Persian",
        captial: "Tehran",
        continent: "Asia",
        flag: "https://flagcdn.com/ir.svg"
    },
    {
        name: "Qatar",
        population: 2795000,
        currency: "Qatari riyal",
        language: "Arabic",
        captial: "Doha",
        continent: "Asia",
        flag: "https://flagcdn.com/qa.svg"
    },
    {
        name: "Jordan",
        population: 11000000,
        currency: "Jordinian Dinar",
        language: "Arabic",
        captial: "Amman",
        continent: "Asia",
        flag: "https://flagcdn.com/jo.svg"
    }]},
{Africa:[{
        name: "South Africa",
        population: 60140000,
        currency: "South African rand",
        language: "English",
        captial: "Cape Town",
        continent: "Africa",
        flag: "https://flagcdn.com/za.svg"
        },
        {
        name: "Nigeria",
        population: 218500000,
        currency: "Naira",
        language: "Hausa, Yaruba",
        captial: "Abuja",
        continent: "Africa",
        flag: "https://flagcdn.com/ng.svg"
        },
        {
        name: "Cameroon",
        population: 26500000,
        currency: "Central African franc",
        language: "French",
        captial: "Yaoundé",
        continent: "Africa",
        flag: "https://flagcdn.com/cm.svg"
        },
        {
        name: "Senegal",
        population: 17190000,
        currency: "West African franc",
        language: "French",
        captial: "Dakar",
        continent: "Africa",
        flag: "https://flagcdn.com/sn.svg"
        },
        {
        name: "Ghana",
        population: 32103000,
        currency: "Cedi",
        language: "English",
        captial: "Accra",
        continent: "Africa",
        flag: "https://flagcdn.com/gh.svg"
        },
        {
        name: "Kenya",
        population: 54500000,
        currency: "Kenyan Shilling",
        language: "Swahili",
        captial: "Nairobi",
        continent: "Africa",
        flag: "https://flagcdn.com/ke.svg"
        },
        {
        name: "Morocco",
        population: 37110000,
        currency: "Dirham",
        language: "Arabic",
        captial: "Rabat",
        continent: "Africa",
        flag: "https://flagcdn.com/ma.svg"
        },
        {
        name: "Ethiopia",
        population: 123380000,
        currency: "Birr",
        language: "Afar",
        captial: "Addis Ababa",
        continent: "Africa",
        flag: "https://flagcdn.com/et.svg"
        },
        {
        name: "Ivory Coast",
        population: 29300000,
        currency: "West African franc",
        language: "French",
        captial: "	Yamoussoukro",
        continent: "Africa",
        flag: "https://flagcdn.com/ci.svg"
        },
        {
        name: "Burkina Faso",
        population: 21500000,
        currency: "West African franc",
        language: "French",
        captial: "Ouagadougou",
        continent: "Africa",
        flag: "https://flagcdn.com/bf.svg"
    }]},
{NorthAndCentralAmerica:[{
        name: "United States",
        population: 331890000,
        currency: "U.S dollar",
        language: "English",
        captial: "Wahington, D.C.",
        continent: "North and Central America",
        flag: "https://flagcdn.com/us.svg"
    },
    {
        name: "Mexico",
        population: 126000000,
        currency: "Mexican Peso",
        language: "Spanish",
        captial: "Mexico City",
        continent: "North and Central America",
        flag: "https://flagcdn.com/mx.svg"
    },
    {
        name: "Guatemala",
        population: 17260000,
        currency: "Quetzal",
        language: "Spanish",
        captial: "Guatemala City",
        continent: "North and Central America",
        flag:  "https://flagcdn.com/gt.svg"
    },
    {
        name: "Honduras",
        population: 10270000,
        currency: "Lempira",
        language: "Spanish",
        captial: "Tegucigalpa",
        continent: "North and Central America",
        flag: "https://flagcdn.com/hn.svg"
    },
    {
        name: "Costa Rica",
        population: 5000000,
        currency: "Costa Rican Colón",
        language: "Spanish",
        captial: "San José",
        continent: "North and Central America",
        flag: "https://flagcdn.com/cr.svg"
    },
    {
        name: "Panama",
        population: 4400000,
        currency: "Balboa",
        language: "Spanish",
        captial: "Panama City",
        continent: "North and Central America",
        flag: "https://flagcdn.com/pa.svg"
    },
    {
        name: "Belize",
        population: 419200,
        currency: "Belize dollar",
        language: "English",
        captial: "Belmopan",
        continent: "North and Central America",
        flag: "https://flagcdn.com/bz.svg"
    },
    {
        name: "Canada",
        population: 38650000,
        currency: "Canadian dollar",
        language: "English",
        captial: "Ottawa",
        continent: "North and Central America",
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        name: "Nicaragua",
        population: 6486000,
        currency: "Córdoba",
        language: "Spanish",
        captial: "Managua",
        continent: "North and Central America",
        flag: "https://flagcdn.com/ni.svg"
    },
    {
        name: "El Salvador",
        population: 6800000,
        currency: "Salvadoran colón",
        language: "Spanish",
        captial: "San Salvador",
        continent: "North and Central America",
        flag: "https://flagcdn.com/sv.svg"
    }]},
{Oceana:[{
        name: "Australia",
        population: 25500000,
        currency: "Australian dollar",
        language: "English",
        captial: "Canberra",
        continent: "Oceana",
        flag: "https://flagcdn.com/au.svg"
    },
    {
        name: "New Zealand",
        population: 5100000,
        currency: "New Zealand dollar",
        language: "English",
        captial: "Wellington",
        continent: "Oceana",
        flag: "https://flagcdn.com/nz.svg"
    },
    {
        name: "Fiji",
        population: 926200,
        currency: "Fijian dollar",
        language: "Fijian",
        captial: "Suva",
        continent: "Oceana",
        flag: "https://flagcdn.com/fj.svg"
    },
    {
        name: "Samoa",
        population: 202500,
        currency: "Tālā",
        language: "Samoan",
        captial: "Apia",
        continent: "Oceana",
        flag: "https://flagcdn.com/ws.svg"
    },
    {
        name: "Papua New Guinea",
        population: 8935000,
        currency: "Kina",
        language: "English",
        captial: "Port Moresby",
        continent: "Oceana",
        flag: "https://flagcdn.com/pg.svg"
    },
    {
        name: "Tonga",
        population: 100000,
        currency: "	Paʻanga",
        language: "Tongan",
        captial: "Nukuʻalofa",
        continent: "Oceana",
        flag: "https://flagcdn.com/to.svg"
    },
    {
        name: "Palau",
        population: 18000,
        currency: "US dollar",
        language: "Palauan",
        captial: "Ngerulmud",
        continent: "Oceana",
        flag: "https://flagcdn.com/pw.svg"
    },
    {
        name: "Solomon Islands",
        population: 707000,
        currency: "Solomon Island dollar",
        language: "English",
        captial: "Honiara",
        continent: "Oceana",
        flag: "https://flagcdn.com/sb.svg"
    },
    {
        name: "Nauru",
        population: 10800,
        currency: "Australian dollar",
        language: "Nauruan",
        captial: "Yaren",
        continent: "Oceana",
        flag: "https://flagcdn.com/nr.svg"
    },
    {
        name: "Marshall Islands",
        population: 61900,
        currency: "US dollar",
        language: "Marshallese",
        captial: "Delap-Uliga-Djarrit",
        continent: "Oceana",
        flag: "https://flagcdn.com/mh.svg"
    }]},

])
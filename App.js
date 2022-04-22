import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CountryFlag from 'react-native-country-flag';

info = [
  {
    id: '1',
    name: "Afghanistan",
    dialCode: "+93",
    isoCode: "AF",
    flag: <CountryFlag isoCode="AF" size={20} />
  },
  {
    id: '2',
    name: "Aland Islands",
    dialCode: "+358",
    isoCode: "AX",
    flag: <CountryFlag isoCode="AX" size={20} />
  },
  {
    id: '3',
    name: "Albania",
    dialCode: "+355",
    isoCode: "AL",
    flag: <CountryFlag isoCode="AL" size={20} />
  },
  {
    id: '4',
    name: "Algeria",
    dialCode: "+213",
    isoCode: "DZ",
    flag: <CountryFlag isoCode="DZ" size={20} />
  },
  {
    id: '5',
    name: "American Samoa",
    dialCode: "+1684",
    isoCode: "AS",
    flag: <CountryFlag isoCode="AS" size={20} />
  },
  {
    id: '6',
    name: "Andorra",
    dialCode: "+376",
    isoCode: "AD",
    flag: <CountryFlag isoCode="AD" size={20} />
  },
  {
    id: '7',
    name: "Angola",
    dialCode: "+244",
    isoCode: "AO",
    flag: <CountryFlag isoCode="AO" size={20} />
  },
  {
    id: '8',
    name: "Anguilla",
    dialCode: "+1264",
    isoCode: "AI",
    flag: <CountryFlag isoCode="AI" size={20} />
  },
  {
    id: '9',
    name: "Antarctica",
    dialCode: "+672",
    isoCode: "AQ",
    flag: <CountryFlag isoCode="AQ" size={20} />
  },
  {
    id: '10',
    name: "Antigua and Barbuda",
    dialCode: "+1268",
    isoCode: "AG",
    flag: <CountryFlag isoCode="AG" size={20} />
  },
  {
    id: '11',
    name: "Argentina",
    dialCode: "+54",
    isoCode: "AR",
    flag: <CountryFlag isoCode="AR" size={20} />
  },
  {
    id: '12',
    name: "Armenia",
    dialCode: "+374",
    isoCode: "AM",
    flag: <CountryFlag isoCode="AM" size={20} />
  },
  {
    id: '13',
    name: "Aruba",
    dialCode: "+297",
    isoCode: "AW",
    flag: <CountryFlag isoCode="AW" size={20} />
  },
  {
    id: '14',
    name: "Ascension Island",
    dialCode: "+247",
    isoCode: "AC",
    flag: <CountryFlag isoCode="AC" size={20} />
  },
  {
    id: '15',
    name: "Australia",
    dialCode: "+61",
    isoCode: "AU",
    flag: <CountryFlag isoCode="AU" size={20} />
  },
  {
    id: '16',
    name: "Austria",
    dialCode: "+43",
    isoCode: "AT",
    flag: <CountryFlag isoCode="AT" size={20} />
  },
  {
    id: '17',
    name: "Azerbaijan",
    dialCode: "+994",
    isoCode: "AZ",
    flag: <CountryFlag isoCode="AZ" size={20} />
  },
  {
    id: '18',
    name: "Bahamas",
    dialCode: "+1242",
    isoCode: "BS",
    flag: <CountryFlag isoCode="BS" size={20} />
  },
  {
    id: '19',
    name: "Bahrain",
    dialCode: "+973",
    isoCode: "BH",
    flag: <CountryFlag isoCode="BH" size={20} />
  },
  {
    id: '20',
    name: "Bangladesh",
    dialCode: "+880",
    isoCode: "BD",
    flag: <CountryFlag isoCode="BD" size={20} />
  },
  {
    id: '21',
    name: "Barbados",
    dialCode: "+1246",
    isoCode: "BB",
    flag: <CountryFlag isoCode="BB" size={20} />
  },
  {
    id: '22',
    name: "Belarus",
    dialCode: "+375",
    isoCode: "BY",
    flag: <CountryFlag isoCode="BY" size={20} />
  },
  {
    id: '23',
    name: "Belgium",
    dialCode: "+32",
    isoCode: "BE",
    flag: <CountryFlag isoCode="BE" size={20} />
  },
  {
    id: '24',
    name: "Belize",
    dialCode: "+501",
    isoCode: "BZ",
    flag: <CountryFlag isoCode="BZ" size={20} />
  },
  {
    id: '25',
    name: "Benin",
    dialCode: "+229",
    isoCode: "BJ",
    flag: <CountryFlag isoCode="BJ" size={20} />
  },
  {
    id: '26',
    name: "Bermuda",
    dialCode: "+1441",
    isoCode: "BM",
    flag: <CountryFlag isoCode="BM" size={20} />
  },
  {
    id: '27',
    name: "Bhutan",
    dialCode: "+975",
    isoCode: "BT",
    flag: <CountryFlag isoCode="BT" size={20} />
  },
  {
    id: '28',
    name: "Bolivia",
    dialCode: "+591",
    isoCode: "BO",
    flag: <CountryFlag isoCode="BO" size={20} />
  },
  {
    id: '29',
    name: "Bosnia and Herzegovina",
    dialCode: "+387",
    isoCode: "BA",
    flag: <CountryFlag isoCode="BA" size={20} />
  },
  {
    id: '30',
    name: "Botswana",
    dialCode: "+267",
    isoCode: "BW",
    flag: <CountryFlag isoCode="BW" size={20} />
  },
  {
    id: '31',
    name: "Brazil",
    dialCode: "+55",
    isoCode: "BR",
    flag: <CountryFlag isoCode="BR" size={20} />
  },
  {
    id: '32',
    name: "British Indian Ocean Territory",
    dialCode: "+246",
    isoCode: "IO",
    flag: <CountryFlag isoCode="IO" size={20} />
  },
  {
    id: '33',
    name: "Brunei Darussalam",
    dialCode: "+673",
    isoCode: "BN",
    flag: <CountryFlag isoCode="BN" size={20} />
  },
  {
    id: '34',
    name: "Bulgaria",
    dialCode: "+359",
    isoCode: "BG",
    flag: <CountryFlag isoCode="BG" size={20} />
  },
  {
    id: '35',
    name: "Burkina Faso",
    dialCode: "+226",
    isoCode: "BF",
    flag: <CountryFlag isoCode="BF" size={20} />
  },
  {
    id: '36',
    name: "Burundi",
    dialCode: "+257",
    isoCode: "BI",
    flag: <CountryFlag isoCode="BI" size={20} />
  },
  {
    id: '37',
    name: "Cambodia",
    dialCode: "+855",
    isoCode: "KH",
    flag: <CountryFlag isoCode="KH" size={20} />
  },
  {
    id: '38',
    name: "Cameroon",
    dialCode: "+237",
    isoCode: "CM",
    flag: <CountryFlag isoCode="CM" size={20} />
  },
  {
    id: '39',
    name: "Canada",
    dialCode: "+1",
    isoCode: "CA",
    flag: <CountryFlag isoCode="CA" size={20} />
  },
  {
    id: '40',
    name: "Cape Verde",
    dialCode: "+238",
    isoCode: "CV",
    flag: <CountryFlag isoCode="CV" size={20} />
  },
  {
    id: '41',
    name: "Cayman Islands",
    dialCode: "+1345",
    isoCode: "KY",
    flag: <CountryFlag isoCode="KY" size={20} />
  },
  {
    id: '42',
    name: "Central African Republic",
    dialCode: "+236",
    isoCode: "CF",
    flag: <CountryFlag isoCode="CF" size={20} />
  },
  {
    id: '43',
    name: "Chad",
    dialCode: "+235",
    isoCode: "TD",
    flag: <CountryFlag isoCode="TD" size={20} />
  },
  {
    id: '44',
    name: "Chile",
    dialCode: "+56",
    isoCode: "CL",
    flag: <CountryFlag isoCode="CL" size={20} />
  },
  {
    id: '45',
    name: "China",
    dialCode: "+86",
    isoCode: "CN",
    flag: <CountryFlag isoCode="CN" size={20} />
  },
  {
    id: '46',
    name: "Christmas Island",
    dialCode: "+61",
    isoCode: "CX",
    flag: <CountryFlag isoCode="CX" size={20} />
  },
  {
    id: '47',
    name: "Cocos (Keeling) Islands",
    dialCode: "+61",
    isoCode: "CC",
    flag: <CountryFlag isoCode="CC" size={20} />
  },
  {
    id: '48',
    name: "Colombia",
    dialCode: "+57",
    isoCode: "CO",
    flag: <CountryFlag isoCode="CO" size={20} />
  },
  {
    id: '49',
    name: "Comoros",
    dialCode: "+269",
    isoCode: "KM",
    flag: <CountryFlag isoCode="KM" size={20} />
  },
  {
    id: '50',
    name: "Congo",
    dialCode: "+242",
    isoCode: "CG",
    flag: <CountryFlag isoCode="CG" size={20} />
  },
  {
    id: '51',
    name: "Cook Islands",
    dialCode: "+682",
    isoCode: "CK",
    flag: <CountryFlag isoCode="CK" size={20} />
  },
  {
    id: '52',
    name: "Costa Rica",
    dialCode: "+506",
    isoCode: "CR",
    flag: <CountryFlag isoCode="CR" size={20} />
  },
  {
    id: '53',
    name: "Croatia",
    dialCode: "+385",
    isoCode: "HR",
    flag: <CountryFlag isoCode="HR" size={20} />
  },
  {
    id: '54',
    name: "Cuba",
    dialCode: "+53",
    isoCode: "CU",
    flag: <CountryFlag isoCode="CU" size={20} />
  },
  {
    id: '55',
    name: "Cyprus",
    dialCode: "+357",
    isoCode: "CY",
    flag: <CountryFlag isoCode="CY" size={20} />
  },
  {
    id: '56',
    name: "Czech Republic",
    dialCode: "+420",
    isoCode: "CZ",
    flag: <CountryFlag isoCode="CZ" size={20} />
  },
  {
    id: '57',
    name: "Democratic Republic of the Congo",
    dialCode: "+243",
    isoCode: "CD",
    flag: <CountryFlag isoCode="CD" size={20} />
  },
  {
    id: '58',
    name: "Denmark",
    dialCode: "+45",
    isoCode: "DK",
    flag: <CountryFlag isoCode="DK" size={20} />
  },
  {
    id: '59',
    name: "Djibouti",
    dialCode: "+253",
    isoCode: "DJ",
    flag: <CountryFlag isoCode="DJ" size={20} />
  },
  {
    id: '60',
    name: "Dominica",
    dialCode: "+1767",
    isoCode: "DM",
    flag: <CountryFlag isoCode="DM" size={20} />
  },
  {
    id: '61',
    name: "Dominican Republic",
    dialCode: "+1849",
    isoCode: "DO",
    flag: <CountryFlag isoCode="DO" size={20} />
  },
  {
    id: '62',
    name: "Ecuador",
    dialCode: "+593",
    isoCode: "EC",
    flag: <CountryFlag isoCode="EC" size={20} />
  },
  {
    id: '63',
    name: "Egypt",
    dialCode: "+20",
    isoCode: "EG",
    flag: <CountryFlag isoCode="EG" size={20} />
  },
  {
    id: '64',
    name: "El Salvador",
    dialCode: "+503",
    isoCode: "SV",
    flag: <CountryFlag isoCode="SV" size={20} />
  },
  {
    id: '65',
    name: "Equatorial Guinea",
    dialCode: "+240",
    isoCode: "GQ",
    flag: <CountryFlag isoCode="GQ" size={20} />
  },
  {
    id: '66',
    name: "Eritrea",
    dialCode: "+291",
    isoCode: "ER",
    flag: <CountryFlag isoCode="ER" size={20} />
  },
  {
    id: '67',
    name: "Estonia",
    dialCode: "+372",
    isoCode: "EE",
    flag: <CountryFlag isoCode="EE" size={20} />
  },
  {
    id: '68',
    name: "Eswatini",
    dialCode: "+268",
    isoCode: "SZ",
    flag: <CountryFlag isoCode="SZ" size={20} />
  },
  {
    id: '69',
    name: "Ethiopia",
    dialCode: "+251",
    isoCode: "ET",
    flag: <CountryFlag isoCode="ET" size={20} />
  },
  {
    id: '70',
    name: "Falkland Islands (Malvinas)",
    dialCode: "+500",
    isoCode: "FK",
    flag: <CountryFlag isoCode="FK" size={20} />
  },
  {
    id: '71',
    name: "Faroe Islands",
    dialCode: "+298",
    isoCode: "FO",
    flag: <CountryFlag isoCode="FO" size={20} />
  },
  {
    id: '72',
    name: "Fiji",
    dialCode: "+679",
    isoCode: "FJ",
    flag: <CountryFlag isoCode="FJ" size={20} />
  },
  {
    id: '73',
    name: "Finland",
    dialCode: "+358",
    isoCode: "FI",
    flag: <CountryFlag isoCode="FI" size={20} />
  },
  {
    id: '74',
    name: "France",
    dialCode: "+33",
    isoCode: "FR",
    flag: <CountryFlag isoCode="FR" size={20} />
  },
  {
    id: '75',
    name: "French Guiana",
    dialCode: "+594",
    isoCode: "GF",
    flag: <CountryFlag isoCode="GF" size={20} />
  },
  {
    id: '76',
    name: "French Polynesia",
    dialCode: "+689",
    isoCode: "PF",
    flag: <CountryFlag isoCode="PF" size={20} />
  },
  {
    id: '77',
    name: "Gabon",
    dialCode: "+241",
    isoCode: "GA",
    flag: <CountryFlag isoCode="GA" size={20} />
  },
  {
    id: '78',
    name: "Gambia",
    dialCode: "+220",
    isoCode: "GM",
    flag: <CountryFlag isoCode="GM" size={20} />
  },
  {
    id: '79',
    name: "Georgia",
    dialCode: "+995",
    isoCode: "GE",
    flag: <CountryFlag isoCode="GE" size={20} />
  },
  {
    id: '80',
    name: "Germany",
    dialCode: "+49",
    isoCode: "DE",
    flag: <CountryFlag isoCode="DE" size={20} />
  },
  {
    id: '81',
    name: "Ghana",
    dialCode: "+233",
    isoCode: "GH",
    flag: <CountryFlag isoCode="GH" size={20} />
  },
  {
    id: '82',
    name: "Gibraltar",
    dialCode: "+350",
    isoCode: "GI",
    flag: <CountryFlag isoCode="GI" size={20} />
  },
  {
    id: '83',
    name: "Greece",
    dialCode: "+30",
    isoCode: "GR",
    flag: <CountryFlag isoCode="GR" size={20} />
  },
  {
    id: '84',
    name: "Greenland",
    dialCode: "+299",
    isoCode: "GL",
    flag: <CountryFlag isoCode="GL" size={20} />
  },
  {
    id: '85',
    name: "Grenada",
    dialCode: "+1473",
    isoCode: "GD",
    flag: <CountryFlag isoCode="GD" size={20} />
  },
  {
    id: '86',
    name: "Guadeloupe",
    dialCode: "+590",
    isoCode: "GP",
    flag: <CountryFlag isoCode="GP" size={20} />
  },
  {
    id: '87',
    name: "Guam",
    dialCode: "+1671",
    isoCode: "GU",
    flag: <CountryFlag isoCode="GU" size={20} />
  },
  {
    id: '88',
    name: "Guatemala",
    dialCode: "+502",
    isoCode: "GT",
    flag: <CountryFlag isoCode="GT" size={20} />
  },
  {
    id: '89',
    name: "Guernsey",
    dialCode: "+44",
    isoCode: "GG",
    flag: <CountryFlag isoCode="GG" size={20} />
  },
  {
    id: '90',
    name: "Guinea",
    dialCode: "+224",
    isoCode: "GN",
    flag: <CountryFlag isoCode="GN" size={20} />
  },
  {
    id: '91',
    name: "Guinea-Bissau",
    dialCode: "+245",
    isoCode: "GW",
    flag: <CountryFlag isoCode="GW" size={20} />
  },
  {
    id: '92',
    name: "Guyana",
    dialCode: "+592",
    isoCode: "GY",
    flag: <CountryFlag isoCode="GY" size={20} />
  },
  {
    id: '93',
    name: "Haiti",
    dialCode: "+509",
    isoCode: "HT",
    flag: <CountryFlag isoCode="HT" size={20} />
  },
  {
    id: '94',
    name: "Holy See (Vatican City State)",
    dialCode: "+379",
    isoCode: "VA",
    flag: <CountryFlag isoCode="VA" size={20} />
  },
  {
    id: '95',
    name: "Honduras",
    dialCode: "+504",
    isoCode: "HN",
    flag: <CountryFlag isoCode="HN" size={20} />
  },
  {
    id: '96',
    name: "Hong Kong",
    dialCode: "+852",
    isoCode: "HK",
    flag: <CountryFlag isoCode="HK" size={20} />
  },
  {
    id: '97',
    name: "Hungary",
    dialCode: "+36",
    isoCode: "HU",
    flag: <CountryFlag isoCode="HU" size={20} />
  },
  {
    id: '98',
    name: "Iceland",
    dialCode: "+354",
    isoCode: "IS",
    flag: <CountryFlag isoCode="IS" size={20} />
  },
  {
    id: '99',
    name: "India",
    dialCode: "+91",
    isoCode: "IN",
    flag: <CountryFlag isoCode="IN" size={20} />
  },
  {
    id: '100',
    name: "Indonesia",
    dialCode: "+62",
    isoCode: "ID",
    flag: <CountryFlag isoCode="ID" size={20} />
  },
  {
    id: '101',
    name: "Iran",
    dialCode: "+98",
    isoCode: "IR",
    flag: <CountryFlag isoCode="IR" size={20} />
  },
  {
    id: '102',
    name: "Iraq",
    dialCode: "+964",
    isoCode: "IQ",
    flag: <CountryFlag isoCode="IQ" size={20} />
  },
  {
    id: '103',
    name: "Ireland",
    dialCode: "+353",
    isoCode: "IE",
    flag: <CountryFlag isoCode="IE" size={20} />
  },
  {
    id: '104',
    name: "Isle of Man",
    dialCode: "+44",
    isoCode: "IM",
    flag: <CountryFlag isoCode="IM" size={20} />
  },
  {
    id: '105',
    name: "Israel",
    dialCode: "+972",
    isoCode: "IL",
    flag: <CountryFlag isoCode="IL" size={20} />
  },
  {
    id: '106',
    name: "Italy",
    dialCode: "+39",
    isoCode: "IT",
    flag: <CountryFlag isoCode="IT" size={20} />
  },
  {
    id: '107',
    name: "Ivory Coast / Cote d'Ivoire",
    dialCode: "+225",
    isoCode: "CI",
    flag: <CountryFlag isoCode="CI" size={20} />
  },
  {
    id: '108',
    name: "Jamaica",
    dialCode: "+1876",
    isoCode: "JM",
    flag: <CountryFlag isoCode="JM" size={20} />
  },
  {
    id: '109',
    name: "Japan",
    dialCode: "+81",
    isoCode: "JP",
    flag: <CountryFlag isoCode="JP" size={20} />
  },
  {
    id: '110',
    name: "Jersey",
    dialCode: "+44",
    isoCode: "JE",
    flag: <CountryFlag isoCode="JE" size={20} />
  },
  {
    id: '111',
    name: "Jordan",
    dialCode: "+962",
    isoCode: "JO",
    flag: <CountryFlag isoCode="JO" size={20} />
  },
  {
    id: '112',
    name: "Kazakhstan",
    dialCode: "+77",
    isoCode: "KZ",
    flag: <CountryFlag isoCode="KZ" size={20} />
  },
  {
    id: '113',
    name: "Kenya",
    dialCode: "+254",
    isoCode: "KE",
    flag: <CountryFlag isoCode="KE" size={20} />
  },
  {
    id: '114',
    name: "Kiribati",
    dialCode: "+686",
    isoCode: "KI",
    flag: <CountryFlag isoCode="KI" size={20} />
  },
  {
    id: '115',
    name: "Korea, Democratic People's Republic of Korea",
    dialCode: "+850",
    isoCode: "KP",
    flag: <CountryFlag isoCode="KP" size={20} />
  },
  {
    id: '116',
    name: "Korea, Republic of South Korea",
    dialCode: "+82",
    isoCode: "KR",
    flag: <CountryFlag isoCode="KR" size={20} />
  },
  {
    id: '117',
    name: "Kosovo",
    dialCode: "+383",
    isoCode: "XK",
    flag: <CountryFlag isoCode="XK" size={20} />
  },
  {
    id: '118',
    name: "Kuwait",
    dialCode: "+965",
    isoCode: "KW",
    flag: <CountryFlag isoCode="KW" size={20} />
  },
  {
    id: '119',
    name: "Kyrgyzstan",
    dialCode: "+996",
    isoCode: "KG",
    flag: <CountryFlag isoCode="KG" size={20} />
  },
  {
    id: '120',
    name: "Laos",
    dialCode: "+856",
    isoCode: "LA",
    flag: <CountryFlag isoCode="LA" size={20} />
  },
  {
    id: '121',
    name: "Latvia",
    dialCode: "+371",
    isoCode: "LV",
    flag: <CountryFlag isoCode="LV" size={20} />
  },
  {
    id: '122',
    name: "Lebanon",
    dialCode: "+961",
    isoCode: "LB",
    flag: <CountryFlag isoCode="LB" size={20} />
  },
  {
    id: '123',
    name: "Lesotho",
    dialCode: "+266",
    isoCode: "LS",
    flag: <CountryFlag isoCode="LS" size={20} />
  },
  {
    id: '124',
    name: "Liberia",
    dialCode: "+231",
    isoCode: "LR",
    flag: <CountryFlag isoCode="LR" size={20} />
  },
  {
    id: '125',
    name: "Libya",
    dialCode: "+218",
    isoCode: "LY",
    flag: <CountryFlag isoCode="LY" size={20} />
  },
  {
    id: '126',
    name: "Liechtenstein",
    dialCode: "+423",
    isoCode: "LI",
    flag: <CountryFlag isoCode="LI" size={20} />
  },
  {
    id: '127',
    name: "Lithuania",
    dialCode: "+370",
    isoCode: "LT",
    flag: <CountryFlag isoCode="LT" size={20} />
  },
  {
    id: '128',
    name: "Luxembourg",
    dialCode: "+352",
    isoCode: "LU",
    flag: <CountryFlag isoCode="LU" size={20} />
  },
  {
    id: '129',
    name: "Macau",
    dialCode: "+853",
    isoCode: "MO",
    flag: <CountryFlag isoCode="MO" size={20} />
  },
  {
    id: '130',
    name: "Madagascar",
    dialCode: "+261",
    isoCode: "MG",
    flag: <CountryFlag isoCode="MG" size={20} />
  },
  {
    id: '131',
    name: "Malawi",
    dialCode: "+265",
    isoCode: "MW",
    flag: <CountryFlag isoCode="MW" size={20} />
  },
  {
    id: '132',
    name: "Malaysia",
    dialCode: "+60",
    isoCode: "MY",
    flag: <CountryFlag isoCode="MY" size={20} />
  },
  {
    id: '133',
    name: "Maldives",
    dialCode: "+960",
    isoCode: "MV",
    flag: <CountryFlag isoCode="MV" size={20} />
  },
  {
    id: '134',
    name: "Mali",
    dialCode: "+223",
    isoCode: "ML",
    flag: <CountryFlag isoCode="ML" size={20} />
  },
  {
    id: '135',
    name: "Malta",
    dialCode: "+356",
    isoCode: "MT",
    flag: <CountryFlag isoCode="MT" size={20} />
  },
  {
    id: '136',
    name: "Marshall Islands",
    dialCode: "+692",
    isoCode: "MH",
    flag: <CountryFlag isoCode="MH" size={20} />
  },
  {
    id: '137',
    name: "Martinique",
    dialCode: "+596",
    isoCode: "MQ",
    flag: <CountryFlag isoCode="MQ" size={20} />
  },
  {
    id: '138',
    name: "Mauritania",
    dialCode: "+222",
    isoCode: "MR",
    flag: <CountryFlag isoCode="MR" size={20} />
  },
  {
    id: '139',
    name: "Mauritius",
    dialCode: "+230",
    isoCode: "MU",
    flag: <CountryFlag isoCode="MU" size={20} />
  },
  {
    id: '140',
    name: "Mayotte",
    dialCode: "+262",
    isoCode: "YT",
    flag: <CountryFlag isoCode="YT" size={20} />
  },
  {
    id: '141',
    name: "Mexico",
    dialCode: "+52",
    isoCode: "MX",
    flag: <CountryFlag isoCode="MX" size={20} />
  },
  {
    id: '142',
    name: "Micronesia, Federated States of Micronesia",
    dialCode: "+691",
    isoCode: "FM",
    flag: <CountryFlag isoCode="FM" size={20} />
  },
  {
    id: '143',
    name: "Moldova",
    dialCode: "+373",
    isoCode: "MD",
    flag: <CountryFlag isoCode="MD" size={20} />
  },
  {
    id: '144',
    name: "Monaco",
    dialCode: "+377",
    isoCode: "MC",
    flag: <CountryFlag isoCode="MC" size={20} />
  },
  {
    id: '145',
    name: "Mongolia",
    dialCode: "+976",
    isoCode: "MN",
    flag: <CountryFlag isoCode="MN" size={20} />
  },
  {
    id: '146',
    name: "Montenegro",
    dialCode: "+382",
    isoCode: "ME",
    flag: <CountryFlag isoCode="ME" size={20} />
  },
  {
    id: '147',
    name: "Montserrat",
    dialCode: "+1664",
    isoCode: "MS",
    flag: <CountryFlag isoCode="MS" size={20} />
  },
  {
    id: '148',
    name: "Morocco",
    dialCode: "+212",
    isoCode: "MA",
    flag: <CountryFlag isoCode="MS" size={20} />
  },
  {
    id: '149',
    name: "Mozambique",
    dialCode: "+258",
    isoCode: "MZ",
    flag: <CountryFlag isoCode="MZ" size={20} />
  },
  {
    id: '150',
    name: "Myanmar",
    dialCode: "+95",
    isoCode: "MM",
    flag: <CountryFlag isoCode="MM" size={20} />
  },
  {
    id: '151',
    name: "Namibia",
    dialCode: "+264",
    isoCode: "NA",
    flag: <CountryFlag isoCode="NA" size={20} />
  },
  {
    id: '152',
    name: "Nauru",
    dialCode: "+674",
    isoCode: "NR",
    flag: <CountryFlag isoCode="NR" size={20} />
  },
  {
    id: '153',
    name: "Nepal",
    dialCode: "+977",
    isoCode: "NP",
    flag: <CountryFlag isoCode="NP" size={20} />
  },
  {
    id: '154',
    name: "Netherlands",
    dialCode: "+31",
    isoCode: "NL",
    flag: <CountryFlag isoCode="NL" size={20} />
  },
  {
    id: '155',
    name: "Netherlands Antilles",
    dialCode: "+599",
    isoCode: "AN",
    flag: <CountryFlag isoCode="AN" size={20} />
  },
  {
    id: '156',
    name: "New Caledonia",
    dialCode: "+687",
    isoCode: "NC",
    flag: <CountryFlag isoCode="NC" size={20} />
  },
  {
    id: '157',
    name: "New Zealand",
    dialCode: "+64",
    isoCode: "NZ",
    flag: <CountryFlag isoCode="NZ" size={20} />
  },
  {
    id: '158',
    name: "Nicaragua",
    dialCode: "+505",
    isoCode: "NI",
    flag: <CountryFlag isoCode="NI" size={20} />
  },
  {
    id: '159',
    name: "Niger",
    dialCode: "+227",
    isoCode: "NE",
    flag: <CountryFlag isoCode="NE" size={20} />
  },
  {
    id: '160',
    name: "Nigeria",
    dialCode: "+234",
    isoCode: "NG",
    flag: <CountryFlag isoCode="NG" size={20} />
  },
  {
    id: '161',
    name: "Niue",
    dialCode: "+683",
    isoCode: "NU",
    flag: <CountryFlag isoCode="NU" size={20} />
  },
  {
    id: '162',
    name: "Norfolk Island",
    dialCode: "+672",
    isoCode: "NF",
    flag: <CountryFlag isoCode="NF" size={20} />
  },
  {
    id: '163',
    name: "North Macedonia",
    dialCode: "+389",
    isoCode: "MK",
    flag: <CountryFlag isoCode="MK" size={20} />
  },
  {
    id: '164',
    name: "Northern Mariana Islands",
    dialCode: "+1670",
    isoCode: "MP",
    flag: <CountryFlag isoCode="MP" size={20} />
  },
  {
    id: '165',
    name: "Norway",
    dialCode: "+47",
    isoCode: "NO",
    flag: <CountryFlag isoCode="NO" size={20} />
  },
  {
    id: '166',
    name: "Oman",
    dialCode: "+968",
    isoCode: "OM",
    flag: <CountryFlag isoCode="OM" size={20} />
  },
  {
    id: '167',
    name: "Pakistan",
    dialCode: "+92",
    isoCode: "PK",
    flag: <CountryFlag isoCode="PK" size={20} />
  },
  {
    id: '168',
    name: "Palau",
    dialCode: "+680",
    isoCode: "PW",
    flag: <CountryFlag isoCode="PW" size={20} />
  },
  {
    id: '169',
    name: "Palestine",
    dialCode: "+970",
    isoCode: "PS",
    flag: <CountryFlag isoCode="PS" size={20} />
  },
  {
    id: '170',
    name: "Panama",
    dialCode: "+507",
    isoCode: "PA",
    flag: <CountryFlag isoCode="PA" size={20} />
  },
  {
    id: '171',
    name: "Papua New Guinea",
    dialCode: "+675",
    isoCode: "PG",
    flag: <CountryFlag isoCode="PG" size={20} />
  },
  {
    id: '172',
    name: "Paraguay",
    dialCode: "+595",
    isoCode: "PY",
    flag: <CountryFlag isoCode="PY" size={20} />
  },
  {
    id: '173',
    name: "Peru",
    dialCode: "+51",
    isoCode: "PE",
    flag: <CountryFlag isoCode="PE" size={20} />
  },
  {
    id: '174',
    name: "Philippines",
    dialCode: "+63",
    isoCode: "PH",
    flag: <CountryFlag isoCode="PH" size={20} />
  },
  {
    id: '175',
    name: "Pitcairn",
    dialCode: "+872",
    isoCode: "PN",
    flag: <CountryFlag isoCode="PN" size={20} />
  },
  {
    id: '176',
    name: "Poland",
    dialCode: "+48",
    isoCode: "PL",
    flag: <CountryFlag isoCode="PL" size={20} />
  },
  {
    id: '177',
    name: "Portugal",
    dialCode: "+351",
    isoCode: "PT",
    flag: <CountryFlag isoCode="PT" size={20} />
  },
  {
    id: '178',
    name: "Puerto Rico",
    dialCode: "+1939",
    isoCode: "PR",
    flag: <CountryFlag isoCode="PR" size={20} />
  },
  {
    id: '179',
    name: "Qatar",
    dialCode: "+974",
    isoCode: "QA",
    flag: <CountryFlag isoCode="QA" size={20} />
  },
  {
    id: '180',
    name: "Reunion",
    dialCode: "+262",
    isoCode: "RE",
    flag: <CountryFlag isoCode="RE" size={20} />
  },
  {
    id: '181',
    name: "Romania",
    dialCode: "+40",
    isoCode: "RO",
    flag: <CountryFlag isoCode="RO" size={20} />
  },
  {
    id: '182',
    name: "Russia",
    dialCode: "+7",
    isoCode: "RU",
    flag: <CountryFlag isoCode="RU" size={20} />
  },
  {
    id: '183',
    name: "Rwanda",
    dialCode: "+250",
    isoCode: "RW",
    flag: <CountryFlag isoCode="RW" size={20} />
  },
  {
    id: '184',
    name: "Saint Barthelemy",
    dialCode: "+590",
    isoCode: "BL",
    flag: <CountryFlag isoCode="BL" size={20} />
  },
  {
    id: '185',
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dialCode: "+290",
    isoCode: "SH",
    flag: <CountryFlag isoCode="SH" size={20} />
  },
  {
    id: '186',
    name: "Saint Kitts and Nevis",
    dialCode: "+1869",
    isoCode: "KN",
    flag: <CountryFlag isoCode="KN" size={20} />
  },
  {
    id: '187',
    name: "Saint Lucia",
    dialCode: "+1758",
    isoCode: "LC",
    flag: <CountryFlag isoCode="LC" size={20} />
  },
  {
    id: '188',
    name: "Saint Martin",
    dialCode: "+590",
    isoCode: "MF",
    flag: <CountryFlag isoCode="MF" size={20} />
  },
  {
    id: '189',
    name: "Saint Pierre and Miquelon",
    dialCode: "+508",
    isoCode: "PM",
    flag: <CountryFlag isoCode="PM" size={20} />
  },
  {
    id: '190',
    name: "Saint Vincent and the Grenadines",
    dialCode: "+1784",
    isoCode: "VC",
    flag: <CountryFlag isoCode="VC" size={20} />
  },
  {
    id: '191',
    name: "Samoa",
    dialCode: "+685",
    isoCode: "WS",
    flag: <CountryFlag isoCode="WS" size={20} />
  },
  {
    id: '192',
    name: "San Marino",
    dialCode: "+378",
    isoCode: "SM",
    flag: <CountryFlag isoCode="SM" size={20} />
  },
  {
    id: '193',
    name: "Sao Tome and Principe",
    dialCode: "+239",
    isoCode: "ST",
    flag: <CountryFlag isoCode="ST" size={20} />
  },
  {
    id: '194',
    name: "Saudi Arabia",
    dialCode: "+966",
    isoCode: "SA",
    flag: <CountryFlag isoCode="SA" size={20} />
  },
  {
    id: '195',
    name: "Senegal",
    dialCode: "+221",
    isoCode: "SN",
    flag: <CountryFlag isoCode="SN" size={20} />
  },
  {
    id: '196',
    name: "Serbia",
    dialCode: "+381",
    isoCode: "RS",
    flag: <CountryFlag isoCode="RS" size={20} />
  },
  {
    id: '197',
    name: "Seychelles",
    dialCode: "+248",
    isoCode: "SC",
    flag: <CountryFlag isoCode="SC" size={20} />
  },
  {
    id: '198',
    name: "Sierra Leone",
    dialCode: "+232",
    isoCode: "SL",
    flag: <CountryFlag isoCode="SL" size={20} />
  },
  {
    id: '199',
    name: "Singapore",
    dialCode: "+65",
    isoCode: "SG",
    flag: <CountryFlag isoCode="SG" size={20} />
  },
  {
    id: '200',
    name: "Sint Maarten",
    dialCode: "+1721",
    isoCode: "SX",
    flag: <CountryFlag isoCode="SX" size={20} />
  },
  {
    id: '201',
    name: "Slovakia",
    dialCode: "+421",
    isoCode: "SK",
    flag: <CountryFlag isoCode="SK" size={20} />
  },
  {
    id: '202',
    name: "Slovenia",
    dialCode: "+386",
    isoCode: "SI",
    flag: <CountryFlag isoCode="SI" size={20} />
  },
  {
    id: '203',
    name: "Solomon Islands",
    dialCode: "+677",
    isoCode: "SB",
    flag: <CountryFlag isoCode="SB" size={20} />
  },
  {
    id: '204',
    name: "Somalia",
    dialCode: "+252",
    isoCode: "SO",
    flag: <CountryFlag isoCode="SO" size={20} />
  },
  {
    id: '205',
    name: "South Africa",
    dialCode: "+27",
    isoCode: "ZA",
    flag: <CountryFlag isoCode="ZA" size={20} />
  },
  {
    id: '206',
    name: "South Georgia and the South Sandwich Islands",
    dialCode: "+500",
    isoCode: "GS",
    flag: <CountryFlag isoCode="GS" size={20} />
  },
  {
    id: '207',
    name: "South Sudan",
    dialCode: "+211",
    isoCode: "SS",
    flag: <CountryFlag isoCode="SS" size={20} />
  },
  {
    id: '208',
    name: "Spain",
    dialCode: "+34",
    isoCode: "ES",
    flag: <CountryFlag isoCode="ES" size={20} />
  },
  {
    id: '209',
    name: "Sri Lanka",
    dialCode: "+94",
    isoCode: "LK",
    flag: <CountryFlag isoCode="LK" size={20} />
  },
  {
    id: '210',
    name: "Sudan",
    dialCode: "+249",
    isoCode: "SD",
    flag: <CountryFlag isoCode="SD" size={20} />
  },
  {
    id: '211',
    name: "Suriname",
    dialCode: "+597",
    isoCode: "SR",
    flag: <CountryFlag isoCode="SR" size={20} />
  },
  {
    id: '212',
    name: "Svalbard and Jan Mayen",
    dialCode: "+47",
    isoCode: "SJ",
    flag: <CountryFlag isoCode="SJ" size={20} />
  },
  {
    id: '213',
    name: "Sweden",
    dialCode: "+46",
    isoCode: "SE",
    flag: <CountryFlag isoCode="SE" size={20} />
  },
  {
    id: '214',
    name: "Switzerland",
    dialCode: "+41",
    isoCode: "CH",
    flag: <CountryFlag isoCode="CH" size={20} />
  },
  {
    id: '215',
    name: "Syrian Arab Republic",
    dialCode: "+963",
    isoCode: "SY",
    flag: <CountryFlag isoCode="SY" size={20} />
  },
  {
    id: '216',
    name: "Taiwan",
    dialCode: "+886",
    isoCode: "TW",
    flag: <CountryFlag isoCode="TW" size={20} />
  },
  {
    id: '217',
    name: "Tajikistan",
    dialCode: "+992",
    isoCode: "TJ",
    flag: <CountryFlag isoCode="TJ" size={20} />
  },
  {
    id: '218',
    name: "Tanzania, United Republic of Tanzania",
    dialCode: "+255",
    isoCode: "TZ",
    flag: <CountryFlag isoCode="TZ" size={20} />
  },
  {
    id: '219',
    name: "Thailand",
    dialCode: "+66",
    isoCode: "TH",
    flag: <CountryFlag isoCode="TH" size={20} />
  },
  {
    id: '220',
    name: "Timor-Leste",
    dialCode: "+670",
    isoCode: "TL",
    flag: <CountryFlag isoCode="TL" size={20} />
  },
  {
    id: '221',
    name: "Togo",
    dialCode: "+228",
    isoCode: "TG",
    flag: <CountryFlag isoCode="TG" size={20} />
  },
  {
    id: '222',
    name: "Tokelau",
    dialCode: "+690",
    isoCode: "TK",
    flag: <CountryFlag isoCode="TK" size={20} />
  },
  {
    id: '223',
    name: "Tonga",
    dialCode: "+676",
    isoCode: "TO",
    flag: <CountryFlag isoCode="TO" size={20} />
  },
  {
    id: '224',
    name: "Trinidad and Tobago",
    dialCode: "+1868",
    isoCode: "TT",
    flag: <CountryFlag isoCode="TT" size={20} />
  },
  {
    id: '225',
    name: "Tunisia",
    dialCode: "+216",
    isoCode: "TN",
    flag: <CountryFlag isoCode="TN" size={20} />
  },
  {
    id: '226',
    name: "Turkey",
    dialCode: "+90",
    isoCode: "TR",
    flag: <CountryFlag isoCode="TR" size={20} />
  },
  {
    id: '227',
    name: "Turkmenistan",
    dialCode: "+993",
    isoCode: "TM",
    flag: <CountryFlag isoCode="TM" size={20} />
  },
  {
    id: '228',
    name: "Turks and Caicos Islands",
    dialCode: "+1649",
    isoCode: "TC",
    flag: <CountryFlag isoCode="TC" size={20} />
  },
  {
    id: '229',
    name: "Tuvalu",
    dialCode: "+688",
    isoCode: "TV",
    flag: <CountryFlag isoCode="TV" size={20} />
  },
  {
    id: '230',
    name: "Uganda",
    dialCode: "+256",
    isoCode: "UG",
    flag: <CountryFlag isoCode="UG" size={20} />
  },
  {
    id: '231',
    name: "Ukraine",
    dialCode: "+380",
    isoCode: "UA",
    flag: <CountryFlag isoCode="UA" size={20} />
  },
  {
    id: '232',
    name: "United Arab Emirates",
    dialCode: "+971",
    isoCode: "AE",
    flag: <CountryFlag isoCode="AE" size={20} />
  },
  {
    id: '233',
    name: "United Kingdom",
    dialCode: "+44",
    isoCode: "GB",
    flag: <CountryFlag isoCode="GB" size={20} />
  },
  {
    id: '234',
    name: "United States",
    dialCode: "+1",
    isoCode: "US",
    flag: <CountryFlag isoCode="US" size={20} />
  },
  {
    id: '235',
    name: "United States Minor Outlying Islands",
    dialCode: "+246",
    isoCode: "UMI",
    flag: <CountryFlag isoCode="US" size={20} />
  },
  {
    id: '236',
    name: "Uruguay",
    dialCode: "+598",
    isoCode: "UY",
    flag: <CountryFlag isoCode="UY" size={20} />
  },
  {
    id: '237',
    name: "Uzbekistan",
    dialCode: "+998",
    isoCode: "UZ",
    flag: <CountryFlag isoCode="UZ" size={20} />
  },
  {
    id: '238',
    name: "Vanuatu",
    dialCode: "+678",
    isoCode: "VU",
    flag: <CountryFlag isoCode="VU" size={20} />
  },
  {
    id: '239',
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dialCode: "+58",
    isoCode: "VE",
    flag: <CountryFlag isoCode="VE" size={20} />
  },
  {
    id: '240',
    name: "Vietnam",
    dialCode: "+84",
    isoCode: "VN",
    flag: <CountryFlag isoCode="VN" size={20} />
  },
  {
    id: '241',
    name: "Virgin Islands, British",
    dialCode: "+1284",
    isoCode: "VG",
    flag: <CountryFlag isoCode="VG" size={20} />
  },
  {
    id: '242',
    name: "Virgin Islands, U.S.",
    dialCode: "+1340",
    isoCode: "VI",
    flag: <CountryFlag isoCode="VI" size={20} />
  },
  {
    id: '243',
    name: "Wallis and Futuna",
    dialCode: "+681",
    isoCode: "WF",
    flag: <CountryFlag isoCode="WF" size={20} />
  },
  {
    id: '244',
    name: "Yemen",
    dialCode: "+967",
    isoCode: "YE",
    flag: <CountryFlag isoCode="YE" size={20} />
  },
  {
    id: '245',
    name: "Zambia",
    dialCode: "+260",
    isoCode: "ZM",
    flag: <CountryFlag isoCode="ZM" size={20} />
  },
  {
    id: '246',
    name: "Zimbabwe",
    dialCode: "+263",
    isoCode: "ZW",
    flag: <CountryFlag isoCode="ZW" size={20} />
  }
];

const App = () => {

  renderPost = post => {
    return (
      <View style={{ flex: 1, marginHorizontal: 18 }}>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ paddingBottom: 15, paddingRight: 30 }}>{post.flag}</Text>
              <Text style={{ flex: 1, fontSize: 18, fontWeight: '500', paddingBottom: 15 }}>{post.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ marginHorizontal: 15, marginTop: 10, marginBottom: 10 }}>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingBottom: 30, fontSize: 24, fontWeight: "500" }}>Phone number</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.RBSheet.open()}>
            <Text style={{ marginTop: 7 }}><CountryFlag isoCode="NG" size={20} /></Text>
            <Text style={{ marginTop: 15, fontSize: 16, paddingLeft: 3, paddingRight: 10 }}>+234
            </Text>
          </TouchableOpacity>
          <View style={styles.numberInput}>
            <TextInput
              keyboardType={'number-pad'}
              autocapitalize='none'
              maxLength={15}
              style={{ fontSize: 16 }}
            />
          </View>
          <TouchableOpacity style={{ flex: 2 }}>
            <View style={{ height: 40, backgroundColor: '#fff', borderWidth: 1, borderRadius: 10, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={550}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#EFEFEF'
          }
        }}
      >
        <View>
          <Text style={{ fontSize: 17, fontWeight: '700', paddingTop: 20, textAlign: 'center', justifyContent: 'center' }}>Select country</Text>
        </View>
        <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10 }}></View>

        <View style={{ marginTop: 15, paddingBottom: 70 }}>
          <FlatList
            data={info}
            renderItem={({ item }) => this.renderPost(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15
  },
  dialCodeButton: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#8A8F9E',
    color: '#161F3D',
    flex: 5,
    height: 40,
    paddingTop: 15
  },
  numberInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#8A8F9E',
    color: '#161F3D',
    flex: 5,
    height: 40,
    paddingTop: 15
  }
});

export default App;

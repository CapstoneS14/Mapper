var drawTancDataMaps = function (dataRecords, sf, diffrom, difto, dcffrom, dcfto, smef, 
            countryList, industryfilter, issuefilter, pubfilter, ftafilter, wtofilter, usMapfilter, valuefilter) {
                
        var successFilter = sf; // boolean, default = false
	var dateInitiateFilterFrom = diffrom; // String, default = null
	var dateInitiateFilterTo = difto; // String, default = null
	var dateCloseFilterFrom = dcffrom; // String, default = null
	var dateCloseFilterTo = dcfto; // String, default = null
	var smeFilter = smef; // boolean, default = false;
	var countryFilterList = countryList; // NOT Defined yet, Abbreviation
	var industryFilter = industryfilter; // String, default = null
	var issueFilter = issuefilter; // String, default = null
        var publicityPermissionFilter = pubfilter; // boolean, default = false
	var ftaFilter = ftafilter; // String, default = null
	var wtoFilter = wtofilter; // String, default = null
        /*
         for the two disabled filters which do not have relevant data records yet
         var affectedEmployeeFilter = false; // boolean: display or not, default is false (Do not display)
         var marketAccessFilter = false; // boolean: display or not, default is false (Do not display)
        */
       
	var valueFilter = valuefilter; // boolean: display or not, default is true (Display)
        var usOnlyMapFilter = usMapfilter; // boolean: display US map or world map, default is false (World Map)
	
        var countryAbbreviationTable = new HashMap();
	
        countryAbbreviationTable.put("Afghanistan", "AFG");
        countryAbbreviationTable.put("Albania", "ALB");
        countryAbbreviationTable.put("Algeria", "DZA");
        countryAbbreviationTable.put("American Samoa", "ASM");
        countryAbbreviationTable.put("Andorra", "AND");
        countryAbbreviationTable.put("Angola", "AGO");
        countryAbbreviationTable.put("Anguilla", "AIA");
        countryAbbreviationTable.put("Antarctica", "ATA");
        countryAbbreviationTable.put("Antigua and Barbuda", "ATG");
        countryAbbreviationTable.put("Argentina", "ARG");
        countryAbbreviationTable.put("Armenia", "ARM");
        countryAbbreviationTable.put("Aruba", "ABW");
        countryAbbreviationTable.put("Australia", "AUS");
        countryAbbreviationTable.put("Austria", "AUT");
        countryAbbreviationTable.put("Azerbaijan", "AZE");
        countryAbbreviationTable.put("Bahamas", "BHS");
        countryAbbreviationTable.put("Bahrain", "BHR");
        countryAbbreviationTable.put("Bangladesh", "BGD");
        countryAbbreviationTable.put("Barbados", "BRB");
        countryAbbreviationTable.put("Belarus", "BLR");
        countryAbbreviationTable.put("Belgium", "BEL");
        countryAbbreviationTable.put("Belize", "BLZ");
        countryAbbreviationTable.put("Benin", "BEN");
        countryAbbreviationTable.put("Bermuda", "BMU");
        countryAbbreviationTable.put("Bhutan", "BTN");
        countryAbbreviationTable.put("Bolivia", "BOL");
        countryAbbreviationTable.put("Bosnia Herzegovina", "BIH");
        countryAbbreviationTable.put("Botswana", "BWA");
        countryAbbreviationTable.put("Bouvet Island", "BVT");
        countryAbbreviationTable.put("Brazil", "BRA");
        countryAbbreviationTable.put("British Indian Ocean Territory", "IOT");
        countryAbbreviationTable.put("Brunei", "BRN");
        countryAbbreviationTable.put("Bulgaria", "BGR");
        countryAbbreviationTable.put("Burkina Faso", "BFA");
        countryAbbreviationTable.put("Burundi", "BDI");
        countryAbbreviationTable.put("Cambodia", "KHM");
        countryAbbreviationTable.put("Cameroon", "CMR");
        countryAbbreviationTable.put("Canada", "CAN");
        countryAbbreviationTable.put("Cape Verde", "CPV");
        countryAbbreviationTable.put("Cayman Islands", "CYM");
        countryAbbreviationTable.put("Central African Republic", "CAF");
        countryAbbreviationTable.put("Chad", "TCD");
        countryAbbreviationTable.put("Chile", "CHL");
        countryAbbreviationTable.put("China", "CHN");
        countryAbbreviationTable.put("Colombia", "COL");
        countryAbbreviationTable.put("Comoros", "COM");
        countryAbbreviationTable.put("Congo (Democratic Republic)", "COD");
        countryAbbreviationTable.put("Congo (Republic)", "COG");
        countryAbbreviationTable.put("Cook Islands", "COK");
        countryAbbreviationTable.put("Costa Rica", "CRI");
        countryAbbreviationTable.put("Cote d'Ivoire", "CIV");
        countryAbbreviationTable.put("Croatia", "HRV");
        countryAbbreviationTable.put("Cuba", "CUB");
        countryAbbreviationTable.put("Cyprus", "CYP");
        countryAbbreviationTable.put("Czech Republic", "CZE");
        countryAbbreviationTable.put("Denmark", "DNK");
        countryAbbreviationTable.put("Djibouti", "DJI");
        countryAbbreviationTable.put("Dominica", "DMA");
        countryAbbreviationTable.put("Dominican Republic", "DOM");
        countryAbbreviationTable.put("East Timor", "TMP");
        countryAbbreviationTable.put("Ecuador", "ECU");
        countryAbbreviationTable.put("Egypt", "EGY");
        countryAbbreviationTable.put("El Salvador", "SLV");
        countryAbbreviationTable.put("Equatorial Guinea", "GNQ");
        countryAbbreviationTable.put("Eritrea", "ERI");
        countryAbbreviationTable.put("Estonia", "EST");
        countryAbbreviationTable.put("Ethiopia", "ETH");
        countryAbbreviationTable.put("European Union", "EUN");
        countryAbbreviationTable.put("Falkland Islands (Malvinas)", "FNK");
        countryAbbreviationTable.put("Faroe Islands", "FRO");
        countryAbbreviationTable.put("Fiji", "FJI");
        countryAbbreviationTable.put("Finland", "FIN");
        countryAbbreviationTable.put("France", "FRA");
        countryAbbreviationTable.put("France, Metropolitan", "FXX");
        countryAbbreviationTable.put("French Guiana", "GUF");
        countryAbbreviationTable.put("French Polynesia", "PYF");
        countryAbbreviationTable.put("French Southern Territories", "ATF");
        countryAbbreviationTable.put("Gabon", "GAB");
        countryAbbreviationTable.put("Gambia", "GMB");
        countryAbbreviationTable.put("Georgia", "GEO");
        countryAbbreviationTable.put("Germany", "DEU");
        countryAbbreviationTable.put("Ghana", "GHA");
        countryAbbreviationTable.put("Gibraltar", "GIB");
        countryAbbreviationTable.put("Greece", "GRC");
        countryAbbreviationTable.put("Greenland", "GRL");
        countryAbbreviationTable.put("Grenada", "GRD");
        countryAbbreviationTable.put("Guadeloupe", "GLP");
        countryAbbreviationTable.put("Guam", "GUM");
        countryAbbreviationTable.put("Guatemala", "GTM");
        countryAbbreviationTable.put("Guinea", "GIN");
        countryAbbreviationTable.put("Guinea-Bissau", "GNB");
        countryAbbreviationTable.put("Guyana", "GUY");
        countryAbbreviationTable.put("Haiti", "HTI");
        countryAbbreviationTable.put("Heard and Mc Donald Islands", "HMD");
        countryAbbreviationTable.put("Holy See (Vatican City State)", "VAT");
        countryAbbreviationTable.put("Honduras", "HND");
        countryAbbreviationTable.put("Hong Kong", "HKG");
        countryAbbreviationTable.put("Hungary", "HUN");
        countryAbbreviationTable.put("Iceland", "ISL");
        countryAbbreviationTable.put("India", "IND");
        countryAbbreviationTable.put("Indonesia", "IDN");
        countryAbbreviationTable.put("Iran", "IRN");
        countryAbbreviationTable.put("Iraq", "IRQ");
        countryAbbreviationTable.put("Ireland", "IRL");
        countryAbbreviationTable.put("Israel", "ISR");
        countryAbbreviationTable.put("Italy", "ITA");
        countryAbbreviationTable.put("Jamaica", "JAM");
        countryAbbreviationTable.put("Japan", "JPN");
        countryAbbreviationTable.put("Jordan", "JOR");
        countryAbbreviationTable.put("Kazakhstan", "KAZ");
        countryAbbreviationTable.put("Kenya", "KEN");
        countryAbbreviationTable.put("Kiribati", "KIR");
        countryAbbreviationTable.put("Korea, D.P.R.O", "PRK");
        countryAbbreviationTable.put("Korea (South)", "KOR");
        countryAbbreviationTable.put("Kosovo", "KOS");
        countryAbbreviationTable.put("Kuwait", "KWT");
        countryAbbreviationTable.put("Kyrgyzstan", "KGZ");
        countryAbbreviationTable.put("Laos", "LAO");
        countryAbbreviationTable.put("Latvia", "LVA");
        countryAbbreviationTable.put("Lebanon", "LBN");
        countryAbbreviationTable.put("Lesotho", "LSO");
        countryAbbreviationTable.put("Liberia", "LBR");
        countryAbbreviationTable.put("Libya", "LBY");
        countryAbbreviationTable.put("Liechtenstein", "LIE");
        countryAbbreviationTable.put("Lithuania", "LTU");
        countryAbbreviationTable.put("Luxembourg", "LUX");
        countryAbbreviationTable.put("Macau", "MAC");
        countryAbbreviationTable.put("Macedonia", "MKD");
        countryAbbreviationTable.put("Madagascar", "MDG");
        countryAbbreviationTable.put("Malawi", "MWI");
        countryAbbreviationTable.put("Malaysia", "MYS");
        countryAbbreviationTable.put("Maldives", "MDV");
        countryAbbreviationTable.put("Mali", "MLI");
        countryAbbreviationTable.put("Malta", "MLT");
        countryAbbreviationTable.put("Marshall Islands", "MHL");
        countryAbbreviationTable.put("Martinique", "MTQ");
        countryAbbreviationTable.put("Mauritania", "MRT");
        countryAbbreviationTable.put("Mauritius", "MUS");
        countryAbbreviationTable.put("Mayotte", "MYT");
        countryAbbreviationTable.put("Mexico", "MEX");
        countryAbbreviationTable.put("Micronesia", "FSM");
        countryAbbreviationTable.put("Moldova", "MDA");
        countryAbbreviationTable.put("Monaco", "MCO");
        countryAbbreviationTable.put("Mongolia", "MNG");
        countryAbbreviationTable.put("Montenegro", "MNE");
        countryAbbreviationTable.put("Montserrat", "MSR");
        countryAbbreviationTable.put("Morocco", "MAR");
        countryAbbreviationTable.put("Mozambique", "MOZ");
        countryAbbreviationTable.put("Myanmar", "MMR");
        countryAbbreviationTable.put("Namibia", "NAM");
        countryAbbreviationTable.put("Nauru", "NRU");
        countryAbbreviationTable.put("Nepal", "NPL");
        countryAbbreviationTable.put("Netherlands", "NLD");
        countryAbbreviationTable.put("Netherlands Antilles", "ANT");
        countryAbbreviationTable.put("New Caledonia", "NCL");
        countryAbbreviationTable.put("New Zealand", "NZL");
        countryAbbreviationTable.put("Nicaragua", "NIC");
        countryAbbreviationTable.put("Niger", "NER");
        countryAbbreviationTable.put("Nigeria", "NGA");
        countryAbbreviationTable.put("Niue", "NIU");
        countryAbbreviationTable.put("Norfolk Island", "NFK");
        countryAbbreviationTable.put("Northern Mariana Islands", "MNP");
        countryAbbreviationTable.put("Norway", "NOR");
        countryAbbreviationTable.put("Oman", "OMN");
        countryAbbreviationTable.put("Pakistan", "PAK");
        countryAbbreviationTable.put("Palau", "PLW");
        countryAbbreviationTable.put("Panama", "PAN");
        countryAbbreviationTable.put("Papua New Guinea", "PNG");
        countryAbbreviationTable.put("Paraguay", "PRY");
        countryAbbreviationTable.put("Peru", "PER");
        countryAbbreviationTable.put("Philippines", "PHL");
        countryAbbreviationTable.put("Poland", "POL");
        countryAbbreviationTable.put("Portugal", "PRT");
        countryAbbreviationTable.put("Puerto Rico", "PRI");
        countryAbbreviationTable.put("Qatar", "QAT");
        countryAbbreviationTable.put("Reunion", "REU");
        countryAbbreviationTable.put("Romania", "ROM");
        countryAbbreviationTable.put("Russia", "RUS");
        countryAbbreviationTable.put("Rwanda", "RWA");
        countryAbbreviationTable.put("St Kitts and Nevis", "KNA");
        countryAbbreviationTable.put("St Lucia", "LCA");
        countryAbbreviationTable.put("Saint Vincent and the Grenadines", "VCT");
        countryAbbreviationTable.put("Samoa", "WSM");
        countryAbbreviationTable.put("San Marino", "SMR");
        countryAbbreviationTable.put("Sao Tome and Principe", "STP");
        countryAbbreviationTable.put("Saudi Arabia", "SAU");
        countryAbbreviationTable.put("Senegal", "SEN");
        countryAbbreviationTable.put("Serbia", "SRB");
        countryAbbreviationTable.put("Serbia and Montenegro", "SRM");
        countryAbbreviationTable.put("Seychelles", "SYC");
        countryAbbreviationTable.put("Sierra Leone", "SLE");
        countryAbbreviationTable.put("Singapore", "SGP");
        countryAbbreviationTable.put("Slovak Republic", "SVK");
        countryAbbreviationTable.put("Slovenia", "SVN");
        countryAbbreviationTable.put("Solomon Islands", "SLB");
        countryAbbreviationTable.put("Somalia", "SOM");
        countryAbbreviationTable.put("South Africa", "ZAF");
        countryAbbreviationTable.put("South Sudan", "SSD");
        countryAbbreviationTable.put("South Georgia and South S.S.", "SGS");
        countryAbbreviationTable.put("Spain", "ESP");
        countryAbbreviationTable.put("Sri Lanka", "LKA");
        countryAbbreviationTable.put("St. Helena", "SHN");
        countryAbbreviationTable.put("St. Pierre and Miquelon", "SPM");
        countryAbbreviationTable.put("Sudan", "SDN");
        countryAbbreviationTable.put("Suriname", "SUR");
        countryAbbreviationTable.put("Svalbard and Jan Mayen Islands", "SJM");
        countryAbbreviationTable.put("Swaziland", "SWZ");
        countryAbbreviationTable.put("Sweden", "SWE");
        countryAbbreviationTable.put("Switzerland", "CHE");
        countryAbbreviationTable.put("Syria", "SYR");
        countryAbbreviationTable.put("Taiwan", "TWN");
        countryAbbreviationTable.put("Tajikistan", "TJK");
        countryAbbreviationTable.put("Tanzania", "TZA");
        countryAbbreviationTable.put("Thailand", "THA");
        countryAbbreviationTable.put("Togo", "TGO");
        countryAbbreviationTable.put("Tokelau", "TKL");
        countryAbbreviationTable.put("Tonga", "TON");
        countryAbbreviationTable.put("Trinidad and Tobago", "TTO");
        countryAbbreviationTable.put("Tunisia", "TUN");
        countryAbbreviationTable.put("Turkey", "TUR");
        countryAbbreviationTable.put("Turkmenistan", "TKM");
        countryAbbreviationTable.put("Turks and Caicos Islands", "TCA");
        countryAbbreviationTable.put("Tuvalu", "TUV");
        countryAbbreviationTable.put("Uganda", "UGA");
        countryAbbreviationTable.put("Ukraine", "UKR");
        countryAbbreviationTable.put("United Arab Emirates", "ARE");
        countryAbbreviationTable.put("United Kingdom", "GBR");
        countryAbbreviationTable.put("United States", "USA");
        countryAbbreviationTable.put("U.S. Minor Islands", "UMI");
        countryAbbreviationTable.put("Uruguay", "URY");
        countryAbbreviationTable.put("Uzbekistan", "UZB");
        countryAbbreviationTable.put("Vanuatu", "VUT");
        countryAbbreviationTable.put("Venezuela", "VEN");
        countryAbbreviationTable.put("Vietnam", "VNM");
        countryAbbreviationTable.put("Yemen", "YEM");
        countryAbbreviationTable.put("Zambia", "ZMB");
        countryAbbreviationTable.put("Zimbabwe", "ZWE");

        var initiateWorldMap = function (map) {
            map.put("AFG", 0);
            map.put("ALB", 0);
            map.put("DZA", 0);
            map.put("ASM", 0);
            map.put("AND", 0);
            map.put("AGO", 0);
            map.put("AIA", 0);
            map.put("ATA", 0);
            map.put("ATG", 0);
            map.put("ARG", 0);
            map.put("ARM", 0);
            map.put("ABW", 0);
            map.put("AUS", 0);
            map.put("AUT", 0);
            map.put("AZE", 0);
            map.put("BHS", 0);
            map.put("BHR", 0);
            map.put("BGD", 0);
            map.put("BRB", 0);
            map.put("BLR", 0);
            map.put("BEL", 0);
            map.put("BLZ", 0);
            map.put("BEN", 0);
            map.put("BMU", 0);
            map.put("BTN", 0);
            map.put("BOL", 0);
            map.put("BIH", 0);
            map.put("BWA", 0);
            map.put("BVT", 0);
            map.put("BRA", 0);
            map.put("IOT", 0);
            map.put("BRN", 0);
            map.put("BGR", 0);
            map.put("BFA", 0);
            map.put("BDI", 0);
            map.put("KHM", 0);
            map.put("CMR", 0);
            map.put("CAN", 0);
            map.put("CPV", 0);
            map.put("CYM", 0);
            map.put("CAF", 0);
            map.put("TCD", 0);
            map.put("CHL", 0);
            map.put("CHN", 0);
            map.put("COL", 0);
            map.put("COM", 0);
            map.put("COD", 0);
            map.put("COG", 0);
            map.put("COK", 0);
            map.put("CRI", 0);
            map.put("CIV", 0);
            map.put("HRV", 0);
            map.put("CUB", 0);
            map.put("CYP", 0);
            map.put("CZE", 0);
            map.put("DNK", 0);
            map.put("DJI", 0);
            map.put("DMA", 0);
            map.put("DOM", 0);
            map.put("TMP", 0);
            map.put("ECU", 0);
            map.put("EGY", 0);
            map.put("SLV", 0);
            map.put("GNQ", 0);
            map.put("ERI", 0);
            map.put("EST", 0);
            map.put("ETH", 0);
            map.put("EUN", 0);
            map.put("FNK", 0);
            map.put("FRO", 0);
            map.put("FJI", 0);
            map.put("FIN", 0);
            map.put("FRA", 0);
            map.put("FXX", 0);
            map.put("GUF", 0);
            map.put("PYF", 0);
            map.put("ATF", 0);
            map.put("GAB", 0);
            map.put("GMB", 0);
            map.put("GEO", 0);
            map.put("DEU", 0);
            map.put("GHA", 0);
            map.put("GIB", 0);
            map.put("GRC", 0);
            map.put("GRL", 0);
            map.put("GRD", 0);
            map.put("GLP", 0);
            map.put("GUM", 0);
            map.put("GTM", 0);
            map.put("GIN", 0);
            map.put("GNB", 0);
            map.put("GUY", 0);
            map.put("HTI", 0);
            map.put("HMD", 0);
            map.put("VAT", 0);
            map.put("HND", 0);
            map.put("HKG", 0);
            map.put("HUN", 0);
            map.put("ISL", 0);
            map.put("IND", 0);
            map.put("IDN", 0);
            map.put("IRN", 0);
            map.put("IRQ", 0);
            map.put("IRL", 0);
            map.put("ISR", 0);
            map.put("ITA", 0);
            map.put("JAM", 0);
            map.put("JPN", 0);
            map.put("JOR", 0);
            map.put("KAZ", 0);
            map.put("KEN", 0);
            map.put("KIR", 0);
            map.put("PRK", 0);
            map.put("KOR", 0);
            map.put("KOS", 0);
            map.put("KWT", 0);
            map.put("KGZ", 0);
            map.put("LAO", 0);
            map.put("LVA", 0);
            map.put("LBN", 0);
            map.put("LSO", 0);
            map.put("LBR", 0);
            map.put("LBY", 0);
            map.put("LIE", 0);
            map.put("LTU", 0);
            map.put("LUX", 0);
            map.put("MAC", 0);
            map.put("MKD", 0);
            map.put("MDG", 0);
            map.put("MWI", 0);
            map.put("MYS", 0);
            map.put("MDV", 0);
            map.put("MLI", 0);
            map.put("MLT", 0);
            map.put("MHL", 0);
            map.put("MTQ", 0);
            map.put("MRT", 0);
            map.put("MUS", 0);
            map.put("MYT", 0);
            map.put("MEX", 0);
            map.put("FSM", 0);
            map.put("MDA", 0);
            map.put("MCO", 0);
            map.put("MNG", 0);
            map.put("MNE", 0);
            map.put("MSR", 0);
            map.put("MAR", 0);
            map.put("MOZ", 0);
            map.put("MMR", 0);
            map.put("NAM", 0);
            map.put("NRU", 0);
            map.put("NPL", 0);
            map.put("NLD", 0);
            map.put("ANT", 0);
            map.put("NCL", 0);
            map.put("NZL", 0);
            map.put("NIC", 0);
            map.put("NER", 0);
            map.put("NGA", 0);
            map.put("NIU", 0);
            map.put("NFK", 0);
            map.put("MNP", 0);
            map.put("NOR", 0);
            map.put("OMN", 0);
            map.put("PAK", 0);
            map.put("PLW", 0);
            map.put("PAN", 0);
            map.put("PNG", 0);
            map.put("PRY", 0);
            map.put("PER", 0);
            map.put("PHL", 0);
            map.put("POL", 0);
            map.put("PRT", 0);
            map.put("PRI", 0);
            map.put("QAT", 0);
            map.put("REU", 0);
            map.put("ROM", 0);
            map.put("RUS", 0);
            map.put("RWA", 0);
            map.put("KNA", 0);
            map.put("LCA", 0);
            map.put("VCT", 0);
            map.put("WSM", 0);
            map.put("SMR", 0);
            map.put("STP", 0);
            map.put("SAU", 0);
            map.put("SEN", 0);
            map.put("SRB", 0);
            map.put("SRM", 0);
            map.put("SYC", 0);
            map.put("SLE", 0);
            map.put("SGP", 0);
            map.put("SVK", 0);
            map.put("SVN", 0);
            map.put("SLB", 0);
            map.put("SOM", 0);
            map.put("ZAF", 0);
            map.put("SSD", 0);
            map.put("SGS", 0);
            map.put("ESP", 0);
            map.put("LKA", 0);
            map.put("SHN", 0);
            map.put("SPM", 0);
            map.put("SDN", 0);
            map.put("SUR", 0);
            map.put("SJM", 0);
            map.put("SWZ", 0);
            map.put("SWE", 0);
            map.put("CHE", 0);
            map.put("SYR", 0);
            map.put("TWN", 0);
            map.put("TJK", 0);
            map.put("TZA", 0);
            map.put("THA", 0);
            map.put("TGO", 0);
            map.put("TKL", 0);
            map.put("TON", 0);
            map.put("TTO", 0);
            map.put("TUN", 0);
            map.put("TUR", 0);
            map.put("TKM", 0);
            map.put("TCA", 0);
            map.put("TUV", 0);
            map.put("UGA", 0);
            map.put("UKR", 0);
            map.put("ARE", 0);
            map.put("GBR", 0);
            map.put("USA", 0);
            map.put("UMI", 0);
            map.put("URY", 0);
            map.put("UZB", 0);
            map.put("VUT", 0);
            map.put("VEN", 0);
            map.put("VNM", 0);
            map.put("YEM", 0);
            map.put("ZMB", 0);
            map.put("ZWE", 0);
        };
    
	var initiateUSMap = function(map) {
            map.put("AL", 0);
            map.put("AK", 0);
            map.put("AZ", 0);
            map.put("AR", 0);
            map.put("CA", 0);
            map.put("CO", 0);
            map.put("CT", 0);
            map.put("DE", 0);
            map.put("DC", 0);
            map.put("FL", 0);
            map.put("GA", 0);
            map.put("HI", 0);
            map.put("ID", 0);
            map.put("IL", 0);
            map.put("IN", 0);
            map.put("IA", 0);
            map.put("KS", 0);
            map.put("KY", 0);
            map.put("LA", 0);
            map.put("ME", 0);
            map.put("MD", 0);
            map.put("MA", 0);
            map.put("MI", 0);
            map.put("MN", 0);
            map.put("MS", 0);
            map.put("MO", 0);
            map.put("MT", 0);
            map.put("NE", 0);
            map.put("NV", 0);
            map.put("NH", 0);
            map.put("NJ", 0);
            map.put("NM", 0);
            map.put("NY", 0);
            map.put("NC", 0);
            map.put("ND", 0);
            map.put("OH", 0);
            map.put("OK", 0);
            map.put("OR", 0);
            map.put("PA", 0);
            map.put("RI", 0);
            map.put("SC", 0);
            map.put("SD", 0);
            map.put("TN", 0);
            map.put("TX", 0);
            map.put("UT", 0);
            map.put("VT", 0);
            map.put("VA", 0);
            map.put("WA", 0);
            map.put("WV", 0);
            map.put("WI", 0);
            map.put("WY", 0);
        };

        var arrayContains = function(a, str) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] === str) {
                    return true;
                }
            }
            return false;
        };
        
        var mapFre = new HashMap(); //store frequency of each record on the map
	var mapValue; //store accumulated value of each record on the map
	
	if (usOnlyMapFilter === false) {
            initiateWorldMap(mapFre);
            if (valueFilter) {
                mapValue = new HashMap();
                initiateWorldMap(mapValue);
            }
        } else {	//calculate frequency of each state on the us map
            initiateUSMap(mapFre);
            if (valueFilter) {
                mapValue = new HashMap();
                initiateUSMap(mapValue);
            }
        }
        
	var EUlist = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark",
		"Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia",
		"Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovak Republic",
		"Slovenia", "Spain", "Sweden", "United Kingdom"];	
        
        var data = jsonParse(dataRecords);
	// go through each record
        for (var record in data) {
            
            //to eliminate extra rows read from file without data
            if(data[record]["Record Number"] === null || typeof data[record]["Record Number"] === 'undefined') {
                continue;
            }
            
            // success filter section, assign the success date to case close date filter
            if (successFilter === true) {
                if ((data[record]["Status"] === null || typeof data[record]["Status"] === 'undefined')
                        && (data[record]["Success"] === null || typeof data[record]["Success"] === 'undefined'))  {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                if (data[record]["Success"] !== "TRUE") {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }            
                
                if (data[record]["Status"] !== "Closed") {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }            
            }		  
            
            // case date initiate filter section
            if (dateInitiateFilterFrom !== null && dateInitiateFilterTo !== null) {
                if(data[record]["Case Initiated Date"] === null || typeof data[record]["Case Initiated Date"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                var tmp1 = data[record]["Case Initiated Date"].split(" "); // remove time and keep only date
                var tmp2 = tmp1[0].split("/"); // split mon/day/year
		var caseIniDay = parseInt(tmp2[1]);
		var caseIniMon = parseInt(tmp2[0]);
		var caseIniYear = parseInt(tmp2[2]);
		
		//skip record which date is earlier than the filter from-date
		if (dateInitiateFilterFrom !== null) {
                    var tmp = dateInitiateFilterFrom.split("/");
                    var filterIniDayFrom = parseInt(tmp[1]);
                    var filterIniMonFrom = parseInt(tmp[0]);
                    var filterIniYearFrom = parseInt(tmp[2]);
                    
                    if (caseIniYear < filterIniYearFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseIniYear === filterIniYearFrom && caseIniMon < filterIniMonFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseIniYear === filterIniYearFrom && caseIniMon === filterIniMonFrom && caseIniDay < filterIniDayFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                }
		
		//skip record which date is later than the filter to-date
		if (dateInitiateFilterTo !== null) {
                    var tmp = dateInitiateFilterTo.split("/");
                    var filterIniDayTo = parseInt(tmp[1]);
                    var filterIniMonTo = parseInt(tmp[0]);
                    var filterIniYearTo = parseInt(tmp[2]);
                    
                    if (caseIniYear > filterIniYearTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseIniYear === filterIniYearTo && caseIniMon > filterIniMonTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseIniYear === filterIniYearTo && caseIniMon === filterIniMonTo && caseIniDay > filterIniDayTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
		}                
            }
            
            // case date close filter section
            if (dateCloseFilterFrom !== null && dateCloseFilterTo !== null) {
                if(data[record]["Date Closed"] === null || typeof data[record]["Date Closed"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var tmp1 = data[record]["Date Closed"].split(" "); // remove time and keep only date
		var tmp2 = tmp1[0].split("/"); // split mon/day/year
		var caseCloseDay = parseInt(tmp2[1]);
		var caseCloseMon = parseInt(tmp2[0]);
		var caseCloseYear = parseInt(tmp2[2]);
		
		//skip record which date is earlier than the filter from-date
		if (dateCloseFilterFrom !== null) {
                    var tmp = dateCloseFilterFrom.split("/");
                    var filterCloseDayFrom = parseInt(tmp[1]);
                    var filterCloseMonFrom = parseInt(tmp[0]);
                    var filterCloseYearFrom = parseInt(tmp[2]);
                    
                    if (caseCloseYear < filterCloseYearFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseCloseYear === filterCloseYearFrom && caseCloseMon < filterCloseMonFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseCloseYear === filterCloseYearFrom && caseCloseMon === filterCloseMonFrom && caseCloseDay < filterCloseDayFrom) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                }
                
                //skip record which date is later than the filter to-date
		if (dateCloseFilterTo !== null) {
                    var tmp = dateCloseFilterTo.split("/");
                    var filterCloseDayTo = parseInt(tmp[1]);
                    var filterCloseMonTo = parseInt(tmp[0]);
                    var filterCloseYearTo = parseInt(tmp[2]);
                    
                    if (caseCloseYear > filterCloseYearTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseCloseYear === filterCloseYearTo && caseCloseMon > filterCloseMonTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                    
                    if (caseCloseYear === filterCloseYearTo && caseCloseMon === filterCloseMonTo && caseCloseDay > filterCloseDayTo) {
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        continue;
                    }
                }
                
            }
            
            /*
             * // there should be a country section here
             * 
             */
            
            // sme involved filter section, default should be false.
            if (smeFilter === true) {
                if(data[record]["SME Involved"] === null || typeof data[record]["SME Involved"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var curSMEValue = data[record]["SME Involved"];
                if (curSMEValue === "No") {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                    
            }
            
            // industry filter section, default is null, assuming the value is a string
            if (industryFilter !== null && industryFilter !== "All") {
                if(data[record]["Industry/Sectors"] === null || typeof data[record]["Industry/Sectors"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var curIndustry = data[record]["Industry/Sectors"];
                if (curIndustry !== industryFilter) {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
            }
            
            // issueFilter section
            if (issueFilter !== null && issueFilter !== "All") {
                if(data[record]["Issue(s)"] === null || typeof data[record]["Issue(s)"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var curIssue = data[record]["Issue(s)"];
                if (curIssue.indexOf(issueFilter) === -1) {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
            }
            
            // publicity permission filter section, boolean, default = false
            if (publicityPermissionFilter === true) {
                if(data[record]["Publicity Permission"] === null || typeof data[record]["Publicity Permission"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var curPublicityPermValue = data[record]["Publicity Permission"];
                if (curPublicityPermValue !== "Granted") {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
            }
            
            // FTA relevant filter
            if (ftaFilter !== null && ftaFilter !== "All") {
                if(data[record]["Trade Agreement(s)"] === null || typeof data[record]["Trade Agreement(s)"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var ftaStr = data[record]["Trade Agreement(s)"];
                if (ftaStr.indexOf(ftaFilter) === -1) {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
            }
            
            // WTO relevant filter
            if (wtoFilter !== null && wtoFilter !== "All") {
                if(data[record]["Trade Agreement(s)"] === null || typeof data[record]["Trade Agreement(s)"] === 'undefined') {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
                
                var wtoStr = data[record]["Trade Agreement(s)"];
                if (wtoStr.indexOf(wtoFilter) === -1) {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    continue;
                }
            }
            
            var NumOfInvalidRecord = 0;
            
            //default (false) world map
            if (usOnlyMapFilter === false) {
                var country = data[record]["Country(s)"];
                if (country.indexOf(",") < 0 && country !== "European Union") {
                    var cty = countryAbbreviationTable.get(country);
                    if (cty === null) {
                        //document.write("Invalid record: " + country + "<br>");
                        NumOfInvalidRecord = NumOfInvalidRecord + 1;
                    } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                        continue;
                    }
                    var tmp = mapFre.get(cty) + 1;
                    mapFre.put(cty, tmp);
                    
                    if (valueFilter) {
                        var curVal = data[record]["Case Value (in $ millions)"];
                        var tmpVal = parseInt(curVal) + mapValue.get(cty);
                        mapValue.put(cty, tmpVal);
                    }
                } else if (country.indexOf("European Union") >= 0) { // EU
                    var countries = EUlist;
                    for (var i in countries) {
                        var cty = countryAbbreviationTable.get(countries[i]);
                        if (cty === null) {
                            //document.write("Invalid record: " + countries[i] + "<br>");
                            NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                            continue;
                        }
                        var tmp = mapFre.get(cty) + 1;
                        mapFre.put(cty, tmp);
                        if (valueFilter) {
                            var curVal = data[record]["Case Value (in $ millions)"];
                            var tmpVal = parseInt(curVal) + mapValue.get(cty);
                            mapValue.put(cty, tmpVal);
                        }
                    }
                } else if (country.indexOf(",") >= 0) {
                    var countries = country.split(", ");
                    for (var i in countries) {
                        var cty = countryAbbreviationTable.get(countries[i]);
                        if (cty === null) {
                            //document.write("Invalid record: " + countries[i] + "<br>");
                            NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                            continue;
                        }
                        var tmp = mapFre.get(cty) + 1;
                        mapFre.put(cty, tmp);
                        if (valueFilter) {
                            var curVal = data[record]["Case Value (in $ millions)"];
                            var tmpVal = parseInt(curVal) + mapValue.get(cty);
                            mapValue.put(cty, tmpVal);
                        }
                        
                    }
                }
            } else { // us map
                var state = data[record]["Case Address: State"];
                if (!mapFre.containsKey(state)) {
                    NumOfInvalidRecord = NumOfInvalidRecord + 1;
                } else {
                    var country = data[record]["Country(s)"];
                    if (country.indexOf(",") < 0 && country !== "European Union") {
                        var cty = countryAbbreviationTable.get(country);
                        if (cty === null) {
                            //document.write("Invalid record: " + country + "<br>");
                            NumOfInvalidRecord = NumOfInvalidRecord + 1;
                        } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                            continue;
                        }                        
                    } else if (country.indexOf("European Union") >= 0) { // EU
                        var countries = EUlist;
                        for (var i in countries) {
                            var cty = countryAbbreviationTable.get(countries[i]);
                            if (cty === null) {
                                //document.write("Invalid record: " + countries[i] + "<br>");
                                NumOfInvalidRecord = NumOfInvalidRecord + 1;
                            } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                                continue;
                            }
                        }
                    } else if (country.indexOf(",") >= 0) {
                        var countries = country.split(", ");
                        for (var i in countries) {
                            var cty = countryAbbreviationTable.get(countries[i]);
                            if (cty === null) {
                                //document.write("Invalid record: " + countries[i] + "<br>");
                                NumOfInvalidRecord = NumOfInvalidRecord + 1;
                            } else if (countryFilterList !== "All" && arrayContains(countryFilterList, cty) === false) {
                                continue;
                            }
                        }   
                    }   

                    var tmp = mapFre.get(state) + 1;
                    mapFre.put(state, tmp);
                    if (valueFilter) {
                        var curVal = data[record]["Case Value (in $ millions)"];
                        var tmpVal = parseInt(curVal) + mapValue.get(cty);
                        mapValue.put(cty, tmpVal);
                    }
                }
            }
        }
        
        var mapScope;
	if (!usOnlyMapFilter) {
            mapScope = 'world';
        } else {
            mapScope = 'usa';
        }
	
	var mapkeys = mapFre.keys();
	var myObj = {};
        for (var i in mapkeys) {
            myObj[mapkeys[i]] = {};
            if (mapFre.get(mapkeys[i]) >= 10) {
                myObj[mapkeys[i]]["fillKey"] = 'HIGH';
            } else if (mapFre.get(mapkeys[i]) >= 5) {
                myObj[mapkeys[i]]["fillKey"] = 'MEDIUM';
            } else if (mapFre.get(mapkeys[i]) === 0) {
                myObj[mapkeys[i]]["fillKey"] = 'UNKNOWN/NONE';
            } else {
                myObj[mapkeys[i]]["fillKey"] = 'LOW';
            }
            myObj[mapkeys[i]]["numberOfCases"] = mapFre.get(mapkeys[i]);
            if (valueFilter) {
                myObj[mapkeys[i]]["valueOfCases"] = mapValue.get(mapkeys[i]);
            }
        }
        
        
        var map = new Datamap({
            scope: mapScope,
            element: document.getElementById('container'),
            fills: {
                HIGH: 'rgb(0,100,0)',
                MEDIUM: 'rgb(0,255,0)',
                LOW: 'rgb(144,238,144)',
                'UNKNOWN/NONE': 'rgb(192,192,192)',
                defaultFill: 'rgb(192,192,192)'
            },
            data: myObj,
            geographyConfig: {
                popupTemplate: function(geo, data) {
                    if(valueFilter) {
                        return ['<div class="hoverinfo"><strong>',
                            'Number of cases in ' + geo.properties.name,
                            ': ' + data.numberOfCases,
                            '<br>Total value of cases in ' + geo.properties.name,
                            ': ' + data.valueOfCases,
                            '<br>Number of unmapped records: ' + NumOfInvalidRecord,
                            '</strong></div>'].join('');                        
                    } else {
                        return ['<div class="hoverinfo"><strong>',
                            'Number of cases in ' + geo.properties.name,
                            ': ' + data.numberOfCases,
                            '<br>Number of unmapped records: ' + NumOfInvalidRecord,
                            '</strong></div>'].join('');       
                    }
                        
                }
            }
        });
        map.legend();
        
    };
    
	 
function loadMarkersForC() {
	var cChristoferBergenblock = L.marker([57.0633,12.2898], {icon: partyIcons["c"]})
		.bindPopup("<b>Christofer Bergenblock</b>, 43<br>Gymnasielärare<br>Träslövsläge");
	var cLenaSprang = L.marker([57.2808,12.5881], {icon: partyIcons["c"]})
		.bindPopup("<b>Lena Språng</b>, 52<br>Projektledare<br>Karl Gustav");
	var cEvaPehrssonKarlsson = L.marker([57.2459,12.1878], {icon: partyIcons["c"]})
		.bindPopup("<b>Eva Pehrsson-Karlsson</b>, 65<br>Trädgårdsarbetare<br>Väröbacka");
	var cChristianPersson = L.marker([57.0272,12.3589], {icon: partyIcons["c"]})
		.bindPopup("<b>Christian Persson</b>, 44<br>Fastighetsmäklare/Egenföretagare<br>Tvååker");
	var cKatarinaSundvall = L.marker([57.02726,12.53891], {icon: partyIcons["c"]})
		.bindPopup("<b>Katarina Sundvall</b>, 52<br>Kock/Entreprenör<br>Sibbarp");
	var cStefanStenberg = L.marker([57.2978,12.213], {icon: partyIcons["c"]})
		.bindPopup("<b>Stefan Stenberg</b>, 62<br>Kommunpolitiker<br>Stråvalla");
	var cCalleWikelund = L.marker([57.0889,12.2696], {icon: partyIcons["c"]})
		.bindPopup("<b>Calle Wikelund</b>, 49<br>Kyl- och ventilationstekniker<br>Varberg");
	var cViviAnneJohansson = L.marker([57.2684,12.3322], {icon: partyIcons["c"]})
		.bindPopup("<b>ViviAnne Johansson</b>, 75<br>Lantbrukare/Senior<br>Veddige");
	var cHaraldLagerstedt = L.marker([57.1709,12.3816], {icon: partyIcons["c"]})
		.bindPopup("<b>Harald Lagerstedt</b>, 49<br>Lantmästare<br>Valinge");
	var cAnnaKarinGustafsson = L.marker([57.0266,12.5378], {icon: partyIcons["c"]})
		.bindPopup("<b>Anna-Karin Gustafsson</b>, 58<br>Förskolelärare<br>Sibbarp");

	return L.layerGroup([cChristoferBergenblock,
						 cLenaSprang,
						 cEvaPehrssonKarlsson,
						 cChristianPersson,
						 cKatarinaSundvall,
						 cStefanStenberg,
						 cCalleWikelund,
						 cViviAnneJohansson,
						 cHaraldLagerstedt,
						 cAnnaKarinGustafsson
					   ]);
}

function loadMarkersForMp() {
    var cKatarinaKuzmanovicKrasniqi = L.marker([57.780087,12.303335], {icon: partyIcons["mp"]})
        .bindPopup("1. <b>Katarina Kuzmanovic-Krasniqi</b>, Receptionist<br>43<br>Hedefors<br>");
    var cDanielEriksson = L.marker([57.784210,12.272465], {icon: partyIcons["mp"]})
        .bindPopup("2. <b>Daniel Eriksson,</b>, 32<br>Programmerare<br>Lerum<br>");
    var cEmmaLiljeberg = L.marker([57.8154819,12.3531738], {icon: partyIcons["mp"]})
        .bindPopup("3. <b>Emma Liljeberg</b>, 40<br>Grundskolelärare<br>Lerum<br>");
    var cRutgerFridholm = L.marker([57.771874,12.252567], {icon: partyIcons["mp"]})
        .bindPopup("4. <b>Rutger Fridholm</b>, 78<br>Kommunalråd<br>Lerum<br>");
    var cMärtaElf = L.marker([57.783942,12.271963], {icon: partyIcons["mp"]})
        .bindPopup("5. <b>Märta Elf</b>, 24<br>Fil.studerande<br>Lerum<br>");
    var cBengtAnderson = L.marker([57.814155,12.446437], {icon: partyIcons["mp"]})
        .bindPopup("6. <b>Bengt Anderson</b>, 61<br>Larmoperatör<br>Tollered<br>");
    var cLiseAugustsson = L.marker([57.847469,12.365584], {icon: partyIcons["mp"]})
        .bindPopup("7. <b>Lise Augustsson</b>, 67<br>Undersköterska<br>Gråbo<br>");
    var cElisabethSanden = L.marker([57.777927,12.238641], {icon: partyIcons["mp"]})
        .bindPopup("8. <b>Elisabeth Sandén</b>, 74<br>Leg psykoterapeut<br>Lerum<br>");
    var cKjellHansson = L.marker([57.835545,12.241473], {icon: partyIcons["mp"]})
        .bindPopup("9. <b>Kjell Hansson</b>, 69<br>Växlare<br>Gråbo<br>");
    var cCamillaSundberg = L.marker([57.877101,12.322583], {icon: partyIcons["mp"]})
        .bindPopup("10. <b>Camilla Sundberg</b>, 47<br>Trädgårdsmästare<br>Björboholm<br>");
    var cMirjamWeslien = L.marker([57.7999434,12.369198], {icon: partyIcons["mp"]})
        .bindPopup("11. <b>Mirjam Weslien</b>, 48<br>Förskolelärare<br>Lerum<br>");
    var cPierreCronell = L.marker([57.751603,12.256322], {icon: partyIcons["mp"]})
        .bindPopup("12. <b>Pierre Cronell</b>, 28<br>Underläkare<br>Lerum<br>");
    var cCarinaEriksson = L.marker([57.803729,12.356658], {icon: partyIcons["mp"]})
        .bindPopup("13. <b>Carina Eriksson</b>, 63<br>Studieförbundslärare<br>Floda<br>");

        return L.layerGroup([cKatarinaKuzmanovicKrasniqi,
                         cDanielEriksson,
                         cEmmaLiljeberg,
                         cRutgerFridholm,
                         cMärtaElf,
                         cBengtAnderson,
                         cLiseAugustsson,
                         cElisabethSanden,
                         cKjellHansson,
                         cCamillaSundberg,
                         cMirjamWeslien,
                         cPierreCronell,
                         cCarinaEriksson
                        ]);

}

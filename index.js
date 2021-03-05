const {
    conversation,
    Image,
    Card,
    Link,
} = require('@assistant/conversation')
const functions = require('firebase-functions');
const request = require('sync-request');

const app = conversation({debug: true});
const baseURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSd6CxCmC3PaTTL2FPgqNMyUl3iWbY8zLd3NlsbQ1KDMe3ria8qj6UjRhf7HjObBbZ2mBNBPWcSt3gJ/pub?output=csv&range=';
var color;
var restrictions;
var yellowZoneCount;
var orangeZoneCount;
var redZoneCount;
var whiteZoneCount;
var url;


function fetchRestrictions(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    restrictions = res.getBody().toString();;
    return restrictions;
}

function fetchColor(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    color = res.getBody().toString();
    return color;
    
}


function fetchWhiteZone(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    text = res.getBody().toString();
    whiteZoneNumber= text;
    if (text == "1") {  whiteZoneCount = "una regione bianca, "
    } else {
        whiteZoneCount = text + " regioni bianche, "
    };
    return whiteZoneCount;
}


function fetchYellowZone(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    text = res.getBody().toString();
    yellowZoneNumber= text;
    if (text == "1") {  yellowZoneCount = "una regione gialla, "
    } else {
        yellowZoneCount = text + " regioni gialle, "
    };
    return yellowZoneCount;
}


function fetchOrangeZone(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    text = res.getBody().toString();
    orangeZoneNumber= text;
    if (text == "1") {  orangeZoneCount = "una regione arancio, "
    } else {
        orangeZoneCount = text + " regioni arancio, "
    };
    return orangeZoneCount;
}

function fetchRedZone(cell) {
    url = baseURL + cell;
    var res = request('GET', url);
    text = res.getBody().toString();
    redZoneNumber= text;
    if (text == "1") {  redZoneCount = "e una regione rossa."
    } else {
        redZoneCount = " e " + text + " regioni rosse."
    };
    return redZoneCount;
    
}






app.handle('zonesCount', conv => {
    fetchYellowZone("G1");
    fetchOrangeZone("G2");
    fetchRedZone("G3");
    fetchWhiteZone("G4");
    conv.add("Oggi in Italia ci sono " + whiteZoneCount + yellowZoneCount + orangeZoneCount + redZoneCount + "\n\n" );
    conv.add(new Card({
        "title": "Che Colore Siamo",
        "text" : "⚪️ Regioni Bianche: " + whiteZoneNumber + "\n\n" + "🟡 Regioni Gialle: " + yellowZoneNumber + "\n\n" + "🟠 Regioni Arancio: " + orangeZoneNumber + "\n\n" + "🔴 Regioni Rosse: " + redZoneNumber + "\n\n",
        "image": new Image({
        url: 'https://www.checoloresiamo.it/assets/assistant_assets/Banner.png',
        alt: 'Che Colore Siamo - Logo',
        })
    }));
    conv.scene.next.name = "Seleziona_Regione";
});


app.handle('restrictions_white', conv => {
    fetchRestrictions("L1");
    restrictions = restrictions.replace("\"", "");
    restrictions = restrictions.replace(".\"", ".");
    conv.add(restrictions);
    switch (conv.session.params.chosenRegion){
        case "abruzzo":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_abruzzo.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "basilicata":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_basilicata.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "calabria":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_calabria.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "campania":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_campania.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "emilia_romagna":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_emilia.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "friuli_venezia_giulia":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_friuli.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "lazio":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_lazio.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "liguria":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_liguria.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "lombardia":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_lombardia.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "marche":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_marche.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "molise":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_molise.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "piemonte":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_piemonte.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "puglia":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_puglia.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "sardegna":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_sardegna.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "sicilia":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_sicilia.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "toscana":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_toscana.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "trentino":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_trentino.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "alto_adige":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_alto-adige.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "umbria":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_umbria.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "valle_d_aosta":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_aosta.png',
                alt: "Bianco"
                })
            }));
            break;
            
        case "veneto":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Bianco",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_veneto.png',
                alt: "Bianco"
                })
            }));
            break;
        default:
            console.log("error, color not identified");
            
    };
    conv.scene.next.name = "Seleziona_Regione_Loop";
});







app.handle('restrictions_yellow', conv => {
    fetchRestrictions("I1");
    restrictions = restrictions.replace("\"", "");
    restrictions = restrictions.replace(".\"", ".");
    conv.add(restrictions);
    switch (conv.session.params.chosenRegion){
        case "abruzzo":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_abruzzo.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "basilicata":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_basilicata.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "calabria":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_calabria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "campania":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_campania.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "emilia_romagna":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_emilia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "friuli_venezia_giulia":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_friuli.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "lazio":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_lazio.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "liguria":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_liguria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "lombardia":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_lombardia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "marche":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_marche.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "molise":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_molise.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "piemonte":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_piemonte.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "puglia":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_puglia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "sardegna":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_sardegna.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "sicilia":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_sicilia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "toscana":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_toscana.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "trentino":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_trentino.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "alto_adige":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_alto-adige.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "umbria":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_umbria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "valle_d_aosta":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_aosta.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "veneto":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Giallo",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_veneto.png',
                alt: 'Giallo'
                })
            }));
            break;
        default:
            console.log("error, color not identified");
            
    };
    conv.scene.next.name = "Seleziona_Regione_Loop";
});

app.handle('restrictions_orange', conv => {
    fetchRestrictions("J1");
    restrictions = restrictions.replace("\"", "");
    restrictions = restrictions.replace(".\"", ".");
    conv.add(restrictions);
    switch (conv.session.params.chosenRegion){
        case "abruzzo":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_abruzzo.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "basilicata":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_basilicata.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "calabria":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_calabria.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "campania":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_campania.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "emilia_romagna":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_emilia.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "friuli_venezia_giulia":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_friuli.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "lazio":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_lazio.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "liguria":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_liguria.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "lombardia":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_lombardia.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "marche":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_marche.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "molise":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_molise.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "piemonte":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_piemonte.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "puglia":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_puglia.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "sardegna":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_sardegna.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "sicilia":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_sicilia.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "toscana":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_toscana.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "trentino":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_trentino.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "alto_adige":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_alto-adige.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "umbria":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_umbria.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "valle_d_aosta":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_aosta.png',
                alt: "Arancio"
                })
            }));
            break;
            
        case "veneto":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Arancio",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_veneto.png',
                alt: "Arancio"
                })
            }));
            break;
        default:
            console.log("error, color not identified");
            
    };
    conv.scene.next.name = "Seleziona_Regione_Loop";
});

app.handle('restrictions_red', conv => {
    fetchRestrictions("K1");
    restrictions = restrictions.replace("\"", "");
    restrictions = restrictions.replace(".\"", ".");
    conv.add(restrictions);
    switch (conv.session.params.chosenRegion){
        case "abruzzo":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_abruzzo.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "basilicata":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_basilicata.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "calabria":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_calabria.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "campania":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_campania.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "emilia_romagna":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_emilia.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "friuli_venezia_giulia":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_friuli.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "lazio":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_lazio.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "liguria":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_liguria.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "lombardia":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_lombardia.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "marche":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_marche.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "molise":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_molise.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "piemonte":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_piemonte.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "puglia":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_puglia.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "sardegna":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_sardegna.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "sicilia":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_sicilia.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "toscana":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_toscana.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "trentino":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_trentino.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "alto_adige":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_alto-adige.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "umbria":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_umbria.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "valle_d_aosta":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_aosta.png',
                alt: "Rosso"
                })
            }));
            break;
            
        case "veneto":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Rosso",
                "text" : restrictions,
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_veneto.png',
                alt: "Rosso"
                })
            }));
            break;
        default:
            console.log("error, color not identified");
            
    };
    
    conv.scene.next.name = "Seleziona_Regione_Loop";
});



app.handle('abruzzo', conv => {
    fetchColor("H1");
    conv.session.params.regionColor = color;
    conv.add("L'Abruzzo è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_abruzzo.png',
                alt: 'Bianco'
                })
            }));
            break;
            
        case "giallo":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_abruzzo.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_abruzzo.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Abruzzo",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_abruzzo.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('basilicata', conv => {
    fetchColor("H2");
    conv.session.params.regionColor = color;
    conv.add("La Basilicata è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_basilicata.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_basilicata.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_basilicata.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Basilicata",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_basilicata.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('calabria', conv => {
    fetchColor("H3");
    conv.session.params.regionColor = color;
    conv.add("La Calabria è $session.params.regionColor.");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_calabria.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_calabria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_calabria.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Calabria",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_calabria.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('campania', conv => {
    fetchColor("H4");
    conv.session.params.regionColor = color;
    conv.add("La Campania è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_campania.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_campania.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_campania.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Campania",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_campania.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('emilia', conv => {
    fetchColor("H5");
    conv.session.params.regionColor = color;
    conv.add("L'Emilia-Romagna è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_emilia.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_emilia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_emilia.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Emilia-Romagna",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_emilia.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('friuli', conv => {
    fetchColor("H6");
    conv.session.params.regionColor = color;
    conv.add("Il Friuli Venezia Giulia è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_friuli.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_friuli.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_friuli.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Friuli Venezia Giulia",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_friuli.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('lazio', conv => {
    fetchColor("H7");
    conv.session.params.regionColor = color;
    conv.add("Il Lazio è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_lazio.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_lazio.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_lazio.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Lazio",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_lazio.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('liguria', conv => {
    fetchColor("H8");
    conv.session.params.regionColor = color;
    conv.add("La Liguria è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_liguria.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_liguria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_liguria.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Liguria",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_liguria.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('lombardia', conv => {
    fetchColor("H9");
    conv.session.params.regionColor = color;
    conv.add("La Lombardia è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_lombardia.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_lombardia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_lombardia.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Lombardia",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_lombardia.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('marche', conv => {
    fetchColor("H10");
    conv.session.params.regionColor = color;
    conv.add("Le Marche sono $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianche":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_marche.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialle":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_marche.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_marche.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosse":
            conv.add(new Card({
                "title": "Marche",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_marche.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('molise', conv => {
    fetchColor("H11");
    conv.session.params.regionColor = color;
    conv.add("Il Molise è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_molise.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_molise.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_molise.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Molise",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_molise.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('piemonte', conv => {
    fetchColor("H12");
    conv.session.params.regionColor = color;
    conv.add("Il Piemonte è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
            
        case "bianco":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_piemonte.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
            
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_piemonte.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_piemonte.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Piemonte",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_piemonte.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('puglia', conv => {
    fetchColor("H13");
    conv.session.params.regionColor = color;
    conv.add("La Puglia è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Bianca",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianca_puglia.png',
                alt: 'Bianca'
                })
            }));
            break;
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_puglia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_puglia.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Puglia",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_puglia.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('sardegna', conv => {
    fetchColor("H14");
    conv.session.params.regionColor = color;
    conv.add("La Sardegna è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_sardegna.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_sardegna.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_sardegna.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Sardegna",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_sardegna.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('sicilia', conv => {
    fetchColor("H15");
    conv.session.params.regionColor = color;
    conv.add("La Sicilia è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_sicilia.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_sicilia.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_sicilia.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Sicilia",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_sicilia.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('toscana', conv => {
    fetchColor("H16");
    conv.session.params.regionColor = color;
    conv.add("La Toscana è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_toscana.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_toscana.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_toscana.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Toscana",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_toscana.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('altoadige', conv => {
    fetchColor("H17");
    conv.session.params.regionColor = color;
    conv.add("L'Alto Adige è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_alto-adige.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_alto-adige.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_alto-adige.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Alto Adige",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_alto-adige.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('umbria', conv => {
    fetchColor("H18");
    conv.session.params.regionColor = color;
    conv.add("L'Umbria è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_umbria.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_umbria.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_umbria.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Umbria",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_umbria.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('aosta', conv => {
    fetchColor("H19");
    conv.session.params.regionColor = color;
    conv.add("La Valle D'Aosta è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianca":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_aosta.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "gialla":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_aosta.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_aosta.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rossa":
            conv.add(new Card({
                "title": "Valle D'Aosta",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_aosta.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('veneto', conv => {
    fetchColor("H20");
    conv.session.params.regionColor = color;
    conv.add("Il Veneto è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
            
        case "bianco":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_veneto.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_veneto.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_veneto.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Veneto",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_veneto.png',
                alt: 'Rosso'
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});

app.handle('trentino', conv => {
    fetchColor("H21");
    conv.session.params.regionColor = color;
    conv.add("Il Trentino è $session.params.regionColor.\n\n");
    switch (conv.session.params.regionColor){
        case "bianco":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Bianco",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/bianco_trentino.png',
                alt: 'Bianco'
                })
            }));
            break;
            
            
            
        case "giallo":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Giallo",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/giallo_trentino.png',
                alt: 'Giallo'
                })
            }));
            break;
            
        case "arancio":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Arancio",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/arancio_trentino.png',
                alt: 'Arancio'
                })
            }));
            break;
            
        case "rosso":
            conv.add(new Card({
                "title": "Trentino",
                "subtitle": "Rosso",
                "image": new Image({
                url: 'https://www.checoloresiamo.it/assets/assistant_assets/rosso_trentino.png',
                alt: 'Rosso',
                })
            }));
            break;
            
        default:
            console.log("error, color not identified");
    };
    conv.scene.next.name = "Richiedi_Restrizioni";
});


app.handle('end', conv => {
    conv.add("Grazie per aver usato Che Colore Siamo!\n\n Ti ricordiamo che le informazioni fornite da Che Colore Siamo, fungono solo da riepilogo generale. Ti invitiamo a far riferimento alle schede ufficiali di Palazzo Chigi per la lista completa dei provvedimenti.\n\n Se vuoi supportare il progetto puoi visitarci al sito checoloresiamo.it" );
    conv.add(new Card({
        "title": "Grazie! 🙏🏻",
        "text" : "Grazie per aver usato Che Colore Siamo!\n\n Ti ricordiamo che le informazioni fornite da Che Colore Siamo, fungono solo da riepilogo generale. Ti invitiamo a far riferimento alle schede ufficiali di Palazzo Chigi per la lista completa dei provvedimenti.\n\n Se vuoi supportare il progetto, puoi visitarci al sito checoloresiamo.it",
        "image": new Image({
        url: 'https://www.checoloresiamo.it/assets/assistant_assets/Banner.png',
        alt: 'Che Colore Siamo - Logo',
        }),
    }));
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);

# JavaScript 1

## Variabler

### Deklarasjon og tildeling:
```javascript
let minVariabel;                    // Deklarerer variabel
minVariabel = 1234;                 // Gir verdi
let minVariabel = 1234;             // Deklarerer og gir verdi samtidig
const minKonstant = 1234;           // Konstant - kan ikke endres
```

### Gode variabelnavn:
- Beskrivende navn: `const name = "Madde"` (ikke `const x = "Madde"`)
- camelCase: `nameOfGame` (ikke `name_of_game`)

---

## Objekter

```javascript
let mittObjekt = {
    etElement: "verdi",
    annetElement: "verdi2"
};

mittObjekt.etElement;              // Returnerer "verdi"
mittObjekt.etElement = "ny verdi"; // Oppdaterer element
```

---

## Datatyper

```javascript
let someText = "JavaScript is fun!";  // String
let aBoolean = true;                   // Boolean
let myNum = 42;                        // Number (int)
let otherNum = 5.5;                    // Number (float)
let aList = [];                        // Array
```

---

## Strenger (Strings)

### Grunnleggende operasjoner:
```javascript
let minStreng = "Dette er en streng";
minStreng.length;           // Returnerer lengden (18)
minStreng.toUpperCase();    // "DETTE ER EN STRENG"
minStreng.toLowerCase();    // "dette er en streng"
```

### Konvertering:
```javascript
const mittStrengTall = "123";
parseInt(mittStrengTall);   // Returnerer 123 (number)
```

### Template strings:
```javascript
// Bruk backticks (`) i stedet for vanlige anførselstegn. 
// COMMAND + SHIFT + ´ (tasten til høyre for ?/+)
let fornavn = "Madeleine";
let etternavn = "Lorås";
let tekst = `Hello ${fornavn}, ${etternavn}!`;
```

### Forskjell på anførselstegn:
```javascript
let minStreng1 = "Dette er en streng";           // Dobbel fnutt
let minStreng2 = 'Dette er en streng';           // Singel fnutt
let minStreng3 = `Dette er en streng`;           // Template string (backticks)
let minStreng4 = 'Dette er en streng "med en streng inni"';  // Blanding
```

---

## Kontrollflyt

### Sammenligningsoperatorer:
```javascript
=    // Gi verdi til variabel
==   // Sjekker om to ting er like
===  // Sjekker om to ting er HELT like (anbefalt)
&&   // AND
||   // OR
```

### If/else statements:
```javascript
if (kurs === "JavaScript") {
    console.log("Jippi!")
} else if (kurs === "Python") {
    console.log("Okeida")
} else {
    console.log("NOOO")
}
```

### One-liner if:
```javascript
// Enkel if
if (betingelse) utfall;
if (variabelEksisterer) kjørProgram();

// Ternary operator
betingelse ? utfallHvisSant : utfallHvisUsant;
erOverAtten ? kanTaLappen = "Ja" : kanTaLappen = "Nei";
```

---

## DOM (Document Object Model)

DOM er HTML-dokumentet omgjort til et JavaScript-objekt

### Hovedobjekter:
- **window** = hele nettleseren (events: resize)
- **document** = hele HTML-siden (elementer: `<p>`, `<h1>`, `<button>` osv.)

### Viktige DOM-metoder:

#### Finne elementer:
```javascript
document.getElementById(id)  // Finner et element med ID
document.getElementByClassName(className)  // Finner et element med klasse-navn

```

#### Endre elementer:
```javascript
document.element.innerHTML = "nytt element"     // Endrer HTML-innhold
document.element.style.property = "ny style"   // Endrer CSS
```

#### Legge til og slette elementer:
```javascript
document.createElement(element)      // Opprett nytt HTML-element
document.removeChild(element)        // Slett HTML-element
document.appendChild(element)        // Legg til HTML-element
document.replaceChild(new, old)      // Erstatt HTML-element
```

---

## Events (hendelser)

### Vanlige events:
- `onchange` - når noe endres
- `onclick` - når noe klikkes
- `onmouseover` - når mus beveger seg over element
- `onmouseout` - når mus beveger seg bort fra element
- `onkeydown` - når tast trykkes ned
- `onload` - når siden lastes

### Event handlers (definert i HTML):
```html
<button onclick="knappTrykket()">Klikk meg!</button>
```
```javascript
function knappTrykket() {
    console.log("Klikk!");
}
```

### Event listeners (definert i JavaScript):
```html
<button id="minKnapp">Klikk meg!</button>
```
```javascript
document.getElementById("minKnapp").addEventListener("click", knappTrykket2);

function knappTrykket2() {
    alert("Klikk!");
}
```

**NB!** Her er det viktig at `script-taggen` ligger helt nederst i HTML-dokumentet. 


---

*Denne oppsummeringen laget av Claude 4 Sonnet vie T3.chat basert på en presentasjon laget av Madeleine Lorås Hollund 2025.*
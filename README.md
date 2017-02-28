# TDD in NodeJs voor Windesheim Flevoland

Deze opdracht is gemaakt in opdracht van Egbert Hulsman voor het vak "Testen en Uitvoeren".

## Instructies:

- Installeer [NodeJs](https://nodejs.org/en/)

- Clone https://www.github.com/ThijsdenBraver/TDD.git

- Ga naar de map TDD

- Typ "npm install"


###In deze map zitten vervolgens 3 mappen.
1. "node_modules" met deze map hoef je niks te doen hier staan alle dependencies in.
2. "app" in deze map staan alle scripts die geschreven zijn met de functies.
3. "test" in deze map zitten de test scripts die gebruikt worden om je code te testen.

Momenteel controleert test/centimeterAndInch.js het app/centimeterAndInch.js bestand.
Open deze bestanden en bestudeer hoe deze werken.

- Met "npm test" worden alle testscripts in de test map uitgevoerd.

- Nu is het de bedoeling dat jullie hetzelfde gaan doen maar dan met kilometers en miles. 
  Waarbij kilometers kunnen worden omgezet in miles. En miles kunnen worden omgezet in kilometers.
  
- open test/kilometerAndMiles.js en schrijf hier een script in om te controleren of 
  app/kilometerAndMiles.js werkt.

- Als het goed is geeft "npm test" dan errors omdat het script in app/kilometerAndMiles.js 
  nog niet is geschreven.

- Schrijf nu het script voor app/kilometersAndMiles.js, en ga net zo lang door tot dat "npm test" geen errors meer geeft.

- Zorg ervoor dat de namen en comments ook kloppen.

TIP 1: Google rond getallen af waardoor je errors krijgt als je deze overneemt. Houd hier rekening mee, je kan beter de antwoorden met een rekenmachine uitreken.

TIP 2: De opdracht is bijna hetzelfde als het voorbeeld van centimeterAndInch dus je kan deze code ook overnemen en aanpassen.



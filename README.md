# Pizza Shop

## Anleitung



### I - Informieren
Die Idee ist es ein Pizza Shop zu erstellen. 
Auf der Startseite werden alle verfügbare Pizzas mit Name und Preis angezeigt.
Wenn das Pizzabild geclickt wird, wird man weitergeleitet auf die Pizza Seite, wo man seine Pizza konfigurieren kann.
Wenn man zufrieden mit dem Option ist, kann man die Pizza bestellen. Danach man wird auf Cart Seite weitergeleitet. Dort sieht man alle Informationen über seine Pizza. Um die Pizza zu bestellen, muss man persönlichen Angaben eingeben. Sobald die Bestellung bestätigt wird, sieht man auf welcher Etappe seine Pizza ist.  


### P - Planen

Index Seite: Einleitung in der Seite. 3 Pizzas zum Auswahl.
Product Seite: Die Seite für das ausgewählte Produkt. 
Cart Seite: Seite mit dem angezeigten Produkt, das man bestellen will. Im Pop-Up Fenster gibt man seine Angaben ein.
Order Seite: Auf dieser Seite wird die Etappe, auf welcher die Bestellung Momentan ist.


### E - Entscheiden

Die ursprügnliche Idee ist es gewesen, eine Seite mithilfe von Springboot + Thymeleaf bauen. Aber weil Thymeleaf etwa neu für mich gewesen ist, haben sehr viele Probleme aufgetaucht, wegen den mangelnden Kenntnisse. Deshalb habe ich entschieden das Projekt neu mit React bauen. Weil ich auch zu spät realisiert habe, dass ich das Porjekt mit Thymeleaf nicht realisieren kann, habe ich nicht genug Zeit gehabt, um eine API für meine Website machen. Deshalb wird die Website hardcoded.

### R - Realisieren

Index Seite:

Die Index Seite enthält ein Pizza Bild, "Beschreibung" von den Pizzas, und die 3 Pizzas. Die 3 Pizzas sind PizzaCard Components. Diese Components sind wiederverwedbar und deshalb muss ich nicht das gleiche 3 mal schreiben. Die PizzaCard Component wird 3 mal in PizzaList Component aufgerufen und PizzaList Component selber wird auf Index Seite aufgerugen. Im Endeffekt sieht man 3 Pizzas auf der Index Seite.

Product Seite:

Die Product Seite enthält die entsprechende Pizza, auf welche man geklickt hat. Auf dieser Seite hat man die Möglichkeit die grösse vom Pizza auswählen und zum Warenkorb hinzufügen.

Warenkorb Seite:

Hier wird die Bestellung detaliert angezeigt. Um die Pizza zu bestellen, muss man seine Name, Adresse und Telefon Nummer eingeben.

Order Seite: 

Auf dieser Seite sieht man auf welcher Etappe seine Bestellung ist. 

### K - Kontrollieren

3 Pizzas auf der Hauptseite :+1:
Pizza konfigurieren :+1:
Bestellung anschauen :+1:
Bestellung bestellen :+1:
Harcoded Daten :thumbsdown:


### A - Auswerten

Im Allgemein habe ich die ersprünglichen Ziele erreicht. Die Website funktioniert und sie ist interaktiv, obwohl ein Teil davon hardcoded ist. Hätte ich früher mit Thymeleaf aufgegeben, hätte ich die API eingebunden.
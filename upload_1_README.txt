Preporucam pregledavanje preko adrese ispod jer se otvori instantno pa da ne gubis vrijeme na raspakiranja i pokretanje.
Ako bas zelis  tako pokrece se sa npm run dev.
No prije sto pokrenes morat ces npm install i npm build jer nema npm_modules

https://physics-spa.onrender.com/

tldr sve je napravljeno, ak imate neki dobar gif za ubacit ostavite link u komentaru pls.


interpolation/one-way binding
	Na jako puno mjesta al evo recimo OhmsLaw.vue line 31
two-way binding
	MevConverter.vue kad god se jedna vrijednost mijenja mijenja se i druga
methods
	OhmsLaw.vue metoda ceka updateOhmsLaw() i onda radi promjene na stranici
computed properties
	MevConverter.vue kad god dođe do promjene jednog od 2 elementa automatski računa i ažurira drugi
barem jedan scoped style
	MevConverter.vue line 53

koristiti barem jedan lifecycle hook
	index.js line 15 kad god posjeti početna stranica tokom ovog posjeta aplikaciji counter se poveća za jedan. Bitno za naglasit je da ne radi f5 odnosno refresh jer to restarta aplikaciju nego kad se koristi navigacija unutar stranice (linkovi i gumbi).
routing (više stranica)
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
dinamičko usmjeravanje s 404 stranicom ("catch all")
	https://physics-spa.onrender.com/mev-converter ovo mozete isprobat
	a za 404 https://physics-spa.onrender.com/nesRandom
	Routing obavljen u index.js i NotFound.vue, i dodano na web pannelu u renderu jos rule da radi kak spada
(barem) dvije komponente
komponenta bez stanja, koristiti properties
	VoteComponent.vue
komponenta sa stanjem
	OhmsLaw.vue
barem jedna komponenta mora emitirati barem jedan event
	VoteComponent.vue line25
store (Pinia)
	index.js 15 i counter.js cijeli
asinkroni dohvat podataka s backenda, možete:
koristiti Firebase ili Back4App, Mocky, itd.
vlastiti storage, ili
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)
	Korišten Firebase. firebase.js sadrži inicijalizaciju, U VoteComponent.vue se koristi pohrana i čitanje podataka iz baze
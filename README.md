Iss-catcher e' un applicazione che tiene traccia costante della posizione
dell'astronave iss, inoltre e' possibile cercare quando l'atronave passera' sopra
una determinata area e sapere le condizioni previste meteo al passaggio.

Guida all'installazione di Iss-catcher:

 - installare git se non installato
 - installare node se non installato
 - se installati riavviare il computer
 - scaricare il repository con il comando da console =>  git clone https://github.com/Madda95/iss-catcher.git
 - in quanto l'applicazione e' eseguita in locale per impedire blocchi da parte del CORS installare l'estensione di chrome
   che trovate a questo link https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
 - una volta scaricata l'estensione cliccare sull'estensione nella barra delle estensioni di Google chrome e premere il pulsante ON
 - a questo punto aprire la cartella di progetto con visual studio code e aggiungere un file nella root di progetto con estenzione .env
 - all'interno del file .env incollare => REACT_APP_GOOGLE_API_KEY=(chiedere via mail => maddox.devs@gmail.com)s
 - a questo punto andare su "Terminale / Terminal" e cliccare su "Nuovo terminale / New terminal".
 - digitare => npm i
 - attendere la fine dell'installazione dei moduli.
 - digitare => npm start
 - godersi iss-catcher
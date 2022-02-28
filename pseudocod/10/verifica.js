/* Esercizio 5.
dobbiamo gestire un elenco di alberghi che hanno le seguenti caratteristiche

- nome
- indirizzo
- tipo di struttura (Bed and breakfast, ostello, albergo)
- prezzi di camere a notte sulla base del livello ( LIV1 = 150, LIV2 = 200)
- per ogni livello, potrei avere più camere. gestire l'informazione per ogni giorno dell'anno in corso se sono prenotate oppure libere

scegliere la struttura dati preferita che memorizzi quanto richiesto e indicare qualche esempio.

Albergo CASABELLA, albergo, LIV1 = 100, LIV2 = 200, 5 camere LIV1, 3 camere LIV2, camera1 LIV1 il 3/1/2021, il 10/1/2021 occupata, camera2 LIV1 il 5/1/2021 occupata
Ostello STUDENTIPLUS, ostello, LIV1 = 50, 10 camere LIV1, camera1 LIV1 il 3/1/2021, il 10/1/2021 occupata, camera2 LIV1 il 5/1/2021 occupata


stanze:{ 
 */, liv2:200ra1 LIV1 il 3/1/2021, il 10/1/2021 occupata, camera2 LIV1 il 5/1/2021 occupata

//un array dove memorizzerò se la stanza è libera o vuota a seconda del giorno es: 101= 01/


let array Hotel= [ {nome:'Albergo Casabella',
                    type:'Albergo',
                    price:{ liv1:100, liv2:200},
                    roomTot:{liv1:{r1:[101,201,301,401,501,601,701,801,901,1001], //un array dove memorizzerò se la stanza è libera o vuota a seconda del giorno es: 101= 01/01
                                  r2:[101,201,301,401,501,601,701,801,901,1001]
                                  r3:[101,201,301,401,501,601,701,801,901,1001]
                                  r4:[101,201,301,401,501,601,701,801,901,1001]
                                 r5:[101,201,301,401,501,601,701,801,901,1001]}
                            liv2:{r1:[101,201,301,401,501,601,701,801,901,1001]
                                 r2:[101,201,301,401,501,601,701,801,901,1001]
                                  r3:[101,201,301,401,501,601,701,801,901,1001]}
                    }
                    {nome:'ostello STUDENTIPLUS',
                    type:'Ostello',
                    price:{ liv1:50},
                    roomTot:{liv1:{r1:[101,201,301,401,501,601,701,801,901,1001], //un array dove memorizzerò se la stanza è libera o vuota a seconda del giorno es: 101= 01/01
                                  r2:[101,201,301,401,501,601,701,801,901,1001]
                                  r3:[101,201,301,401,501,601,701,801,901,1001]
                                  r4:[101,201,301,401,501,601,701,801,901,1001]
                                 r5:[101,201,301,401,501,601,701,801,901,1001]
                                r6:[101,201,301,401,501,601,701,801,901,1001]
                                 r7:[101,201,301,401,501,601,701,801,901,1001]
                                 r8:[101,201,301,401,501,601,701,801,901,1001]
                                 r9:[101,201,301,401,501,601,701,801,901,1001]
                                r10:[101,201,301,401,501,601,701,801,901,1001]
                                 }
                    }
                             
                   



}

}} 


]

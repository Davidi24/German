// Vocabulary data for the Deutsch–English Match game.
// Each level has max 10 pairs so one page = 10 words.
window.LEVELS = [
  {
    name: "Gefühle & Gedanken",
    pairs: [
      { de: "die Angst", en: "fear", exDe: "Er hat große Angst vor Spinnen.", exEn: "He is very afraid of spiders." },
      { de: "Angst haben", en: "to be afraid", exDe: "Ich habe Angst vor Prüfungen.", exEn: "I am afraid of exams." },
      { de: "sich fragen", en: "to wonder", exDe: "Ich frage mich, ob er kommt.", exEn: "I wonder if he is coming." },
      { de: "wissen", en: "to know", exDe: "Ich weiß die Antwort.", exEn: "I know the answer." },
      { de: "erfahren", en: "to find out / to experience", exDe: "Ich habe die Neuigkeit erfahren.", exEn: "I found out the news." },
      { de: "die Hoffnung", en: "hope", exDe: "Sie gibt die Hoffnung nicht auf.", exEn: "She doesn’t give up hope." },
      { de: "der Traum", en: "dream", exDe: "Mein Traum ist es, Arzt zu werden.", exEn: "My dream is to become a doctor." },
      { de: "die Dunkelheit", en: "darkness", exDe: "Die Dunkelheit macht mir Angst.", exEn: "The darkness scares me." },
      { de: "dunkel", en: "dark", exDe: "Das Zimmer ist dunkel.", exEn: "The room is dark." },
      { de: "nie", en: "never", exDe: "Ich habe das nie gesehen.", exEn: "I have never seen that." }
    ]
  },
  {
    name: "Zeit & Fragen",
    pairs: [
      { de: "als", en: "when (past, single event)", exDe: "Als ich klein war, spielte ich oft draußen.", exEn: "When I was little, I often played outside." },
      { de: "das ist das Erste", en: "this is the first", exDe: "Das ist das Erste, was ich machen muss.", exEn: "This is the first thing I have to do." },
      { de: "was ich tun sollte", en: "what I should do", exDe: "Ich wusste nicht, was ich tun sollte.", exEn: "I didn’t know what I should do." },
      { de: "woran", en: "what…about", exDe: "Woran denkst du?", exEn: "What are you thinking about?" },
      { de: "ob", en: "if / whether", exDe: "Ich weiß nicht, ob er kommt.", exEn: "I don’t know if he is coming." },
      { de: "würde", en: "would", exDe: "Ich würde gern nach Berlin fahren.", exEn: "I would like to go to Berlin." },
      { de: "woher", en: "from where", exDe: "Woher kommst du?", exEn: "Where are you from?" },
      { de: "je", en: "ever", exDe: "Hast du je in Deutschland gelebt?", exEn: "Have you ever lived in Germany?" },
      { de: "noch", en: "still / yet / more", exDe: "Ich bin noch hier.", exEn: "I am still here." },
      { de: "endlich", en: "finally", exDe: "Endlich ist Wochenende!", exEn: "Finally it’s the weekend!" }
    ]
  },
  {
    name: "Alltag & Dinge",
    pairs: [
      { de: "die Plätzchen", en: "cookies", exDe: "Zu Weihnachten backen wir Plätzchen.", exEn: "At Christmas we bake cookies." },
      { de: "anklopfen", en: "to knock", exDe: "Bitte klopf an, bevor du reinkommst.", exEn: "Please knock before you come in." },
      { de: "der Globus", en: "globe", exDe: "In der Klasse steht ein Globus.", exEn: "There is a globe in the classroom." },
      { de: "prüfen", en: "to check / examine", exDe: "Der Lehrer prüft die Hausaufgaben.", exEn: "The teacher checks the homework." },
      { de: "schneiden", en: "to cut", exDe: "Er schneidet das Brot.", exEn: "He cuts the bread." },
      { de: "Zahn", en: "tooth", exDe: "Mein Zahn tut weh.", exEn: "My tooth hurts." },
      { de: "Zähne", en: "teeth", exDe: "Ich putze mir die Zähne.", exEn: "I brush my teeth." },
      { de: "Zahnseide", en: "dental floss", exDe: "Ich benutze Zahnseide jeden Tag.", exEn: "I use dental floss every day." },
      { de: "Sicherheit", en: "safety / security", exDe: "Sicherheit ist wichtig.", exEn: "Safety is important." },
      { de: "das Wunder", en: "miracle / wonder", exDe: "Es war ein Wunder, dass er überlebte.", exEn: "It was a miracle that he survived." }
    ]
  },
  {
    name: "Natur & Welt",
    pairs: [
      { de: "der Mond", en: "the moon", exDe: "Der Mond scheint hell.", exEn: "The moon shines bright." },
      { de: "scheinen", en: "to shine / to seem", exDe: "Die Sonne scheint.", exEn: "The sun is shining." },
      { de: "zu verjagen", en: "to chase away", exDe: "Die Bauern verjagen die Vögel.", exEn: "The farmers chase away the birds." },
      { de: "immer", en: "always", exDe: "Er ist immer pünktlich.", exEn: "He is always on time." },
      { de: "weg", en: "away", exDe: "Geh weg!", exEn: "Go away!" },
      { de: "laufen", en: "to run / to walk", exDe: "Ich laufe jeden Morgen im Park.", exEn: "I run in the park every morning." },
      { de: "herrlich", en: "wonderful / magnificent", exDe: "Das Wetter ist herrlich.", exEn: "The weather is wonderful." },
      { de: "der Welt", en: "the world", exDe: "Die Welt ist groß.", exEn: "The world is big." },
      { de: "schwere Regenfälle", en: "heavy rainfalls", exDe: "Es gab schwere Regenfälle in Bayern.", exEn: "There were heavy rainfalls in Bavaria." },
      { de: "Abflug", en: "departure (flight)", exDe: "Der Abflug ist um 9 Uhr.", exEn: "The departure is at 9 a.m." }
    ]
  },
  {
    name: "Redewendungen & Extra",
    pairs: [
      { de: "bekommen Besuch", en: "to receive visitors", exDe: "Morgen bekommen wir Besuch.", exEn: "We will receive visitors tomorrow." },
      { de: "haben Besuch", en: "to have visitors", exDe: "Wir haben gerade Besuch.", exEn: "We currently have visitors." },
      { de: "treffen", en: "to meet / to hit", exDe: "Ich treffe meine Freunde am Samstag.", exEn: "I meet my friends on Saturday." },
      { de: "herum – rum", en: "around", exDe: "Die Kinder laufen herum.", exEn: "The children run around." },
      { de: "Achtung", en: "attention / caution", exDe: "Achtung, heiß!", exEn: "Caution, hot!" },
      { de: "daher", en: "therefore / from there", exDe: "Es regnet, daher bleibe ich zu Hause.", exEn: "It’s raining, therefore I stay at home." },
      { de: "aus einem Grund", en: "for a reason", exDe: "Ich habe es aus einem Grund getan.", exEn: "I did it for a reason." },
      { de: "zusammenrufen", en: "to call together", exDe: "Der Lehrer ruft die Schüler zusammen.", exEn: "The teacher calls the students together." },
      { de: "nur", en: "only", exDe: "Ich habe nur ein Buch.", exEn: "I have only one book." },
      { de: "einzigen", en: "only / single", exDe: "Das ist meine einzige Chance.", exEn: "This is my only chance." }
    ]
  }
];

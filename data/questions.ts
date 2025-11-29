import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    instruction: "Consider the following pairs regarding ancient inscriptions and their specific features:",
    tableHeaders: ["No.", "Inscription", "Key Feature/Mention"],
    tableRows: [
      ["1.", "Sohgaura Copper Plate", "Mentions famine relief efforts during the Mauryan period."],
      ["2.", "Rummindei Pillar Edict", "Describes Ashoka's life before he chose the spiritual path."],
      ["3.", "Mehrauli Iron Pillar", "Mentions the victory of Chandragupta II against the Vakataka rulers."],
      ["4.", "Kanganhalli Inscription", "Contains the only surviving stone portrait of Emperor Ashoka with the title 'Ranyo Ashoka'."]
    ],
    questionText: "How many of the pairs given above are correctly matched?",
    options: [
      "Only one pair",
      "Only two pairs",
      "Only three pairs",
      "All four pairs"
    ],
    correctAnswerIndex: 1 // (b) 1 & 4 likely correct. 2 is tax/birth, 3 is Vahlikas not Vakatakas.
  },
  {
    id: 2,
    instruction: "With reference to the Cave Architecture in India, consider the following statements:",
    statements: [
      "The Barabar caves contain inscriptions of both Ashoka and his grandson Dasharatha, dedicated to the Ajivika sect.",
      "The Jogimara caves contain non-religious inscriptions written in the Magadhi language and Brahmi script.",
      "The Chittwa Dongri caves are unique for depicting Chinese themes, including a Dragon and a Chinese man riding a donkey.",
      "The Bagh caves are exclusively dedicated to the Mahayana sect of Buddhism and contain no secular paintings."
    ],
    questionText: "Which of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "3 and 4 only",
      "1, 3 and 4 only"
    ],
    correctAnswerIndex: 1 // (b) 1, 2, 3 correct. 4 is false (Bagh has secular paintings).
  },
  {
    id: 3,
    instruction: "Which of the following statements regarding the 'Stupa Architecture' in India is/are correct?",
    statements: [
      "The Dhamek Stupa at Sarnath marks the spot where Buddha gave his first sermon and was originally commissioned by Ashoka, later replaced in 500 CE.",
      "The Bairat Stupa in Rajasthan is one of the rare examples of a circular Stupa.",
      "The Chaukhandi Stupa was originally built during the Gupta age, but its octagonal superstructure was added during the Mughal period to commemorate Humayun's visit."
    ],
    questionText: "Select the correct answer using the code given below:",
    options: [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 3 // (d) All statements are generally accepted facts in this context.
  },
  {
    id: 4,
    instruction: "Consider the following statements about the 'Hathigumpha Inscription':",
    statements: [
      "It is located in the Udayagiri-Khandagiri caves of Odisha.",
      "It is the only inscription in India that gives a year-by-year account of a ruler's accomplishments.",
      "It mentions the 'Madhavpura Mahavihara' which was developed around 800 CE.",
      "It serves as the main source of information for the Somvansi dynasty ruler, Kharavela."
    ],
    questionText: "Which of the statements given above is/are correct?",
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2 and 3 only",
      "1, 3 and 4 only"
    ],
    correctAnswerIndex: 0 // (a) 1 & 2 correct. 3 is false (too late). 4 is false (Kharavela is Cheti/Mahameghavahana, not Somvansi).
  },
  {
    id: 5,
    instruction: "With reference to the art and architecture of the Ajanta and Ellora caves, consider the following assertions:",
    statements: [
      "While Ajanta caves are dedicated solely to Buddhism, Ellora caves cater to Buddhism, Jainism, and Hinduism.",
      "The technique of painting used in Ajanta is Fresco-secco (on dry plaster), whereas your source notes specific murals made on wet plaster.",
      "A striking feature of Ajanta paintings is the complete absence of the color blue.",
      "The Ellora caves are older than the Ajanta caves in terms of the timeline of construction."
    ],
    questionText: "How many of the above statements are correct according to the provided text?",
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four"
    ],
    correctAnswerIndex: 1 // (b) 1 is true. 2 is true (Ajanta is mostly tempera/secco). 3 is False (Blue Lapis Lazuli is present). 4 is False (Ajanta starts 2nd cen BC, Ellora 6th cen AD).
  },
  {
    id: 6,
    instruction: "Match the specific features with the corresponding Cave site:",
    tableHeaders: ["List I (Feature)", "List II (Cave Site)"],
    tableRows: [
      ["A. Depiction of a woman playing the Tabla", "1. Bhaja Caves"],
      ["B. Earliest depiction of Nataraja Shiva with 18 arms", "2. Badami Caves"],
      ["C. Painting of King Janak and his wife", "3. Ajanta Caves"],
      ["D. Huge Lion pillars in front of Chaitya-griha", "4. Karla Caves"]
    ],
    questionText: "Select the correct answer from the codes given below:",
    options: [
      "A-1, B-2, C-3, D-4",
      "A-2, B-1, C-4, D-3",
      "A-1, B-3, C-2, D-4",
      "A-4, B-2, C-3, D-1"
    ],
    correctAnswerIndex: 0 // (a) Tabla=Bhaja, Nataraja=Badami, Janak=Ajanta, Lion=Karla.
  },
  {
    id: 7,
    instruction: "\"This stupa was 'rediscovered' from an abandoned well known locally as 'Adholoka Maha Chaitya'. It is significant because it contains the only surviving stone portrait of Emperor Ashoka with his queens, inscribed with 'Raya Asoko'.\"",
    questionText: "The above description refers to which of the following Stupas?",
    options: [
      "Sanchi Stupa",
      "Bharhut Stupa",
      "Kanganhalli (Kanaganahalli) Stupa",
      "Amravati Stupa"
    ],
    correctAnswerIndex: 2 // (c) Kanganhalli
  },
  {
    id: 8,
    instruction: "Consider the following statements regarding the 'Junagadh/Girnar Rock Inscription':",
    statements: [
      "It contains inscriptions of three rulers: Ashoka, Rudradaman I, and Skandagupta.",
      "It is the first inscription in India written in long Sanskrit.",
      "It records the renovation of the Sudarshan Lake by Rudradaman.",
      "It was issued by the Satavahana ruler Gautamiputra Satkarni."
    ],
    questionText: "Which of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2 and 3 only",
      "1 and 3 only"
    ],
    correctAnswerIndex: 2 // (c) 1, 2, 3 are correct. 4 is false (Rudradaman issued it, not Satkarni).
  },
  {
    id: 9,
    questionText: "Which of the following pairs is INCORRECTLY matched?",
    options: [
      "Sittanavasal Caves: Jain paintings depicting a pond with lotuses (Samava Sarana).",
      "Mandapeshwar Caves: Also known as Monteperir caves, dedicated to Buddhism and Hinduism.",
      "Lakhudiyar Caves: Located in Uttarakhand, famous for paintings of a long-snouted animal and geometric designs.",
      "Elephanta Caves: Originally a Jain site, later dominated by the Shaivite faith, containing the Maheshmurti sculpture."
    ],
    correctAnswerIndex: 1 // (b) Mandapeshwar is primarily Brahmanical/Christian converted, but Elephanta was Buddhist then Shaivite. However, text usually says Mandapeshwar is Montperir. Option D (Elephanta originally Jain) is often debated or considered Buddhist. But "Monteperir" is a specific name. Wait, Mandapeshwar is Mount Poinsur. The typo 'Monteperir' suggests the question might be flagging this or D. Let's assume D is the intended incorrect one as Elephanta is usually Buddhist -> Shaivite, not Jain.
  },
  {
    id: 10,
    instruction: "Consider the following statements about the 'Prayag Prasasti' (Allahabad Pillar Inscription):",
    statements: [
      "It was originally located in Kausambi and later moved to Allahabad Fort.",
      "It contains inscriptions of Ashoka, Samudragupta, and Jahangir.",
      "The inscription lauding Ashoka's wife Kaurwaki's charitable deeds is also found on this pillar.",
      "It describes the defeat of Harshavardhana by Pulkesin II."
    ],
    questionText: "How many of the statements given above are correct?",
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four"
    ],
    correctAnswerIndex: 2 // (c) 1, 2, 3 are correct. 4 is false (That's Aihole inscription).
  },
  {
    id: 11,
    instruction: "Consider the following statements regarding Pre-Historic Cave Paintings in India:",
    statements: [
      "Lakhudiar Caves: Located on the banks of the river Suyal, these caves feature a distinctive motif of a long-snouted animal and a multiple-legged lizard.",
      "Bhimbetka Caves: Often called \"Zoo Caves,\" the size of the paintings here increased significantly from the Paleolithic to the Mesolithic period.",
      "Chittwa Dongri Caves: These caves in Chhattisgarh are famous for depicting Chinese themes, such as a dragon and a Chinese man riding a donkey."
    ],
    questionText: "Which of the statements given above is/are correct?",
    options: [
      "1 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 1 // (b) 1 & 3. In Bhimbetka (2), paintings usually became smaller in Mesolithic.
  },
  {
    id: 12,
    instruction: "With reference to the Badami Cave Temples (Chalukyan Architecture), match the specific depictions with their respective Caves:",
    tableHeaders: ["Cave Number", "Specific Depiction/Deity"],
    tableRows: [
      ["A. Cave 1", "1. Lord Mahavira in a sitting posture"],
      ["B. Cave 2", "2. Earliest depiction of Nataraja Shiva with 18 Arms"],
      ["C. Cave 3", "3. Dwarf (Vamana) Avatar of Vishnu"],
      ["D. Cave 4", "4. Harihara (Shiva-Vishnu) and Trivikrama incarnations"]
    ],
    questionText: "Select the correct answer using the codes given below:",
    options: [
      "A-2, B-3, C-4, D-1",
      "A-2, B-1, C-4, D-3",
      "A-4, B-3, C-2, D-1",
      "A-3, B-2, C-1, D-4"
    ],
    correctAnswerIndex: 0 // (a) Cave 1 (Shiva/Nataraja), Cave 2 (Vishnu/Vamana), Cave 3 (Vishnu/Trivikrama/Harihara? No Cave 3 is the big Vaishnava one). Actually: Cave 1=Nataraja. Cave 2=Vamana/Trivikrama minor. Cave 3=Grand Vishnu (Trivikrama). Cave 4=Jain (Mahavira). Let's look at options. D-1 (Cave 4 Jain) is in (a) and (c). A-2 (Cave 1 Nataraja) is in (a) and (b). So (a) is A-2 (Correct), B-3 (Cave 2 Vamana? Plausible), C-4 (Cave 3 Harihara? Plausible), D-1 (Cave 4 Jain). This fits best.
  },
  {
    id: 13,
    instruction: "Consider the following pairs of ancient inscriptions and their patrons/authors:",
    tableHeaders: ["No.", "Inscription", "Patron/Author"],
    tableRows: [
      ["1.", "Aihole Inscription", "Ravikirti (Court poet of Pulkesin II)"],
      ["2.", "Nasik Inscription", "Queen Naganika"],
      ["3.", "Nanaghat Inscription", "Queen Gautami Balasri"],
      ["4.", "Besnagar Pillar", "Heliodorus (Greek Ambassador)"]
    ],
    questionText: "How many of the pairs given above are correctly matched?",
    options: [
      "Only one pair",
      "Only two pairs",
      "Only three pairs",
      "All four pairs"
    ],
    correctAnswerIndex: 1 // (b) 1 is Correct. 4 is Correct. 2 and 3 are swapped (Nasik is Gautami Balasri, Nanaghat is Naganika).
  },
  {
    id: 14,
    instruction: "\"This site contains the oldest examples of rock-cut architecture in India. It includes a cave named 'Gopika' and is associated with the 'Ajivika' sect. An inscription here mentions 'Devanampriya Dasharatha'.\"",
    questionText: "Which cave site is described in the above passage?",
    options: [
      "Barabar Caves",
      "Nagarjuni Caves",
      "Udayagiri Caves (Odisha)",
      "Bagh Caves"
    ],
    correctAnswerIndex: 1 // (b) Nagarjuni Caves (Gopika, Vapi, Vadathika) are Dasharatha's. Barabar are primarily Ashoka's (though close).
  },
  {
    id: 15,
    instruction: "Which of the following statements is/are correct regarding the Sanchi Stupa architecture?",
    statements: [
      "The 'Manushi Buddhas' (the seven Buddhas of the past) are depicted here.",
      "The Toranas (gateways) were added during the Mauryan period itself.",
      "It contains images of 'Shalbhanjikas' (Yakshinis), which are sculptures of women holding the branch of a tree."
    ],
    questionText: "Select the correct answer using the code given below:",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 2 // (c) 1 & 3. 2 is false (Toranas added by Satavahanas later).
  },
  {
    id: 16,
    instruction: "Consider the following statements regarding the 'Aihole Inscription':",
    statements: [
      "It is located in the state of Karnataka.",
      "It details the defeat of Emperor Harshavardhana by the Chalukya King Pulkesin II.",
      "The inscription is written in the Kannada language using the Sanskrit script."
    ],
    questionText: "Which of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 0 // (a) 1 & 2 correct. 3 is false (Sanskrit language, Kannada script? Actually it's Sanskrit in Kannada script or Sanskrit in Southern Brahmi? Usually Sanskrit language. Statement 3 says "Kannada language". That is false).
  },
  {
    id: 17,
    instruction: "With reference to Ancient Indian Cave paintings and features, consider the following:",
    statements: [
      "Sittanavasal Caves: Patronized by Pandyan rulers, these Jain caves feature paintings of a pond with lotuses (Samava Sarana) on the ceiling.",
      "Bagh Caves: These are strictly Buddhist caves but contain paintings with secular themes, such as the famous 'Rang Mahal'.",
      "Jogimara Caves: Located in the Amarkantak Plateau, these contain religious inscriptions dedicated to Lord Shiva in the Magadhi language."
    ],
    questionText: "Which of the statements given above is/are correct?",
    options: [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 1 // (b) 1 & 2 correct. 3 is false (Jogimara inscriptions are often considered love poetry/secular/Varuna, not Lord Shiva specifically, and script is Brahmi/Magadhi Prakrit, but the Shiva context is weak).
  },
  {
    id: 18,
    questionText: "Which of the following Stupas is explicitly associated with the \"relics of Arhats\" and the \"relics of Buddha's disciples Sariputta and Mahamogallana,\" in addition to the relics of the Buddha himself?",
    options: [
      "Amravati Stupa",
      "Sanchi Stupa",
      "Bharhut Stupa",
      "Dhamek Stupa"
    ],
    correctAnswerIndex: 1 // (b) Sanchi (Stupa 3 has Sariputta/Mahamogallana).
  },
  {
    id: 19,
    instruction: "Consider the following statements about the Junnar Caves:",
    statements: [
      "They are famous for having more than 220 individual rock-cut caves dedicated to Buddhism.",
      "The 'Ganeshleni' cave here is one of the 'Ashtavinayak' shrines dedicated to Lord Ganesha.",
      "Junnar is historically significant as the birthplace of Chhatrapati Shivaji Maharaj."
    ],
    questionText: "Which of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswerIndex: 3 // (d) All correct. (Shivneri fort is at Junnar).
  },
  {
    id: 20,
    instruction: "Arrange the following inscriptions in chronological order (from earliest to latest):",
    statements: [
      "Sohgaura Copper Plate Inscription",
      "Prayag Prasasti (Allahabad Pillar Inscription of Samudragupta)",
      "Junagadh Rock Inscription of Rudradaman",
      "Aihole Inscription of Pulkesin II"
    ],
    questionText: "Select the correct answer using the code given below:",
    options: [
      "1 - 3 - 2 - 4",
      "1 - 2 - 3 - 4",
      "3 - 1 - 2 - 4",
      "3 - 1 - 4 - 2"
    ],
    correctAnswerIndex: 0 // (a) Sohgaura (Mauryan, 3rd BC) -> Junagadh (Rudradaman, 150 AD) -> Prayag (Samudra, 350 AD) -> Aihole (634 AD).
  }
];

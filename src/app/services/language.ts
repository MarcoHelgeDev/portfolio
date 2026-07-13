import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'portfolio-language';

  currentLanguage = signal<Language>(this.getInitialLanguage());

  texts = {
    en: {
      header: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        menuAriaLabel: 'Open menu',
      },
      hero: {
        role: 'Frontend Developer',
        firstName: 'Marco-Helge',
        lastName: 'Alsen',
        checkWork: 'Check my work',
        contactMe: 'Contact me',
        scrollAriaLabel: 'Scroll to about me',
        socialAriaLabel: 'Social links',
        emailAriaLabel: 'Send email',
        tickerRemote: 'Available for remote work',
        tickerRole: 'Frontend Developer',
        tickerLocation: 'Based in Kiel',
        tickerOpen: 'Open to work',
      },
      aboutMe: {
        photoAriaLabel: 'Profile photo',
        label: 'Who I Am',
        title: 'About me',
        intro:
          'Hi, I’m Marco. I’m currently completing a professional retraining program in frontend development. In my projects, I work with HTML, SCSS, JavaScript, TypeScript and Angular. I care about clear interfaces, thoughtful interactions and code I can understand and improve.',
        location:
          'I live near Kiel and I’m open to remote work. In a team, I value clear communication, honest feedback and a respectful way of working together.',
        mindset:
          'My current focus is Angular, TypeScript and responsive web interfaces. I have also worked with Vue and gained experience with different approaches used by modern frontend frameworks.',
        problemSolving:
          'When I encounter a technical problem, I break it into smaller steps, test deliberately and make sure I understand why a solution works instead of simply copying code.',
      },
      skills: {
        label: 'Technologies',
        title: 'Skill Set',
        description:
          'I have gained practical experience with these technologies during my retraining and in my own projects. My focus is on responsive interfaces, readable code, Angular and TypeScript.',
        subHeadlineStart: 'Looking for',
        subHeadlineHighlight: 'another skill?',
        subText:
          'I enjoy learning new technologies. If my profile could be a good fit for your team, I would be happy to hear from you.',
        buttonText: 'Let’s Talk',
        gridAriaLabel: 'Technology skills',
        growthAriaLabel: 'Show learning interests',
        growthPopover: 'I have a special interest in learning',
        growthLabel: 'Growth mindset',
      },
      projects: {
        label: 'Portfolio',
        title: 'Featured Projects',
        intro:
          'Here you can find a selection of projects from my retraining. Open a project to learn more about its features and the technologies behind it.',
        modalHeadline: 'What is this project about?',
        closeAriaLabel: 'Close project details',
        nextProject: 'Next project',
        previewAltSuffix: 'preview',
        githubLabel: 'GitHub',
        liveLabel: 'Live Test',
        items: [
          {
            number: '01',
            title: 'Join',
            description:
              'A Kanban-based task manager that I developed as part of a team. I worked with Angular components, forms, routing and structured data.',
            image: 'images/projects/join.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev',
            liveUrl: 'https://example.com',
            technologies: [
              { name: 'Angular', icon: 'icons/skills/angular.svg' },
              { name: 'TypeScript', icon: 'icons/skills/typescript.svg' },
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'Firebase', icon: 'icons/skills/firebase.svg' },
            ],
          },
          {
            number: '02',
            title: 'Sharky',
            description:
              'A 2D underwater game built with object-oriented JavaScript and Canvas. It includes classes, collision detection, keyboard controls and custom game logic.',
            image: 'images/projects/sharky.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev/sharky',
            liveUrl: 'https://sharky.marco-helge.de',
            technologies: [
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'JavaScript', icon: 'icons/skills/javascript.svg' },
            ],
          },
          {
            number: '03',
            title: 'Pokedex',
            description:
              'A Pokédex app that loads data asynchronously from a REST API. It features dynamically rendered cards, search functionality and a detailed Pokémon view.',
            image: 'images/projects/pokedex.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev/pokedex',
            liveUrl: 'https://pokedex.marco-helge.de',
            technologies: [
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'JavaScript', icon: 'icons/skills/javascript.svg' },
              { name: 'REST-API', icon: 'icons/skills/restapi.svg' },
            ],
          },
        ],
      },
      testimonials: {
        title: 'What my colleagues say about me',
        previousAriaLabel: 'Previous reference',
        nextAriaLabel: 'Next reference',
        dotAriaLabel: 'Show reference',
        references: [
          {
            text: 'I studied with Marco-Helge at Developer Akademie and worked with him on a learning project. As an experienced developer, I can say with confidence that he is an excellent team player. He always understood and applied new principles and development approaches quickly, and his code was consistently clean and well thought out — rework was practically never necessary. Anyone working with him gets a reliable and strong colleague on the team.',
            author: 'Levgen Bilion - Frontend Developer',
          },
          {
            text: 'Marco was a reliable project partner. He asked questions when something was unclear and kept working until the problem was solved.',
            author: 'H.Janisch - Team Partner',
          },
          {
            text: 'Working with Marco in our Developer Akademie group project was very pleasant. He stayed calm, focused and supported the team when things got tricky.',
            author: 'A. Fischer - Team Partner',
          },
        ],
      },
      contact: {
        label: 'Contact me',
        title: 'Let’s work together',
        problemHeadline: 'Looking for frontend support?',
        description:
          'I’m looking for a junior frontend position where I can contribute my skills, work on real projects and continue developing professionally.',
        question: 'Think I could be a good fit for your team? ',
        talkLink: 'Let’s talk.',
        nameLabel: 'What’s your name?',
        namePlaceholder: 'Your name',
        emailLabel: 'What’s your email?',
        emailPlaceholder: 'youremail@email.com',
        messageLabel: 'How can I help you?',
        messagePlaceholder: 'Hello Marco, I would like to talk about...',
        privacyStart: 'I’ve read the',
        privacyLink: 'privacy policy',
        privacyEnd: 'and agree to the processing of my data as outlined.',
        submitButton: 'Say Hello :)',
        sendingButton: 'Sending...',
        errors: {
          name: 'Please enter your name.',
          email: 'Please enter your email address.',
          invalidEmail: 'Please enter a valid email address.',
          message: 'Please enter a short message.',
          privacy: 'Please accept the privacy policy.',
        },
        feedback: {
          success: 'Thank you! Your message has been sent successfully.',
          error: 'Sorry, your message could not be sent. Please try again later.',
        },
      },
      footer: {
        role: 'Web Developer',
        location: 'Kiel Germany',
        copyright: '© Marco-Helge Alsen 2026',
        legalNotice: 'Legal Notice',
        privacyPolicy: 'Privacy Policy',
      },
      legalNotice: {
        title: 'Legal Notice',
        backAriaLabel: 'Back to portfolio',
        imprintTitle: 'Imprint',
        imprintItems: ['Marco-Helge Alsen', 'Schmetterlingsweg 15, 24235 Laboe', 'Laboe, Germany'],
        projectName: 'Portfolio',
        emailLabel: 'Email',
        sections: [
          {
            title: 'About this website',
            paragraphs: [
              'This portfolio is a student project created during my frontend development training. The information on this page is provided for transparency and may be updated when the website changes.',
            ],
          },
          {
            title: 'Purpose of this portfolio',
            paragraphs: [
              'This portfolio was created as part of my training at Developer Akademie GmbH. It is mainly used to present my learning progress, projects and frontend skills.',
              'The design template was provided by Developer Akademie GmbH. The implementation, texts and project content were adapted and built by me for learning and presentation purposes.',
            ],
          },
          {
            title: 'Own content',
            paragraphs: [
              'My own code, texts and project content remain my own work unless stated otherwise.',
            ],
          },
          {
            title: 'Use of this website',
            paragraphs: [
              'This website is intended as a personal portfolio and learning project. Please use it only in a normal and lawful way.',
            ],
          },
          {
            title: 'Liability for content and links',
            paragraphs: [
              'I try to keep the content and links up to date, but I cannot guarantee that everything is always complete, correct or available. Liability for external links lies with the respective website operators.',
            ],
          },
          {
            title: 'Contact for notices',
            paragraphs: [
              'If you notice an issue with this portfolio, a broken link or incorrect information, you can contact me by email.',
            ],
          },
        ],
        contactSectionTitle: 'Contact',
        contactText: 'For any questions or notices, please contact me at',
        date: 'Date: 2026',
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        backAriaLabel: 'Back to portfolio',
        privacyAtGlanceTitle: '1. Privacy at a glance',
        privacyAtGlanceText:
          'This privacy policy explains what personal data is collected when you visit this portfolio website and how this data is handled. Personal data means any information that can be used to identify you personally.',
        responsibleTitle: '2. Responsible person',
        responsibleIntro: 'The person responsible for this website is:',
        responsibleName: 'Marco-Helge Alsen',
        responsibleAddress: 'Schmetterlingsweg 15, 24235 Laboe',
        responsibleLocation: 'Laboe, Germany',
        emailLabel: 'Email',
        hostingTitle: '3. Hosting',
        hostingTextOne:
          'This website is hosted by an external hosting provider. When you visit this website, technical data may be collected automatically by the hosting provider. This can include your IP address, browser type, operating system, referrer URL, time of access and similar technical information.',
        hostingTextTwo:
          'This data is required to display the website correctly, ensure stability and improve the security of the website.',
        serverLogsTitle: '4. Server log files',
        serverLogsText:
          'The provider of this website may automatically collect and store information in server log files. These files are technically necessary to operate the website. The data is not used to identify individual visitors and is not combined with other data sources.',
        contactFormTitle: '5. Contact form',
        contactFormTextOne:
          'If you contact me through the contact form, the information you provide will be used to process your request. This includes your name, your email address and your message.',
        contactFormTextTwo:
          'The contact form on this website is processed through Formspree, a form backend service provided by Formspree Inc. When you submit the contact form, the data entered into the form is transmitted to Formspree and forwarded to me by email.',
        contactFormTextThree:
          'Formspree may process technical information that is necessary to provide the contact form functionality, protect the form against spam and deliver the submitted message. This may include information such as your IP address, browser information, the date and time of the request and the website from which the form was submitted.',
        contactFormTextFour:
          'The submitted data is used only to respond to your inquiry and is not intentionally passed on to third parties by me without your consent. You can also contact me directly by email instead of using the contact form.',
        formspreeInfoText: 'Further information can be found in Formspree’s privacy policy:',
        formspreeLinkText: 'Formspree Privacy Policy',
        emailContactTitle: '6. Email contact',
        emailContactText:
          'If you contact me by email, your message and contact details will be stored for the purpose of processing your inquiry and possible follow-up questions. This data will not be shared without your consent.',
        externalLinksTitle: '7. External links',
        externalLinksText:
          'This website contains links to external websites, such as GitHub, LinkedIn and Formspree. When you click on these links, you leave this website. The respective provider is responsible for the processing of personal data on the linked website.',
        cookiesTitle: '8. Cookies and tracking',
        cookiesText:
          'This portfolio website does not currently use tracking tools, analytics services or advertising cookies. If this changes in the future, this privacy policy will be updated accordingly.',
        rightsTitle: '9. Your rights',
        rightsTextOne:
          'You have the right to request information about your stored personal data, correction of incorrect data, deletion of your data, restriction of processing and objection to certain processing operations.',
        rightsTextTwo:
          'You also have the right to lodge a complaint with the competent supervisory authority if you believe that your personal data is being processed unlawfully.',
        securityTitle: '10. Data security',
        securityText:
          'This website uses technical and organizational measures to protect personal data against unauthorized access, loss or misuse. However, data transmission over the internet can never be completely secure.',
        changesTitle: '11. Changes to this privacy policy',
        changesText:
          'I may update this privacy policy from time to time to reflect technical changes, legal requirements or changes to the website. The latest version published on this page applies.',
        date: 'Date: 2026',
      },
    },
    de: {
      header: {
        aboutMe: 'Über mich',
        skills: 'Skills',
        projects: 'Projekte',
        menuAriaLabel: 'Menü öffnen',
      },
      hero: {
        role: 'Frontend Entwickler',
        firstName: 'Marco-Helge',
        lastName: 'Alsen',
        checkWork: 'Projekte ansehen',
        contactMe: 'Kontakt',
        scrollAriaLabel: 'Zu Über mich scrollen',
        socialAriaLabel: 'Social Links',
        emailAriaLabel: 'E-Mail senden',
        tickerRemote: 'Bereit für Remote-Arbeit',
        tickerRole: 'Frontend Entwickler',
        tickerLocation: 'Aus Kiel',
        tickerOpen: 'Offen für neue Projekte',
      },
      aboutMe: {
        photoAriaLabel: 'Profilfoto',
        label: 'Das bin ich',
        title: 'Über mich',
        intro:
          'Hey, ich bin Marco. Aktuell absolviere ich eine Umschulung zum Frontend-Entwickler. In meinen Projekten arbeite ich mit HTML, SCSS, JavaScript, TypeScript und Angular. Besonders wichtig sind mir übersichtliche Oberflächen, sinnvolle Interaktionen und Code, den ich nachvollziehen und gezielt weiterentwickeln kann.',
        location:
          'Ich lebe in der Nähe von Kiel und bin offen für Remote-Arbeit. Im Team schätze ich klare Absprachen, ehrliches Feedback und einen respektvollen Umgang.',
        mindset:
          'Mein Schwerpunkt liegt auf Angular, TypeScript und responsiven Weboberflächen. Außerdem habe ich bereits mit Vue gearbeitet und dadurch verschiedene Ansätze moderner Frontend-Frameworks kennengelernt.',
        problemSolving:
          'Bei technischen Problemen gehe ich strukturiert vor: Ich zerlege sie in kleinere Schritte, teste gezielt und möchte verstehen, warum eine Lösung funktioniert – statt Code einfach nur zu übernehmen.',
      },
      skills: {
        label: 'Technologien',
        title: 'Skill Set',
        description:
          'Mit diesen Technologien habe ich während meiner Umschulung und in eigenen Projekten praktisch gearbeitet. Mein Schwerpunkt liegt auf responsiven Oberflächen, verständlichem Code sowie Angular und TypeScript.',
        subHeadlineStart: 'Du suchst',
        subHeadlineHighlight: 'noch etwas anderes?',
        subText:
          'In neue Technologien arbeite ich mich gerne ein. Wenn mein Profil zu deinem Team passt, freue ich mich über eine Nachricht.',
        buttonText: 'Kontakt',
        gridAriaLabel: 'Technologie-Skills',
        growthAriaLabel: 'Lerninteressen anzeigen',
        growthPopover: 'Ich möchte noch lernen',
        growthLabel: 'Growth mindset',
      },
      projects: {
        label: 'Portfolio',
        title: 'Projekte',
        intro:
          'Hier findest du eine Auswahl meiner Projekte. Öffne ein Projekt, um mehr über die Funktionen und die eingesetzten Technologien zu erfahren.',
        modalHeadline: 'Worum geht es in diesem Projekt?',
        closeAriaLabel: 'Projekt-Details schließen',
        nextProject: 'Nächstes Projekt',
        previewAltSuffix: 'Vorschau',
        githubLabel: 'GitHub',
        liveLabel: 'Live Test',
        items: [
          {
            number: '01',
            title: 'Join',
            description:
              'Ein Task-Manager nach dem Kanban-Prinzip, den ich im Team entwickelt habe. Dabei habe ich mit Angular-Komponenten, Formularen, Routing und strukturierten Daten gearbeitet.',
            image: 'images/projects/join.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev',
            liveUrl: 'https://example.com',
            technologies: [
              { name: 'Angular', icon: 'icons/skills/angular.svg' },
              { name: 'TypeScript', icon: 'icons/skills/typescript.svg' },
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'Firebase', icon: 'icons/skills/firebase.svg' },
            ],
          },
          {
            number: '02',
            title: 'Sharky',
            description:
              'Ein 2D-Unterwasserspiel, das ich mit objektorientiertem JavaScript und Canvas umgesetzt habe. Es verwendet Klassen, Kollisionsabfragen, Tastatursteuerung und eigene Spiellogik.',
            image: 'images/projects/sharky.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev/sharky',
            liveUrl: 'https://sharky.marco-helge.de',
            technologies: [
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'JavaScript', icon: 'icons/skills/javascript.svg' },
            ],
          },
          {
            number: '03',
            title: 'Pokedex',
            description:
              'Eine Pokédex-App, die Daten asynchron aus einer REST API lädt. Sie bietet dynamisch gerenderte Karten, eine Suche und eine detaillierte Pokémon-Ansicht.',
            image: 'images/projects/pokedex.webp',
            githubUrl: 'https://github.com/MarcoHelgeDev/pokedex',
            liveUrl: 'https://pokedex.marco-helge.de',
            technologies: [
              { name: 'HTML', icon: 'icons/skills/html.svg' },
              { name: 'CSS', icon: 'icons/skills/css.svg' },
              { name: 'JavaScript', icon: 'icons/skills/javascript.svg' },
              { name: 'REST-API', icon: 'icons/skills/restapi.svg' },
            ],
          },
        ],
      },
      testimonials: {
        title: 'Was meine Kollegen über mich sagen',
        previousAriaLabel: 'Vorherige Referenz',
        nextAriaLabel: 'Nächste Referenz',
        dotAriaLabel: 'Referenz anzeigen',
        references: [
          {
            text: 'Ich habe mit Marco-Helge in der Developer Akademie zusammen studiert und gemeinsam an einem Lernprojekt gearbeitet. Als erfahrener Entwickler kann ich mit Überzeugung sagen, dass er ein hervorragender Teamplayer ist. Er hat neue Prinzipien und Entwicklungsansätze immer schnell verstanden und umgesetzt, und sein Code war stets sauber und durchdacht — Nacharbeiten war praktisch nie nötig. Wer mit ihm zusammenarbeitet, bekommt einen zuverlässigen und starken Kollegen im Team.',
            author: 'Levgen Bilion - Frontend Developer',
          },
          {
            text: 'Marco war ein zuverlässiger Projektpartner. Wenn etwas unklar war, hat er nachgefragt und weitergemacht, bis das Problem gelöst war.',
            author: 'H.Janisch - Team Partner',
          },
          {
            text: 'Die Zusammenarbeit mit Marco im Gruppenprojekt bei der Developer Akademie war angenehm. Er blieb ruhig, fokussiert und hat das Team unterstützt, wenn es schwierig wurde.',
            author: 'A. Fischer - Team Partner',
          },
        ],
      },
      contact: {
        label: 'Kontakt',
        title: 'Lass uns zusammenarbeiten',
        problemHeadline: 'Du suchst Verstärkung im Frontend?',
        description:
          'Ich suche eine Junior-Position im Frontend, in der ich mein Wissen einbringen, an echten Projekten mitarbeiten und mich fachlich weiterentwickeln kann.',
        question: 'Mein Profil passt zu deinem Team? ',
        talkLink: 'Dann lass uns sprechen!',
        nameLabel: 'Wie heißt du?',
        namePlaceholder: 'Dein Name',
        emailLabel: 'Wie lautet deine E-Mail?',
        emailPlaceholder: 'deine@email.de',
        messageLabel: 'Wie kann ich dir helfen?',
        messagePlaceholder: 'Hallo Marco, ich möchte gerne über ... sprechen.',
        privacyStart: 'Ich habe die',
        privacyLink: 'Datenschutzerklärung',
        privacyEnd: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
        submitButton: 'Absenden :)',
        sendingButton: 'Wird gesendet...',
        errors: {
          name: 'Bitte gib deinen Namen ein.',
          email: 'Bitte gib deine E-Mail-Adresse ein.',
          invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
          message: 'Bitte schreibe eine kurze Nachricht.',
          privacy: 'Bitte akzeptiere die Datenschutzerklärung.',
        },
        feedback: {
          success: 'Danke! Deine Nachricht wurde erfolgreich gesendet.',
          error:
            'Sorry, deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.',
        },
      },
      footer: {
        role: 'Web Entwickler',
        location: 'Kiel Deutschland',
        copyright: '© Marco-Helge Alsen 2026',
        legalNotice: 'Impressum',
        privacyPolicy: 'Datenschutz',
      },
      legalNotice: {
        title: 'Impressum',
        backAriaLabel: 'Zurück zum Portfolio',
        imprintTitle: 'Angaben gemäß Impressum',
        imprintItems: [
          'Marco-Helge Alsen',
          'Schmetterlingsweg 15, 24235 Laboe',
          'Laboe, Deutschland',
        ],
        projectName: 'Portfolio',
        emailLabel: 'E-Mail',
        sections: [
          {
            title: 'Über diese Webseite',
            paragraphs: [
              'Dieses Portfolio ist ein studentisches Projekt aus meiner Frontend-Umschulung. Die Informationen auf dieser Seite dienen der Transparenz und können angepasst werden, wenn sich an der Webseite etwas ändert.',
            ],
          },
          {
            title: 'Zweck des Portfolios',
            paragraphs: [
              'Dieses Portfolio wurde im Rahmen meiner Weiterbildung bei der Developer Akademie GmbH erstellt. Es dient dazu, meinen Lernstand, meine Projekte und meine Frontend-Kenntnisse zu präsentieren.',
              'Die Designvorlage wurde von der Developer Akademie GmbH bereitgestellt. Die Umsetzung, Texte und Projektinhalte wurden von mir für Lern- und Präsentationszwecke angepasst und umgesetzt.',
            ],
          },
          {
            title: 'Eigene Inhalte',
            paragraphs: [
              'Eigener Code, eigene Texte und selbst erstellte Projektinhalte bleiben, soweit nicht anders angegeben, meine eigenen Inhalte.',
            ],
          },
          {
            title: 'Nutzung der Webseite',
            paragraphs: [
              'Diese Webseite ist als persönliches Portfolio und Lernprojekt gedacht. Bitte nutze sie nur auf normale und rechtmäßige Weise.',
            ],
          },
          {
            title: 'Haftung für Inhalte und Links',
            paragraphs: [
              'Ich bemühe mich, Inhalte und Links aktuell zu halten, kann aber nicht garantieren, dass jederzeit alles vollständig, korrekt oder erreichbar ist. Für externe Links sind die jeweiligen Betreiber verantwortlich.',
            ],
          },
          {
            title: 'Hinweise und Kontakt',
            paragraphs: [
              'Falls dir ein Fehler, ein kaputter Link oder eine unklare Information auffällt, kannst du mich gerne per E-Mail kontaktieren.',
            ],
          },
        ],
        contactSectionTitle: 'Kontakt',
        contactText: 'Bei Fragen oder Hinweisen erreichst du mich unter',
        date: 'Stand: 2026',
      },
      privacyPolicy: {
        title: 'Datenschutzerklärung',
        backAriaLabel: 'Zurück zum Portfolio',
        privacyAtGlanceTitle: '1. Datenschutz auf einen Blick',
        privacyAtGlanceText:
          'Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten beim Besuch dieser Portfolio-Webseite erhoben werden und wie diese Daten verarbeitet werden. Personenbezogene Daten sind alle Informationen, mit denen du persönlich identifiziert werden kannst.',
        responsibleTitle: '2. Verantwortliche Person',
        responsibleIntro: 'Verantwortlich für diese Webseite ist:',
        responsibleName: 'Marco-Helge Alsen',
        responsibleAddress: 'Schmetterlingsweg 15, 24235 Laboe',
        responsibleLocation: 'Laboe, Deutschland',
        emailLabel: 'E-Mail',
        hostingTitle: '3. Hosting',
        hostingTextOne:
          'Diese Webseite wird bei einem externen Hostinganbieter betrieben. Beim Besuch dieser Webseite können technische Daten automatisch durch den Hostinganbieter erfasst werden. Dazu können IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Zeitpunkt des Zugriffs und ähnliche technische Informationen gehören.',
        hostingTextTwo:
          'Diese Daten sind erforderlich, um die Webseite korrekt darzustellen, die Stabilität sicherzustellen und die Sicherheit der Webseite zu verbessern.',
        serverLogsTitle: '4. Server-Logfiles',
        serverLogsText:
          'Der Anbieter dieser Webseite kann automatisch Informationen in Server-Logfiles erheben und speichern. Diese Dateien sind technisch notwendig, um die Webseite zu betreiben. Die Daten werden nicht dazu genutzt, einzelne Besucher zu identifizieren, und werden nicht mit anderen Datenquellen zusammengeführt.',
        contactFormTitle: '5. Kontaktformular',
        contactFormTextOne:
          'Wenn du mich über das Kontaktformular kontaktierst, werden die von dir eingegebenen Informationen zur Bearbeitung deiner Anfrage verwendet. Dazu gehören dein Name, deine E-Mail-Adresse und deine Nachricht.',
        contactFormTextTwo:
          'Das Kontaktformular dieser Webseite wird über Formspree verarbeitet, einen Formular-Backend-Dienst der Formspree Inc. Wenn du das Kontaktformular absendest, werden die eingegebenen Daten an Formspree übertragen und per E-Mail an mich weitergeleitet.',
        contactFormTextThree:
          'Formspree kann technische Informationen verarbeiten, die notwendig sind, um das Kontaktformular bereitzustellen, Spam zu verhindern und die übermittelte Nachricht zuzustellen. Dazu können zum Beispiel IP-Adresse, Browserinformationen, Datum und Uhrzeit der Anfrage sowie die Webseite gehören, von der das Formular abgesendet wurde.',
        contactFormTextFour:
          'Die übermittelten Daten werden nur verwendet, um deine Anfrage zu beantworten, und von mir nicht absichtlich ohne deine Zustimmung an Dritte weitergegeben. Du kannst mich alternativ auch direkt per E-Mail kontaktieren.',
        formspreeInfoText:
          'Weitere Informationen findest du in der Datenschutzerklärung von Formspree:',
        formspreeLinkText: 'Formspree Datenschutzerklärung',
        emailContactTitle: '6. Kontakt per E-Mail',
        emailContactText:
          'Wenn du mich per E-Mail kontaktierst, werden deine Nachricht und Kontaktdaten zur Bearbeitung deiner Anfrage und möglicher Rückfragen gespeichert. Diese Daten werden ohne deine Zustimmung nicht weitergegeben.',
        externalLinksTitle: '7. Externe Links',
        externalLinksText:
          'Diese Webseite enthält Links zu externen Webseiten, zum Beispiel GitHub, LinkedIn und Formspree. Wenn du diese Links anklickst, verlässt du diese Webseite. Für die Verarbeitung personenbezogener Daten auf der verlinkten Webseite ist der jeweilige Anbieter verantwortlich.',
        cookiesTitle: '8. Cookies und Tracking',
        cookiesText:
          'Diese Portfolio-Webseite verwendet aktuell keine Tracking-Tools, Analyse-Dienste oder Werbe-Cookies. Sollte sich das zukünftig ändern, wird diese Datenschutzerklärung entsprechend angepasst.',
        rightsTitle: '9. Deine Rechte',
        rightsTextOne:
          'Du hast das Recht auf Auskunft über deine gespeicherten personenbezogenen Daten, Berichtigung falscher Daten, Löschung deiner Daten, Einschränkung der Verarbeitung und Widerspruch gegen bestimmte Verarbeitungsvorgänge.',
        rightsTextTwo:
          'Außerdem hast du das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn du der Meinung bist, dass deine personenbezogenen Daten rechtswidrig verarbeitet werden.',
        securityTitle: '10. Datensicherheit',
        securityText:
          'Diese Webseite nutzt technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Eine Datenübertragung im Internet kann jedoch nie vollständig sicher sein.',
        changesTitle: '11. Änderungen dieser Datenschutzerklärung',
        changesText:
          'Ich kann diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um technische Änderungen, gesetzliche Anforderungen oder Änderungen an der Webseite zu berücksichtigen. Es gilt die jeweils aktuelle Version auf dieser Seite.',
        date: 'Stand: 2026',
      },
    },
  };

  switchLanguage(language: Language) {
    this.currentLanguage.set(language);
    this.updateDocumentLanguage(language);

    try {
      localStorage.setItem(this.storageKey, language);
    } catch {
      // The language still switches when storage is unavailable.
    }
  }

  isEnglish() {
    return this.currentLanguage() === 'en';
  }

  isGerman() {
    return this.currentLanguage() === 'de';
  }

  get currentTexts() {
    return this.texts[this.currentLanguage()];
  }

  private getInitialLanguage(): Language {
    try {
      const savedLanguage = localStorage.getItem(this.storageKey);

      if (savedLanguage === 'en' || savedLanguage === 'de') {
        this.updateDocumentLanguage(savedLanguage);
        return savedLanguage;
      }
    } catch {
      // Fall back to English when storage is unavailable.
    }

    this.updateDocumentLanguage('en');
    return 'en';
  }

  private updateDocumentLanguage(language: Language) {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }
}

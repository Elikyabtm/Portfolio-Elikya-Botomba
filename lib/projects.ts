export type Track = {
  title: string
  cover: string
  audio: string
  volume?: string
}

export type Project = {
  id: string
  title: string
  category: "visuals" | "digital" | "sound" | "motion"
  year: string
  role: string
  tools: string[]
  challenge: string
  description: string
  thumbnailColor: string
  images?: string[]
  thumbnail?: string
  tracks?: Track[]
  video?: string
  websiteUrl?: string
  mobileOnly?: boolean
}

export const projects: Project[] = [
    {
    id: "01",
    title: "SCARED OF MY OWN IMAGE PART.1",
    category: "visuals",
    year: "2024",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Capturer l'essence et la personnalité de differents visages à travers une serie de portraits illustres avec un style hachure a l'encre.",
    description:
      "Une série de 7 portraits digitaux realisés avec une technique de hachures croisées. Chaque illustration explore les jeux de lumiere, les textures de peau et les expressions, en combinant un trait brut a l'encre avec des aplats de couleur numeriques.",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/portraits/portraits1.png",
    images: [
      "/images/portraits/portrait01.jpg",
      "/images/portraits/portrait02.jpg",
      "/images/portraits/portrait03.jpg",
      "/images/portraits/portrait04.jpg",
      "/images/portraits/portrait05.jpg",
      "/images/portraits/portrait06.jpg",
      "/images/portraits/portrait07.jpg",
    ],
  },
  {
    id: "02",
    title: "NOCTA - SOCIAL AD",
    category: "motion",
    year: "2025",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    challenge: "Realiser une courte publicite video (Social Ad) pour la marque NOCTA, destinee aux reseaux sociaux (Snapchat, Instagram, Youtube).",
    description: "Une publicite dynamique et percutante pour la marque NOCTA. Le format Social Ad impose un rythme rapide, des visuels forts et un message clair en quelques secondes. Le montage joue sur les transitions, la typographie animee et l'energie de la marque.",
    thumbnail: "/videos/noctacover.png",
    video: "/videos/nocta-v2.mp4",
    thumbnailColor: ""
  },
  {
    id: "03",
    title: "Pop Culture Crossroads",
    category: "visuals",
    year: "2026",
    role: "Illustratrice",
    tools: ["Illustrator"],
    challenge:
      "Créer des crossovers visuels entre des univers cultes du cinéma et des séries tout en conservant les symboles iconiques qui rendent chaque œuvre immédiatement reconnaissable.",
    description:
      "Pop Culture Crossroads est une série de stickers illustrés qui fusionne plusieurs univers cultes du cinéma et des séries. Chaque illustration agit comme un pont visuel entre deux mondes de la pop culture, en mélangeant leurs symboles et leurs codes graphiques. Le style repose sur un trait épuré, des formes simplifiées et des palettes de couleurs réduites inspirées des œuvres originales. La série explore la manière dont les imaginaires collectifs peuvent se rencontrer et dialoguer à travers des mashups visuels. Les quatre stickers réalisés sont : Hogwarts in the Upside Down (Poudlard dans le Monde à l'Envers), Mockingjay & Golden Snitch (geai moqueur et Vif d'Or), The Upside Down Express (le panneau de train de King's Cross menant au Monde à l'Envers), et Ghostbuster Demogorgon (le Demogorgon intégré au logo Ghostbusters).",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/stickers/stickers.png",
    images: [
      "/images/stickers/1.png",
      "/images/stickers/2.png",
      "/images/stickers/3.png",
      "/images/stickers/4.png",
      "/images/stickers/5.png",
    ],
  },
  {
    id: "04",
    title: "EMOTIONS",
    category: "sound",
    year: "2024",
    role: "Beatmaker",
    tools: ["FL Studio", "Serum", "Photoshop"],
    challenge:
      "Composer une série de prods liées à mes émotions du moment, chaque instrumentale étant le reflet brut d'un état d'esprit.",
    description:
      "Une collection de 5 productions originales, chacune associée à une cover art unique et une emotion. De 'Not Right' (Vol.1) a 'The End' (Vol.5), chaque morceau capture un sentiment precis : frustration, perte, introspection, errance et acceptation.",
    thumbnailColor: "#E60000",
    thumbnail: "/images/prods/covers.png",
    tracks: [
      { title: "Not Right", cover: "/images/prods/Not right.png", audio: "/audio/horizon.mp3", volume: "Vol.1" },
      { title: "Lost", cover: "/images/prods/Lost.jpg", audio: "/audio/lost.mp3", volume: "Vol.2" },
      { title: "Frustrated", cover: "/images/prods/Frustrated.png", audio: "/audio/frustrated.mp3", volume: "Vol.3" },
      { title: "Look Around", cover: "/images/prods/Look around.png", audio: "/audio/look-around.mp3", volume: "Vol.4" },
      { title: "The End", cover: "/images/prods/The End.png", audio: "/audio/the-end.mp3", volume: "Vol.5" },
    ],
  },
    {
    id: "05",
    title: "Amnésia",
    category: "digital",
    year: "2026",
    role: "Game Designer & Developer",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Créer une expérience immersive d’enquête numérique dans laquelle le joueur reconstitue son identité uniquement à partir de traces digitales fragmentées.",
    description:
      "Amnesia est un jeu d’enquête interactif qui plonge le joueur dans une interface simulant un système informatique. Privé de mémoire, il doit explorer des e-mails, des fichiers, des photos et divers documents afin de reconstituer progressivement son identité. L’expérience repose sur l’observation, l’analyse et la déduction, en laissant au joueur la liberté d’interpréter les indices disponibles. Chaque élément consulté contribue à construire une narration fragmentée, où plusieurs pistes peuvent coexister avant de révéler la vérité. Le projet explore les notions de mémoire, d’identité et de narration interactive à travers une interface minimaliste inspirée des environnements numériques réels.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/amnesiacover.png",
    websiteUrl: "https://amnesia-ten.vercel.app/",
    images: [
      "/images/projects/amnesia1.png",
      "/images/projects/amnesia2.png",
    ],
  },
  {
    id: "06",
    title: "DOONYS - PUB PROMO",
    category: "motion",
    year: "2024",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    challenge:
      "Concevoir une video promotionnelle animee pour la marque DOONYS, mettant en valeur l'univers et les produits de la marque.",
    description:
      "Une animation promotionnelle coloree et energique pour DOONYS. Le motion design combine typographie animee, transitions fluides et mise en scene des produits pour creer un spot engageant et memorable.",
    thumbnailColor: "#E60000",
    thumbnail: "/videos/doonyscover.png",
    video: "/videos/doonys.mp4",
  },
  {
    id: "07",
    title: "SCARED OF MY OWN IMAGE PART.2",
    category: "visuals",
    year: "2026",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Capturer l'essence et la personnalité de differents visages à travers une serie de portraits illustres avec un style hachure a l'encre.",
    description:
      "Une série de 8 portraits digitaux realisés avec une technique de hachures croisées. Chaque illustration explore les jeux de lumiere, les textures de peau et les expressions, en combinant un trait brut a l'encre avec des aplats de couleur numeriques.",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/portraits/portraits2.png",
    images: [
      "/images/portraits/portrait08.jpg",
      "/images/portraits/portrait09.jpg",
      "/images/portraits/portrait10.jpg",
      "/images/portraits/portrait11.jpg",
      "/images/portraits/portrait12.jpg",
      "/images/portraits/portrait13.jpg",
      "/images/portraits/portrait14.jpg",
      "/images/portraits/portrait15.jpg",
    ],
  },

  {
    id: "08",
    title: "Hawkins Files",
    category: "digital",
    year: "2025",
    role: "UX/UI Designer & Developer",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Transformer l'univers narratif de Stranger Things en une experience web interactive permettant aux utilisateurs d'enqueter sur les evenements paranormaux survenus a Hawkins.",
    description:
      "Hawkins Files est une experience web immersive concue comme un systeme d'archives classifiees et un outil d'enquete inspire de la serie Stranger Things. Le projet transforme l'utilisateur en agent charge d'analyser les anomalies liees a l'Upside Down a travers une interface rappelant les terminaux militaires et les bases de donnees gouvernementales. Le site propose une carte interactive de Hawkins, des chronologies detaillees couvrant les saisons 1 a 4, ainsi que des dossiers classifies sur les personnages et les creatures de la serie. Les lieux sont categorises par niveau de menace (standard, militaire ou paranormal) et chaque interaction permet d'acceder a des informations contextuelles, des evenements cles et des documents d'enquete. L'interface sombre, les codes couleurs (vert, orange, rouge) et les animations minimalistes renforcent l'immersion en simulant l'acces a une base de donnees secrete. Ce projet explore la rencontre entre web design, storytelling interactif et experience utilisateur narrative.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/hawkinsfilescover.png",
    websiteUrl: "https://hawkinsfiles.vercel.app/",
    images: [
      "/images/projects/hawkinsfiles1.png",
      "/images/projects/hawkinsfiles2.png",
      "/images/projects/hawkinsfiles3.png",
    ],
  },
  {
    id: "09",
    title: "Why Are Hyperlinks Blue?",
    category: "digital",
    year: "2025",
    role: "UX/UI Designer & Developer",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    challenge:
      "Transformer un article editorial sur l'histoire de la couleur des hyperliens en une experience mobile interactive capable de rendre un sujet technique accessible, engageant et memorable.",
    description:
      "Why Are Hyperlinks Blue? est une experience interactive de type scrollytelling concue pour mobile. Le projet adapte un article sur l'origine et l'evolution de la couleur des hyperliens en une narration visuelle et interactive. L'interface guide l'utilisateur a travers l'histoire du web, depuis les premiers concepts d'hypertexte comme le projet Xanadu jusqu'aux navigateurs des annees 1990 qui ont popularise les liens bleus. L'experience combine textes courts, cartes interactives, mini-tests et elements visuels afin de rendre un sujet technique plus accessible et immersif. Le design repose sur une direction artistique minimaliste dominee par le bleu, rappelant la couleur historique des hyperliens. Ce choix fait echo a l'histoire du navigateur Mosaic qui, en 1993, a largement popularise les liens bleus et contribue a en faire un standard visuel du web.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/hyperlink-cover.png",
    images: [
      "/images/projects/hyperlink-cover.png",
      "/images/projects/hyperlink-1.png",
      "/images/projects/hyperlink-2.png",
      "/images/projects/hyperlink-3.png",
    ],
    websiteUrl: "https://hyperlinks-pi.vercel.app/",
    mobileOnly: true,
  },
    {
    id: "10",
    title: "Ce que la mer rend",
    category: "digital",
    year: "2025",
    role: "Writter & Developer",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Concevoir un site littéraire immersif capable de traduire l’atmosphère d’un roman médiéval-fantastique en une expérience de lecture sensible, cinématique et interactive.",
    description:
      "Ce que la mer rend est un site littéraire immersif imaginé pour accompagner mon roman du même nom, une fiction médiévale-fantastique située sur l’île sauvage de Brunehame. Le projet plonge le visiteur dans un univers battu par les vents, entre falaises sombres, brume marine et lumières d’ambre, à travers une direction artistique évocatrice et une navigation pensée comme une expérience de lecture. Le site présente les personnages principaux, Edrin et Alma, met en scène un herbier interactif lié à l’univers du récit, et propose un curseur thématique explorant l’équilibre entre destruction et réparation. Une table des matières complète permet également d’accéder aux chapitres du roman, générés automatiquement depuis le fichier source, avec une lecture fluide et une navigation entre les pages. Le projet mêle narration, atmosphère visuelle et interaction pour transformer l’univers littéraire en expérience web sensible et immersive.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/cequelamerrendcover.png",
    websiteUrl: "https://cequelamerrend.vercel.app/",
    images: [
      "/images/projects/cequelamerrendcover.png",
      "/images/projects/cequelamerrend1.png",
      "/images/projects/cequelamerrend2.png",
    ],
  },
  {
    id: "11",
    title: "Nuance – Sensory Social Map",
    category: "digital",
    year: "2026",
    role: "UX/UI Designer & Developer",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    challenge:
      "Concevoir une application géolocalisée inclusive permettant aux personnes neurodivergentes d’anticiper les stimulations sensorielles de leur environnement et de se déplacer en ville de manière plus sereine.",
    description:
      "Nuance est une application sociale et géolocalisée pensée pour accompagner les personnes neurodivergentes dans leur exploration de l’espace urbain. Le projet propose une carte sensorielle interactive qui permet d’identifier l’intensité de différents facteurs comme le bruit, la luminosité ou l’affluence. L’utilisateur peut découvrir des lieux adaptés à ses besoins, appelés « sensory friendly », et accéder à des informations contextualisées pour anticiper son expérience. L’application intègre également une dimension communautaire forte avec le partage d’avis, de recommandations et de sorties collectives. Chaque profil est personnalisable selon les sensibilités de l’utilisateur, afin d’offrir une expérience adaptée et inclusive. Nuance vise à rendre la ville plus lisible, prévisible et accessible, tout en créant un espace de soutien et de lien social autour des expériences sensorielles.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/nuancecover.png",
    images: [
      "/images/projects/nuancecover.png",
      "/images/projects/nuance1.png",
      "/images/projects/nuance3.png",
    ],
    websiteUrl: "https://embed.figma.com/proto/OCpwN1TsSnBzLvMnMNTbyT/nuance-app-sociale-geolocalisee?page-id=2034%3A24685&node-id=5374-28262&viewport=522%2C208%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5374%3A28262&embed-host=share",
    mobileOnly: true,
  },
  {
    id: "12",
    title: "C'est quoi l'épiphysiolyse ?",
    category: "motion",
    year: "2025",
    role: "Motion Designer",
    tools: ["After Effects", "Photoshop"],
    challenge:
      "Concevoir une vidéo explicative ou “explainer video” sur le thème de l’anecdote/histoire.",
    description:
      "Une vidéo ayant pour objectif principal la pédagogie et doit utiliser toute la palette d’outils du motion design afin de rendre accessible un savoir que vous pourrez au choix synthétiser et vulgariser ou au contraire en développer la complexité.",
    thumbnailColor: "#E60000",
    thumbnail: "videos/epiphysiolysecover.png",
    video: "/videos/explicative.mp4",
  },
  {
    id: "13",
    title: "Série Brutaliste – Œuvres de Georges de La Tour",
    category: "visuals",
    year: "2024",
    role: "Graphiste",
    tools: ["Illustrator", "Photoshop"],
    challenge:
      "Réinterpréter des œuvres classiques de Georges de La Tour à travers une esthétique brutaliste contemporaine, en créant un contraste visuel fort entre la finesse du clair-obscur baroque et un traitement graphique radical.",
    description:
      "Cette série de trois posters revisite des tableaux de Georges de La Tour en les transformant en affiches brutalistes contemporaines. Le projet mélange art classique et design graphique en adoptant un langage visuel volontairement radical. Les compositions reposent sur une palette bicolore rouge et noir inspirée de l’esthétique protest punk et de l’impression sérigraphique. Les images sont traitées en aplats granuleux proches de la photocopie, avec des textures brutes rappelant les fanzines DIY et les impressions artisanales. Des textures de papier froissé renforcent l’aspect d’objet imprimé, presque clandestin. La direction typographique utilise des blocs massifs et des alignements stricts, caractéristiques du brutalisme graphique, combinés à une mise en page éditoriale mêlant titre impactant, cartouche descriptif et composition muséale revisitée. La série crée ainsi un dialogue visuel entre l’histoire de l’art et les codes du design contemporain.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/posters/delatour.png",
    images: [
      "/images/posters/diseuse.png",
      "/images/posters/musiciens.png",
      "/images/posters/tricheur.png",
    ],
  },
    {
    id: "14",
    title: "HarryPotterLand – Interactive Map",
    category: "digital",
    year: "2025",
    role: "Graphic Designer & Developer",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Concevoir une carte vectorielle interactive capable de représenter de manière claire, structurée et accessible les lieux emblématiques de l’univers de Harry Potter dans un format immersif et muséal.",
    description:
      "HarryPotterLand est une carte interactive inspirée de l’univers de Harry Potter, pensée comme un support de médiation visuelle et narrative. Le projet associe une conception graphique vectorielle réalisée sur Illustrator à un travail de postproduction visuelle et de mise en interaction via des outils de prototypage et de développement web. L’objectif est de proposer une lecture claire et attractive des lieux emblématiques de la saga, dans une forme adaptée à une exposition interactive. Chaque zone de la carte est enrichie par des pop-ups dynamiques déclenchés au clic, donnant accès à des informations contextuelles sur les bâtiments, les personnages notables qui les fréquentent ainsi que les événements marquants qui s’y déroulent. Le projet mêle cartographie illustrée, design d’interface et narration interactive pour transformer un univers fictionnel en expérience exploratoire accessible et engageante.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/harrypotterland.png",
    websiteUrl: "https://elikyabtm.github.io/Harrypotterland/",
    images: [
      "/images/projects/harrypotterland.png",
      "/images/projects/harrypotterland1.png",
      "/images/projects/harrypotterland2.png",
    ],
  },
  {
    id: "15",
    title: "Série Brutaliste - Posters Manga",
    category: "visuals",
    year: "2024",
    role: "Graphiste / Illustratrice",
    tools: ["Illustrator", "Photoshop"],
    challenge:
      "Réinterpréter des personnages emblématiques d’anime à travers une esthétique brutaliste contemporaine, en combinant les codes graphiques du manga avec une direction artistique éditoriale forte.",
    description:
      "Posters Manga – Série Brutaliste est une série d’affiches graphiques qui fusionne l’esthétique visuelle du manga avec les principes du design brutaliste. Chaque poster revisite un personnage emblématique d’anime en explorant son identité, son énergie et sa dualité à travers une composition graphique marquée. La direction artistique repose sur des typographies massives, des grilles géométriques apparentes inspirées de la mise en page éditoriale, ainsi que des textures brutes comme le papier froissé, le grain ou la trame d’impression. Les contrastes extrêmes évoquent l’univers des fanzines et des impressions DIY, tandis que le découpage en cases rappelle la narration visuelle du manga. Chaque affiche utilise une couleur dominante associée au personnage afin de créer une série cohérente tout en conservant une identité visuelle propre à chaque protagoniste.",
    thumbnailColor: "#EDEDED",
    thumbnail: "/images/posters/mangas.png",
    images: [
      "/images/posters/eren.png",
      "/images/posters/gon.png",
      "/images/posters/light.png",
      "/images/posters/luffy.png",
      "/images/posters/naruto.png",
      "/images/posters/tanjiro.png",
    ],
  },
    {
    id: "16",
    title: "Michelin Escapade",
    category: "digital",
    year: "2026",
    role: "UX/UI Designer & Developer",
    tools: ["Figma"],
    challenge:
      "Transformer l’autorité historique du Guide Michelin en un réflexe de consommation spontané et visuel pour la génération 25-30 ans.",
    description:
      "Michelin Escapade est un concept d’application mobile imaginé pour réinventer l’expérience du Guide Michelin à destination d’un public jeune et connecté. Le projet repense les codes traditionnels du guide gastronomique à travers une approche immersive, inspirée des usages des réseaux sociaux et des plateformes de contenu vertical. L’interface repose sur un scroll infini mêlant recommandations culinaires, destinations et expériences lifestyle dans un format visuel dynamique et spontané. Un onboarding personnalisé permet d’adapter les suggestions selon les habitudes, envies et styles de vie de chaque utilisateur afin de proposer une expérience sur mesure. Le concept introduit également des packages simplifiés combinant hôtel et restaurant en une seule réservation, afin de fluidifier l’organisation des escapades. Entre inspiration voyage, découverte culinaire et expérience premium, Michelin Escapade transforme le Guide Michelin en un compagnon de sortie intuitif, immersif et adapté aux nouveaux réflexes de consommation.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/mockup.png",
    images: [
      "/images/projects/mockup.png",
      "/images/projects/mockup 2.png",
      "/images/projects/Colors.png",
      "/images/projects/Typography.png",
      "/images/projects/Grid.png",
      "/images/projects/Buttons.png",
      "/images/projects/Inputs.png",
      "/images/projects/Components.png",
      "/images/projects/Icons.png",
      "/images/projects/Rewards.png",
      "/images/projects/Imagery.png",
    ],
 video: "/videos/Michelin.mp4",
  },
]

export const categories = [
  { value: "all", label: "TOUT" },
  { value: "visuals", label: "VISUELS" },
  { value: "digital", label: "DIGITAL" },
  { value: "sound", label: "SON" },
  { value: "motion", label: "MOTION" },
] as const

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getProjectsByCategory(
  category: string
): Project[] {
  if (category === "all") return projects
  return projects.filter((p) => p.category === category)
}

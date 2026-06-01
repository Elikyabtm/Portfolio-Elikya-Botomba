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
  showImages?: boolean
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
      "Capturer l'essence et la personnalité de différents visages à travers une série de portraits illustrés avec un style hachure à l'encre.",
    description:
      "Une série de 7 portraits digitaux realisés avec une technique de hachures croisées. Chaque illustration explore les jeux de lumiere, les textures de peau et les expressions, en combinant un trait brut à l'encre avec des aplats de couleur numeriques.",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/portraits/portraits1.webp",
    images: [
      "/images/portraits/portrait01.webp",
      "/images/portraits/portrait02.webp",
      "/images/portraits/portrait03.webp",
      "/images/portraits/portrait04.webp",
      "/images/portraits/portrait05.webp",
      "/images/portraits/portrait06.webp",
      "/images/portraits/portrait07.webp",
    ],
  },
  {
    id: "02",
    title: "NOCTA - SOCIAL AD",
    category: "motion",
    year: "2025",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    challenge: "Réaliser une courte publicité video (Social Ad) pour la marque NOCTA, destinée aux réseaux sociaux (Snapchat, Instagram, Youtube).",
    description: "Une publicité dynamique et percutante pour la marque NOCTA. Le format Social Ad impose un rythme rapide, des visuels forts et un message clair en quelques secondes. Le montage joue sur les transitions, la typographie animée et l'énergie de la marque.",
    thumbnail: "/videos/noctacover.webp",
    video: "/videos/nocta-v2.mp4",
    showImages: false,
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
    thumbnail: "/images/stickers/stickers.webp",
    images: [
      "/images/stickers/1.webp",
      "/images/stickers/2.webp",
      "/images/stickers/3.webp",
      "/images/stickers/4.webp",
      "/images/stickers/5.webp",
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
    thumbnail: "/images/prods/covers.webp",
    tracks: [
      { title: "Not Right", cover: "/images/prods/Not right.webp", audio: "/audio/horizon.mp3", volume: "Vol.1" },
      { title: "Lost", cover: "/images/prods/Lost.webp", audio: "/audio/lost.mp3", volume: "Vol.2" },
      { title: "Frustrated", cover: "/images/prods/Frustrated.webp", audio: "/audio/frustrated.mp3", volume: "Vol.3" },
      { title: "Look Around", cover: "/images/prods/Look around.webp", audio: "/audio/look-around.mp3", volume: "Vol.4" },
      { title: "The End", cover: "/images/prods/The End.webp", audio: "/audio/the-end.mp3", volume: "Vol.5" },
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
      "Amnesia est un jeu d’enquête interactif qui plonge le joueur dans une interface simulant un système informatique. Privé de mémoire, il doit explorer des e-mails, des fichiers, des photos et divers documents afin de reconstituer progressivement son identité. L’expérience repose sur l’observation, l’analyse et la déduction, en laissant au joueur la liberté d’interpréter les indices disponibles. Chaque élément consulté contribué à construire une narration fragmentée, où plusieurs pistes peuvent coexister avant de révéler la vérité. Le projet explore les notions de mémoire, d’identité et de narration interactive à travers une interface minimaliste inspirée des environnements numériques réels.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/amnesiacover.webp",
    websiteUrl: "https://amnesia-ten.vercel.app/",
    images: [
      "/images/projects/amnesia1.webp",
      "/images/projects/amnesia2.webp",
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
      "Concevoir une video promotionnelle animée pour la marque DOONYS, mettant en valeur l'univers et les produits de la marque.",
    description:
      "Une animation promotionnelle colorée et énergique pour DOONYS. Le motion design combine typographie animée, transitions fluides et mise en scene des produits pour créer un spot engageant et mémorable.",
    thumbnailColor: "#E60000",
    thumbnail: "/videos/doonyscover.webp",
    video: "/videos/doonys.mp4",
    showImages: false,
  },
  {
    id: "07",
    title: "SCARED OF MY OWN IMAGE PART.2",
    category: "visuals",
    year: "2026",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Capturer l'essence et la personnalité de différents visages à travers une série de portraits illustrés avec un style hachure à l'encre.",
    description:
      "Une série de 8 portraits digitaux realisés avec une technique de hachures croisées. Chaque illustration explore les jeux de lumiere, les textures de peau et les expressions, en combinant un trait brut à l'encre avec des aplats de couleur numeriques.",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/portraits/portraits2.webp",
    images: [
      "/images/portraits/portrait08.webp",
      "/images/portraits/portrait09.webp",
      "/images/portraits/portrait10.webp",
      "/images/portraits/portrait11.webp",
      "/images/portraits/portrait12.webp",
      "/images/portraits/portrait13.webp",
      "/images/portraits/portrait14.webp",
      "/images/portraits/portrait15.webp",
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
      "Transformer l'univers narratif de Stranger Things en une expérience web interactive permettant aux utilisateurs d'enquêter sur les événements paranormaux survenus à Hawkins.",
    description:
      "Hawkins Files est une expérience web immersive conçue comme un système d'archives classifiées et un outil d'enquête inspiré de la série Stranger Things. Le projet transforme l'utilisateur en agente chargée d'analyser les anomalies liées a l'Upside Down à travers une interface rappelant les terminaux militaires et les bases de données gouvernementales. Le site propose une carte interactive de Hawkins, des chronologies détaillées couvrant les saisons 1 à 4, ainsi que des dossiers classifiés sur les personnages et les créatures de la série. Les lieux sont catégorisés par niveau de menace (standard, militaire ou paranormal) et chaque interaction permet d'accéder a des informations contextuelles, des événements clés et des documents d'enquête. L'interface sombre, les codes couleurs (vert, orange, rouge) et les animations minimalistes renforcent l'immersion en simulant l'accès à une base de données secrète. Ce projet explore la rencontre entre web design, storytelling interactif et expérience utilisateur narrative.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/hawkinsfilescover.webp",
    websiteUrl: "https://hawkinsfiles.vercel.app/",
    images: [
      "/images/projects/hawkinsfiles1.webp",
      "/images/projects/hawkinsfiles2.webp",
      "/images/projects/hawkinsfiles3.webp",
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
      "Transformer un articlé editorial sur l'histoire de la couleur des hyperliens en une expérience mobile interactive capable de rendre un sujet technique accessible, engageant et mémorable.",
    description:
      "Why Are Hyperlinks Blue? est une expérience interactive de type scrollytelling conçue pour mobile. Le projet adapte un article sur l'origine et l'évolution de la couleur des hyperliens en une narration visuelle et interactive. L'interface guide l'utilisateur à travers l'histoire du web, depuis les premiers concepts d'hypertexte comme le projet Xanadu jusqu'aux navigateurs des années 1990 qui ont popularisé les liens bleus. L'expérience combine textes courts, cartes interactives, mini-tests et éléments visuels afin de rendre un sujet technique plus accessible et immersif. Le design repose sur une direction artistique minimaliste dominée par le bleu, rappelant la couleur historique des hyperliens. Ce choix fait écho à l'histoire du navigateur Mosaic qui, en 1993, a largement popularisé les liens bleus et contribué à en faire un standard visuel du web.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/hyperlink-cover.webp",
    images: [
      "/images/projects/hyperlink-cover.webp",
      "/images/projects/hyperlink-1.webp",
      "/images/projects/hyperlink-2.webp",
      "/images/projects/hyperlink-3.webp",
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
    thumbnail: "/images/projects/cequelamerrendcover.webp",
    websiteUrl: "https://cequelamerrend.vercel.app/",
    images: [
      "/images/projects/cequelamerrendcover.webp",
      "/images/projects/cequelamerrend1.webp",
      "/images/projects/cequelamerrend2.webp",
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
    thumbnail: "/images/projects/nuancecover.webp",
    images: [
      "/images/projects/nuancecover.webp",
      "/images/projects/nuance1.webp",
      "/images/projects/nuance3.webp",
    ],
    websiteUrl: "https://embed.figma.com/proto/OCpwN1TsSnBzLvMnMNTbyT/nuance-app-sociale-géolocalisée?page-id=2034%3A24685&node-id=5374-28262&viewport=522%2C208%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5374%3A28262&embed-host=share",
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
    thumbnail: "/videos/epiphysiolysecover.webp",
    video: "/videos/explicative.mp4",
    showImages: false,
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
    thumbnail: "/images/posters/delatour.webp",
    images: [
      "/images/posters/Diseuse.webp",
      "/images/posters/Musiciens.webp",
      "/images/posters/Tricheur.webp",
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
      "HarryPotterLand est une carte interactive inspirée de l’univers de Harry Potter, pensée comme un support de médiation visuelle et narrative. Le projet associe une conception graphique vectorielle réalisée sur Illustrator à un travail de postproduction visuelle et de mise en interaction via des outils de prototypage et de développement web. L’objectif est de proposer une lecture claire et attractive des lieux emblématiques de la saga, dans une forme adaptée à une exposition interactive. Chaque zone de la carte est enrichie par des pop-ups dynamiques déclénchés au clic, donnant accès à des informations contextuelles sur les bâtiments, les personnages notables qui les fréquentent ainsi que les événements marquants qui s’y déroulent. Le projet mêle cartographie illustrée, design d’interface et narration interactive pour transformer un univers fictionnel en expérience exploratoire accessible et engageante.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/harrypotterland.webp",
    websiteUrl: "https://elikyabtm.github.io/Harrypotterland/",
    images: [
      "/images/projects/harrypotterland.webp",
      "/images/projects/harrypotterland1.webp",
      "/images/projects/harrypotterland2.webp",
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
    thumbnail: "/images/posters/mangas.webp",
    images: [
      "/images/posters/Eren.webp",
      "/images/posters/Gon.webp",
      "/images/posters/Light.webp",
      "/images/posters/Luffy.webp",
      "/images/posters/Naruto.webp",
      "/images/posters/Tanjiro.webp",
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
      "Transformer l'autorité historique du Guide Michelin en un réflexe de consommation spontané et visuel pour la génération 25-30 ans.",
    description:
      "Michelin Escapade est un concept d'application mobile imaginé pour réinventer l'expérience du Guide Michelin à destination d'un public jeune et connecté. Le projet repense les codes traditionnels du guide gastronomique à travers une approche immersive, inspirée des usages des réseaux sociaux et des plateformes de contenu vertical. L'interface repose sur un scroll infini mêlant recommandations culinaires, destinations et expériences lifestyle dans un format visuel dynamique et spontané. Un onboarding personnalisé permet d'adapter les suggestions selon les habitudes, envies et styles de vie de chaque utilisateur afin de proposer une expérience sur mesure. Le concept introduit également des packages simplifiés combinant hôtel et restaurant en une seule réservation, afin de fluidifier l'organisation des escapades. Entre inspiration voyage, découverte culinaire et expérience premium, Michelin Escapade transforme le Guide Michelin en un compagnon de sortie intuitif, immersif et adapté aux nouveaux réflexes de consommation.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/mockup.webp",
    images: [
      "/images/projects/mockup.webp",
      "/images/projects/mockup 2.webp",
      "/images/projects/Colors.webp",
      "/images/projects/Typography.webp",
      "/images/projects/Grid.webp",
      "/images/projects/Buttons.webp",
      "/images/projects/Inputs.webp",
      "/images/projects/Components.webp",
      "/images/projects/Icons.webp",
      "/images/projects/Rewards.webp",
      "/images/projects/Imagery.webp",
    ],
    video: "/videos/Michelin.mp4",
    showImages: false,
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
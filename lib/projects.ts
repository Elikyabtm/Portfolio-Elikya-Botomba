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
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    id: "16",
    title: "Michelin Escapade",
    category: "digital",
    year: "2026",
    role: "Designer UX/UI & Développeuse",
    tools: ["Figma"],
    challenge:
      "Transformer l'autorité historique du Guide Michelin en un réflexe de consommation spontané et visuel pour la génération 18-30 ans.",
    description:
      "Michelin Escapade est un concept d'application mobile imaginé pour réinventer l'expérience du Guide Michelin à destination d'un public jeune et connecté. Le projet repense les codes traditionnels du guide gastronomique à travers une approche immersive, inspirée des usages des réseaux sociaux et des plateformes de contenu vertical. Scroll infini mêlant recommandations culinaires et destinations, onboarding personnalisé selon les habitudes de chacune, packages combinant hôtel et restaurant en une seule réservation. Michelin Escapade transforme le Guide en compagnon de sortie intuitif, adapté aux nouveaux réflexes de consommation.",
    thumbnailColor: "#0551C1",
    thumbnail: "/images/projects/Mockup.webp",
    images: [
      "/images/projects/Mockup.webp",
      "/images/projects/Mockup 2.webp",
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
    showImages: true,
  },
  {
    id: "05",
    title: "Amnésia",
    category: "digital",
    year: "2026",
    role: "Game Designer & Développeuse",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Créer une expérience immersive d'enquête numérique dans laquelle la joueuse reconstitue son identité uniquement à partir de traces digitales fragmentées.",
    description:
      "Amnesia est un jeu d'enquête interactif qui plonge la joueuse dans une interface simulant un système informatique. Privée de mémoire, elle doit explorer des e-mails, des fichiers, des photos et divers documents afin de reconstituer progressivement son identité. L'expérience repose sur l'observation, l'analyse et la déduction, en laissant une vraie liberté d'interprétation sur les indices disponibles. Chaque élément consulté contribue à construire une narration fragmentée, où plusieurs pistes coexistent avant que la vérité n'émerge. Le projet explore les notions de mémoire, d'identité et de narration interactive à travers une interface minimaliste inspirée des environnements numériques réels.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/amnesiacover.webp",
    websiteUrl: "https://amnesia-ten.vercel.app/",
    images: [
      "/images/projects/amnesia1.webp",
      "/images/projects/amnesia2.webp",
    ],
  },
  {
    id: "07",
    title: "SCARED OF MY OWN IMAGE PART.2",
    category: "visuals",
    year: "2026",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Continuer d'explorer, avec une nouvelle série de portraits, la relation douloureuse que certaines personnes entretiennent avec leur propre image celle que la société leur renvoie.",
    description:
      "La deuxième partie de la série poursuit le même geste : donner de la visibilité à des personnes que le regard collectif a tendance à effacer, juger ou exotiser. Huit nouveaux portraits, huit nouvelles présences, toujours avec les yeux hachurés, toujours avec ce même trait brut qui à la fois révèle et protège. Parce qu'avoir peur de son image, ce n'est pas une faiblesse, c'est souvent la conséquence directe d'un monde qui ne vous a pas appris à vous voir sans filtre.",
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
    id: "11",
    title: "Nuance – Sensory Social Map",
    category: "digital",
    year: "2026",
    role: "Designer UX/UI & Développeuse",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    challenge:
      "Concevoir une application géolocalisée inclusive permettant aux personnes neurodivergentes d'anticiper les stimulations sensorielles de leur environnement et de se déplacer en ville de manière plus sereine.",
    description:
      "Nuance est une application sociale et géolocalisée pensée pour accompagner les personnes neurodivergentes dans leur exploration de l'espace urbain. Une carte sensorielle interactive permet d'identifier l'intensité de différents facteurs comme le bruit, la luminosité ou l'affluence, et de repérer des lieux « sensory friendly » adaptés à ses besoins. L'application intègre une dimension communautaire forte : partage d'avis, recommandations, sorties collectives. Chaque profil est personnalisable selon les sensibilités de chacune, pour une expérience vraiment adaptée. Nuance vise à rendre la ville plus lisible, plus prévisible et plus accessible, tout en créant un espace de soutien autour des expériences sensorielles.",
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
    id: "10",
    title: "Ce que la mer rend",
    category: "digital",
    year: "2026",
    role: "Autrice & Développeuse",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Concevoir un site littéraire immersif capable de traduire l'atmosphère d'un roman médiéval-fantastique en une expérience de lecture sensible, cinématique et interactive.",
    description:
      "Ce que la mer rend est un site littéraire immersif conçu pour accompagner mon roman du même nom, une fiction médiévale-fantastique située sur l'île sauvage de Brunehame. Le projet plonge la visiteuse dans un univers battu par les vents, entre falaises sombres, brume marine et lumières d'ambre, à travers une direction artistique évocatrice et une navigation pensée comme une expérience de lecture à part entière. Le site présente les personnages principaux, met en scène un herbier interactif lié à l'univers du récit, et donne accès aux chapitres du roman via une table des matières générée automatiquement depuis le fichier source. Narration, atmosphère visuelle et interaction s'y mêlent pour transformer un univers littéraire en expérience web sensible.",
    thumbnailColor: "#1A1A1A",
    thumbnail: "/images/projects/cequelamerrendcover.webp",
    websiteUrl: "https://cequelamerrend.vercel.app/",
    images: [
      "/images/projects/cequelamerrendcover.webp",
      "/images/projects/cequelamerrend1.webp",
      "/images/projects/cequelamerrend2.webp",
    ],
  },
  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    id: "01",
    title: "SCARED OF MY OWN IMAGE PART.1",
    category: "visuals",
    year: "2025",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Représenter des personnes que la société marginalise ou fait se sentir jugées et d'explorer comment ce regard extérieur peut amener quelqu'un à avoir peur de sa propre image.",
    description:
      "Scared of My Own Image est une série de portraits illustrés qui met en lumière des personnes souvent invisibilisées ou stigmatisées : femmes voilées, personnes albinos, personnes chauves, silhouettes qui sortent des normes esthétiques dominantes. Chaque portrait est réalisé à la technique des hachures croisées, un trait brut et répétitif qui structure le visage, sauf les yeux, volontairement hachurés. Ce détail n'est pas anodin : il traduit l'idée de ne pas vouloir être vu, de se cacher derrière son propre regard, d'avoir peur de ce que le monde voit quand il vous regarde. La série interroge la norme, le jugement et la relation intime qu'on entretient avec son propre reflet.",
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
    id: "03",
    title: "Pop Culture Crossroads",
    category: "visuals",
    year: "2025",
    role: "Illustratrice",
    tools: ["Illustrator"],
    challenge:
      "Créer des crossovers visuels entre des univers cultes du cinéma et des séries, tout en conservant les symboles iconiques qui rendent chaque œuvre immédiatement reconnaissable.",
    description:
      "Pop Culture Crossroads est une série de stickers illustrés qui fusionne plusieurs univers cultes du cinéma et des séries. Chaque illustration fonctionne comme un pont visuel entre deux mondes de la pop culture, en mélangeant leurs symboles et leurs codes graphiques. Le style repose sur un trait épuré, des formes simplifiées et des palettes de couleurs réduites inspirées des œuvres originales. Les quatre stickers réalisés sont : Hogwarts in the Upside Down, Mockingjay & Golden Snitch, The Upside Down Express, et Ghostbuster Demogorgon : autant de mashups qui interrogent la manière dont nos imaginaires collectifs peuvent se croiser et dialoguer.",
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
    year: "2024-2025",
    role: "Beatmaker",
    tools: ["FL Studio", "Serum", "Photoshop"],
    challenge:
      "Composer une série de productions liées à mes émotions du moment chaque instrumentale étant le reflet brut d'un état d'esprit précis.",
    description:
      "Une collection de 5 productions originales, chacune associée à une cover art unique et à une émotion. De 'Not Right' (Vol.1) à 'The End' (Vol.5), chaque morceau capture un sentiment précis : frustration, perte, introspection, errance et acceptation. Un projet personnel autant que musical, où la composition devient un journal intime sonore.",
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
    id: "08",
    title: "Hawkins Files",
    category: "digital",
    year: "2025",
    role: "Designer UX/UI & Développeuse",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Transformer l'univers narratif de Stranger Things en une expérience web interactive permettant aux utilisatrices d'enquêter sur les événements paranormaux survenus à Hawkins.",
    description:
      "Hawkins Files est une expérience web immersive conçue comme un système d'archives classifiées, inspirée de la série Stranger Things. Le projet plonge la visiteuse dans le rôle d'une agente chargée d'analyser les anomalies liées à l'Upside Down, à travers une interface évoquant les terminaux militaires et les bases de données gouvernementales. Le site propose une carte interactive de Hawkins, des chronologies détaillées couvrant les saisons 1 à 4, ainsi que des dossiers classifiés sur les personnages et les créatures de la série. Les lieux sont catégorisés par niveau de menace et chaque interaction donne accès à des documents d'enquête contextuels. L'interface sombre, les codes couleurs (vert, orange, rouge) et les animations minimalistes renforcent l'immersion en simulant l'accès à une base de données secrète.",
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
    role: "Designer UX/UI & Développeuse",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    challenge:
      "Transformer un article éditorial sur l'histoire de la couleur des hyperliens en une expérience mobile interactive capable de rendre un sujet technique accessible, engageant et mémorable.",
    description:
      "Why Are Hyperlinks Blue? est une expérience de type scrollytelling conçue pour mobile. Le projet adapte un article sur l'origine et l'évolution de la couleur des hyperliens en une narration visuelle et interactive. L'interface guide la lectrice à travers l'histoire du web, depuis les premiers concepts d'hypertexte comme le projet Xanadu jusqu'aux navigateurs des années 1990 qui ont popularisé les liens bleus. Textes courts, cartes interactives, mini-tests et éléments visuels se combinent pour rendre un sujet technique réellement immersif. Le design repose sur une direction artistique minimaliste dominée par le bleu, couleur historique des hyperliens, popularisée par le navigateur Mosaic en 1993.",
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
    id: "12",
    title: "C'est quoi l'épiphysiolyse ?",
    category: "motion",
    year: "2025",
    role: "Motion Designer",
    tools: ["After Effects", "Photoshop"],
    challenge:
      "Concevoir une vidéo explicative sur le thème de l'anecdote médicale pour rendre accessible un savoir complexe grâce au motion design.",
    description:
      "Une vidéo pédagogique qui utilise toute la palette du motion design pour vulgariser l'épiphysiolyse, une pathologie de la hanche touchant principalement les adolescents. L'objectif : rendre un sujet médical clair, engageant et mémorable, sans jamais sacrifier la rigueur à l'entertainment.",
    thumbnailColor: "#E60000",
    thumbnail: "/videos/epiphysiolysecover.webp",
    video: "/videos/explicative.mp4",
    showImages: false,
  },
  {
    id: "13",
    title: "Série Brutaliste – Œuvres de Georges de La Tour",
    category: "visuals",
    year: "2025",
    role: "Graphiste",
    tools: ["Illustrator", "Photoshop"],
    challenge:
      "Réinterpréter des œuvres classiques de Georges de La Tour à travers une esthétique brutaliste contemporaine et de créer un choc visuel entre la finesse du clair-obscur baroque et un traitement graphique radical.",
    description:
      "Cette série de trois posters revisite des tableaux de Georges de La Tour en les transformant en affiches brutalistes contemporaines. Palette bicolore rouge et noir inspirée du protest punk, images traitées en aplats granuleux proches de la photocopie, textures de papier froissé, typographies massives en blocs stricts : tout le vocabulaire du brutalisme graphique est convoqué pour entrer en collision avec la douceur du clair-obscur baroque. Le résultat crée un dialogue inattendu entre histoire de l'art et design contemporain, entre le musée et le fanzine.",
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
    role: "Designer Graphique & Développeuse",
    tools: ["HTML", "CSS", "JavaScript", "Illustrator"],
    challenge:
      "Concevoir une carte vectorielle interactive représentant de façon claire, structurée et immersive les lieux emblématiques de l'univers de Harry Potter.",
    description:
      "HarryPotterLand est une carte interactive inspirée de l'univers de Harry Potter, pensée comme un support de médiation visuelle et narrative. Conçue sur Illustrator puis mise en interaction via le développement web, elle propose une lecture claire et attractive des lieux emblématiques de la saga. Chaque zone de la carte est enrichie de pop-ups dynamiques déclenchés au clic, donnant accès à des informations sur les bâtiments, les personnages et les événements marquants qui s'y déroulent. Cartographie illustrée, design d'interface et narration interactive se combinent pour transformer un univers fictionnel en expérience exploratoire.",
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
    year: "2025",
    role: "Graphiste & Illustratrice",
    tools: ["Illustrator", "Photoshop"],
    challenge:
      "Réinterpréter des personnages emblématiques d'anime à travers une esthétique brutaliste contemporaine, en fusionnant les codes graphiques du manga avec une direction artistique éditoriale forte.",
    description:
      "Posters Manga – Série Brutaliste est une série d'affiches qui fusionne l'esthétique visuelle du manga avec les principes du design brutaliste. Chaque poster revisite un personnage emblématique d'anime à travers sa dualité, son énergie et son identité : typographies massives, grilles géométriques apparentes, textures brutes de papier froissé et découpages en cases rappelant la narration visuelle du manga. Chaque affiche adopte une couleur dominante associée au personnage, créant une série cohérente où chaque protagoniste garde pourtant une identité visuelle qui lui est propre.",
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
  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: "02",
    title: "NOCTA - SOCIAL AD",
    category: "motion",
    year: "2024",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    challenge:
      "Réaliser une courte publicité vidéo (Social Ad) pour la marque NOCTA, destinée aux réseaux sociaux (Snapchat, Instagram, YouTube).",
    description:
      "Une publicité dynamique et percutante pour la marque NOCTA. Le format Social Ad impose un rythme rapide, des visuels forts et un message clair en quelques secondes. Le montage joue sur les transitions, la typographie animée et l'énergie brute de la marque.",
    thumbnail: "/videos/noctacover.webp",
    video: "/videos/nocta-v2.mp4",
    showImages: false,
    thumbnailColor: "",
  },
  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: "06",
    title: "DOONYS - PUB PROMO",
    category: "motion",
    year: "2023",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    challenge:
      "Concevoir une vidéo promotionnelle animée pour la marque DOONYS, mettant en valeur l'univers et les produits de la marque.",
    description:
      "Une animation promotionnelle colorée et énergique pour DOONYS. Le motion design combine typographie animée, transitions fluides et mise en scène des produits pour créer un spot engageant et mémorable.",
    thumbnailColor: "#E60000",
    thumbnail: "/videos/doonyscover.webp",
    video: "/videos/doonys.mp4",
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

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects
  return projects.filter((p) => p.category === category)
}
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
}

export const projects: Project[] = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
    title: "EMOTIONS VOL.",
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
    id: "04",
    title: "SCARED OF MY OWN IMAGE VOL.1",
    category: "visuals",
    year: "2024",
    role: "Illustratrice",
    tools: ["Photoshop", "Procreate"],
    challenge:
      "Capturer l'essence et la personnalité de differents visages à travers une serie de portraits illustres avec un style hachure a l'encre.",
    description:
      "Une série de 7 portraits digitaux realisés avec une technique de hachures croisées. Chaque illustration explore les jeux de lumiere, les textures de peau et les expressions, en combinant un trait brut a l'encre avec des aplats de couleur numeriques.",
    thumbnailColor: "#F2F2F2",
    thumbnail: "/images/portraits/portraits.png",
    images: [
      "/images/portraits/portrait-01.jpg",
      "/images/portraits/portrait-02.jpg",
      "/images/portraits/portrait-03.jpg",
      "/images/portraits/portrait-04.jpg",
      "/images/portraits/portrait-05.jpg",
      "/images/portraits/portrait-06.jpg",
      "/images/portraits/portrait-07.jpg",
    ],
  },
  {
    id: "05",
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
    id: "06",
    title: "GRID BREAKER",
    category: "digital",
    year: "2024",
    role: "Web Designer / Developpeur",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Redesigner le site portfolio d'une agence creative pour refleter leur philosophie rebelle et non-conformiste.",
    description:
      "Un site portfolio qui casse intentionnellement les conventions de grille. Les elements se chevauchent, le texte sort de l'ecran et les elements interactifs ont des comportements inattendus - tout en maintenant utilisabilite et accessibilite.",
    thumbnailColor: "#F2F2F2",
  },
  {
    id: "07",
    title: "ECHO CHAMBER",
    category: "sound",
    year: "2023",
    role: "Sound Designer / Beatmaker",
    tools: ["Ableton Live", "Max/MSP", "Audacity"],
    challenge:
      "Concevoir l'environnement sonore d'une installation artistique immersive sur les chambres d'echo informationnelles.",
    description:
      "Une experience audio spatiale ou les voix des visiteurs sont capturees, deformees et rejouees depuis plusieurs enceintes, creant un paysage sonore en constante evolution refletant la boucle de feedback de la consommation mediatique moderne.",
    thumbnailColor: "#E60000",
  },
  {
    id: "08",
    title: "PAPER CUT",
    category: "visuals",
    year: "2023",
    role: "Graphiste / Illustrateur",
    tools: ["Illustrator", "Photoshop", "Risograph"],
    challenge:
      "Creer une serie de zines en edition limitee explorant l'intersection du street art et de la gravure sur bois japonaise traditionnelle.",
    description:
      "Une serie de 4 zines de 24 pages chacun, imprimes en combinant Risograph et techniques de tamponnage a la main. Le langage visuel fusionne les formes du graffiti avec des compositions inspirees de l'ukiyo-e.",
    thumbnailColor: "#F2F2F2",
  },
  {
    id: "09",
    title: "c'est quoi l'épiphysiolyse ?",
    category: "motion",
    year: "2025",
    role: "Motion Designer",
    tools: ["After Effects", "Photoshop"],
    challenge:
      "Concevoir une vidéo explicative ou “explainer video” sur le thème de l’anecdote/histoire.",
    description:
      "Une vidéo ayant pour objectif principal la pédagogie et doit utiliser toute la palette d’outils du motion design afin de rendre accessible un savoir que vous pourrez au choix synthétiser et vulgariser ou au contraire en développer la complexité.",
    thumbnailColor: "#E60000",
    video: "/videos/explicative.mp4",
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

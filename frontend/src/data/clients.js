// ============================================================
// CLIENT LOGOS — Home page marquee. Use `logo` for image path or URL.
// Omit `logo` to fall back to site favicon via `url`. Add files under
// frontend/public/client-logos/ for custom uploads (e.g. "/client-logos/abrar.png").
// ============================================================

const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const CLIENTS = [
  {
    name: "Lamiya Alkhaleej",
    url: "https://www.lamiyaalkhaleej.com/",
    logo: favicon("lamiyaalkhaleej.com"),
  },
  {
    name: "Abrar Caterers",
    url: "https://www.abrarcaterers.com/",
    logo: favicon("abrarcaterers.com"),
  },
  {
    name: "Tawakkal Muslim",
    url: "https://www.tawakkalmuslim.com/",
    logo: favicon("tawakkalmuslim.com"),
  },
  {
    name: "Floriva Gifts",
    url: "https://florivagifts.com/",
    logo: favicon("florivagifts.com"),
  },
  {
    name: "Al Mirath",
    url: "https://www.almirath.ae/",
    logo: favicon("almirath.ae"),
  },
  {
    name: "BrightLeaf",
    url: "https://brightleaf.com/",
    logo: favicon("brightleaf.com"),
  },
  {
    name: "FitTrack",
    url: "https://play.google.com/store/apps/details?id=com.tawakkalmuslim",
    logo: favicon("play.google.com"),
  },
];

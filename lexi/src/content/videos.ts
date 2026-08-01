export type PortfolioVideo = {
  title: string;
  youtubeUrl: string;
  poster: string;
  durationLabel: string;
  transcript?: string;
};

export const VIDEO_DURATION_LABEL = "Under 180 seconds";

export const videos: Record<string, PortfolioVideo> = {
  introduction: {
    title: "Meet Om Desai",
    youtubeUrl: "https://youtube.com/shorts/-BpaAFRrsME?si=KMTJWvEQeUBnMy7R",
    poster: "video-posters/lexi-introduction-poster.webp",
    durationLabel: VIDEO_DURATION_LABEL,
  },
  lexiPitch: {
    title: "How I would pitch Lexi",
    youtubeUrl: "https://youtube.com/shorts/ARpYOG8nNrs?si=Bk-SueBU9xuUJJd8",
    poster: "video-posters/lexi-pitch-poster.webp",
    durationLabel: VIDEO_DURATION_LABEL,
  },
  ancientIntelligenceLab: {
    title: "Building Ancient Intelligence Lab",
    youtubeUrl: "https://youtube.com/shorts/F8I8Wab9zE0?si=rIPlaPMRSyS7ZvsG",
    poster: "video-posters/ancient-intelligence-lab-poster.webp",
    durationLabel: VIDEO_DURATION_LABEL,
  },
  cyfj: {
    title: "Operating Crack Your First Job",
    youtubeUrl: "https://youtube.com/shorts/DzT5pBRmTkg?si=tzpD3Wvv6_Yo8zZB",
    poster: "video-posters/cyfj-walkthrough-poster.webp",
    durationLabel: VIDEO_DURATION_LABEL,
  },
  istePlacement: {
    title: "ISTE and Placement Leadership",
    youtubeUrl: "https://youtube.com/shorts/sZ9iaWVZmOU?si=cH13ZKAcGtjkB1g-",
    poster: "video-posters/iste-placement-leadership-poster.webp",
    durationLabel: VIDEO_DURATION_LABEL,
  },
};

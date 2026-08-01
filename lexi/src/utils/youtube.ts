const YOUTUBE_ID_PATTERN = /^[a-zA-Z0-9_-]{6,15}$/;

export function isPlaceholderVideoUrl(youtubeUrl: string): boolean {
  return youtubeUrl.startsWith("PASTE_YOUTUBE_");
}

export function extractYouTubeId(youtubeUrl: string): string | null {
  if (isPlaceholderVideoUrl(youtubeUrl)) {
    return null;
  }

  try {
    const url = new URL(youtubeUrl);

    if (url.hostname === "youtu.be") {
      const id = url.pathname.replace(/^\/+/, "");
      return YOUTUBE_ID_PATTERN.test(id) ? id : null;
    }

    if (
      url.hostname === "www.youtube.com" ||
      url.hostname === "youtube.com" ||
      url.hostname === "m.youtube.com"
    ) {
      const shortsMatch = url.pathname.match(/^\/shorts\/([^/]+)/);
      if (shortsMatch) {
        return YOUTUBE_ID_PATTERN.test(shortsMatch[1]) ? shortsMatch[1] : null;
      }

      const id = url.searchParams.get("v");
      return id && YOUTUBE_ID_PATTERN.test(id) ? id : null;
    }

    return null;
  } catch {
    return null;
  }
}

export function buildPrivacyEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}

// Browser-compatible reading time calculator
export function calculateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return {
    text: `${minutes} min read`,
    minutes,
    time: minutes * 60 * 1000, // milliseconds
    words: wordCount
  };
}
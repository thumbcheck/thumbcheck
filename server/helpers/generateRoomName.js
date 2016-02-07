const adjectives = [ 
  "aged", "ancient", "autumn", "billowing", "bitter", "black", "blue",
  "bold", "broad", "broken", "calm", "cold", "cool", "crimson", "curly",
  "damp", "dark", "dawn", "delicate", "divine", "dry", "dry", "empty",
  "falling", "fancy", "flat", "floral", "fragrant", "free", "frosty",
  "gentle", "green", "hidden", "holy", "hushy", "icy", "jolly", "late",
  "lingering", "little", "lively", "long", "lucky", "misty", "morning",
  "muddy", "mute", "nameless", "noisy", "odd", "old", "orange", "patient",
  "plain", "polished", "proud", "purple", "quiet", "rapid", "raspy",
  "red", "restless", "rough", "round", "royal", "shinny", "shrill", "shy",
  "silent", "small", "snowy", "soft", "solitary", "sparkling", "spring",
  "square", "steep", "still", "summer", "super", "sweet",
  "tight", "tiny", "twilight", "wandering", "weathered", "white", "wild",
  "winter", "wispy", "withered", "yellow", "young"
];

const nouns = [
  "art", "atom", "band", "bar", "base", "bird", "block", "boat", "bonus",
  "bread", "breeze", "brook", "bush", "butterfly", "cake", "cell",
  "cherry", "cloud", "coke", "credit", "darkness", "dawn", "dew", "disk",
  "dream", "dust", "fashion", "feather", "field", "fire", "firefly",
  "flower", "fog", "forest", "frog", "frost", "glade", "glitter", "grass",
  "hall", "hat", "haze", "heart", "hill", "hola", "king", "kiwi", "lab",
  "lake", "leaf", "limit", "lion", "math", "meadow", "mode", "moon",
  "morning", "mountain", "mouse", "mud", "night", "paper", "penguin",
  "pine", "poetry", "pond", "queen", "rain", "recipe", "resonance",
  "rice", "river", "salad", "scene", "sea", "shadow", "shape", "silence",
  "sky", "smoke", "snow", "snowflake", "sound", "star", "sun", "sun",
  "sunset", "surf", "term", "thunder", "tiger", "toast", "tooth", "tree",
  "truth", "union", "unit", "violet", "voice", "water", "water",
  "waterfall", "wave", "wildflower", "wind", "wood"
];


export default function() {
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  let num = Math.floor(Math.random() * 100);
  // check redis 
  return `${adjective}${noun}${num}`;
}

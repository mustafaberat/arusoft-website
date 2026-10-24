export const privacyGames = [
  {
    slug: "hue-hunt",
    name: "Hue Hunt",
    summary: "Optional scoreboard nickname and level. Settings stay on the phone.",
    paragraphs: [
      "Hue Hunt does not require an account.",
      "If you choose to submit a top score, the app sends a nickname and the level you reached to the Hue Hunt scoreboard at arusoft.vercel.app. That data is stored so other players can see the top five. You can finish a game without submitting.",
      "Language, sound, vibration, and color-blind settings stay on your device. They are not sent to ARU SOFT.",
      "Hue Hunt does not ask for your location, contacts, photos, microphone, or identity, and it does not show ads.",
    ],
  },
  {
    slug: "hue-match",
    name: "HueMind",
    summary: "Settings stay on the phone. The phone app shows Google AdMob ads.",
    paragraphs: [
      "HueMind does not require an account and does not upload your mixes, scores, or settings.",
      "Reveal time, show values, random start, color-blind mode, and language stay on your device.",
      "On phones, HueMind shows advertisements through Google AdMob: a banner on the home screen and a full-screen ad after a match. Google may process an advertising identifier under its own policy. The mixing and result screens do not show ads. The web preview does not load ads.",
      "Ads are requested as child-directed and non-personalized, with content limited to a G rating. They are not based on the player's activity.",
      "HueMind does not ask for your location, contacts, photos, microphone, or identity.",
    ],
  },
  {
    slug: "reaction-duel",
    name: "Reaction Rivals",
    summary: "Match setup and best time stay on the phone. The phone app shows Google AdMob ads.",
    paragraphs: [
      "Reaction Rivals does not require an account and does not upload match results.",
      "Language, color-blind mode, motion setting, match setup, match count, and your best reaction time stay on your device.",
      "On phones, Reaction Rivals shows advertisements through Google AdMob: a banner on the home screen and a full-screen ad after a match. Google may process an advertising identifier under its own policy. The web preview does not load ads.",
      "Ads are requested as child-directed and non-personalized, with content limited to a G rating. They are not based on the player's activity.",
      "Reaction Rivals does not ask for your location, contacts, photos, microphone, or identity.",
    ],
  },
];

export function privacyGame(slug) {
  return privacyGames.find((game) => game.slug === slug) ?? null;
}

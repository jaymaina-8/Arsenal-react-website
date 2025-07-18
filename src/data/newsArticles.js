export const newsArticles = [
  {
    id: 1,
    title: "Noni Madueke transfer news: Arsenal close to agreeing £50m deal for Chelsea winger",
    date: "2025-07-11",
    category: "Transfer News",
    author: "Arsenal Transfer Team",
    summary: "The England international emerged as a shock target for the Gunners who have moved quickly to wrap up a deal.",
    content: `The England international emerged as a shock target for the Gunners who have moved quickly to wrap up a deal.

Personal terms for the move across the capital were agreed last week with the London rivals holding talks over a transfer fee in recent days.

An agreement has now been struck, Fabrizio Romano reports, with Chelsea accepting Arsenal's offer which is in excess of £50million with add-ons included.

Madueke will now sign a five-year deal to become the sixth player to swap Stamford Bridge for the Emirates during Mikel Arteta's reign in north London.`,
    imageUrl: "/GettyImages-2218942050.webp",
    tags: ["Transfer", "Noni Madueke", "Chelsea", "Premier League"],
    link: "https://dailycannon.com/2025/07/madueke-arsenal-contract-signed/"
  },
  {
    id: 2,
    title: "Viktor Gyokeres to Arsenal transfer gets new seal of approval - 'There is no doubt'",
    date: "2025-07-11",
    category: "Transfer News",
    author: "Arsenal Transfer Team",
    summary: "Arsenal have been told by Alan Shearer why they \"need\" to sign Viktor Gyokeres this summer.",
    content: `Arsenal have been told by Alan Shearer why they "need" to sign Viktor Gyokeres this summer.

The Gunners have been heavily linked with signing the Sporting Lisbon striker all summer as they continue their search for a new centre forward.

News emerged earlier this week that Arsenal have now stepped up negotiations to sign Gyokeres as they aim to strike a £70million deal for the Sweden international.

There have been reports from Portugal suggesting that the deal between Arsenal and Sporting may collapse due to reaching an agreement over the structure of the fee. However, football.london understands that, despite these rumours, there is still the expectation that Gyokeres completes a move to the Emirates Stadium.

Gyokeres scored 54 goals in 52 appearances for Sporting last season and has been heavily linked with a move to the Premier League this summer. It seems that Arsenal are the striker's most likely destination, and Shearer has explained why he is backing Gyokeres to be a success if he was to complete a move to the Gunners.

"Yeah, that's what they need. We've been saying it and it's what they needed last summer," Shearer told the Rest is Football podcast when asked if Gyokeres would be a good signing for Arsenal.

"When you look at his numbers over the last couple of years, they are outstanding. They are off the charts good. They are such impressive numbers.

"That's exactly what Arsenal have needed and there is no doubt, in that team, he will score goals. That's what their fans have demanded and needed, so they will be a huge threat as well."

Arsenal have already been busy in the transfer market this summer with the signings of Martin Zubimendi and Kepa Arrizabalaga, while the capture of Christian Norgaard was announced on Thursday.`,
    imageUrl: "/0_Gyokeres.webp",
    tags: ["Transfer", "Viktor Gyokeres", "Sporting Lisbon", "Alan Shearer"],
    link: "https://www.arsenal.com/news/gyokeres-transfer-approval"
  },
  {
    id: 3,
    title: "Arsenal's summer transfer window: Three major signings completed",
    date: "2025-07-10",
    category: "Transfer News",
    author: "Arsenal Media Team",
    summary: "Arsenal have made significant moves in the transfer market with three key signings to strengthen the squad.",
    content: `Arsenal have completed a busy period in the transfer market with three major signings that will significantly strengthen Mikel Arteta's squad for the upcoming season.

The Gunners have successfully secured the services of Martin Zubimendi from Real Sociedad, adding crucial depth and quality to their midfield options. The Spanish international brings experience and composure to Arsenal's engine room.

Goalkeeper Kepa Arrizabalaga has joined from Chelsea, providing competition and experience between the posts. The Spanish shot-stopper will compete with David Raya for the number one position.

The third major addition is Christian Norgaard from Brentford, whose physical presence and aerial ability will add a new dimension to Arsenal's midfield. The Danish international has proven himself in the Premier League and will provide valuable depth.

These signings demonstrate Arsenal's ambition and commitment to competing at the highest level across all competitions.`,
    imageUrl: "/transfer-window-2025.jpg",
    tags: ["Transfer", "Zubimendi", "Kepa", "Norgaard", "Summer Window"],
    link: "https://www.arsenal.com/news/summer-transfer-window-update"
  },
  {
    id: 4,
    title: "Arsenal's Pre-Season Training Camp: Players Return with New Additions",
    date: "2025-07-09",
    category: "Training",
    author: "Training Staff",
    summary: "Arsenal players have returned to London Colney for pre-season training with new signings integrated into the squad.",
    content: `Arsenal's first-team squad has returned to London Colney for the start of pre-season training, with excitement building around the new additions to Mikel Arteta's squad.

The training sessions have been intense, with the coaching staff implementing tactical adjustments to accommodate the new signings. The integration of Martin Zubimendi, Kepa Arrizabalaga, and Christian Norgaard has been seamless, with all three players impressing in their first sessions.

Youth players have also been given opportunities to train with the first team, with several academy graduates showing promise during the early sessions. The blend of experience and youth is creating a positive atmosphere at the training ground.

Fitness levels are being closely monitored as the players prepare for the upcoming pre-season friendlies and the start of the new Premier League campaign.`,
    imageUrl: "/training-camp-2025.jpg",
    tags: ["Training", "Pre-Season", "London Colney", "Squad Integration"],
    link: "https://www.arsenal.com/news/pre-season-training-camp-update"
  },
  {
    id: 5,
    title: "Mikel Arteta's Vision for the New Season: Building on Success",
    date: "2025-07-08",
    category: "Manager News",
    author: "Arsenal Media Team",
    summary: "Arsenal manager Mikel Arteta shares his vision for the upcoming season and how the new signings fit into his plans.",
    content: `Mikel Arteta has outlined his vision for the upcoming season, expressing confidence that the new signings will help Arsenal compete at the highest level.

Speaking at his first press conference of the summer, Arteta praised the club's transfer business and explained how each new player fits into his tactical system.

"We've been very strategic in our approach to the transfer market," Arteta said. "Each signing addresses specific needs in our squad and will help us maintain our high standards across all competitions."

The manager also emphasized the importance of continuity, with the core of the squad remaining intact while adding quality depth in key positions.

"The foundation is strong, and now we're adding layers that will make us even more competitive. The players understand our philosophy, and the new additions will enhance what we're trying to achieve."`,
    imageUrl: "/arteta-interview-2025.jpg",
    tags: ["Manager", "Mikel Arteta", "Season Preview", "Tactics"],
    link: "https://www.arsenal.com/news/arteta-vision-new-season"
  }
];

// Utility functions
export const getNewsByCategory = (category) => {
  return newsArticles.filter(article => article.category === category);
};

export const getNewsById = (id) => {
  return newsArticles.find(article => article.id === id);
};

export const getLatestNews = (limit = 3) => {
  return newsArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getNewsByTag = (tag) => {
  return newsArticles.filter(article => 
    article.tags.some(articleTag => 
      articleTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

export const getTransferNews = () => {
  return getNewsByCategory("Transfer News");
};

export const getTrainingNews = () => {
  return getNewsByCategory("Training");
};

export const getManagerNews = () => {
  return getNewsByCategory("Manager News");
};

export const searchNews = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return newsArticles.filter(article =>
    article.title.toLowerCase().includes(term) ||
    article.content.toLowerCase().includes(term) ||
    article.tags.some(tag => tag.toLowerCase().includes(term))
  );
};

export const getNewsByDateRange = (startDate, endDate) => {
  return newsArticles.filter(article => {
    const articleDate = new Date(article.date);
    return articleDate >= new Date(startDate) && articleDate <= new Date(endDate);
  });
};

export const getNewsStats = () => {
  const categories = [...new Set(newsArticles.map(article => article.category))];
  const totalArticles = newsArticles.length;

  return {
    totalArticles,
    categories: categories.map(category => ({
      name: category,
      count: getNewsByCategory(category).length
    })),
    latestArticleDate: newsArticles
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.date
  };
};

export default newsArticles;

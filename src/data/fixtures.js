// data/fixtures.js

const parseDate = (dateString) => {
  // Convert "Wednesday, 23rd July 2025" to "2025-07-23"
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  
  const parts = dateString.split(' ');
  const day = parts[1].replace(/\D/g, '').padStart(2, '0');
  const month = months[parts[2]];
  const year = parts[3];
  
  return `${year}-${month}-${day}`;
};

export const fixtures = [
  // 🟡 Pre-season Friendlies
  { 
    id: 0, 
    homeTeam: "Arsenal", 
    awayTeam: "AC Milan", 
    date: parseDate("Wednesday, 23rd July 2025"), 
    time: "12:30", 
    venue: "Singapore National Stadium", 
    competition: "Pre-season",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 1, 
    homeTeam: "Arsenal", 
    awayTeam: "Newcastle United", 
    date: parseDate("Sunday, 27th July 2025"), 
    time: "12:30", 
    venue: "Singapore National Stadium", 
    competition: "Pre-season",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 2, 
    homeTeam: "Arsenal", 
    awayTeam: "Tottenham Hotspur", 
    date: parseDate("Thursday, 31st July 2025"), 
    time: "12:30", 
    venue: "Kai Tak Sports Park", 
    competition: "Pre-season",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "high"
  },
  { 
    id: 3, 
    homeTeam: "Arsenal", 
    awayTeam: "Villarreal", 
    date: parseDate("Tuesday, 5th August 2025"), 
    time: "18:00", 
    venue: "Emirates Stadium", 
    competition: "Pre-season",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 4, 
    homeTeam: "Arsenal", 
    awayTeam: "Athletic Bilbao", 
    date: parseDate("Saturday, 9th August 2025"), 
    time: "17:00", 
    venue: "Emirates Stadium", 
    competition: "Pre-season",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },

  // 🔴 Premier League Fixtures
  { 
    id: 5, 
    homeTeam: "Manchester United", 
    awayTeam: "Arsenal", 
    date: parseDate("Sunday, 17th August 2025"), 
    time: "16:30", 
    venue: "Old Trafford", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 6, 
    homeTeam: "Arsenal", 
    awayTeam: "Leeds United", 
    date: parseDate("Saturday, 23rd August 2025"), 
    time: "17:30", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 7, 
    homeTeam: "Liverpool", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 30th August 2025"), 
    time: "15:00", 
    venue: "Anfield", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 8, 
    homeTeam: "Arsenal", 
    awayTeam: "Nottingham Forest", 
    date: parseDate("Saturday, 13th September 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 9, 
    homeTeam: "Arsenal", 
    awayTeam: "Manchester City", 
    date: parseDate("Saturday, 20th September 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "high"
  },
  { 
    id: 10, 
    homeTeam: "Newcastle United", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 27th September 2025"), 
    time: "15:00", 
    venue: "St. James' Park", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 11, 
    homeTeam: "Arsenal", 
    awayTeam: "West Ham United", 
    date: parseDate("Saturday, 4th October 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 12, 
    homeTeam: "Fulham", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 18th October 2025"), 
    time: "15:00", 
    venue: "Craven Cottage", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 13, 
    homeTeam: "Arsenal", 
    awayTeam: "Crystal Palace", 
    date: parseDate("Saturday, 25th October 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 14, 
    homeTeam: "Burnley", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 1st November 2025"), 
    time: "15:00", 
    venue: "Turf Moor", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 15, 
    homeTeam: "Sunderland", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 8th November 2025"), 
    time: "15:00", 
    venue: "Stadium of Light", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 16, 
    homeTeam: "Arsenal", 
    awayTeam: "Tottenham Hotspur", 
    date: parseDate("Saturday, 22nd November 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 17, 
    homeTeam: "Chelsea", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 29th November 2025"), 
    time: "15:00", 
    venue: "Stamford Bridge", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 18, 
    homeTeam: "Arsenal", 
    awayTeam: "Brentford", 
    date: parseDate("Wednesday, 3rd December 2025"), 
    time: "20:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 19, 
    homeTeam: "Aston Villa", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 6th December 2025"), 
    time: "15:00", 
    venue: "Villa Park", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 20, 
    homeTeam: "Arsenal", 
    awayTeam: "Wolverhampton Wanderers", 
    date: parseDate("Saturday, 13th December 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 21, 
    homeTeam: "Everton", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 20th December 2025"), 
    time: "15:00", 
    venue: "Goodison Park (New)", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 22, 
    homeTeam: "Arsenal", 
    awayTeam: "Brighton & Hove Albion", 
    date: parseDate("Saturday, 27th December 2025"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 23, 
    homeTeam: "Arsenal", 
    awayTeam: "Aston Villa", 
    date: parseDate("Tuesday, 30th December 2025"), 
    time: "20:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 24, 
    homeTeam: "Bournemouth", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 3rd January 2026"), 
    time: "15:00", 
    venue: "Vitality Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 25, 
    homeTeam: "Arsenal", 
    awayTeam: "Liverpool", 
    date: parseDate("Wednesday, 7th January 2026"), 
    time: "20:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "high"
  },
  { 
    id: 26, 
    homeTeam: "Nottingham Forest", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 17th January 2026"), 
    time: "15:00", 
    venue: "City Ground", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 27, 
    homeTeam: "Arsenal", 
    awayTeam: "Manchester United", 
    date: parseDate("Saturday, 24th January 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "high"
  },
  { 
    id: 28, 
    homeTeam: "Leeds United", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 31st January 2026"), 
    time: "15:00", 
    venue: "Elland Road", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 29, 
    homeTeam: "Arsenal", 
    awayTeam: "Sunderland", 
    date: parseDate("Saturday, 7th February 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 30, 
    homeTeam: "Brentford", 
    awayTeam: "Arsenal", 
    date: parseDate("Wednesday, 11th February 2026"), 
    time: "20:00", 
    venue: "Gtech Community Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 31, 
    homeTeam: "Tottenham Hotspur", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 21st February 2026"), 
    time: "15:00", 
    venue: "Tottenham Hotspur Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 32, 
    homeTeam: "Arsenal", 
    awayTeam: "Chelsea", 
    date: parseDate("Saturday, 28th February 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "high"
  },
  { 
    id: 33, 
    homeTeam: "Brighton & Hove Albion", 
    awayTeam: "Arsenal", 
    date: parseDate("Wednesday, 4th March 2026"), 
    time: "20:00", 
    venue: "Falmer Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 34, 
    homeTeam: "Arsenal", 
    awayTeam: "Everton", 
    date: parseDate("Saturday, 14th March 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 35, 
    homeTeam: "Wolverhampton Wanderers", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 21st March 2026"), 
    time: "15:00", 
    venue: "Molineux", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 36, 
    homeTeam: "Arsenal", 
    awayTeam: "Bournemouth", 
    date: parseDate("Saturday, 11th April 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 37, 
    homeTeam: "Manchester City", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 18th April 2026"), 
    time: "15:00", 
    venue: "Etihad Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: false,
    importance: "high"
  },
  { 
    id: 38, 
    homeTeam: "Arsenal", 
    awayTeam: "Newcastle United", 
    date: parseDate("Saturday, 25th April 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 39, 
    homeTeam: "Arsenal", 
    awayTeam: "Fulham", 
    date: parseDate("Saturday, 2nd May 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 40, 
    homeTeam: "West Ham United", 
    awayTeam: "Arsenal", 
    date: parseDate("Saturday, 9th May 2026"), 
    time: "15:00", 
    venue: "London Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 41, 
    homeTeam: "Arsenal", 
    awayTeam: "Burnley", 
    date: parseDate("Sunday, 17th May 2026"), 
    time: "15:00", 
    venue: "Emirates Stadium", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
  { 
    id: 42, 
    homeTeam: "Crystal Palace", 
    awayTeam: "Arsenal", 
    date: parseDate("Sunday, 24th May 2026"), 
    time: "16:00", 
    venue: "Selhurst Park", 
    competition: "Premier League",
    status: "upcoming",
    ticketsAvailable: true,
    importance: "medium"
  },
];

// Sample results for completed matches
export const results = [
  {
    id: 101,
    homeTeam: "Arsenal",
    awayTeam: "Tottenham Hotspur",
    homeScore: 2,
    awayScore: 1,
    date: "2025-07-13",
    venue: "Emirates Stadium",
    competition: "Premier League",
    status: "completed",
    matchReport: "Dominant performance in North London Derby",
    scorers: {
      home: ["Saka 25'", "Havertz 67'"],
      away: ["Son 45'"]
    }
  },
  {
    id: 102,
    homeTeam: "Brighton & Hove Albion",
    awayTeam: "Arsenal",
    homeScore: 0,
    awayScore: 3,
    date: "2025-07-06",
    venue: "Falmer Stadium",
    competition: "Premier League",
    status: "completed",
    matchReport: "Clinical away performance",
    scorers: {
      home: [],
      away: ["Ødegaard 12'", "Jesus 34'", "Saka 78'"]
    }
  },
  {
    id: 103,
    homeTeam: "Arsenal",
    awayTeam: "Aston Villa",
    homeScore: 1,
    awayScore: 1,
    date: "2025-06-29",
    venue: "Emirates Stadium",
    competition: "Premier League",
    status: "completed",
    matchReport: "Hard-fought draw at home",
    scorers: {
      home: ["Rice 56'"],
      away: ["Watkins 23'"]
    }
  }
];

// Utility functions
export const getFixtureById = (id) => {
  return fixtures.find(fixture => fixture.id === id) || 
         results.find(result => result.id === id);
};

export const getUpcomingFixtures = (limit = 5) => {
  const currentDate = new Date();
  return fixtures
    .filter(fixture => fixture.status === 'upcoming' && new Date(fixture.date) >= currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};

export const getRecentResults = (limit = 103) => {
  return results
    .filter(result => result.status === 'completed')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getPreSeasonFixtures = () => {
  return fixtures.filter(fixture => fixture.competition === 'Pre-season');
};

export const getPremierLeagueFixtures = () => {
  return fixtures.filter(fixture => fixture.competition === 'Premier League');
};

export const getHomeFixtures = () => {
  return fixtures.filter(fixture => fixture.homeTeam === 'Arsenal');
};

export const getAwayFixtures = () => {
  return fixtures.filter(fixture => fixture.awayTeam === 'Arsenal');
};

export const getFixturesByCompetition = (competition) => {
  return fixtures.filter(fixture => fixture.competition === competition);
};

export const getFixturesByMonth = (year, month) => {
  return fixtures.filter(fixture => {
    const fixtureDate = new Date(fixture.date);
    return fixtureDate.getFullYear() === year && fixtureDate.getMonth() === month - 1;
  });
};

export const getNextFixture = () => {
  const currentDate = new Date();
  const upcoming = fixtures
    .filter(fixture => fixture.status === 'upcoming' && new Date(fixture.date) >= currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return upcoming[0] || null;
};

export const getFixtureStats = () => {
  const totalFixtures = fixtures.length;
  const homeFixtures = getHomeFixtures().length;
  const awayFixtures = getAwayFixtures().length;
  const preSeasonFixtures = getPreSeasonFixtures().length;
  const premierLeagueFixtures = getPremierLeagueFixtures().length;
  
  return {
    totalFixtures,
    homeFixtures,
    awayFixtures,
    preSeasonFixtures,
    premierLeagueFixtures,
    completedMatches: results.length
  };
};
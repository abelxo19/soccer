const BASE_URL = 'https://free-api-live-football-data.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
  'X-RapidAPI-Host': 'free-api-live-football-data.p.rapidapi.com'
};

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
}

export interface Match {
  id: number;
  date: string;
  league: {
    id: number;
    name: string;
    logo: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
    };
  };
  fixture: {
    status: {
      short: string;
    };
    venue: {
      name: string;
      city: string;
    };
  };
}

export const TOP_LEAGUES = [
  { id: 39, name: 'Premier League', country: 'England' },
  { id: 140, name: 'La Liga', country: 'Spain' },
  { id: 135, name: 'Serie A', country: 'Italy' },
  { id: 78, name: 'Bundesliga', country: 'Germany' },
  { id: 61, name: 'Ligue 1', country: 'France' }
];

export async function getLeagueFixtures(leagueId: number, season: number = 2024) {
  try {
    const response = await fetch(`${BASE_URL}/fixtures/league/${leagueId}`, {
      headers
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch fixtures');
    }

    const data = await response.json();
    
    // Transform the API response to match our interface
    return data.data?.map((fixture: any) => ({
      id: fixture.id || Math.random(),
      date: fixture.date_time || new Date().toISOString(),
      league: {
        id: leagueId,
        name: TOP_LEAGUES.find(l => l.id === leagueId)?.name || '',
        logo: ''
      },
      teams: {
        home: {
          id: fixture.home_team?.id || Math.random(),
          name: fixture.home_team?.name || 'Home Team',
          logo: fixture.home_team?.logo || ''
        },
        away: {
          id: fixture.away_team?.id || Math.random(),
          name: fixture.away_team?.name || 'Away Team',
          logo: fixture.away_team?.logo || ''
        }
      },
      fixture: {
        status: {
          short: fixture.status || 'TBD'
        },
        venue: {
          name: fixture.venue?.name || 'TBD',
          city: fixture.venue?.city || 'TBD'
        }
      }
    })) || [];
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    return [];
  }
}
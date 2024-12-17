import { Injectable } from '@nestjs/common';

@Injectable()
export class CompetitionsService {
  competitions = [
    {
      id: '1',
      name: 'top14',
    },
    {
      id: '2',
      name: '6nations',
    },
  ];

  contests = [
    {
      id: '1',
      day: '1',
      teamId1: '1',
      teamId2: '2',
      competitionId: '1',
    },
    {
      id: '2',
      day: '1',
      teamId1: '3',
      teamId2: '4',
      competitionId: '1',
    },
    {
      id: '3',
      day: '2',
      teamId1: '1',
      teamId2: '3',
      competitionId: '1',
    },
    {
      id: '4',
      day: '2',
      teamId1: '2',
      teamId2: '3',
      competitionId: '1',
    },
    {
      id: '1',
      day: '1',
      teamId1: '1',
      teamId2: '2',
      competitionId: '2',
    },
    {
      id: '2',
      day: '1',
      teamId1: '3',
      teamId2: '4',
      competitionId: '2',
    },
    {
      id: '3',
      day: '2',
      teamId1: '1',
      teamId2: '3',
      competitionId: '2',
    },
    {
      id: '4',
      day: '2',
      teamId1: '2',
      teamId2: '3',
      competitionId: '2',
    },
  ];

  getAll() {
    return this.competitions;
  }

  getAllContestByCompetition(id: string) {
    const contests = this.contests.filter(
      (contest) => contest.competitionId === id,
    );
    return contests.sort((a, b) => +a.day - +b.day);
  }
}

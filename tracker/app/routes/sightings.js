import Route from '@ember/routing/route';

export default class SightingsRoute extends Route {
  model() {
    return [
      {
        id: 1,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
      {
        id: 2,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
      {
        id: 3,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
      {
        id: 4,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
      {
        id: 5,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
      {
        id: 6,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07'),
      },
    ];
  }
}

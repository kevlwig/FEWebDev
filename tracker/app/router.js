import EmberRouter from '@ember/routing/router';
import config from 'tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sightings', function () {
    this.route('new');
  });
  this.route('sighting', function () {
    this.route('edit');
  });
  this.route('cryptids');
  this.route('cryptid');
  this.route('witnesses');
  this.route('witness');
});

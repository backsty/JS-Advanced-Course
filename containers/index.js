import Team from './src/team.js';
import Settings from './src/settings.js';
import ErrorRepository from './src/errorRepository.js';

export function runApp() {
    Team.doSomething();
    Settings.init();
    ErrorRepository.handleError();
}
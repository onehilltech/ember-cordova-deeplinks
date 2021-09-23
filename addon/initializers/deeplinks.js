export function initialize (application) {
  application.inject ('route:application', 'deeplinks', 'service:deeplinks');
}

export default {
  initialize
};

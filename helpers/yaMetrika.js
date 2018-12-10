function getCounter() {
  const counter = window[`yaCounter${process.env.yaMetrikaCounterID}`];

  if (counter === undefined || typeof counter === 'undefined' || !counter.reachGoal) {
    return;
  }

  return counter;
}

function isProd() {
  if (!process.client || process.env.environment !== 'production') {
    return false;
  }
  return true;
}

function call(stuff, ...args) {
  if (!isProd()) {
    return;
  }

  const counter = getCounter();
  if (!counter) {
    return;
  }
  counter[stuff](...args);
}

const yaMetrika = {
  reachGoal: goal => call('reachGoal', goal),
  hit: target => call('hit', target),
};

export default yaMetrika;

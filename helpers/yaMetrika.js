function getCounter() {
  const counter = window[`yaCounter${process.env.yaMetrikaCounterID}`];

  if (
    counter === undefined ||
    typeof counter === 'undefined' ||
    !counter.reachGoal
  ) {
    return;
  }

  return counter;
}

function isProduction() {
  if (!process.client || process.env.environment !== 'production') {
    return false;
  }
  return true;
}

function call(stuff, ...arguments_) {
  if (!isProduction()) {
    return;
  }

  const counter = getCounter();
  if (!counter) {
    return;
  }
  counter[stuff](...arguments_);
}

const yaMetrika = {
  reachGoal: (goal) => call('reachGoal', goal),
  hit: (target) => call('hit', target),
};

export default yaMetrika;

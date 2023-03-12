const lights = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
};

const classesByLight = {
  [lights.red]: 'traffic-light_red',
  [lights.yellow]: 'traffic-light_yellow',
  [lights.green]: 'traffic-light_green',
};

const nextLightByLight = {
  [lights.red]: lights.yellow,
  [lights.yellow]: lights.green,
  [lights.green]: lights.red,
};

let currentLight = lights.red;

function switchLight(node) {
  const currentClass = classesByLight[currentLight];
  const nextLight = nextLightByLight[currentLight];
  const nextClass = classesByLight[nextLight];

  currentLight = nextLightByLight[currentLight];

  node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
  node.classList.add(classesByLight[currentLight]);
};
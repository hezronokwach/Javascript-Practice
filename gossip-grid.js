export function grid() {
  const body = document.body;
  const container = document.createElement('div');
  container.className = 'container';
  body.appendChild(container);

  // Create form for new gossips
  const form = document.createElement('div');
  form.className = 'gossip';
  const textarea = document.createElement('textarea');
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Share gossip!';
  form.appendChild(textarea);
  form.appendChild(submitButton);
  container.appendChild(form);

  // Create range inputs
  const ranges = document.createElement('div');
  ranges.className = 'ranges';
  
  const createRange = (id, min, max) => {
    const input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.className = 'range';
    input.min = min;
    input.max = max;
    ranges.appendChild(input);
    return input;
  };

  const widthRange = createRange('width', 200, 800);
  const fontSizeRange = createRange('fontSize', 20, 40);
  const backgroundRange = createRange('background', 20, 75);

  body.appendChild(ranges);

  // Gossip display logic
  const displayGossip = (gossip) => {
    const gossipDiv = document.createElement('div');
    gossipDiv.className = 'gossip';
    gossipDiv.textContent = gossip;
    container.appendChild(gossipDiv);
  };

  // Load initial gossips
  gossips.forEach(displayGossip);

  // Event listeners
submitButton.addEventListener('click', () => {
  const newGossip = textarea.value.trim();
  if (newGossip) {
    const gossipDiv = document.createElement('div');
    gossipDiv.className = 'gossip';
    gossipDiv.textContent = newGossip;
    container.insertBefore(gossipDiv, form);
    textarea.value = '';
  }
});

const updateStyles = () => {
  const width = widthRange.value;
  const fontSize = fontSizeRange.value;
  const background = backgroundRange.value;
  
  document.querySelectorAll('.gossip').forEach(gossip => {
    gossip.style.width = `${width}px`;
    gossip.style.fontSize = `${fontSize}px`;
    gossip.style.background = `hsl(280, 50%, ${background}%)`;
  });
};

  [widthRange, fontSizeRange, backgroundRange].forEach(range => {
    range.addEventListener('input', updateStyles);
  });

  // Initial style application
  updateStyles();
}

export const gossips = [
    `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
    `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
    `WE PAY FOR JUICY INFO!`,
    `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
    `Ed Sheeran comes out of music retirement to write brand new song`,
    `Kylie Jenner & Travis Scott’s breakup timeline`,
    `Quiet on the set: temper tantrums stars hope you forget`,
    `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
    `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
    `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
    `No bite in the big apple? Celine Dion looks scary skinny in New York`,
    `Jennifer Aniston and Brad Pitt relationship timeline`,
    `They shouldn’t have said that: 10 celebrity rants heard around the world`,
    `The most intense celebrity fights on set`,
    `The 18 most bitter real housewives feuds`,
    `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
    `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
  ]
  
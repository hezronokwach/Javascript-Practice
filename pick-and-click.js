export function pick() {
  const body = document.body;
  const hslDiv = document.createElement('div');
  const hueDiv = document.createElement('div');
  const luminosityDiv = document.createElement('div');
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  const axisX = document.createElementNS(svgNS, "line");
  const axisY = document.createElementNS(svgNS, "line");

  hslDiv.className = 'hsl';
  hueDiv.className = 'hue';
  luminosityDiv.className = 'luminosity';

  body.appendChild(hslDiv);
  body.appendChild(hueDiv);
  body.appendChild(luminosityDiv);

  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "fixed";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.pointerEvents = "none";

  axisX.id = 'axisX';
  axisY.id = 'axisY';
  axisX.setAttribute("stroke", "white");
  axisY.setAttribute("stroke", "white");

  svg.appendChild(axisX);
  svg.appendChild(axisY);
  body.appendChild(svg);

  function updateColor(event) {
    const hue = Math.round((event.clientX / window.innerWidth) * 360);
    const luminosity = Math.round((1 - event.clientY / window.innerHeight) * 100);
    const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

    body.style.background = hslValue;  // Changed from backgroundColor to background
    hslDiv.textContent = hslValue;
    hueDiv.textContent = `hue\n${hue}`;
    luminosityDiv.textContent = `${luminosity}\nluminosity`;

    axisX.setAttribute("x1", event.clientX);
    axisX.setAttribute("x2", event.clientX);
    axisX.setAttribute("y1", 0);
    axisX.setAttribute("y2", "100%");

    axisY.setAttribute("x1", 0);
    axisY.setAttribute("x2", "100%");
    axisY.setAttribute("y1", event.clientY);
    axisY.setAttribute("y2", event.clientY);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(hslDiv.textContent);
  }

  body.addEventListener('mousemove', updateColor);
  body.addEventListener('click', copyToClipboard);

  updateColor({ clientX: 0, clientY: 0 });
}
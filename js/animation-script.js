window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#lines-root"),
    calculatedWidth = (window.innerWidth / 100) * 0.25,
    lineWidth = calculatedWidth > 4 ? calculatedWidth : 4,
    count = Math.round(window.innerWidth / (3 * lineWidth)) + 20;
  // root.setAttribute("style", `--root_height: ${root.clientHeight}px`);
  const addLine = (e, t) => {
    let l = document.createElement("div"),
      n = document.createElement("div"),
      a = document.createElement("div"),
      d = 3 * lineWidth;
    (l.className = "line-container"),
      (l.style.top = `${-10 * d + t * d}px`),
      (n.className = `line ${e}`),
      (n.style.animationDelay = `${-(380 * t)}ms`),
      (a.className = "lineCorner"),
      (a.style.animationDelay = `${-(380 * t)}ms`),
      l.appendChild(n),
      l.appendChild(a),
      root.appendChild(l);
  };

  console.log(count);

  for (let i = 0; i < count; i++) {
    let e = i % 2 != 0;
    addLine(e ? "line-orange" : "line-blue", i);
  }
});

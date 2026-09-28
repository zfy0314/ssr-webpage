/* All assets are local so this page also works from a repository subdirectory. */
'use strict';
document.querySelectorAll('.math').forEach((element) => {
  katex.render(element.dataset.tex, element, { throwOnError: false, strict: 'ignore', trust: false });
});
renderMathInElement(document.body, {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false }
  ],
  throwOnError: false,
  strict: 'ignore',
  trust: false,
  ignoredClasses: ['math', 'katex']
});

const teaser = document.getElementById('teaser-animation');
const toggle = document.getElementById('animation-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = motionPreference.matches;
function updateTeaser() {
  teaser.src = paused ? 'assets/ssr-overview-still.png' : 'assets/ssr-overview.gif';
  toggle.textContent = paused ? 'Play animation' : 'Pause animation';
  toggle.setAttribute('aria-pressed', String(paused));
}
toggle.addEventListener('click', () => { paused = !paused; updateTeaser(); });
motionPreference.addEventListener('change', (event) => { paused = event.matches; updateTeaser(); });
if (paused) updateTeaser();

// Pointer hover reveals a candidate; clicking or tapping keeps it open.
document.querySelectorAll('.library-entry').forEach((entry) => {
  const button = entry.querySelector('.library-trigger');
  const panel = entry.querySelector('.library-full');
  let pinned = false;
  let hovered = false;
  function setOpen(open) {
    entry.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
  }
  entry.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') { hovered = true; setOpen(true); }
  });
  entry.addEventListener('pointerleave', () => {
    hovered = false;
    if (!pinned && !entry.contains(document.activeElement)) setOpen(false);
  });
  entry.addEventListener('focusin', () => setOpen(true));
  entry.addEventListener('focusout', (event) => {
    if (!pinned && !hovered && !entry.contains(event.relatedTarget)) setOpen(false);
  });
  button.addEventListener('click', () => { pinned = !pinned; setOpen(pinned); });
  entry.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { pinned = false; setOpen(false); }
  });
});

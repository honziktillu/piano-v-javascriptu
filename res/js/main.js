let noteMap = new Map();
noteMap.set(81, "C3");
noteMap.set(87, "D3");
noteMap.set(69, "E3");
noteMap.set(82, "F3");
noteMap.set(84, "G3");
noteMap.set(90, "A3");
noteMap.set(85, "B3");
noteMap.set(67, "C4");
noteMap.set(86, "D4");
noteMap.set(66, "E4");
noteMap.set(78, "F4");
noteMap.set(77, "G4");
noteMap.set(188, "A4");
noteMap.set(190, "B4");
noteMap.set(50, "Db3");
noteMap.set(51, "Eb3");
noteMap.set(53, "Gb3");
noteMap.set(54, "Ab3");
noteMap.set(55, "Bb3");
noteMap.set(70, "Db4");
noteMap.set(71, "Eb4");
noteMap.set(74, "Gb4");
noteMap.set(75, "Ab4");
noteMap.set(76, "Bb4");

let keyboardInput = [];

const keyDownHandler = (event) => {
  let input = event.keyCode;
  if (event.repeat) {
    return;
  }
  if (!keyboardInput.includes(input)) {
    let note = noteMap.get(input);
    if (note !== undefined) {
      play(note);
      document.querySelector(`[data-note~="${note}"]`).classList.add("active");
    }
    keyboardInput.push(input);
  }
};

const keyUpHandler = (event) => {
  let input = event.keyCode;
  let note = noteMap.get(input);
  if (note !== undefined) {
    document.querySelector(`[data-note~="${note}"]`).classList.remove("active");
  }
  keyboardInput.splice(keyboardInput.indexOf(input), 1);
};

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let keys = document.getElementsByClassName("key");

const click = () => {
  let element = event.target;
  let note = element.dataset.note;
  play(note);
};

const play = (note) => {
  new Audio(`res/sounds/${note}.ogg`).play();
};

let i = 0;
for (i; i < keys.length; i++) {
  keys[i].addEventListener("mousedown", () => {
    event.target.classList.add("active");
    click();
  });
  keys[i].addEventListener("mouseleave", () => {
    event.target.classList.remove("active");
  });
  keys[i].addEventListener("mouseup", () => {
    event.target.classList.remove("active");
  });
}

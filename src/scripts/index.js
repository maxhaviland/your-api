const elements = {
  container: document.querySelector('.container'),
  textAPI: document.getElementById('api'),
  line: document.getElementById('line'),
};

const { container, textAPI, line } = elements;

const interval = 5000;

const randomNumber = () => Math.floor(Math.random() * 255);

const randomColorRGB = () => ({ 
  red: randomNumber(), 
  green: randomNumber(), 
  blue: randomNumber() 
});

const stringRGB = () => {
  const { red, green, blue } = randomColorRGB();
  return `rgb(${[red, green, blue]})`;
}

const changeColor = () => textAPI.style.color = stringRGB();

setInterval(changeColor, interval);

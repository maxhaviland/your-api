const elements = {
  textAPI: document.getElementById('api'),
};

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

const changeColor = () => elements.textAPI.style.color = stringRGB();

setInterval(changeColor, interval);

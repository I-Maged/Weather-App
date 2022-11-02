import { setDom, getCoordinates, getCityName, clearDisplay } from './UICONTROL';
import './style.css';

const startApp = () => {
  clearDisplay();

  setDom.geoBtn.addEventListener('click', getCoordinates);

  setDom.nameBtn.addEventListener('click', getCityName);

  setDom.nameField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      getCityName();
    }
  });
};

startApp();

import { setDom, getCoordinates, getCityName } from './UICONTROL';
import './style.css';

setDom.geoBtn.addEventListener('click', getCoordinates);

setDom.nameBtn.addEventListener('click', getCityName);

setDom.nameField.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    getCityName();
  }
});

import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();

  const handleClick = (e) => {
    // console.log(e.target.className);
    if(e.target.className === 'on') {
      setThemeName('day');
    } else {
      setThemeName('night')
    }
  }

  return (
    <div className={`light-switch ${themeName}`} onClick={handleClick}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;

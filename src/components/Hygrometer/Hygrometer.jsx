import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useCallback, useEffect } from 'react';

  
function Hygrometer() {
  const {humidity, setHumidity, desiredHumidity, setDesiredHumidity } = useClimateContext();

  const incrementHumidity = useCallback((desiredHumidity) => {

    if(humidity < desiredHumidity - 1) {
      console.log(humidity < desiredHumidity -1);
      setHumidity(old => old+2)
    }
    
  }, [humidity, setHumidity]) 

  useEffect(() => {
    const timer = setInterval( () => incrementHumidity(desiredHumidity), 1000)
    return () => clearInterval(timer);
  } , [desiredHumidity, incrementHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {setDesiredHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;

import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useCallback, useEffect } from 'react';

  
function Hygrometer() {
  const {humidity, setHumidity, desiredHumidity, setDesiredHumidity } = useClimateContext();

  const incrementHumidity = useCallback((desiredHumidity) => {

    if(humidity < desiredHumidity) {
      setHumidity(old => old+2)
    }
    console.log(humidity);
  }, [humidity, setHumidity]) 

  useEffect(() => {
    console.log(desiredHumidity)
    const timer = setInterval( () => setHumidity(old => old+2), 1000)
    return () => clearInterval(timer);
  } , [desiredHumidity])

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

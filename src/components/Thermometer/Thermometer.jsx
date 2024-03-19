import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useEffect } from 'react';
import { useCallback } from 'react';

function Thermometer() {
  const {temperature, setTemperature, desiredTemperature, setDesiredTemperature } = useClimateContext();

  const incrementTemperature = useCallback((desiredTemperature)=>{
    if (temperature < desiredTemperature ){
      setTemperature(old => old + 1)
    }
  }, [temperature, setTemperature])

  useEffect( () => {
    const timer = setInterval(() => incrementTemperature(desiredTemperature), 1000)
    return () => clearInterval(timer)
  }, [desiredTemperature, incrementTemperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemperature}
        onAfterChange={(val) => {setDesiredTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;

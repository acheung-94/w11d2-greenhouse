// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { useState, createContext, useContext } from "react";

export const ClimateContext = createContext();

export const ClimateProvider = props => {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity ] = useState(40);
    const [desiredTemperature, setDesiredTemperature] = useState(50);
    const [desiredHumidity, setDesiredHumidity] = useState(40);

    return (
        <ClimateContext.Provider 
            value={{temperature, setTemperature, humidity, setHumidity, 
                    desiredTemperature, setDesiredTemperature, desiredHumidity, setDesiredHumidity}}>
            {props.children}
        </ClimateContext.Provider>
    )
}

export const useClimateContext = () => useContext(ClimateContext);
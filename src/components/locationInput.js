import React, {useState, useEffect, useRef} from "react";

let autoComplete;

// this function will dynamically load JavaScript files in the html with callback when component is finished rendering
const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    // when the state changes
    script.onreadystatechange = function() {
      // Double checking if the state is loaded or not
      if (script.readyState === "loaded" || script.readyState === "complete") {
        // set statechange to null and return callback
        script.onreadystatechange = null;
        callback();
        // console.log(callback());
      }
    };
  } 
  
  else {
    script.onload = () => callback();
  }

  script.src = url;
  //adding the script to the head tag
  document.getElementsByTagName("head")[0].appendChild(script);
};

// this will handle the script when it is loaded, it will assign autoCompleteRef with google maps place autocomplete response
const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
}

// this method will be called evrytime when the event is triggered to get the place from the place api
async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}

const LocationInput = () => {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    const apiKey = 'AIzaSyDuWCvB8fu8-4nvH857pHcma_jlmvLHiQc';

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className="inputForm">
            <i className="fas fa-map-marker-alt"></i>
            <input 
                placeholder="Enter your address" 
                ref={autoCompleteRef}
                onChange={event => setQuery(event.target.value)}
                value={query} 
                required={true}
            />
            <button type="submit">Get Inspection</button>
        </div>
    );
}

export default LocationInput;
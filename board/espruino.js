function onInit(){

  setInterval(function() {
    var advert = {
      0x180A: 128, //device_information
      0x181A: 0 || Math.round(E.getTemperature()) //environmental_sensing
    };
    NRF.setAdvertising(advert);
    console.log(advert);
  }, 5000);

}

onInit();

// use save() to keep this on the board memory.

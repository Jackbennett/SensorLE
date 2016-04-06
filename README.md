# SensorLE

SensorLE is a project to find a simple way of having instruments tell nearby devices their readings. On the hardware side of this using Espruino is great because just be using callbacks it manages the boards power consumption.

## Use cases

- Replacing the oil pressure sensor in my car to get a constant reading as opposed to just a low warning. Subtle without a gauge in the dash.
- Gas bottle pressure to warn when it's running out.
- Fresh water tank level for boat.

## Device side

Currently uses a [Micro:bit](http://www.espruino.com/MicroBit) that is running [Espruino](http://www.espruino.com/) for javascript on the board. Espruino is so far the only method I've found to write my own data to the bluetooth on the board.

Pros:
- Super simple single board setup, some power level adapting is required.
- Low power

Cons:
- Can't easily get a microbit
- 3v3 Logic but 5v sensors

I also plan to try an ESP8266 but hopefully their new board will come out soon and I can stick to bluetooth.

## Software side

Hope to use the web bluetooth API but it's so far quite restrictive to work with. Especially as I'm on a windows laptop which is the only thing chrome doesn't have a web bluetooth flag for.

## Development

Presently I need to work on a chrome extension to host the gauge page as I can use the chrome extension bluetooth API on my laptop. It's the web bluetooth API that isn't available. Seems easier than making a mobile page and testing from my phone constantly.

Done:
- [x] Test analog input from arduino (Hence johnny-five)
- [x] Chart for the data as it's read
- [x] Map input value to graph range
- [x] Bluetooth advertise a data value
- [ ] Read advertised data
- [ ] Plot data somewhere close to realtime

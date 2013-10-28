# ether-o-meter

 - displays your metrics in real-time
 - uses justGage to display your metrics with swag
 - automatic normalization of values, so that mean values are in the middle of the gauge


![screenshot](https://raw.github.com/marcelklehr/ep_ether-o-meter/master/ether-o-meter.png)

Think of ether-o-meter as a bucketful of sugar on top of what you get when pointing your browser to `/stats` -- ether-o-meter is completely agnostic to what gauges there are. It doesn't care, but will just display them all: requests per second, edits per second, pendingEdits, totalUsers, http500s and what not.

## Installation
With npm: `npm install ep_ether-o-meter`

or using etherpad's plugin manager at `/admin/plugins`, search for 'ether-o-meter' and click 'install'.

## Issues
If, for some reason, you think ether-o-meter doesn't handle a specific value very well or (beware!) it's broken, just file an issue on this repository.

## License
(c) 2013 by Marcel Klehr
MIT License
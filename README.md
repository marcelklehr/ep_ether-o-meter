# ether-o-meter
![screenshot](https://raw.github.com/marcelklehr/ep_ether-o-meter/master/ether-o-meter.png)

Ether-o-meter uses justGage to display your metrics with swag and XHR to display them in real-time. It automatically normalizes the values, so that mean values are in the middle of the gauge.

Think of ether-o-meter as a bucketful of sugar on top of what you get when pointing your browser to `/stats` -- ether-o-meter is completely agnostic to what gauges there are. It doesn't care, but will just display them all: requests per second, edits per second, pendingEdits, totalUsers, http500s and what not.

If, for some reason, you think ether-o-meter doesn't handle a specific value very well or (beware!) it's broken, just file an issue on this repository.
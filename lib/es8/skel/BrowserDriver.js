// Properties starting with _ are meant for the higher-level Nick browser
// Properties starting with __ are private to the driver
// Read-only properties should be configured as such

const TabDriver = require("./TabDriver")
// require browser-specific things...

class BrowserDriver {

	constructor(options) {
		// options parameter is guaranteed to be valid and is already checked
		// it should be saved to be used later when creating new tab drivers (it is already deep cloned)
	}

	exit(code) {
		// Should exit the whole process (terminate the program)
		// with the specified exit code
		// This should be immediate, so no callback
	}

	_initialize(callback) {
		// Initializaton of the browser instance
		// (for example forking/connecting to the browser process)
		// => callback(err)

		// This is guaranteed to be called once. And it's automatically called before
		// _newTabDriver() for end user convinience
	}

	_newTabDriver(uniqueTabId, callback) {
		// Should initialize a new tab driver with the options
		// This is used to create a higher-level Nick tab
		// Basically: new TabDriver(uniqueId, this._options)
		// => callback(err, tab)

		// uniqueTabId is just an integer that is incremented for each tab for clearer
		// logging when multiple tabs are used
	}

}

module.exports = BrowserDriver

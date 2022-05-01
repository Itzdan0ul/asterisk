const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	/**
	 * 
	 * @param {string} channel
	 * @param {*} data 
	 */
	invoke: (channel, data) => {
		/**
		 * @type {Array<string>}
		 */
		const channels = [
			'main:password-builder'
		];

		if (channels.includes(channel)) {
			ipcRenderer.invoke(channel, data);
		}
	},
	/**
	 * 
	 * @param {string} channel 
	 * @param {Function} func 
	 */
	once: (channel, func) => {
		/**
		 * @type {Array<string>}
		 */
		const channels = [
			'renderer:password-builder'
		];
		
		if (channels.includes(channel)) {
			ipcRenderer.once(channel, (event, ...args) => func(...args));
		}
	},
	/**
	 * 
	 * @param {string} channel 
	 * @param {Function} func 
	 */
	on: (channel, func) => {
		/**
		 * @type {Array<string>}
		 */
		const channels = [];
		
		if (channels.includes(channel)) {
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	}
});

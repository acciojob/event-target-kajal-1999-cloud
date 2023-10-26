class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, new Set());
      }
      const eventListeners = this.listeners.get(event);
      if (!eventListeners.has(callback)) {
        eventListeners.add(callback);
      }
    }
  
    removeEventListener(event, callback) {
      if (this.listeners.has(event)) {
        const eventListeners = this.listeners.get(event);
        eventListeners.delete(callback);
        if (eventListeners.size === 0) {
          this.listeners.delete(event);
        }
      }
    }
  
    dispatchEvent(event) {
      if (this.listeners.has(event)) {
        const eventListeners = this.listeners.get(event);
        for (const callback of eventListeners) {
          callback();
        }
      }
    }
  }
  
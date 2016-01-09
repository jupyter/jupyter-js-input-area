/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use-strict';
	var index_1 = __webpack_require__(1);
	var jupyter_js_editor_1 = __webpack_require__(23);
	__webpack_require__(146);
	var initialCode = "def f(n):\n    for i in range(n):\n        print(i)\n";
	function main() {
	    var textModel = new jupyter_js_editor_1.EditorModel();
	    textModel.text = initialCode;
	    textModel.mimetype = 'text/x-python';
	    textModel.lineNumbers = true;
	    var inputModel = new index_1.InputAreaModel();
	    inputModel.textEditor = textModel;
	    var c = new index_1.InputAreaWidget(inputModel);
	    c.attach(document.body);
	}
	window.onload = main;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(5));
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	var phosphor_properties_1 = __webpack_require__(3);
	var phosphor_signaling_1 = __webpack_require__(4);
	/**
	 * An implementation of an input area model.
	 */
	var InputAreaModel = (function () {
	    function InputAreaModel() {
	    }
	    Object.defineProperty(InputAreaModel.prototype, "stateChanged", {
	        /**
	         * A signal emitted when the state of the model changes.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[stateChangedSignal]].
	         */
	        get: function () {
	            return InputAreaModel.stateChangedSignal.bind(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputAreaModel.prototype, "collapsed", {
	        /**
	         * Get whether the input area should be collapsed or displayed.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[collapsedProperty]].
	         */
	        get: function () {
	            return InputAreaModel.collapsedProperty.get(this);
	        },
	        /**
	         * Set whether the input area should be collapsed or displayed.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[collapsedProperty]].
	         */
	        set: function (value) {
	            InputAreaModel.collapsedProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputAreaModel.prototype, "promptNumber", {
	        /**
	         * Get the prompt number.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[promptNumberProperty]].
	         */
	        get: function () {
	            return InputAreaModel.promptNumberProperty.get(this);
	        },
	        /**
	         * Set the prompt number.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[promptNumberProperty]].
	         */
	        set: function (value) {
	            InputAreaModel.promptNumberProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputAreaModel.prototype, "executionCount", {
	        /**
	         * Get the execution count of the input area.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[executionCountProperty]].
	         */
	        get: function () {
	            return InputAreaModel.executionCountProperty.get(this);
	        },
	        /**
	         * Set the execution count of the input area.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[executionCountProperty]].
	         */
	        set: function (value) {
	            InputAreaModel.executionCountProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputAreaModel.prototype, "textEditor", {
	        /**
	         * Get the text editor Model.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[textEditorProperty]].
	         */
	        get: function () {
	            return InputAreaModel.textEditorProperty.get(this);
	        },
	        /**
	         * Set the text editor Model.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[textEditorProperty]].
	         */
	        set: function (value) {
	            InputAreaModel.textEditorProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * A signal emitted when the state of the model changes.
	     *
	     * **See also:** [[stateChanged]]
	     */
	    InputAreaModel.stateChangedSignal = new phosphor_signaling_1.Signal();
	    /**
	    * A property descriptor which determines whether the input area is collapsed or displayed.
	    *
	    * **See also:** [[collapsed]]
	    */
	    InputAreaModel.collapsedProperty = new phosphor_properties_1.Property({
	        name: 'collapsed',
	        notify: InputAreaModel.stateChangedSignal,
	    });
	    /**
	    * A property descriptor containing the prompt number.
	    *
	    * **See also:** [[promptNumber]]
	    */
	    InputAreaModel.promptNumberProperty = new phosphor_properties_1.Property({
	        name: 'promptNumber',
	        notify: InputAreaModel.stateChangedSignal,
	    });
	    /**
	    * A property descriptor containing the execution count of the input area.
	    *
	    * **See also:** [[executionCount]]
	    */
	    InputAreaModel.executionCountProperty = new phosphor_properties_1.Property({
	        name: 'executionCount',
	        notify: InputAreaModel.stateChangedSignal,
	    });
	    /**
	    * A property descriptor containing the text editor Model.
	    *
	    * **See also:** [[textEditor]]
	    */
	    InputAreaModel.textEditorProperty = new phosphor_properties_1.Property({
	        name: 'textEditor',
	        notify: InputAreaModel.stateChangedSignal,
	    });
	    return InputAreaModel;
	})();
	exports.InputAreaModel = InputAreaModel;
	//# sourceMappingURL=model.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	/**
	 * A property descriptor for a datum belonging to an object.
	 *
	 * Property descriptors can be used to expose a rich interface for an
	 * object which encapsulates value creation, coercion, and notification.
	 * They can also be used to extend the state of an object with semantic
	 * data from an unrelated class.
	 */
	var Property = (function () {
	    /**
	     * Construct a new property descriptor.
	     *
	     * @param options - The options for initializing the property.
	     */
	    function Property(options) {
	        this._pid = nextPID();
	        this._name = options.name;
	        this._value = options.value;
	        this._create = options.create;
	        this._coerce = options.coerce;
	        this._compare = options.compare;
	        this._changed = options.changed;
	        this._notify = options.notify;
	    }
	    Object.defineProperty(Property.prototype, "name", {
	        /**
	         * Get the human readable name for the property.
	         *
	         * #### Notes
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Property.prototype, "notify", {
	        /**
	         * Get the notify signal for the property.
	         *
	         * #### Notes
	         * This will be `undefined` if no notify signal was provided.
	         *
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._notify;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Get the current value of the property for a given owner.
	     *
	     * @param owner - The property owner of interest.
	     *
	     * @returns The current value of the property.
	     *
	     * #### Notes
	     * If the value has not yet been set, the default value will be
	     * computed and assigned as the current value of the property.
	     */
	    Property.prototype.get = function (owner) {
	        var value;
	        var hash = lookupHash(owner);
	        if (this._pid in hash) {
	            value = hash[this._pid];
	        }
	        else {
	            value = hash[this._pid] = this._createValue(owner);
	        }
	        return value;
	    };
	    /**
	     * Set the current value of the property for a given owner.
	     *
	     * @param owner - The property owner of interest.
	     *
	     * @param value - The value for the property.
	     *
	     * #### Notes
	     * If the value has not yet been set, the default value will be
	     * computed and used as the previous value for the comparison.
	     */
	    Property.prototype.set = function (owner, value) {
	        var oldValue;
	        var hash = lookupHash(owner);
	        if (this._pid in hash) {
	            oldValue = hash[this._pid];
	        }
	        else {
	            oldValue = hash[this._pid] = this._createValue(owner);
	        }
	        var newValue = this._coerceValue(owner, value);
	        this._maybeNotify(owner, oldValue, hash[this._pid] = newValue);
	    };
	    /**
	     * Explicitly coerce the current property value for a given owner.
	     *
	     * @param owner - The property owner of interest.
	     *
	     * #### Notes
	     * If the value has not yet been set, the default value will be
	     * computed and used as the previous value for the comparison.
	     */
	    Property.prototype.coerce = function (owner) {
	        var oldValue;
	        var hash = lookupHash(owner);
	        if (this._pid in hash) {
	            oldValue = hash[this._pid];
	        }
	        else {
	            oldValue = hash[this._pid] = this._createValue(owner);
	        }
	        var newValue = this._coerceValue(owner, oldValue);
	        this._maybeNotify(owner, oldValue, hash[this._pid] = newValue);
	    };
	    /**
	     * Get or create the default value for the given owner.
	     */
	    Property.prototype._createValue = function (owner) {
	        var create = this._create;
	        return create ? create(owner) : this._value;
	    };
	    /**
	     * Coerce the value for the given owner.
	     */
	    Property.prototype._coerceValue = function (owner, value) {
	        var coerce = this._coerce;
	        return coerce ? coerce(owner, value) : value;
	    };
	    /**
	     * Compare the old value and new value for equality.
	     */
	    Property.prototype._compareValue = function (oldValue, newValue) {
	        var compare = this._compare;
	        return compare ? compare(oldValue, newValue) : oldValue === newValue;
	    };
	    /**
	     * Run the change notification if the given values are different.
	     */
	    Property.prototype._maybeNotify = function (owner, oldValue, newValue) {
	        var changed = this._changed;
	        var notify = this._notify;
	        if (!changed && !notify) {
	            return;
	        }
	        if (this._compareValue(oldValue, newValue)) {
	            return;
	        }
	        if (changed) {
	            changed(owner, oldValue, newValue);
	        }
	        if (notify) {
	            notify.bind(owner).emit({ name: this._name, oldValue: oldValue, newValue: newValue });
	        }
	    };
	    return Property;
	})();
	exports.Property = Property;
	/**
	 * Clear the stored property data for the given property owner.
	 *
	 * @param owner - The property owner of interest.
	 *
	 * #### Notes
	 * This will clear all property values for the owner, but it will
	 * **not** run the change notification for any of the properties.
	 */
	function clearPropertyData(owner) {
	    ownerData.delete(owner);
	}
	exports.clearPropertyData = clearPropertyData;
	/**
	 * A weak mapping of property owner to property hash.
	 */
	var ownerData = new WeakMap();
	/**
	 * A function which computes successive unique property ids.
	 */
	var nextPID = (function () { var id = 0; return function () { return 'pid-' + id++; }; })();
	/**
	 * Lookup the data hash for the property owner.
	 *
	 * This will create the hash if one does not already exist.
	 */
	function lookupHash(owner) {
	    var hash = ownerData.get(owner);
	    if (hash !== void 0)
	        return hash;
	    hash = Object.create(null);
	    ownerData.set(owner, hash);
	    return hash;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	/**
	 * An object used for type-safe inter-object communication.
	 *
	 * #### Notes
	 * Signals provide a type-safe implementation of the publish-subscribe
	 * pattern. An object (publisher) declares which signals it will emit,
	 * and consumers connect callbacks (subscribers) to those signals. The
	 * subscribers are invoked whenever the publisher emits the signal.
	 *
	 * A `Signal` object must be bound to a sender in order to be useful.
	 * A common pattern is to declare a `Signal` object as a static class
	 * member, along with a convenience getter which binds the signal to
	 * the `this` instance on-demand.
	 *
	 * #### Example
	 * ```typescript
	 * import { ISignal, Signal } from 'phosphor-signaling';
	 *
	 * class MyClass {
	 *
	 *   static valueChangedSignal = new Signal<MyClass, number>();
	 *
	 *   constructor(name: string) {
	 *     this._name = name;
	 *   }
	 *
	 *   get valueChanged(): ISignal<MyClass, number> {
	 *     return MyClass.valueChangedSignal.bind(this);
	 *   }
	 *
	 *   get name(): string {
	 *     return this._name;
	 *   }
	 *
	 *   get value(): number {
	 *     return this._value;
	 *   }
	 *
	 *   set value(value: number) {
	 *     if (value !== this._value) {
	 *       this._value = value;
	 *       this.valueChanged.emit(value);
	 *     }
	 *   }
	 *
	 *   private _name: string;
	 *   private _value = 0;
	 * }
	 *
	 * function logger(sender: MyClass, value: number): void {
	 *   console.log(sender.name, value);
	 * }
	 *
	 * let m1 = new MyClass('foo');
	 * let m2 = new MyClass('bar');
	 *
	 * m1.valueChanged.connect(logger);
	 * m2.valueChanged.connect(logger);
	 *
	 * m1.value = 42;  // logs: foo 42
	 * m2.value = 17;  // logs: bar 17
	 * ```
	 */
	var Signal = (function () {
	    function Signal() {
	    }
	    /**
	     * Bind the signal to a specific sender.
	     *
	     * @param sender - The sender object to bind to the signal.
	     *
	     * @returns The bound signal object which can be used for connecting,
	     *   disconnecting, and emitting the signal.
	     */
	    Signal.prototype.bind = function (sender) {
	        return new BoundSignal(this, sender);
	    };
	    return Signal;
	})();
	exports.Signal = Signal;
	/**
	 * Remove all connections where the given object is the sender.
	 *
	 * @param sender - The sender object of interest.
	 *
	 * #### Example
	 * ```typescript
	 * disconnectSender(someObject);
	 * ```
	 */
	function disconnectSender(sender) {
	    var list = senderMap.get(sender);
	    if (!list) {
	        return;
	    }
	    var conn = list.first;
	    while (conn !== null) {
	        removeFromSendersList(conn);
	        conn.callback = null;
	        conn.thisArg = null;
	        conn = conn.nextReceiver;
	    }
	    senderMap.delete(sender);
	}
	exports.disconnectSender = disconnectSender;
	/**
	 * Remove all connections where the given object is the receiver.
	 *
	 * @param receiver - The receiver object of interest.
	 *
	 * #### Notes
	 * If a `thisArg` is provided when connecting a signal, that object
	 * is considered the receiver. Otherwise, the `callback` is used as
	 * the receiver.
	 *
	 * #### Example
	 * ```typescript
	 * // disconnect a regular object receiver
	 * disconnectReceiver(myObject);
	 *
	 * // disconnect a plain callback receiver
	 * disconnectReceiver(myCallback);
	 * ```
	 */
	function disconnectReceiver(receiver) {
	    var conn = receiverMap.get(receiver);
	    if (!conn) {
	        return;
	    }
	    while (conn !== null) {
	        var next = conn.nextSender;
	        conn.callback = null;
	        conn.thisArg = null;
	        conn.prevSender = null;
	        conn.nextSender = null;
	        conn = next;
	    }
	    receiverMap.delete(receiver);
	}
	exports.disconnectReceiver = disconnectReceiver;
	/**
	 * Clear all signal data associated with the given object.
	 *
	 * @param obj - The object for which the signal data should be cleared.
	 *
	 * #### Notes
	 * This removes all signal connections where the object is used as
	 * either the sender or the receiver.
	 *
	 * #### Example
	 * ```typescript
	 * clearSignalData(someObject);
	 * ```
	 */
	function clearSignalData(obj) {
	    disconnectSender(obj);
	    disconnectReceiver(obj);
	}
	exports.clearSignalData = clearSignalData;
	/**
	 * A concrete implementation of ISignal.
	 */
	var BoundSignal = (function () {
	    /**
	     * Construct a new bound signal.
	     */
	    function BoundSignal(signal, sender) {
	        this._signal = signal;
	        this._sender = sender;
	    }
	    /**
	     * Connect a callback to the signal.
	     */
	    BoundSignal.prototype.connect = function (callback, thisArg) {
	        return connect(this._sender, this._signal, callback, thisArg);
	    };
	    /**
	     * Disconnect a callback from the signal.
	     */
	    BoundSignal.prototype.disconnect = function (callback, thisArg) {
	        return disconnect(this._sender, this._signal, callback, thisArg);
	    };
	    /**
	     * Emit the signal and invoke the connected callbacks.
	     */
	    BoundSignal.prototype.emit = function (args) {
	        emit(this._sender, this._signal, args);
	    };
	    return BoundSignal;
	})();
	/**
	 * A struct which holds connection data.
	 */
	var Connection = (function () {
	    function Connection() {
	        /**
	         * The signal for the connection.
	         */
	        this.signal = null;
	        /**
	         * The callback connected to the signal.
	         */
	        this.callback = null;
	        /**
	         * The `this` context for the callback.
	         */
	        this.thisArg = null;
	        /**
	         * The next connection in the singly linked receivers list.
	         */
	        this.nextReceiver = null;
	        /**
	         * The next connection in the doubly linked senders list.
	         */
	        this.nextSender = null;
	        /**
	         * The previous connection in the doubly linked senders list.
	         */
	        this.prevSender = null;
	    }
	    return Connection;
	})();
	/**
	 * The list of receiver connections for a specific sender.
	 */
	var ConnectionList = (function () {
	    function ConnectionList() {
	        /**
	         * The ref count for the list.
	         */
	        this.refs = 0;
	        /**
	         * The first connection in the list.
	         */
	        this.first = null;
	        /**
	         * The last connection in the list.
	         */
	        this.last = null;
	    }
	    return ConnectionList;
	})();
	/**
	 * A mapping of sender object to its receiver connection list.
	 */
	var senderMap = new WeakMap();
	/**
	 * A mapping of receiver object to its sender connection list.
	 */
	var receiverMap = new WeakMap();
	/**
	 * Create a connection between a sender, signal, and callback.
	 */
	function connect(sender, signal, callback, thisArg) {
	    // Coerce a `null` thisArg to `undefined`.
	    thisArg = thisArg || void 0;
	    // Search for an equivalent connection and bail if one exists.
	    var list = senderMap.get(sender);
	    if (list && findConnection(list, signal, callback, thisArg)) {
	        return false;
	    }
	    // Create a new connection.
	    var conn = new Connection();
	    conn.signal = signal;
	    conn.callback = callback;
	    conn.thisArg = thisArg;
	    // Add the connection to the receivers list.
	    if (!list) {
	        list = new ConnectionList();
	        list.first = conn;
	        list.last = conn;
	        senderMap.set(sender, list);
	    }
	    else if (list.last === null) {
	        list.first = conn;
	        list.last = conn;
	    }
	    else {
	        list.last.nextReceiver = conn;
	        list.last = conn;
	    }
	    // Add the connection to the senders list.
	    var receiver = thisArg || callback;
	    var head = receiverMap.get(receiver);
	    if (head) {
	        head.prevSender = conn;
	        conn.nextSender = head;
	    }
	    receiverMap.set(receiver, conn);
	    return true;
	}
	/**
	 * Break the connection between a sender, signal, and callback.
	 */
	function disconnect(sender, signal, callback, thisArg) {
	    // Coerce a `null` thisArg to `undefined`.
	    thisArg = thisArg || void 0;
	    // Search for an equivalent connection and bail if none exists.
	    var list = senderMap.get(sender);
	    if (!list) {
	        return false;
	    }
	    var conn = findConnection(list, signal, callback, thisArg);
	    if (!conn) {
	        return false;
	    }
	    // Remove the connection from the senders list. It will be removed
	    // from the receivers list the next time the signal is emitted.
	    removeFromSendersList(conn);
	    // Clear the connection data so it becomes a dead connection.
	    conn.callback = null;
	    conn.thisArg = null;
	    return true;
	}
	/**
	 * Emit a signal and invoke the connected callbacks.
	 */
	function emit(sender, signal, args) {
	    // If there is no connection list, there is nothing to do.
	    var list = senderMap.get(sender);
	    if (!list) {
	        return;
	    }
	    // Prepare to dispatch the callbacks. Increment the reference count
	    // on the list so that the list is cleaned only when the emit stack
	    // is fully unwound.
	    list.refs++;
	    var dirty = false;
	    var last = list.last;
	    var conn = list.first;
	    // Dispatch the callbacks. If a connection has a null callback, it
	    // indicates the list is dirty. Connections which match the signal
	    // are safely dispatched where all exceptions are logged. Dispatch
	    // is stopped at the last connection for the current stack frame.
	    while (conn !== null) {
	        if (!conn.callback) {
	            dirty = true;
	        }
	        else if (conn.signal === signal) {
	            safeInvoke(conn, sender, args);
	        }
	        if (conn === last) {
	            break;
	        }
	        conn = conn.nextReceiver;
	    }
	    // Decrement the reference count on the list.
	    list.refs--;
	    // Clean the list if it's dirty and the emit stack is fully unwound.
	    if (dirty && list.refs === 0) {
	        cleanList(list);
	    }
	}
	/**
	 * Safely invoke the callback for the given connection.
	 *
	 * Exceptions thrown by the callback will be caught and logged.
	 */
	function safeInvoke(conn, sender, args) {
	    try {
	        conn.callback.call(conn.thisArg, sender, args);
	    }
	    catch (err) {
	        console.error('Exception in signal handler:', err);
	    }
	}
	/**
	 * Find a matching connection in the given connection list.
	 *
	 * Returns `null` if no matching connection is found.
	 */
	function findConnection(list, signal, callback, thisArg) {
	    var conn = list.first;
	    while (conn !== null) {
	        if (conn.signal === signal &&
	            conn.callback === callback &&
	            conn.thisArg === thisArg) {
	            return conn;
	        }
	        conn = conn.nextReceiver;
	    }
	    return null;
	}
	/**
	 * Remove the dead connections from the given connection list.
	 */
	function cleanList(list) {
	    var prev;
	    var conn = list.first;
	    while (conn !== null) {
	        var next = conn.nextReceiver;
	        if (!conn.callback) {
	            conn.nextReceiver = null;
	        }
	        else if (!prev) {
	            list.first = conn;
	            prev = conn;
	        }
	        else {
	            prev.nextReceiver = conn;
	            prev = conn;
	        }
	        conn = next;
	    }
	    if (!prev) {
	        list.first = null;
	        list.last = null;
	    }
	    else {
	        prev.nextReceiver = null;
	        list.last = prev;
	    }
	}
	/**
	 * Remove a connection from the doubly linked list of senders.
	 */
	function removeFromSendersList(conn) {
	    var receiver = conn.thisArg || conn.callback;
	    if (!receiver) {
	        return;
	    }
	    var prev = conn.prevSender;
	    var next = conn.nextSender;
	    if (prev === null && next === null) {
	        receiverMap.delete(receiver);
	    }
	    else if (prev === null) {
	        receiverMap.set(receiver, next);
	        next.prevSender = null;
	    }
	    else if (next === null) {
	        prev.nextSender = null;
	    }
	    else {
	        prev.nextSender = next;
	        next.prevSender = prev;
	    }
	    conn.prevSender = null;
	    conn.nextSender = null;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var phosphor_widget_1 = __webpack_require__(6);
	var phosphor_panel_1 = __webpack_require__(19);
	var jupyter_js_editor_1 = __webpack_require__(23);
	/**
	 * An input area widget, which hosts an editor widget.
	 */
	var InputAreaWidget = (function (_super) {
	    __extends(InputAreaWidget, _super);
	    /**
	     * Construct an input area widget.
	     */
	    function InputAreaWidget(model) {
	        _super.call(this);
	        this.addClass('jp-InputAreaWidget');
	        this._model = model;
	        this.layout = new phosphor_panel_1.PanelLayout();
	        this.updateTextEditor(model.textEditor);
	        model.stateChanged.connect(this._modelUpdate, this);
	    }
	    /**
	     * Update the text editor model, creating a new text editor
	     * widget and detaching the old one.
	     */
	    InputAreaWidget.prototype.updateTextEditor = function (editor) {
	        var layout = this.layout;
	        if (layout.childCount() > 0) {
	            layout.childAt(0).dispose();
	        }
	        layout.addChild(new jupyter_js_editor_1.CodeMirrorWidget(editor));
	    };
	    /**
	     * Change handler for model updates.
	     */
	    InputAreaWidget.prototype._modelUpdate = function (sender, args) {
	        switch (args.name) {
	            case 'textEditor':
	                this.updateTextEditor(args.newValue);
	                break;
	            case 'collapsed':
	                break;
	            case 'promptNumber':
	                break;
	            case 'executionCount':
	                break;
	        }
	    };
	    return InputAreaWidget;
	})(phosphor_widget_1.Widget);
	exports.InputAreaWidget = InputAreaWidget;
	//# sourceMappingURL=widget.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(14));
	__export(__webpack_require__(12));
	__webpack_require__(15);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var phosphor_messaging_1 = __webpack_require__(8);
	var phosphor_properties_1 = __webpack_require__(3);
	var phosphor_signaling_1 = __webpack_require__(4);
	var widget_1 = __webpack_require__(12);
	/**
	 * The abstract base class of all Phosphor layouts.
	 *
	 * #### Notes
	 * A layout is used to add child widgets to a parent and to arrange
	 * those children within the parent's node.
	 *
	 * This class must be subclassed to make a fully functioning layout.
	 */
	var Layout = (function () {
	    function Layout() {
	        this._disposed = false;
	        this._parent = null;
	    }
	    /**
	     * Dispose of the resources held by the layout.
	     *
	     * #### Notes
	     * This method should be reimplemented by subclasses to dispose their
	     * children. All reimplementations should call the superclass method.
	     */
	    Layout.prototype.dispose = function () {
	        this._disposed = true;
	        this._parent = null;
	        phosphor_signaling_1.clearSignalData(this);
	        phosphor_properties_1.clearPropertyData(this);
	    };
	    Object.defineProperty(Layout.prototype, "isDisposed", {
	        /**
	         * Test whether the layout is disposed.
	         *
	         * #### Notes
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._disposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Layout.prototype, "parent", {
	        /**
	         * Get the parent widget of the layout.
	         */
	        get: function () {
	            return this._parent;
	        },
	        /**
	         * Set the parent widget of the layout.
	         *
	         * #### Notes
	         * This is set automatically when installing the layout on the parent
	         * widget. The layout parent should not be set directly by user code.
	         */
	        set: function (value) {
	            if (!value) {
	                throw new Error('Cannot set layout parent to null.');
	            }
	            if (this._parent === value) {
	                return;
	            }
	            if (this._parent) {
	                throw new Error('Cannot change layout parent.');
	            }
	            if (value.layout !== this) {
	                throw new Error('Invalid layout parent.');
	            }
	            this._parent = value;
	            this.initialize();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Process a message sent to the parent widget.
	     *
	     * @param msg - The message sent to the parent widget.
	     *
	     * #### Notes
	     * This method is called by the parent to process a message.
	     *
	     * Subclasses may reimplement this method as needed.
	     */
	    Layout.prototype.processParentMessage = function (msg) {
	        switch (msg.type) {
	            case 'resize':
	                this.onResize(msg);
	                break;
	            case 'update-request':
	                this.onUpdateRequest(msg);
	                break;
	            case 'fit-request':
	                this.onFitRequest(msg);
	                break;
	            case 'after-attach':
	                this.onAfterAttach(msg);
	                break;
	            case 'before-detach':
	                this.onBeforeDetach(msg);
	                break;
	            case 'after-show':
	                this.onAfterShow(msg);
	                break;
	            case 'before-hide':
	                this.onBeforeHide(msg);
	                break;
	            case 'child-removed':
	                this.onChildRemoved(msg);
	                break;
	            case 'child-shown':
	                this.onChildShown(msg);
	                break;
	            case 'child-hidden':
	                this.onChildHidden(msg);
	                break;
	        }
	    };
	    /**
	     * A message handler invoked on a `'fit-request'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     */
	    Layout.prototype.onFitRequest = function (msg) { };
	    /**
	     * A message handler invoked on a `'child-shown'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     */
	    Layout.prototype.onChildShown = function (msg) { };
	    /**
	     * A message handler invoked on a `'child-hidden'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     */
	    Layout.prototype.onChildHidden = function (msg) { };
	    return Layout;
	})();
	exports.Layout = Layout;
	/**
	 * An abstract base class for creating index-based layouts.
	 *
	 * #### Notes
	 * This class implements core functionality which is required by nearly
	 * all layouts. It is a good starting point for creating custom layouts
	 * which control the types of children that may be added to the layout.
	 *
	 * This class must be subclassed to make a fully functioning layout.
	 */
	var AbstractLayout = (function (_super) {
	    __extends(AbstractLayout, _super);
	    function AbstractLayout() {
	        _super.apply(this, arguments);
	    }
	    /**
	     * Get the index of the specified child widget.
	     *
	     * @param child - The child widget of interest.
	     *
	     * @returns The index of the specified child, or `-1`.
	     */
	    AbstractLayout.prototype.childIndex = function (child) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            if (this.childAt(i) === child)
	                return i;
	        }
	        return -1;
	    };
	    /**
	     * A message handler invoked on a `'resize'` message.
	     *
	     * #### Notes
	     * The default implementation of this method sends an `UnknownSize`
	     * resize message to all children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onResize = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            phosphor_messaging_1.sendMessage(this.childAt(i), widget_1.ResizeMessage.UnknownSize);
	        }
	    };
	    /**
	     * A message handler invoked on an `'update-request'` message.
	     *
	     * #### Notes
	     * The default implementation of this method sends an `UnknownSize`
	     * resize message to all children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onUpdateRequest = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            phosphor_messaging_1.sendMessage(this.childAt(i), widget_1.ResizeMessage.UnknownSize);
	        }
	    };
	    /**
	     * A message handler invoked on an `'after-attach'` message.
	     *
	     * #### Notes
	     * The default implementation of this method forwards the message
	     * to all children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onAfterAttach = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            phosphor_messaging_1.sendMessage(this.childAt(i), msg);
	        }
	    };
	    /**
	     * A message handler invoked on a `'before-detach'` message.
	     *
	     * #### Notes
	     * The default implementation of this method forwards the message
	     * to all children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onBeforeDetach = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            phosphor_messaging_1.sendMessage(this.childAt(i), msg);
	        }
	    };
	    /**
	     * A message handler invoked on an `'after-show'` message.
	     *
	     * #### Notes
	     * The default implementation of this method forwards the message
	     * to all non-hidden children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onAfterShow = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            var child = this.childAt(i);
	            if (!child.isHidden)
	                phosphor_messaging_1.sendMessage(child, msg);
	        }
	    };
	    /**
	     * A message handler invoked on a `'before-hide'` message.
	     *
	     * #### Notes
	     * The default implementation of this method forwards the message
	     * to all non-hidden children.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    AbstractLayout.prototype.onBeforeHide = function (msg) {
	        for (var i = 0; i < this.childCount(); ++i) {
	            var child = this.childAt(i);
	            if (!child.isHidden)
	                phosphor_messaging_1.sendMessage(child, msg);
	        }
	    };
	    return AbstractLayout;
	})(Layout);
	exports.AbstractLayout = AbstractLayout;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var phosphor_queue_1 = __webpack_require__(11);
	/**
	 * A message which can be sent or posted to a message handler.
	 *
	 * #### Notes
	 * This class may be subclassed to create complex message types.
	 *
	 * **See Also** [[postMessage]] and [[sendMessage]].
	 */
	var Message = (function () {
	    /**
	     * Construct a new message.
	     *
	     * @param type - The type of the message. Consumers of a message will
	     *   use this value to cast the message to the appropriately derived
	     *   message type.
	     */
	    function Message(type) {
	        this._type = type;
	    }
	    Object.defineProperty(Message.prototype, "type", {
	        /**
	         * Get the type of the message.
	         */
	        get: function () {
	            return this._type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Message;
	})();
	exports.Message = Message;
	/**
	 * Send a message to the message handler to process immediately.
	 *
	 * @param handler - The handler which should process the message.
	 *
	 * @param msg - The message to send to the handler.
	 *
	 * #### Notes
	 * Unlike [[postMessage]], [[sendMessage]] delivers the message to
	 * the handler immediately. The handler will not have the opportunity
	 * to compress the message, however the message will still be sent
	 * through any installed message filters.
	 *
	 * **See Also** [[postMessage]].
	 */
	function sendMessage(handler, msg) {
	    getDispatcher(handler).sendMessage(handler, msg);
	}
	exports.sendMessage = sendMessage;
	/**
	 * Post a message to the message handler to process in the future.
	 *
	 * @param handler - The handler which should process the message.
	 *
	 * @param msg - The message to post to the handler.
	 *
	 * #### Notes
	 * Unlike [[sendMessage]], [[postMessage]] will schedule the deliver of
	 * the message for the next cycle of the event loop. The handler will
	 * have the opportunity to compress the message in order to optimize
	 * its handling of similar messages. The message will be sent through
	 * any installed message filters before being delivered to the handler.
	 *
	 * **See Also** [[sendMessage]].
	 */
	function postMessage(handler, msg) {
	    getDispatcher(handler).postMessage(handler, msg);
	}
	exports.postMessage = postMessage;
	/**
	 * Test whether a message handler has posted messages pending delivery.
	 *
	 * @param handler - The message handler of interest.
	 *
	 * @returns `true` if the handler has pending posted messages, `false`
	 *   otherwise.
	 *
	 * **See Also** [[sendPendingMessage]].
	 */
	function hasPendingMessages(handler) {
	    return getDispatcher(handler).hasPendingMessages();
	}
	exports.hasPendingMessages = hasPendingMessages;
	/**
	 * Send the first pending posted message to the message handler.
	 *
	 * @param handler - The message handler of interest.
	 *
	 * #### Notes
	 * If the handler has no pending messages, this is a no-op.
	 *
	 * **See Also** [[hasPendingMessages]].
	 */
	function sendPendingMessage(handler) {
	    getDispatcher(handler).sendPendingMessage(handler);
	}
	exports.sendPendingMessage = sendPendingMessage;
	/**
	 * Install a message filter for a message handler.
	 *
	 * A message filter is invoked before the message handler processes a
	 * message. If the filter returns `true` from its [[filterMessage]] method,
	 * no other filters will be invoked, and the message will not be delivered.
	 *
	 * The most recently installed message filter is executed first.
	 *
	 * @param handler - The handler whose messages should be filtered.
	 *
	 * @param filter - The filter to install for the handler.
	 *
	 * #### Notes
	 * It is possible to install the same filter multiple times. If the
	 * filter should be unique, call [[removeMessageFilter]] first.
	 *
	 * **See Also** [[removeMessageFilter]].
	 */
	function installMessageFilter(handler, filter) {
	    getDispatcher(handler).installMessageFilter(filter);
	}
	exports.installMessageFilter = installMessageFilter;
	/**
	 * Remove a previously installed message filter for a message handler.
	 *
	 * @param handler - The handler for which the filter is installed.
	 *
	 * @param filter - The filter to remove.
	 *
	 * #### Notes
	 * This will remove **all** occurrences of the filter. If the filter is
	 * not installed, this is a no-op.
	 *
	 * It is safe to call this function while the filter is executing.
	 *
	 * **See Also** [[installMessageFilter]].
	 */
	function removeMessageFilter(handler, filter) {
	    getDispatcher(handler).removeMessageFilter(filter);
	}
	exports.removeMessageFilter = removeMessageFilter;
	/**
	 * Clear all message data associated with the message handler.
	 *
	 * @param handler - The message handler for which to clear the data.
	 *
	 * #### Notes
	 * This will remove all pending messages and filters for the handler.
	 */
	function clearMessageData(handler) {
	    var dispatcher = dispatcherMap.get(handler);
	    if (dispatcher)
	        dispatcher.clear();
	    dispatchQueue.removeAll(handler);
	}
	exports.clearMessageData = clearMessageData;
	/**
	 * The internal mapping of message handler to message dispatcher
	 */
	var dispatcherMap = new WeakMap();
	/**
	 * The internal queue of pending message handlers.
	 */
	var dispatchQueue = new phosphor_queue_1.Queue();
	/**
	 * The internal animation frame id for the message loop wake up call.
	 */
	var frameId = void 0;
	/**
	 * A local reference to an event loop hook.
	 */
	var raf;
	if (typeof requestAnimationFrame === 'function') {
	    raf = requestAnimationFrame;
	}
	else {
	    raf = setImmediate;
	}
	/**
	 * Get or create the message dispatcher for a message handler.
	 */
	function getDispatcher(handler) {
	    var dispatcher = dispatcherMap.get(handler);
	    if (dispatcher)
	        return dispatcher;
	    dispatcher = new MessageDispatcher();
	    dispatcherMap.set(handler, dispatcher);
	    return dispatcher;
	}
	/**
	 * Wake up the message loop to process any pending dispatchers.
	 *
	 * This is a no-op if a wake up is not needed or is already pending.
	 */
	function wakeUpMessageLoop() {
	    if (frameId === void 0 && !dispatchQueue.empty) {
	        frameId = raf(runMessageLoop);
	    }
	}
	/**
	 * Run an iteration of the message loop.
	 *
	 * This will process all pending dispatchers in the queue. Dispatchers
	 * which are added to the queue while the message loop is running will
	 * be processed on the next message loop cycle.
	 */
	function runMessageLoop() {
	    // Clear the frame id so the next wake up call can be scheduled.
	    frameId = void 0;
	    // If the queue is empty, there is nothing else to do.
	    if (dispatchQueue.empty) {
	        return;
	    }
	    // Add a null sentinel value to the end of the queue. The queue
	    // will only be processed up to the first null value. This means
	    // that messages posted during this cycle will execute on the next
	    // cycle of the loop.
	    dispatchQueue.push(null);
	    // The message dispatch loop. If the dispatcher is the null sentinel,
	    // the processing of the current block of messages is complete and
	    // another loop is scheduled. Otherwise, the pending message is
	    // dispatched to the message handler.
	    while (!dispatchQueue.empty) {
	        var handler = dispatchQueue.pop();
	        if (handler === null) {
	            wakeUpMessageLoop();
	            return;
	        }
	        getDispatcher(handler).sendPendingMessage(handler);
	    }
	}
	/**
	 * Safely process a message for a message handler.
	 *
	 * If the handler throws an exception, it will be caught and logged.
	 */
	function safeProcess(handler, msg) {
	    try {
	        handler.processMessage(msg);
	    }
	    catch (err) {
	        console.error(err);
	    }
	}
	/**
	 * Safely compress a message for a message handler.
	 *
	 * If the handler throws an exception, it will be caught and logged.
	 */
	function safeCompress(handler, msg, queue) {
	    var result = false;
	    try {
	        result = handler.compressMessage(msg, queue);
	    }
	    catch (err) {
	        console.error(err);
	    }
	    return result;
	}
	/**
	 * Safely filter a message for a message handler.
	 *
	 * If the filter throws an exception, it will be caught and logged.
	 */
	function safeFilter(filter, handler, msg) {
	    var result = false;
	    try {
	        result = filter.filterMessage(handler, msg);
	    }
	    catch (err) {
	        console.error(err);
	    }
	    return result;
	}
	/**
	 * An internal class which manages message dispatching for a handler.
	 */
	var MessageDispatcher = (function () {
	    function MessageDispatcher() {
	        this._filters = null;
	        this._messages = null;
	    }
	    /**
	     * Send a message to the handler immediately.
	     *
	     * The message will first be sent through installed filters.
	     */
	    MessageDispatcher.prototype.sendMessage = function (handler, msg) {
	        if (!this._filterMessage(handler, msg)) {
	            safeProcess(handler, msg);
	        }
	    };
	    /**
	     * Post a message for delivery in the future.
	     *
	     * The message will first be compressed if possible.
	     */
	    MessageDispatcher.prototype.postMessage = function (handler, msg) {
	        if (!this._compressMessage(handler, msg)) {
	            this._enqueueMessage(handler, msg);
	        }
	    };
	    /**
	     * Test whether the dispatcher has messages pending delivery.
	     */
	    MessageDispatcher.prototype.hasPendingMessages = function () {
	        return !!(this._messages && !this._messages.empty);
	    };
	    /**
	     * Send the first pending message to the message handler.
	     */
	    MessageDispatcher.prototype.sendPendingMessage = function (handler) {
	        if (this._messages && !this._messages.empty) {
	            this.sendMessage(handler, this._messages.pop());
	        }
	    };
	    /**
	     * Install a message filter for the dispatcher.
	     */
	    MessageDispatcher.prototype.installMessageFilter = function (filter) {
	        this._filters = { next: this._filters, filter: filter };
	    };
	    /**
	     * Remove all occurrences of a message filter from the dispatcher.
	     */
	    MessageDispatcher.prototype.removeMessageFilter = function (filter) {
	        var link = this._filters;
	        var prev = null;
	        while (link !== null) {
	            if (link.filter === filter) {
	                link.filter = null;
	            }
	            else if (prev === null) {
	                this._filters = link;
	                prev = link;
	            }
	            else {
	                prev.next = link;
	                prev = link;
	            }
	            link = link.next;
	        }
	        if (!prev) {
	            this._filters = null;
	        }
	        else {
	            prev.next = null;
	        }
	    };
	    /**
	     * Clear all messages and filters from the dispatcher.
	     */
	    MessageDispatcher.prototype.clear = function () {
	        if (this._messages) {
	            this._messages.clear();
	        }
	        for (var link = this._filters; link !== null; link = link.next) {
	            link.filter = null;
	        }
	        this._filters = null;
	    };
	    /**
	     * Run the installed message filters for the handler.
	     *
	     * Returns `true` if the message was filtered, `false` otherwise.
	     */
	    MessageDispatcher.prototype._filterMessage = function (handler, msg) {
	        for (var link = this._filters; link !== null; link = link.next) {
	            if (link.filter && safeFilter(link.filter, handler, msg)) {
	                return true;
	            }
	        }
	        return false;
	    };
	    /**
	     * Compress the mssage for the given handler.
	     *
	     * Returns `true` if the message was compressed, `false` otherwise.
	     */
	    MessageDispatcher.prototype._compressMessage = function (handler, msg) {
	        if (!handler.compressMessage) {
	            return false;
	        }
	        if (!this._messages || this._messages.empty) {
	            return false;
	        }
	        return safeCompress(handler, msg, this._messages);
	    };
	    /**
	     * Enqueue the message for future delivery to the handler.
	     */
	    MessageDispatcher.prototype._enqueueMessage = function (handler, msg) {
	        this._ensureMessages().push(msg);
	        dispatchQueue.push(handler);
	        wakeUpMessageLoop();
	    };
	    /**
	     * Get the internal message queue, creating it if needed.
	     */
	    MessageDispatcher.prototype._ensureMessages = function () {
	        return this._messages || (this._messages = new phosphor_queue_1.Queue());
	    };
	    return MessageDispatcher;
	})();
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(10).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate, __webpack_require__(9).clearImmediate))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	/**
	 * A generic FIFO queue data structure.
	 *
	 * #### Notes
	 * This queue is implemented internally using a singly linked list and
	 * can grow to arbitrary size.
	 *
	 * #### Example
	 * ```typescript
	 * let q = new Queue<number>([0, 1, 2]);
	 * q.size;      // 3
	 * q.empty;     // false
	 * q.pop();     // 0
	 * q.pop();     // 1
	 * q.push(42);  // undefined
	 * q.size;      // 2
	 * q.pop();     // 2
	 * q.pop();     // 42
	 * q.pop();     // undefined
	 * q.size;      // 0
	 * q.empty;     // true
	 * ```
	 */
	var Queue = (function () {
	    /**
	     * Construct a new queue.
	     *
	     * @param items - The initial items for the queue.
	     */
	    function Queue(items) {
	        var _this = this;
	        this._size = 0;
	        this._front = null;
	        this._back = null;
	        if (items)
	            items.forEach(function (item) { return _this.push(item); });
	    }
	    Object.defineProperty(Queue.prototype, "size", {
	        /**
	         * Get the number of elements in the queue.
	         *
	         * #### Notes
	         * This has `O(1)` complexity.
	         */
	        get: function () {
	            return this._size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queue.prototype, "empty", {
	        /**
	         * Test whether the queue is empty.
	         *
	         * #### Notes
	         * This has `O(1)` complexity.
	         */
	        get: function () {
	            return this._size === 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queue.prototype, "front", {
	        /**
	         * Get the value at the front of the queue.
	         *
	         * #### Notes
	         * This has `O(1)` complexity.
	         *
	         * If the queue is empty, this value will be `undefined`.
	         */
	        get: function () {
	            return this._front !== null ? this._front.value : void 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queue.prototype, "back", {
	        /**
	         * Get the value at the back of the queue.
	         *
	         * #### Notes
	         * This has `O(1)` complexity.
	         *
	         * If the queue is empty, this value will be `undefined`.
	         */
	        get: function () {
	            return this._back !== null ? this._back.value : void 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Push a value onto the back of the queue.
	     *
	     * @param value - The value to add to the queue.
	     *
	     * #### Notes
	     * This has `O(1)` complexity.
	     */
	    Queue.prototype.push = function (value) {
	        var link = { next: null, value: value };
	        if (this._back === null) {
	            this._front = link;
	            this._back = link;
	        }
	        else {
	            this._back.next = link;
	            this._back = link;
	        }
	        this._size++;
	    };
	    /**
	     * Pop and return the value at the front of the queue.
	     *
	     * @returns The value at the front of the queue.
	     *
	     * #### Notes
	     * This has `O(1)` complexity.
	     *
	     * If the queue is empty, the return value will be `undefined`.
	     */
	    Queue.prototype.pop = function () {
	        var link = this._front;
	        if (link === null) {
	            return void 0;
	        }
	        if (link.next === null) {
	            this._front = null;
	            this._back = null;
	        }
	        else {
	            this._front = link.next;
	        }
	        this._size--;
	        return link.value;
	    };
	    /**
	     * Remove the first occurrence of a value from the queue.
	     *
	     * @param value - The value to remove from the queue.
	     *
	     * @returns `true` on success, `false` otherwise.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     */
	    Queue.prototype.remove = function (value) {
	        var link = this._front;
	        var prev = null;
	        while (link !== null) {
	            if (link.value === value) {
	                if (prev === null) {
	                    this._front = link.next;
	                }
	                else {
	                    prev.next = link.next;
	                }
	                if (link.next === null) {
	                    this._back = prev;
	                }
	                this._size--;
	                return true;
	            }
	            prev = link;
	            link = link.next;
	        }
	        return false;
	    };
	    /**
	     * Remove all occurrences of a value from the queue.
	     *
	     * @param value - The value to remove from the queue.
	     *
	     * @returns The number of occurrences removed.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     */
	    Queue.prototype.removeAll = function (value) {
	        var count = 0;
	        var link = this._front;
	        var prev = null;
	        while (link !== null) {
	            if (link.value === value) {
	                count++;
	                this._size--;
	            }
	            else if (prev === null) {
	                this._front = link;
	                prev = link;
	            }
	            else {
	                prev.next = link;
	                prev = link;
	            }
	            link = link.next;
	        }
	        if (!prev) {
	            this._front = null;
	            this._back = null;
	        }
	        else {
	            prev.next = null;
	            this._back = prev;
	        }
	        return count;
	    };
	    /**
	     * Remove all values from the queue.
	     *
	     * #### Notes
	     * This has `O(1)` complexity.
	     */
	    Queue.prototype.clear = function () {
	        this._size = 0;
	        this._front = null;
	        this._back = null;
	    };
	    /**
	     * Create an array from the values in the queue.
	     *
	     * @returns An array of all values in the queue.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     */
	    Queue.prototype.toArray = function () {
	        var result = new Array(this._size);
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            result[i] = link.value;
	        }
	        return result;
	    };
	    /**
	     * Test whether any value in the queue passes a predicate function.
	     *
	     * @param pred - The predicate to apply to the values.
	     *
	     * @returns `true` if any value in the queue passes the predicate,
	     *   or `false` otherwise.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     *
	     * It is **not** safe for the predicate to modify the queue while
	     * iterating.
	     */
	    Queue.prototype.some = function (pred) {
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            if (pred(link.value, i))
	                return true;
	        }
	        return false;
	    };
	    /**
	     * Test whether all values in the queue pass a predicate function.
	     *
	     * @param pred - The predicate to apply to the values.
	     *
	     * @returns `true` if all values in the queue pass the predicate,
	     *   or `false` otherwise.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     *
	     * It is **not** safe for the predicate to modify the queue while
	     * iterating.
	     */
	    Queue.prototype.every = function (pred) {
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            if (!pred(link.value, i))
	                return false;
	        }
	        return true;
	    };
	    /**
	     * Create an array of the values which pass a predicate function.
	     *
	     * @param pred - The predicate to apply to the values.
	     *
	     * @returns The array of values which pass the predicate.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     *
	     * It is **not** safe for the predicate to modify the queue while
	     * iterating.
	     */
	    Queue.prototype.filter = function (pred) {
	        var result = [];
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            if (pred(link.value, i))
	                result.push(link.value);
	        }
	        return result;
	    };
	    /**
	     * Create an array of mapped values for the values in the queue.
	     *
	     * @param callback - The map function to apply to the values.
	     *
	     * @returns The array of values returned by the map function.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     *
	     * It is **not** safe for the callback to modify the queue while
	     * iterating.
	     */
	    Queue.prototype.map = function (callback) {
	        var result = new Array(this._size);
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            result[i] = callback(link.value, i);
	        }
	        return result;
	    };
	    /**
	     * Execute a callback for each value in the queue.
	     *
	     * @param callback - The function to apply to the values.
	     *
	     * @returns The first value returned by the callback which is not
	     *   `undefined`.
	     *
	     * #### Notes
	     * This has `O(N)` complexity.
	     *
	     * Iteration will terminate immediately if the callback returns any
	     * value other than `undefined`.
	     *
	     * It is **not** safe for the callback to modify the queue while
	     * iterating.
	     */
	    Queue.prototype.forEach = function (callback) {
	        for (var i = 0, link = this._front; link !== null; link = link.next, ++i) {
	            var result = callback(link.value, i);
	            if (result !== void 0)
	                return result;
	        }
	        return void 0;
	    };
	    return Queue;
	})();
	exports.Queue = Queue;
	//# sourceMappingURL=index.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var phosphor_messaging_1 = __webpack_require__(8);
	var phosphor_nodewrapper_1 = __webpack_require__(13);
	var phosphor_properties_1 = __webpack_require__(3);
	var phosphor_signaling_1 = __webpack_require__(4);
	var title_1 = __webpack_require__(14);
	/**
	 * The class name added to Widget instances.
	 */
	var WIDGET_CLASS = 'p-Widget';
	/**
	 * The class name added to hidden widgets.
	 */
	var HIDDEN_CLASS = 'p-mod-hidden';
	/**
	 * The base class of the Phosphor widget hierarchy.
	 *
	 * #### Notes
	 * This class will typically be subclassed in order to create a useful
	 * widget. However, it can be used directly to host externally created
	 * content. Simply instantiate an empty widget and add the DOM content
	 * directly to the widget's `.node`.
	 */
	var Widget = (function (_super) {
	    __extends(Widget, _super);
	    /**
	     * Construct a new widget.
	     */
	    function Widget() {
	        _super.call(this);
	        this._flags = 0;
	        this._layout = null;
	        this._parent = null;
	        this.addClass(WIDGET_CLASS);
	    }
	    /**
	     * Dispose of the widget and its descendants.
	     *
	     * #### Notes
	     * It is generally unsafe to use the widget after it is disposed.
	     *
	     * All calls made to this method after the first are a no-op.
	     */
	    Widget.prototype.dispose = function () {
	        // Do nothing if the widget is already disposed.
	        if (this.isDisposed) {
	            return;
	        }
	        // Set the disposed flag and emit the disposed signal.
	        this.setFlag(WidgetFlag.IsDisposed);
	        this.disposed.emit(void 0);
	        // Remove or detach the widget if necessary.
	        if (this.parent) {
	            this.parent = null;
	        }
	        else if (this.isAttached) {
	            this.detach();
	        }
	        // Dispose of the widget layout.
	        if (this._layout) {
	            this._layout.dispose();
	            this._layout = null;
	        }
	        // Clear the attached data associated with the widget.
	        phosphor_signaling_1.clearSignalData(this);
	        phosphor_messaging_1.clearMessageData(this);
	        phosphor_properties_1.clearPropertyData(this);
	    };
	    Object.defineProperty(Widget.prototype, "disposed", {
	        /**
	         * A signal emitted when the widget is disposed.
	         *
	         * **See also:** [[dispose]], [[disposed]]
	         */
	        get: function () {
	            return WidgetPrivate.disposedSignal.bind(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "isDisposed", {
	        /**
	         * Test whether the widget has been disposed.
	         *
	         * #### Notes
	         * This is a read-only property.
	         *
	         * **See also:** [[dispose]], [[disposed]]
	         */
	        get: function () {
	            return this.testFlag(WidgetFlag.IsDisposed);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "isAttached", {
	        /**
	         * Test whether the widget's node is attached to the DOM.
	         *
	         * #### Notes
	         * This is a read-only property.
	         *
	         * **See also:** [[attach]], [[detach]]
	         */
	        get: function () {
	            return this.testFlag(WidgetFlag.IsAttached);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "isHidden", {
	        /**
	         * Test whether the widget is explicitly hidden.
	         *
	         * #### Notes
	         * This is a read-only property.
	         *
	         * **See also:** [[isVisible]], [[hide]], [[show]]
	         */
	        get: function () {
	            return this.testFlag(WidgetFlag.IsHidden);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "isVisible", {
	        /**
	         * Test whether the widget is visible.
	         *
	         * #### Notes
	         * A widget is visible when it is attached to the DOM, is not
	         * explicitly hidden, and has no explicitly hidden ancestors.
	         *
	         * This is a read-only property.
	         *
	         * **See also:** [[isHidden]], [[hide]], [[show]]
	         */
	        get: function () {
	            return this.testFlag(WidgetFlag.IsVisible);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "title", {
	        /**
	         * Get the title data object for the widget.
	         *
	         * #### Notes
	         * The title data is used by some container widgets when displaying
	         * the widget along with a title, such as a tab panel or dock panel.
	         *
	         * Not all widgets will make use of the title data, so it is created
	         * on-demand the first time it is accessed.
	         */
	        get: function () {
	            return WidgetPrivate.titleProperty.get(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "parent", {
	        /**
	         * Get the parent of the widget.
	         *
	         * #### Notes
	         * This will be `null` if the widget does not have a parent.
	         */
	        get: function () {
	            return this._parent;
	        },
	        /**
	         * Set the parent of the widget.
	         *
	         * #### Notes
	         * The widget will be automatically removed from its current parent.
	         *
	         * This is a no-op if there is no effective parent change.
	         */
	        set: function (value) {
	            value = value || null;
	            if (this._parent === value) {
	                return;
	            }
	            if (value && this.contains(value)) {
	                throw new Error('Invalid parent widget.');
	            }
	            if (this._parent && !this._parent.isDisposed) {
	                phosphor_messaging_1.sendMessage(this._parent, new ChildMessage('child-removed', this));
	            }
	            this._parent = value;
	            if (this._parent && !this._parent.isDisposed) {
	                phosphor_messaging_1.sendMessage(this._parent, new ChildMessage('child-added', this));
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "layout", {
	        /**
	         * Get the layout for the widget.
	         *
	         * #### Notes
	         * This will be `null` if the widget does not have a layout.
	         */
	        get: function () {
	            return this._layout;
	        },
	        /**
	         * Set the layout for the widget.
	         *
	         * #### Notes
	         * The layout is single-use only. It cannot be set to `null` and it
	         * cannot be changed after the first assignment.
	         *
	         * The layout is disposed automatically when the widget is disposed.
	         */
	        set: function (value) {
	            if (!value) {
	                throw new Error('Cannot set widget layout to null.');
	            }
	            if (this._layout === value) {
	                return;
	            }
	            if (this._layout) {
	                throw new Error('Cannot change widget layout.');
	            }
	            if (value.parent) {
	                throw new Error('Cannot change layout parent.');
	            }
	            this._layout = value;
	            value.parent = this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Test whether a widget is a descendant of this widget.
	     *
	     * @param widget - The widget of interest.
	     *
	     * @returns `true` if the widget is a descendant, `false` otherwise.
	     */
	    Widget.prototype.contains = function (widget) {
	        while (widget) {
	            if (widget === this) {
	                return true;
	            }
	            widget = widget._parent;
	        }
	        return false;
	    };
	    /**
	     * Post an `'update-request'` message to the widget.
	     *
	     * **See also:** [[MsgUpdateRequest]]
	     */
	    Widget.prototype.update = function () {
	        phosphor_messaging_1.postMessage(this, Widget.MsgUpdateRequest);
	    };
	    /**
	     * Post a `'fit-request'` message to the widget.
	     *
	     * **See also:** [[MsgFitRequest]]
	     */
	    Widget.prototype.fit = function () {
	        phosphor_messaging_1.postMessage(this, Widget.MsgFitRequest);
	    };
	    /**
	     * Send a `'close-request'` message to the widget.
	     *
	     * **See also:** [[MsgCloseRequest]]
	     */
	    Widget.prototype.close = function () {
	        phosphor_messaging_1.sendMessage(this, Widget.MsgCloseRequest);
	    };
	    /**
	     * Show the widget and make it visible to its parent widget.
	     *
	     * #### Notes
	     * This causes the [[isHidden]] property to be `false`.
	     */
	    Widget.prototype.show = function () {
	        if (!this.testFlag(WidgetFlag.IsHidden)) {
	            return;
	        }
	        this.clearFlag(WidgetFlag.IsHidden);
	        this.removeClass(HIDDEN_CLASS);
	        if (this.isAttached && (!this.parent || this.parent.isVisible)) {
	            phosphor_messaging_1.sendMessage(this, Widget.MsgAfterShow);
	        }
	        if (this.parent) {
	            phosphor_messaging_1.sendMessage(this.parent, new ChildMessage('child-shown', this));
	        }
	    };
	    /**
	     * Hide the widget and make it hidden to its parent widget.
	     *
	     * #### Notes
	     * This causes the [[isHidden]] property to be `true`.
	     */
	    Widget.prototype.hide = function () {
	        if (this.testFlag(WidgetFlag.IsHidden)) {
	            return;
	        }
	        this.setFlag(WidgetFlag.IsHidden);
	        if (this.isAttached && (!this.parent || this.parent.isVisible)) {
	            phosphor_messaging_1.sendMessage(this, Widget.MsgBeforeHide);
	        }
	        this.addClass(HIDDEN_CLASS);
	        if (this.parent) {
	            phosphor_messaging_1.sendMessage(this.parent, new ChildMessage('child-hidden', this));
	        }
	    };
	    /**
	     * Set whether the widget is hidden.
	     *
	     * @param hidden - `true` to hide the widget, or `false` to show it.
	     *
	     * #### Notes
	     * `widget.setHidden(true)` is equivalent to `widget.hide()`, and
	     * `widget.setHidden(false)` is equivalent to `widget.show()`.
	     */
	    Widget.prototype.setHidden = function (hidden) {
	        if (hidden) {
	            this.hide();
	        }
	        else {
	            this.show();
	        }
	    };
	    /**
	     * Attach the widget to a host DOM node.
	     *
	     * @param host - The DOM node to use as the widget's host.
	     *
	     * @throws An error if the widget is not a root widget, if the widget
	     *   is already attached, or if the host is not attached to the DOM.
	     */
	    Widget.prototype.attach = function (host) {
	        if (this.parent) {
	            throw new Error('Cannot attach child widget.');
	        }
	        if (this.isAttached || document.body.contains(this.node)) {
	            throw new Error('Widget already attached.');
	        }
	        if (!document.body.contains(host)) {
	            throw new Error('Host not attached.');
	        }
	        host.appendChild(this.node);
	        phosphor_messaging_1.sendMessage(this, Widget.MsgAfterAttach);
	    };
	    /**
	     * Detach the widget from its host DOM node.
	     *
	     * @throws An error if the widget is not a root widget, or if the
	     *   widget is not attached.
	     */
	    Widget.prototype.detach = function () {
	        if (this.parent) {
	            throw new Error('Cannot detach child widget.');
	        }
	        if (!this.isAttached || !document.body.contains(this.node)) {
	            throw new Error('Widget not attached.');
	        }
	        phosphor_messaging_1.sendMessage(this, Widget.MsgBeforeDetach);
	        this.node.parentNode.removeChild(this.node);
	    };
	    /**
	     * Test whether the given widget flag is set.
	     *
	     * #### Notes
	     * This will not typically be consumed directly by user code.
	     */
	    Widget.prototype.testFlag = function (flag) {
	        return (this._flags & flag) !== 0;
	    };
	    /**
	     * Set the given widget flag.
	     *
	     * #### Notes
	     * This will not typically be consumed directly by user code.
	     */
	    Widget.prototype.setFlag = function (flag) {
	        this._flags |= flag;
	    };
	    /**
	     * Clear the given widget flag.
	     *
	     * #### Notes
	     * This will not typically be consumed directly by user code.
	     */
	    Widget.prototype.clearFlag = function (flag) {
	        this._flags &= ~flag;
	    };
	    /**
	     * Compress a message posted to the widget.
	     *
	     * @param msg - The message posted to the widget.
	     *
	     * @param pending - The queue of pending messages for the widget.
	     *
	     * @returns `true` if the message should be ignored, or `false` if
	     *   the message should be enqueued for delivery as normal.
	     *
	     * #### Notes
	     * Subclasses may reimplement this method as needed.
	     */
	    Widget.prototype.compressMessage = function (msg, pending) {
	        if (msg.type === 'update-request') {
	            return pending.some(function (other) { return other.type === 'update-request'; });
	        }
	        if (msg.type === 'fit-request') {
	            return pending.some(function (other) { return other.type === 'fit-request'; });
	        }
	        return false;
	    };
	    /**
	     * Process a message sent to the widget.
	     *
	     * @param msg - The message sent to the widget.
	     *
	     * #### Notes
	     * Subclasses may reimplement this method as needed.
	     */
	    Widget.prototype.processMessage = function (msg) {
	        switch (msg.type) {
	            case 'resize':
	                this.notifyLayout(msg);
	                this.onResize(msg);
	                break;
	            case 'update-request':
	                this.notifyLayout(msg);
	                this.onUpdateRequest(msg);
	                break;
	            case 'after-show':
	                this.setFlag(WidgetFlag.IsVisible);
	                this.notifyLayout(msg);
	                this.onAfterShow(msg);
	                break;
	            case 'before-hide':
	                this.notifyLayout(msg);
	                this.onBeforeHide(msg);
	                this.clearFlag(WidgetFlag.IsVisible);
	                break;
	            case 'after-attach':
	                var visible = !this.isHidden && (!this.parent || this.parent.isVisible);
	                if (visible)
	                    this.setFlag(WidgetFlag.IsVisible);
	                this.setFlag(WidgetFlag.IsAttached);
	                this.notifyLayout(msg);
	                this.onAfterAttach(msg);
	                break;
	            case 'before-detach':
	                this.notifyLayout(msg);
	                this.onBeforeDetach(msg);
	                this.clearFlag(WidgetFlag.IsVisible);
	                this.clearFlag(WidgetFlag.IsAttached);
	                break;
	            case 'close-request':
	                this.notifyLayout(msg);
	                this.onCloseRequest(msg);
	                break;
	            case 'child-added':
	                this.notifyLayout(msg);
	                this.onChildAdded(msg);
	                break;
	            case 'child-removed':
	                this.notifyLayout(msg);
	                this.onChildRemoved(msg);
	                break;
	            default:
	                this.notifyLayout(msg);
	                break;
	        }
	    };
	    /**
	     * Invoke the message processing routine of the widget's layout.
	     *
	     * @param msg - The message to dispatch to the layout.
	     *
	     * #### Notes
	     * This is a no-op if the widget does not have a layout.
	     */
	    Widget.prototype.notifyLayout = function (msg) {
	        if (this.layout)
	            this.layout.processParentMessage(msg);
	    };
	    /**
	     * A message handler invoked on a `'close-request'` message.
	     *
	     * #### Notes
	     * The default implementation of this handler detaches the widget.
	     *
	     * **See also:** [[close]], [[MsgCloseRequest]]
	     */
	    Widget.prototype.onCloseRequest = function (msg) {
	        if (this.parent) {
	            this.parent = null;
	        }
	        else if (this.isAttached) {
	            this.detach();
	        }
	    };
	    /**
	     * A message handler invoked on a `'resize'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[ResizeMessage]]
	     */
	    Widget.prototype.onResize = function (msg) { };
	    /**
	     * A message handler invoked on an `'update-request'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[update]], [[MsgUpdateRequest]]
	     */
	    Widget.prototype.onUpdateRequest = function (msg) { };
	    /**
	     * A message handler invoked on an `'after-show'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[MsgAfterShow]]
	     */
	    Widget.prototype.onAfterShow = function (msg) { };
	    /**
	     * A message handler invoked on a `'before-hide'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[MsgBeforeHide]]
	     */
	    Widget.prototype.onBeforeHide = function (msg) { };
	    /**
	     * A message handler invoked on an `'after-attach'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[MsgAfterAttach]]
	     */
	    Widget.prototype.onAfterAttach = function (msg) { };
	    /**
	     * A message handler invoked on a `'before-detach'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[MsgBeforeDetach]]
	     */
	    Widget.prototype.onBeforeDetach = function (msg) { };
	    /**
	     * A message handler invoked on a `'child-added'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[ChildMessage]]
	     */
	    Widget.prototype.onChildAdded = function (msg) { };
	    /**
	     * A message handler invoked on a `'child-removed'` message.
	     *
	     * The default implementation of this handler is a no-op.
	     *
	     * **See also:** [[ChildMessage]]
	     */
	    Widget.prototype.onChildRemoved = function (msg) { };
	    return Widget;
	})(phosphor_nodewrapper_1.NodeWrapper);
	exports.Widget = Widget;
	/**
	 * The namespace for the `Widget` class statics.
	 */
	var Widget;
	(function (Widget) {
	    /**
	     * A singleton `'update-request'` message.
	     *
	     * #### Notes
	     * This message can be dispatched to supporting widgets in order to
	     * update their content based on the current widget state. Not all
	     * widgets will respond to messages of this type.
	     *
	     * For widgets with a layout, this message will inform the layout to
	     * update the position and size of its child widgets.
	     *
	     * Messages of this type are compressed by default.
	     *
	     * **See also:** [[update]], [[onUpdateRequest]]
	     */
	    Widget.MsgUpdateRequest = new phosphor_messaging_1.Message('update-request');
	    /**
	     * A singleton `'fit-request'` message.
	     *
	     * #### Notes
	     * For widgets with a layout, this message will inform the layout to
	     * recalculate its size constraints to fit the space requirements of
	     * its child widgets, and to update their position and size. Not all
	     * layouts will respond to messages of this type.
	     *
	     * Messages of this type are compressed by default.
	     *
	     * **See also:** [[fit]]
	     */
	    Widget.MsgFitRequest = new phosphor_messaging_1.Message('fit-request');
	    /**
	     * A singleton `'close-request'` message.
	     *
	     * #### Notes
	     * This message should be dispatched to a widget when it should close
	     * and remove itself from the widget hierarchy.
	     *
	     * Messages of this type are compressed by default.
	     *
	     * **See also:** [[close]], [[onCloseRequest]]
	     */
	    Widget.MsgCloseRequest = new phosphor_messaging_1.Message('close-request');
	    /**
	     * A singleton `'after-show'` message.
	     *
	     * #### Notes
	     * This message is sent to a widget after it becomes visible.
	     *
	     * This message is **not** sent when the widget is being attached.
	     *
	     * **See also:** [[isVisible]], [[onAfterShow]]
	     */
	    Widget.MsgAfterShow = new phosphor_messaging_1.Message('after-show');
	    /**
	     * A singleton `'before-hide'` message.
	     *
	     * #### Notes
	     * This message is sent to a widget before it becomes not-visible.
	     *
	     * This message is **not** sent when the widget is being detached.
	     *
	     * **See also:** [[isVisible]], [[onBeforeHide]]
	     */
	    Widget.MsgBeforeHide = new phosphor_messaging_1.Message('before-hide');
	    /**
	     * A singleton `'after-attach'` message.
	     *
	     * #### Notes
	     * This message is sent to a widget after it is attached.
	     *
	     * **See also:** [[isAttached]], [[onAfterAttach]]
	     */
	    Widget.MsgAfterAttach = new phosphor_messaging_1.Message('after-attach');
	    /**
	     * A singleton `'before-detach'` message.
	     *
	     * #### Notes
	     * This message is sent to a widget before it is detached.
	     *
	     * **See also:** [[isAttached]], [[onBeforeDetach]]
	     */
	    Widget.MsgBeforeDetach = new phosphor_messaging_1.Message('before-detach');
	})(Widget = exports.Widget || (exports.Widget = {}));
	/**
	 * An enum of widget bit flags.
	 */
	(function (WidgetFlag) {
	    /**
	     * The widget has been disposed.
	     */
	    WidgetFlag[WidgetFlag["IsDisposed"] = 1] = "IsDisposed";
	    /**
	     * The widget is attached to the DOM.
	     */
	    WidgetFlag[WidgetFlag["IsAttached"] = 2] = "IsAttached";
	    /**
	     * The widget is hidden.
	     */
	    WidgetFlag[WidgetFlag["IsHidden"] = 4] = "IsHidden";
	    /**
	     * The widget is visible.
	     */
	    WidgetFlag[WidgetFlag["IsVisible"] = 8] = "IsVisible";
	})(exports.WidgetFlag || (exports.WidgetFlag = {}));
	var WidgetFlag = exports.WidgetFlag;
	/**
	 * A message class for child related messages.
	 */
	var ChildMessage = (function (_super) {
	    __extends(ChildMessage, _super);
	    /**
	     * Construct a new child message.
	     *
	     * @param type - The message type.
	     *
	     * @param child - The child widget for the message.
	     */
	    function ChildMessage(type, child) {
	        _super.call(this, type);
	        this._child = child;
	    }
	    Object.defineProperty(ChildMessage.prototype, "child", {
	        /**
	         * The child widget for the message.
	         *
	         * #### Notes
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._child;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ChildMessage;
	})(phosphor_messaging_1.Message);
	exports.ChildMessage = ChildMessage;
	/**
	 * A message class for `'resize'` messages.
	 */
	var ResizeMessage = (function (_super) {
	    __extends(ResizeMessage, _super);
	    /**
	     * Construct a new resize message.
	     *
	     * @param width - The **offset width** of the widget, or `-1` if
	     *   the width is not known.
	     *
	     * @param height - The **offset height** of the widget, or `-1` if
	     *   the height is not known.
	     */
	    function ResizeMessage(width, height) {
	        _super.call(this, 'resize');
	        this._width = width;
	        this._height = height;
	    }
	    Object.defineProperty(ResizeMessage.prototype, "width", {
	        /**
	         * The offset width of the widget.
	         *
	         * #### Notes
	         * This will be `-1` if the width is unknown.
	         *
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ResizeMessage.prototype, "height", {
	        /**
	         * The offset height of the widget.
	         *
	         * #### Notes
	         * This will be `-1` if the height is unknown.
	         *
	         * This is a read-only property.
	         */
	        get: function () {
	            return this._height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ResizeMessage;
	})(phosphor_messaging_1.Message);
	exports.ResizeMessage = ResizeMessage;
	/**
	 * The namespace for the `ResizeMessage` class statics.
	 */
	var ResizeMessage;
	(function (ResizeMessage) {
	    /**
	     * A singleton `'resize'` message with an unknown size.
	     */
	    ResizeMessage.UnknownSize = new ResizeMessage(-1, -1);
	})(ResizeMessage = exports.ResizeMessage || (exports.ResizeMessage = {}));
	/**
	 * The namespace for the widget private data.
	 */
	var WidgetPrivate;
	(function (WidgetPrivate) {
	    /**
	     * A signal emitted when the widget is disposed.
	     */
	    WidgetPrivate.disposedSignal = new phosphor_signaling_1.Signal();
	    /**
	     * A property for the title data for a widget.
	     */
	    WidgetPrivate.titleProperty = new phosphor_properties_1.Property({
	        name: 'title',
	        create: function () { return new title_1.Title(); },
	    });
	})(WidgetPrivate || (WidgetPrivate = {}));


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	/**
	 * A base class for creating objects which wrap a DOM node.
	 */
	var NodeWrapper = (function () {
	    /**
	     * Construct a new node wrapper.
	     */
	    function NodeWrapper() {
	        this._node = this.constructor.createNode();
	    }
	    /**
	     * Create the DOM node for a new node wrapper instance.
	     *
	     * @returns The DOM node to use with the node wrapper instance.
	     *
	     * #### Notes
	     * The default implementation creates an empty `<div>`.
	     *
	     * This may be reimplemented by a subclass to create a custom node.
	     */
	    NodeWrapper.createNode = function () {
	        return document.createElement('div');
	    };
	    Object.defineProperty(NodeWrapper.prototype, "node", {
	        /**
	         * Get the DOM node managed by the wrapper.
	         *
	         * #### Notes
	         * This property is read-only.
	         */
	        get: function () {
	            return this._node;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NodeWrapper.prototype, "id", {
	        /**
	         * Get the id of the wrapper's DOM node.
	         */
	        get: function () {
	            return this._node.id;
	        },
	        /**
	         * Set the id of the wrapper's DOM node.
	         */
	        set: function (value) {
	            this._node.id = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Test whether the wrapper's DOM node has the given class name.
	     *
	     * @param name - The class name of interest.
	     *
	     * @returns `true` if the node has the class, `false` otherwise.
	     */
	    NodeWrapper.prototype.hasClass = function (name) {
	        return this._node.classList.contains(name);
	    };
	    /**
	     * Add a class name to the wrapper's DOM node.
	     *
	     * @param name - The class name to add to the node.
	     *
	     * #### Notes
	     * If the class name is already added to the node, this is a no-op.
	     */
	    NodeWrapper.prototype.addClass = function (name) {
	        this._node.classList.add(name);
	    };
	    /**
	     * Remove a class name from the wrapper's DOM node.
	     *
	     * @param name - The class name to remove from the node.
	     *
	     * #### Notes
	     * If the class name is not yet added to the node, this is a no-op.
	     */
	    NodeWrapper.prototype.removeClass = function (name) {
	        this._node.classList.remove(name);
	    };
	    /**
	     * Toggle a class name on the wrapper's DOM node.
	     *
	     * @param name - The class name to toggle on the node.
	     *
	     * @param force - Whether to force add the class (`true`) or force
	     *   remove the class (`false`). If not provided, the presence of
	     *   the class will be toggled from its current state.
	     *
	     * @returns `true` if the class is now present, `false` otherwise.
	     */
	    NodeWrapper.prototype.toggleClass = function (name, force) {
	        var present;
	        if (force === true) {
	            this.addClass(name);
	            present = true;
	        }
	        else if (force === false) {
	            this.removeClass(name);
	            present = false;
	        }
	        else if (this.hasClass(name)) {
	            this.removeClass(name);
	            present = false;
	        }
	        else {
	            this.addClass(name);
	            present = true;
	        }
	        return present;
	    };
	    return NodeWrapper;
	})();
	exports.NodeWrapper = NodeWrapper;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var phosphor_properties_1 = __webpack_require__(3);
	var phosphor_signaling_1 = __webpack_require__(4);
	/**
	 * An object which holds data related to a widget title.
	 *
	 * #### Notes
	 * A title object is intended to hold the data necessary to display a
	 * header for a particular widget. A common example is the `TabPanel`,
	 * which uses the widget title to populate the tab for a child widget.
	 */
	var Title = (function () {
	    /**
	     * Construct a new title.
	     *
	     * @param options - The options for initializing a title.
	     */
	    function Title(options) {
	        if (options)
	            TitlePrivate.initFrom(this, options);
	    }
	    Object.defineProperty(Title.prototype, "changed", {
	        /**
	         * A signal emitted when the title state changes.
	         */
	        get: function () {
	            return TitlePrivate.changedSignal.bind(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Title.prototype, "text", {
	        /**
	         * Get the text for the title.
	         *
	         * #### Notes
	         * The default value is an empty string.
	         */
	        get: function () {
	            return TitlePrivate.textProperty.get(this);
	        },
	        /**
	         * Set the text for the title.
	         */
	        set: function (value) {
	            TitlePrivate.textProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Title.prototype, "icon", {
	        /**
	         * Get the icon class name for the title.
	         */
	        get: function () {
	            return TitlePrivate.iconProperty.get(this);
	        },
	        /**
	         * Set the icon class name for the title.
	         *
	         * #### Notes
	         * Multiple class names can be separated with whitespace.
	         */
	        set: function (value) {
	            TitlePrivate.iconProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Title.prototype, "closable", {
	        /**
	         * Get the closable state for the title.
	         */
	        get: function () {
	            return TitlePrivate.closableProperty.get(this);
	        },
	        /**
	         * Set the closable state for the title.
	         *
	         * #### Notes
	         * This controls the presence of a close icon when applicable.
	         */
	        set: function (value) {
	            TitlePrivate.closableProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Title.prototype, "className", {
	        /**
	         * Get the extra class name for the title.
	         */
	        get: function () {
	            return TitlePrivate.classNameProperty.get(this);
	        },
	        /**
	         * Set the extra class name for the title.
	         *
	         * #### Notes
	         * Multiple class names can be separated with whitespace.
	         */
	        set: function (value) {
	            TitlePrivate.classNameProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Title;
	})();
	exports.Title = Title;
	/**
	 * The namespace for the title private data.
	 */
	var TitlePrivate;
	(function (TitlePrivate) {
	    /**
	     * A signal emitted when the title state changes.
	     */
	    TitlePrivate.changedSignal = new phosphor_signaling_1.Signal();
	    /**
	     * The property descriptor for the title text.
	     */
	    TitlePrivate.textProperty = new phosphor_properties_1.Property({
	        name: 'text',
	        value: '',
	        notify: TitlePrivate.changedSignal,
	    });
	    /**
	     * The property descriptor for the title icon class.
	     */
	    TitlePrivate.iconProperty = new phosphor_properties_1.Property({
	        name: 'icon',
	        value: '',
	        notify: TitlePrivate.changedSignal,
	    });
	    /**
	     * The property descriptor for the title closable state.
	     */
	    TitlePrivate.closableProperty = new phosphor_properties_1.Property({
	        name: 'closable',
	        value: false,
	        notify: TitlePrivate.changedSignal,
	    });
	    /**
	     * The property descriptor for the title extra class name.
	     */
	    TitlePrivate.classNameProperty = new phosphor_properties_1.Property({
	        name: 'className',
	        value: '',
	        notify: TitlePrivate.changedSignal,
	    });
	    /**
	     * Initialize a title from an options object.
	     */
	    function initFrom(title, options) {
	        if (options.text !== void 0) {
	            title.text = options.text;
	        }
	        if (options.icon !== void 0) {
	            title.icon = options.icon;
	        }
	        if (options.closable !== void 0) {
	            title.closable = options.closable;
	        }
	        if (options.className !== void 0) {
	            title.className = options.className;
	        }
	    }
	    TitlePrivate.initFrom = initFrom;
	})(TitlePrivate || (TitlePrivate = {}));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2015, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n.p-Widget {\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n.p-Widget.p-mod-hidden {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(20));
	__export(__webpack_require__(22));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var arrays = __webpack_require__(21);
	var phosphor_messaging_1 = __webpack_require__(8);
	var phosphor_widget_1 = __webpack_require__(6);
	/**
	 * A concrete layout implementation suitable for many use cases.
	 *
	 * #### Notes
	 * This class is suitable as a base class for implementing a variety of
	 * layouts, but can also be used directly with standard CSS to layout a
	 * collection of widgets.
	 */
	var PanelLayout = (function (_super) {
	    __extends(PanelLayout, _super);
	    function PanelLayout() {
	        _super.apply(this, arguments);
	        this._children = [];
	    }
	    /**
	     * Dispose of the resources held by the layout.
	     *
	     * #### Notes
	     * This will dispose all current child widgets of the layout.
	     */
	    PanelLayout.prototype.dispose = function () {
	        while (this._children.length > 0) {
	            this._children.pop().dispose();
	        }
	        _super.prototype.dispose.call(this);
	    };
	    /**
	     * Get the number of child widgets in the layout.
	     *
	     * @returns The number of child widgets in the layout.
	     */
	    PanelLayout.prototype.childCount = function () {
	        return this._children.length;
	    };
	    /**
	     * Get the child widget at the specified index.
	     *
	     * @param index - The index of the child widget of interest.
	     *
	     * @returns The child at the specified index, or `undefined`.
	     */
	    PanelLayout.prototype.childAt = function (index) {
	        return this._children[index];
	    };
	    /**
	     * Add a child widget to the end of the layout.
	     *
	     * @param child - The child widget to add to the layout.
	     *
	     * #### Notes
	     * If the child is already contained in the layout, it will be moved.
	     */
	    PanelLayout.prototype.addChild = function (child) {
	        this.insertChild(this.childCount(), child);
	    };
	    /**
	     * Insert a child widget into the layout at the specified index.
	     *
	     * @param index - The index at which to insert the child widget.
	     *
	     * @param child - The child widget to insert into the layout.
	     *
	     * #### Notes
	     * If the child is already contained in the layout, it will be moved.
	     */
	    PanelLayout.prototype.insertChild = function (index, child) {
	        child.parent = this.parent;
	        var n = this._children.length;
	        var i = this._children.indexOf(child);
	        var j = Math.max(0, Math.min(index | 0, n));
	        if (i !== -1) {
	            if (j === n)
	                j--;
	            if (i === j)
	                return;
	            arrays.move(this._children, i, j);
	            if (this.parent)
	                this.moveChild(i, j, child);
	        }
	        else {
	            arrays.insert(this._children, j, child);
	            if (this.parent)
	                this.attachChild(j, child);
	        }
	    };
	    /**
	     * Remove a child widget from the layout.
	     *
	     * @param child - The child widget to remove from the layout.
	     *
	     * #### Notes
	     * A child widget will be removed from the layout automatically when
	     * its `parent` is set to `null`. This method should only be invoked
	     * directly when removing a widget from a layout which has yet to be
	     * installed on a parent widget.
	     *
	     * This method does *not* modify the widget's `parent`.
	     *
	     * If the child is not contained in the layout, this is a no-op.
	     */
	    PanelLayout.prototype.removeChild = function (child) {
	        var i = arrays.remove(this._children, child);
	        if (i !== -1 && this.parent)
	            this.detachChild(i, child);
	    };
	    /**
	     * Initialize the children of the layout.
	     *
	     * #### Notes
	     * This method is called automatically when the layout is installed
	     * on its parent widget.
	     *
	     * This may be reimplemented by subclasses as needed.
	     */
	    PanelLayout.prototype.initialize = function () {
	        for (var i = 0; i < this.childCount(); ++i) {
	            var child = this.childAt(i);
	            child.parent = this.parent;
	            this.attachChild(i, child);
	        }
	    };
	    /**
	     * Attach a child widget to the parent's DOM node.
	     *
	     * @param index - The current index of the child in the layout.
	     *
	     * @param child - The child widget to attach to the parent.
	     *
	     * #### Notes
	     * This method is called automatically by the panel layout at the
	     * appropriate time. It should not be called directly by user code.
	     *
	     * The default implementation adds the child's node to the parent's
	     * node at the proper location, and sends an `'after-attach'` message
	     * to the child if the parent is attached to the DOM.
	     *
	     * Subclasses may reimplement this method to control how the child's
	     * node is added to the parent's node, but the reimplementation must
	     * send an `'after-attach'` message to the child if the parent is
	     * attached to the DOM.
	     */
	    PanelLayout.prototype.attachChild = function (index, child) {
	        var ref = this.parent.node.children[index];
	        this.parent.node.insertBefore(child.node, ref);
	        if (this.parent.isAttached)
	            phosphor_messaging_1.sendMessage(child, phosphor_widget_1.Widget.MsgAfterAttach);
	    };
	    /**
	     * Move a child widget in the parent's DOM node.
	     *
	     * @param fromIndex - The previous index of the child in the layout.
	     *
	     * @param toIndex - The current index of the child in the layout.
	     *
	     * @param child - The child widget to move in the parent.
	     *
	     * #### Notes
	     * This method is called automatically by the panel layout at the
	     * appropriate time. It should not be called directly by user code.
	     *
	     * The default implementation moves the child's node to the proper
	     * location in the parent's node and sends both a `'before-detach'`
	     * and an `'after-attach'` message to the child if the parent is
	     * attached to the DOM.
	     *
	     * Subclasses may reimplement this method to control how the child's
	     * node is moved in the parent's node, but the reimplementation must
	     * send both a `'before-detach'` and an `'after-attach'` message to
	     * the child if the parent is attached to the DOM.
	     */
	    PanelLayout.prototype.moveChild = function (fromIndex, toIndex, child) {
	        if (this.parent.isAttached)
	            phosphor_messaging_1.sendMessage(child, phosphor_widget_1.Widget.MsgBeforeDetach);
	        this.parent.node.removeChild(child.node);
	        var ref = this.parent.node.children[toIndex];
	        this.parent.node.insertBefore(child.node, ref);
	        if (this.parent.isAttached)
	            phosphor_messaging_1.sendMessage(child, phosphor_widget_1.Widget.MsgAfterAttach);
	    };
	    /**
	     * Detach a child widget from the parent's DOM node.
	     *
	     * @param index - The previous index of the child in the layout.
	     *
	     * @param child - The child widget to detach from the parent.
	     *
	     * #### Notes
	     * This method is called automatically by the panel layout at the
	     * appropriate time. It should not be called directly by user code.
	     *
	     * The default implementation removes the child's node from the
	     * parent's node, and sends a `'before-detach'` message to the child
	     * if the parent is attached to the DOM.
	     *
	     * Subclasses may reimplement this method to control how the child's
	     * node is removed from the parent's node, but the reimplementation
	     * must send a `'before-detach'` message to the child if the parent
	     * is attached to the DOM.
	     */
	    PanelLayout.prototype.detachChild = function (index, child) {
	        if (this.parent.isAttached)
	            phosphor_messaging_1.sendMessage(child, phosphor_widget_1.Widget.MsgBeforeDetach);
	        this.parent.node.removeChild(child.node);
	    };
	    /**
	     * A message handler invoked on a `'child-removed'` message.
	     *
	     * #### Notes
	     * This will remove the child from the layout.
	     *
	     * Subclasses should **not** typically reimplement this method.
	     */
	    PanelLayout.prototype.onChildRemoved = function (msg) {
	        this.removeChild(msg.child);
	    };
	    return PanelLayout;
	})(phosphor_widget_1.AbstractLayout);
	exports.PanelLayout = PanelLayout;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	/**
	 * Execute a callback for each element in an array.
	 *
	 * @param array - The array of values to iterate.
	 *
	 * @param callback - The callback to invoke for the array elements.
	 *
	 * @param fromIndex - The starting index for iteration.
	 *
	 * @param wrap - Whether iteration wraps around at the end of the array.
	 *
	 * @returns The first value returned by `callback` which is not
	 *   equal to `undefined`, or `undefined` if the callback does
	 *   not return a value or if the start index is out of range.
	 *
	 * #### Notes
	 * It is not safe to modify the size of the array while iterating.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function logger(value: number): void {
	 *   console.log(value);
	 * }
	 *
	 * let data = [1, 2, 3, 4];
	 * arrays.forEach(data, logger);           // logs 1, 2, 3, 4
	 * arrays.forEach(data, logger, 2);        // logs 3, 4
	 * arrays.forEach(data, logger, 2, true);  // logs 3, 4, 1, 2
	 * arrays.forEach(data, (v, i) => {        // 2
	 *   if (v === 3) return i;
	 * });
	 * ```
	 *
	 * **See also** [[rforEach]]
	 */
	function forEach(array, callback, fromIndex, wrap) {
	    if (fromIndex === void 0) { fromIndex = 0; }
	    if (wrap === void 0) { wrap = false; }
	    var start = fromIndex | 0;
	    if (start < 0 || start >= array.length) {
	        return void 0;
	    }
	    if (wrap) {
	        for (var i = 0, n = array.length; i < n; ++i) {
	            var j = (start + i) % n;
	            var result = callback(array[j], j);
	            if (result !== void 0)
	                return result;
	        }
	    }
	    else {
	        for (var i = start, n = array.length; i < n; ++i) {
	            var result = callback(array[i], i);
	            if (result !== void 0)
	                return result;
	        }
	    }
	    return void 0;
	}
	exports.forEach = forEach;
	/**
	 * Execute a callback for each element in an array, in reverse.
	 *
	 * @param array - The array of values to iterate.
	 *
	 * @param callback - The callback to invoke for the array elements.
	 *
	 * @param fromIndex - The starting index for iteration.
	 *
	 * @param wrap - Whether iteration wraps around at the end of the array.
	 *
	 * @returns The first value returned by `callback` which is not
	 *   equal to `undefined`, or `undefined` if the callback does
	 *   not return a value or if the start index is out of range.
	 *
	 * #### Notes
	 * It is not safe to modify the size of the array while iterating.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function logger(value: number): void {
	 *   console.log(value);
	 * }
	 *
	 * let data = [1, 2, 3, 4];
	 * arrays.rforEach(data, logger);           // logs 4, 3, 2, 1
	 * arrays.rforEach(data, logger, 2);        // logs 3, 2, 1
	 * arrays.rforEach(data, logger, 2, true);  // logs 3, 2, 1, 4
	 * arrays.rforEach(data, (v, i) => {        // 2
	 *   if (v === 3) return i;
	 * });
	 * ```
	 * **See also** [[forEach]]
	 */
	function rforEach(array, callback, fromIndex, wrap) {
	    if (fromIndex === void 0) { fromIndex = array.length - 1; }
	    if (wrap === void 0) { wrap = false; }
	    var start = fromIndex | 0;
	    if (start < 0 || start >= array.length) {
	        return void 0;
	    }
	    if (wrap) {
	        for (var i = 0, n = array.length; i < n; ++i) {
	            var j = (start - i + n) % n;
	            var result = callback(array[j], j);
	            if (result !== void 0)
	                return result;
	        }
	    }
	    else {
	        for (var i = start; i >= 0; --i) {
	            var result = callback(array[i], i);
	            if (result !== void 0)
	                return result;
	        }
	    }
	    return void 0;
	}
	exports.rforEach = rforEach;
	/**
	 * Find the index of the first value which matches a predicate.
	 *
	 * @param array - The array of values to be searched.
	 *
	 * @param pred - The predicate function to apply to the values.
	 *
	 * @param fromIndex - The starting index of the search.
	 *
	 * @param wrap - Whether the search wraps around at the end of the array.
	 *
	 * @returns The index of the first matching value, or `-1` if no value
	 *   matches the predicate or if the start index is out of range.
	 *
	 * #### Notes
	 * It is not safe to modify the size of the array while iterating.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function isEven(value: number): boolean {
	 *   return value % 2 === 0;
	 * }
	 *
	 * let data = [1, 2, 3, 4, 3, 2, 1];
	 * arrays.findIndex(data, isEven);           // 1
	 * arrays.findIndex(data, isEven, 4);        // 5
	 * arrays.findIndex(data, isEven, 6);        // -1
	 * arrays.findIndex(data, isEven, 6, true);  // 1
	 * ```
	 *
	 * **See also** [[rfindIndex]].
	 */
	function findIndex(array, pred, fromIndex, wrap) {
	    if (fromIndex === void 0) { fromIndex = 0; }
	    if (wrap === void 0) { wrap = false; }
	    var start = fromIndex | 0;
	    if (start < 0 || start >= array.length) {
	        return -1;
	    }
	    if (wrap) {
	        for (var i = 0, n = array.length; i < n; ++i) {
	            var j = (start + i) % n;
	            if (pred(array[j], j))
	                return j;
	        }
	    }
	    else {
	        for (var i = start, n = array.length; i < n; ++i) {
	            if (pred(array[i], i))
	                return i;
	        }
	    }
	    return -1;
	}
	exports.findIndex = findIndex;
	/**
	 * Find the index of the last value which matches a predicate.
	 *
	 * @param array - The array of values to be searched.
	 *
	 * @param pred - The predicate function to apply to the values.
	 *
	 * @param fromIndex - The starting index of the search.
	 *
	 * @param wrap - Whether the search wraps around at the front of the array.
	 *
	 * @returns The index of the last matching value, or `-1` if no value
	 *   matches the predicate or if the start index is out of range.
	 *
	 * #### Notes
	 * It is not safe to modify the size of the array while iterating.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function isEven(value: number): boolean {
	 *   return value % 2 === 0;
	 * }
	 *
	 * let data = [1, 2, 3, 4, 3, 2, 1];
	 * arrays.rfindIndex(data, isEven);           // 5
	 * arrays.rfindIndex(data, isEven, 4);        // 3
	 * arrays.rfindIndex(data, isEven, 0);        // -1
	 * arrays.rfindIndex(data, isEven, 0, true);  // 5
	 * ```
	 *
	 * **See also** [[findIndex]].
	 */
	function rfindIndex(array, pred, fromIndex, wrap) {
	    if (fromIndex === void 0) { fromIndex = array.length - 1; }
	    if (wrap === void 0) { wrap = false; }
	    var start = fromIndex | 0;
	    if (start < 0 || start >= array.length) {
	        return -1;
	    }
	    if (wrap) {
	        for (var i = 0, n = array.length; i < n; ++i) {
	            var j = (start - i + n) % n;
	            if (pred(array[j], j))
	                return j;
	        }
	    }
	    else {
	        for (var i = start; i >= 0; --i) {
	            if (pred(array[i], i))
	                return i;
	        }
	    }
	    return -1;
	}
	exports.rfindIndex = rfindIndex;
	/**
	 * Find the first value which matches a predicate.
	 *
	 * @param array - The array of values to be searched.
	 *
	 * @param pred - The predicate function to apply to the values.
	 *
	 * @param fromIndex - The starting index of the search.
	 *
	 * @param wrap - Whether the search wraps around at the end of the array.
	 *
	 * @returns The first matching value, or `undefined` if no value matches
	 *   the predicate or if the start index is out of range.
	 *
	 * #### Notes
	 * It is not safe to modify the size of the array while iterating.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function isEven(value: number): boolean {
	 *   return value % 2 === 0;
	 * }
	 *
	 * let data = [1, 2, 3, 4, 3, 2, 1];
	 * arrays.find(data, isEven);           // 2
	 * arrays.find(data, isEven, 4);        // 2
	 * arrays.find(data, isEven, 6);        // undefined
	 * arrays.find(data, isEven, 6, true);  // 2
	 * ```
	 *
	 * **See also** [[rfind]].
	 */
	function find(array, pred, fromIndex, wrap) {
	    var i = findIndex(array, pred, fromIndex, wrap);
	    return i !== -1 ? array[i] : void 0;
	}
	exports.find = find;
	/**
	 * Find the last value which matches a predicate.
	 *
	 * @param array - The array of values to be searched.
	 *
	 * @param pred - The predicate function to apply to the values.
	 *
	 * @param fromIndex - The starting index of the search.
	 *
	 * @param wrap - Whether the search wraps around at the front of the array.
	 *
	 * @returns The last matching value, or `undefined` if no value matches
	 *   the predicate or if the start index is out of range.
	 *
	 * #### Notes
	 * The range of visited indices is set before the first invocation of
	 * `pred`. It is not safe for `pred` to change the length of `array`.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function isEven(value: number): boolean {
	 *   return value % 2 === 0;
	 * }
	 *
	 * let data = [1, 2, 3, 4, 3, 2, 1];
	 * arrays.rfind(data, isEven);           // 2
	 * arrays.rfind(data, isEven, 4);        // 4
	 * arrays.rfind(data, isEven, 0);        // undefined
	 * arrays.rfind(data, isEven, 0, true);  // 2
	 * ```
	 *
	 * **See also** [[find]].
	 */
	function rfind(array, pred, fromIndex, wrap) {
	    var i = rfindIndex(array, pred, fromIndex, wrap);
	    return i !== -1 ? array[i] : void 0;
	}
	exports.rfind = rfind;
	/**
	 * Insert an element into an array at a specified index.
	 *
	 * @param array - The array of values to modify.
	 *
	 * @param index - The index at which to insert the value. This value
	 *   is clamped to the bounds of the array.
	 *
	 * @param value - The value to insert into the array.
	 *
	 * @returns The index at which the value was inserted.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.insert(data, 0, 12);  // 0
	 * arrays.insert(data, 3, 42);  // 3
	 * arrays.insert(data, -9, 9);  // 0
	 * arrays.insert(data, 12, 8);  // 8
	 * console.log(data);           // [9, 12, 0, 1, 42, 2, 3, 4, 8]
	 * ```
	 *
	 * **See also** [[removeAt]] and [[remove]]
	 */
	function insert(array, index, value) {
	    var j = Math.max(0, Math.min(index | 0, array.length));
	    for (var i = array.length; i > j; --i) {
	        array[i] = array[i - 1];
	    }
	    array[j] = value;
	    return j;
	}
	exports.insert = insert;
	/**
	 * Move an element in an array from one index to another.
	 *
	 * @param array - The array of values to modify.
	 *
	 * @param fromIndex - The index of the element to move.
	 *
	 * @param toIndex - The target index of the element.
	 *
	 * @returns `true` if the element was moved, or `false` if either
	 *   index is out of range.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.move(data, 1, 2);   // true
	 * arrays.move(data, -1, 0);  // false
	 * arrays.move(data, 4, 2);   // true
	 * arrays.move(data, 10, 0);  // false
	 * console.log(data);         // [0, 2, 4, 1, 3]
	 * ```
	 */
	function move(array, fromIndex, toIndex) {
	    var j = fromIndex | 0;
	    if (j < 0 || j >= array.length) {
	        return false;
	    }
	    var k = toIndex | 0;
	    if (k < 0 || k >= array.length) {
	        return false;
	    }
	    var value = array[j];
	    if (j > k) {
	        for (var i = j; i > k; --i) {
	            array[i] = array[i - 1];
	        }
	    }
	    else if (j < k) {
	        for (var i = j; i < k; ++i) {
	            array[i] = array[i + 1];
	        }
	    }
	    array[k] = value;
	    return true;
	}
	exports.move = move;
	/**
	 * Remove an element from an array at a specified index.
	 *
	 * @param array - The array of values to modify.
	 *
	 * @param index - The index of the element to remove.
	 *
	 * @returns The removed value, or `undefined` if the index is out
	 *   of range.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.removeAt(data, 1);   // 1
	 * arrays.removeAt(data, 3);   // 4
	 * arrays.removeAt(data, 10);  // undefined
	 * console.log(data);          // [0, 2, 3]
	 * ```
	 *
	 * **See also** [[remove]] and [[insert]]
	 */
	function removeAt(array, index) {
	    var j = index | 0;
	    if (j < 0 || j >= array.length) {
	        return void 0;
	    }
	    var value = array[j];
	    for (var i = j + 1, n = array.length; i < n; ++i) {
	        array[i - 1] = array[i];
	    }
	    array.length -= 1;
	    return value;
	}
	exports.removeAt = removeAt;
	/**
	 * Remove the first occurrence of a value from an array.
	 *
	 * @param array - The array of values to modify.
	 *
	 * @param value - The value to remove from the array.
	 *
	 * @returns The index where the value was located, or `-1` if the
	 *   value is not the array.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.remove(data, 1);  // 1
	 * arrays.remove(data, 3);  // 2
	 * arrays.remove(data, 7);  // -1
	 * console.log(data);       // [0, 2, 4]
	 * ```
	 *
	 * **See also** [[removeAt]] and [[insert]]
	 */
	function remove(array, value) {
	    var j = -1;
	    for (var i = 0, n = array.length; i < n; ++i) {
	        if (array[i] === value) {
	            j = i;
	            break;
	        }
	    }
	    if (j === -1) {
	        return -1;
	    }
	    for (var i = j + 1, n = array.length; i < n; ++i) {
	        array[i - 1] = array[i];
	    }
	    array.length -= 1;
	    return j;
	}
	exports.remove = remove;
	/**
	 * Reverse an array in-place subject to an optional range.
	 *
	 * @param array - The array to reverse.
	 *
	 * @param fromIndex - The index of the first element of the range.
	 *   This value will be clamped to the array bounds.
	 *
	 * @param toIndex - The index of the last element of the range.
	 *   This value will be clamped to the array bounds.
	 *
	 * @returns A reference to the original array.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.reverse(data, 1, 3);    // [0, 3, 2, 1, 4]
	 * arrays.reverse(data, 3);       // [0, 3, 2, 4, 1]
	 * arrays.reverse(data);          // [1, 4, 2, 3, 0]
	 * ```
	 *
	 * **See also** [[rotate]]
	 */
	function reverse(array, fromIndex, toIndex) {
	    if (fromIndex === void 0) { fromIndex = 0; }
	    if (toIndex === void 0) { toIndex = array.length; }
	    var i = Math.max(0, Math.min(fromIndex | 0, array.length - 1));
	    var j = Math.max(0, Math.min(toIndex | 0, array.length - 1));
	    if (j < i)
	        i = j + (j = i, 0);
	    while (i < j) {
	        var tmpval = array[i];
	        array[i++] = array[j];
	        array[j--] = tmpval;
	    }
	    return array;
	}
	exports.reverse = reverse;
	/**
	 * Rotate the elements of an array by a positive or negative delta.
	 *
	 * @param array - The array to rotate.
	 *
	 * @param delta - The amount of rotation to apply to the elements. A
	 *   positive delta will shift the elements to the left. A negative
	 *   delta will shift the elements to the right.
	 *
	 * @returns A reference to the original array.
	 *
	 * #### Notes
	 * This executes in `O(n)` time and `O(1)` space.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * let data = [0, 1, 2, 3, 4];
	 * arrays.rotate(data, 2);    // [2, 3, 4, 0, 1]
	 * arrays.rotate(data, -2);   // [0, 1, 2, 3, 4]
	 * arrays.rotate(data, 10);   // [0, 1, 2, 3, 4]
	 * arrays.rotate(data, 9);    // [4, 0, 1, 2, 3]
	 * ```
	 *
	 * **See also** [[reverse]]
	 */
	function rotate(array, delta) {
	    var n = array.length;
	    if (n <= 1) {
	        return array;
	    }
	    var d = delta | 0;
	    if (d > 0) {
	        d = d % n;
	    }
	    else if (d < 0) {
	        d = ((d % n) + n) % n;
	    }
	    if (d === 0) {
	        return array;
	    }
	    reverse(array, 0, d - 1);
	    reverse(array, d, n - 1);
	    reverse(array, 0, n - 1);
	    return array;
	}
	exports.rotate = rotate;
	/**
	 * Using a binary search, find the index of the first element in an
	 * array which compares `>=` to a value.
	 *
	 * @param array - The array of values to be searched. It must be sorted
	 *   in ascending order.
	 *
	 * @param value - The value to locate in the array.
	 *
	 * @param cmp - The comparison function which returns `true` if an
	 *   array element is less than the given value.
	 *
	 * @returns The index of the first element in `array` which compares
	 *   `>=` to `value`, or `array.length` if there is no such element.
	 *
	 * #### Notes
	 * It is not safe for the comparison function to modify the array.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function numberCmp(a: number, b: number): boolean {
	 *   return a < b;
	 * }
	 *
	 * let data = [0, 3, 4, 7, 7, 9];
	 * arrays.lowerBound(data, 0, numberCmp);   // 0
	 * arrays.lowerBound(data, 6, numberCmp);   // 3
	 * arrays.lowerBound(data, 7, numberCmp);   // 3
	 * arrays.lowerBound(data, -1, numberCmp);  // 0
	 * arrays.lowerBound(data, 10, numberCmp);  // 6
	 * ```
	 *
	 * **See also** [[upperBound]]
	 */
	function lowerBound(array, value, cmp) {
	    var begin = 0;
	    var half;
	    var middle;
	    var n = array.length;
	    while (n > 0) {
	        half = n >> 1;
	        middle = begin + half;
	        if (cmp(array[middle], value)) {
	            begin = middle + 1;
	            n -= half + 1;
	        }
	        else {
	            n = half;
	        }
	    }
	    return begin;
	}
	exports.lowerBound = lowerBound;
	/**
	 * Using a binary search, find the index of the first element in an
	 * array which compares `>` than a value.
	 *
	 * @param array - The array of values to be searched. It must be sorted
	 *   in ascending order.
	 *
	 * @param value - The value to locate in the array.
	 *
	 * @param cmp - The comparison function which returns `true` if the
	 *   the given value is less than an array element.
	 *
	 * @returns The index of the first element in `array` which compares
	 *   `>` than `value`, or `array.length` if there is no such element.
	 *
	 * #### Notes
	 * It is not safe for the comparison function to modify the array.
	 *
	 * #### Example
	 * ```typescript
	 * import * as arrays from 'phosphor-arrays';
	 *
	 * function numberCmp(a: number, b: number): number {
	 *   return a < b;
	 * }
	 *
	 * let data = [0, 3, 4, 7, 7, 9];
	 * arrays.upperBound(data, 0, numberCmp);   // 1
	 * arrays.upperBound(data, 6, numberCmp);   // 3
	 * arrays.upperBound(data, 7, numberCmp);   // 5
	 * arrays.upperBound(data, -1, numberCmp);  // 0
	 * arrays.upperBound(data, 10, numberCmp);  // 6
	 * ```
	 *
	 * **See also** [[lowerBound]]
	 */
	function upperBound(array, value, cmp) {
	    var begin = 0;
	    var half;
	    var middle;
	    var n = array.length;
	    while (n > 0) {
	        half = n >> 1;
	        middle = begin + half;
	        if (cmp(value, array[middle])) {
	            n = half;
	        }
	        else {
	            begin = middle + 1;
	            n -= half + 1;
	        }
	    }
	    return begin;
	}
	exports.upperBound = upperBound;
	//# sourceMappingURL=index.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*-----------------------------------------------------------------------------
	| Copyright (c) 2014-2015, PhosphorJS Contributors
	|
	| Distributed under the terms of the BSD 3-Clause License.
	|
	| The full license is in the file LICENSE, distributed with this software.
	|----------------------------------------------------------------------------*/
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var phosphor_widget_1 = __webpack_require__(6);
	var layout_1 = __webpack_require__(20);
	/**
	 * The class name added to Panel instances.
	 */
	var PANEL_CLASS = 'p-Panel';
	/**
	 * A simple and convenient panel widget class.
	 *
	 * #### Notes
	 * This class is suitable as a base class for implementing a variety of
	 * convenience panels, but can also be used directly along with CSS to
	 * arrange a collection of widgets.
	 *
	 * This class provides a convenience wrapper around a [[PanelLayout]].
	 */
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    /**
	     * Construct a new panel.
	     */
	    function Panel() {
	        _super.call(this);
	        this.addClass(PANEL_CLASS);
	        this.layout = this.constructor.createLayout();
	    }
	    /**
	     * Create a panel layout to use with a panel.
	     *
	     * @returns A new panel layout to use with a panel.
	     *
	     * #### Notes
	     * This may be reimplemented by a subclass to create custom layouts.
	     */
	    Panel.createLayout = function () {
	        return new layout_1.PanelLayout();
	    };
	    /**
	     * Get the number of child widgets in the panel.
	     *
	     * @returns The number of child widgets in the panel.
	     */
	    Panel.prototype.childCount = function () {
	        return this.layout.childCount();
	    };
	    /**
	     * Get the child widget at the specified index.
	     *
	     * @param index - The index of the child widget of interest.
	     *
	     * @returns The child at the specified index, or `undefined`.
	     */
	    Panel.prototype.childAt = function (index) {
	        return this.layout.childAt(index);
	    };
	    /**
	     * Get the index of the specified child widget.
	     *
	     * @param child - The child widget of interest.
	     *
	     * @returns The index of the specified child, or `-1`.
	     */
	    Panel.prototype.childIndex = function (child) {
	        return this.layout.childIndex(child);
	    };
	    /**
	     * Add a child widget to the end of the panel.
	     *
	     * @param child - The child widget to add to the panel.
	     *
	     * #### Notes
	     * If the child is already contained in the panel, it will be moved.
	     */
	    Panel.prototype.addChild = function (child) {
	        this.layout.addChild(child);
	    };
	    /**
	     * Insert a child widget at the specified index.
	     *
	     * @param index - The index at which to insert the child.
	     *
	     * @param child - The child widget to insert into to the panel.
	     *
	     * #### Notes
	     * If the child is already contained in the panel, it will be moved.
	     */
	    Panel.prototype.insertChild = function (index, child) {
	        this.layout.insertChild(index, child);
	    };
	    return Panel;
	})(phosphor_widget_1.Widget);
	exports.Panel = Panel;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	var phosphor_properties_1 = __webpack_require__(3);
	var phosphor_signaling_1 = __webpack_require__(4);
	/**
	 * An implementation of an editor model.
	 */
	var EditorModel = (function () {
	    /**
	     * Construct an Editor Model.
	     */
	    function EditorModel(options) {
	        if (options)
	            EditorModelPrivate.initFrom(this, options);
	    }
	    Object.defineProperty(EditorModel.prototype, "stateChanged", {
	        /**
	         * A signal emitted when the editor model state changes.
	         *
	         * #### Notes
	         * This is a pure delegate to the [[stateChangedSignal]].
	         */
	        get: function () {
	            return EditorModelPrivate.stateChangedSignal.bind(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "filename", {
	        /**
	         * Get the mode for the editor filename.
	         */
	        get: function () {
	            return EditorModelPrivate.filenameProperty.get(this);
	        },
	        /**
	         * Set the text for the editor filename.
	         */
	        set: function (value) {
	            EditorModelPrivate.filenameProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "fixedHeight", {
	        /**
	         * Get whether the editor height should be constrained.
	         */
	        get: function () {
	            return EditorModelPrivate.fixedHeightProperty.get(this);
	        },
	        /**
	         * Set whether the editor height should be constrained.
	         */
	        set: function (value) {
	            EditorModelPrivate.fixedHeightProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "mimetype", {
	        /**
	         * Get the mode for the editor mimetype.
	         */
	        get: function () {
	            return EditorModelPrivate.mimetypeProperty.get(this);
	        },
	        /**
	         * Set the text for the editor mimetype.
	         */
	        set: function (value) {
	            EditorModelPrivate.mimetypeProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "lineNumbers", {
	        /**
	         * Get the lineNumbers flag for the editor model.
	         */
	        get: function () {
	            return EditorModelPrivate.lineNumbersProperty.get(this);
	        },
	        /**
	         * Set the lineNumbers flag for the editor model.
	         */
	        set: function (value) {
	            EditorModelPrivate.lineNumbersProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "readOnly", {
	        /**
	         * Get the readOnly flag for the editor model.
	         */
	        get: function () {
	            return EditorModelPrivate.readOnlyProperty.get(this);
	        },
	        /**
	         * Set the readOnly flag for the editor model.
	         */
	        set: function (value) {
	            EditorModelPrivate.readOnlyProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "tabSize", {
	        /**
	         * Get the tabSize number for the editor model.
	         */
	        get: function () {
	            return EditorModelPrivate.tabSizeProperty.get(this);
	        },
	        /**
	         * Set the tabSize number for the editor model.
	         */
	        set: function (value) {
	            EditorModelPrivate.tabSizeProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EditorModel.prototype, "text", {
	        /**
	         * Get the text of the editor model.
	         */
	        get: function () {
	            return EditorModelPrivate.textProperty.get(this);
	        },
	        /**
	         * Set the text on the editor model.
	         */
	        set: function (value) {
	            EditorModelPrivate.textProperty.set(this, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return EditorModel;
	})();
	exports.EditorModel = EditorModel;
	/**
	 * The namespace for the `EditorModel` class private data.
	 */
	var EditorModelPrivate;
	(function (EditorModelPrivate) {
	    /**
	     * A signal emitted when the editor state changes.
	     */
	    EditorModelPrivate.stateChangedSignal = new phosphor_signaling_1.Signal();
	    /**
	     * The property descriptor for the editor mimetype.
	     */
	    EditorModelPrivate.mimetypeProperty = new phosphor_properties_1.Property({
	        name: 'mimetype',
	        value: '',
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	     * The property descriptor for the editor filename.
	     */
	    EditorModelPrivate.filenameProperty = new phosphor_properties_1.Property({
	        name: 'filename',
	        value: '',
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	    * A property descriptor which determines whether the editor height should be constrained.
	    */
	    EditorModelPrivate.fixedHeightProperty = new phosphor_properties_1.Property({
	        name: 'fixedHeight',
	        notify: EditorModelPrivate.stateChangedSignal,
	        value: false,
	    });
	    /**
	     * The property descriptor for the editor lineNumbers flag.
	     */
	    EditorModelPrivate.lineNumbersProperty = new phosphor_properties_1.Property({
	        name: 'lineNumbers',
	        value: true,
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	     * The property descriptor for the editor readOnly flag.
	     */
	    EditorModelPrivate.readOnlyProperty = new phosphor_properties_1.Property({
	        name: 'readOnly',
	        value: false,
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	     * The property descriptor for the editor text.
	     */
	    EditorModelPrivate.textProperty = new phosphor_properties_1.Property({
	        name: 'text',
	        value: '',
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	     * The property descriptor for the editor tabSize number.
	     */
	    EditorModelPrivate.tabSizeProperty = new phosphor_properties_1.Property({
	        name: 'tabSize',
	        value: 4,
	        notify: EditorModelPrivate.stateChangedSignal
	    });
	    /**
	     * Initialize an editor view model from an options object.
	     */
	    function initFrom(model, options) {
	        if (options.mimetype !== void 0) {
	            model.mimetype = options.mimetype;
	        }
	        if (options.filename !== void 0) {
	            model.filename = options.filename;
	        }
	        if (options.fixedHeight !== void 0) {
	            model.fixedHeight = options.fixedHeight;
	        }
	        if (options.lineNumbers !== void 0) {
	            model.lineNumbers = options.lineNumbers;
	        }
	        if (options.readOnly !== void 0) {
	            model.readOnly = options.readOnly;
	        }
	        if (options.text !== void 0) {
	            model.text = options.text;
	        }
	        if (options.tabSize !== void 0) {
	            model.tabSize = options.tabSize;
	        }
	    }
	    EditorModelPrivate.initFrom = initFrom;
	})(EditorModelPrivate || (EditorModelPrivate = {}));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Jupyter Development Team.
	// Distributed under the terms of the Modified BSD License.
	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var CodeMirror = __webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	var dmp = __webpack_require__(30);
	var phosphor_widget_1 = __webpack_require__(6);
	/**
	 * The class name added to CodeMirrorWidget instances.
	 */
	var FILE_BROWSER_CLASS = 'jp-CodeMirroWidget';
	/**
	 * The class name added to a fixed height editor.
	 */
	var FIXED_HEIGHT_CLASS = 'jp-mod-fixedHeight';
	/**
	 * Initialize diff match patch.
	 */
	var diffMatchPatch = new dmp.diff_match_patch();
	/**
	 * A widget which hosts a CodeMirror editor.
	 */
	var CodeMirrorWidget = (function (_super) {
	    __extends(CodeMirrorWidget, _super);
	    /**
	     * Construct a CodeMirror widget.
	     */
	    function CodeMirrorWidget(model) {
	        _super.call(this);
	        this._editor = null;
	        this._model = null;
	        this._dirty = false;
	        this.addClass(FILE_BROWSER_CLASS);
	        this._editor = CodeMirror(this.node);
	        this.model = model;
	    }
	    Object.defineProperty(CodeMirrorWidget.prototype, "model", {
	        /**
	         * Get the editor model.
	         */
	        get: function () {
	            return this._model;
	        },
	        /**
	         * Set the editor model.
	         *
	         * #### Notes
	         * This is a no-op if the value is `null` or the existing model.
	         */
	        set: function (value) {
	            var _this = this;
	            if (value === null || value === this._model) {
	                return;
	            }
	            if (this._model !== null) {
	                this._model.stateChanged.disconnect(this.onModelStateChanged, this);
	            }
	            this._model = value;
	            this.updateMimetype(value.mimetype);
	            this.updateFilename(value.filename);
	            this.updateReadOnly(value.readOnly);
	            this.updateTabSize(value.tabSize);
	            this.updateLineNumbers(value.lineNumbers);
	            this.updateFixedHeight(value.fixedHeight);
	            this.updateText(value.text);
	            this._editor.on('change', function (instance, change) {
	                _this._model.text = _this._editor.getDoc().getValue();
	            });
	            value.stateChanged.connect(this.onModelStateChanged, this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Update whether the editor has a fixed maximum height.
	     */
	    CodeMirrorWidget.prototype.updateFixedHeight = function (fixedHeight) {
	        this.toggleClass(FIXED_HEIGHT_CLASS, fixedHeight);
	    };
	    /**
	     * Update the text in the widget.
	     *
	     * #### Notes
	     * This function attempts to restore the cursor to the correct
	     * place by using the bitap algorithm to find the corresponding
	     * position of the cursor in the new text.
	     */
	    CodeMirrorWidget.prototype.updateText = function (text) {
	        if (!this.isAttached || !this.isVisible) {
	            this._dirty = true;
	            return;
	        }
	        this.update();
	    };
	    /**
	     * Set the mode by given the mimetype.
	     *
	     * #### Notes
	     * Valid mimetypes are listed in https://github.com/codemirror/CodeMirror/blob/master/mode/meta.js.
	     */
	    CodeMirrorWidget.prototype.updateMimetype = function (mimetype) {
	        if (CodeMirror.mimeModes.hasOwnProperty(mimetype)) {
	            this._editor.setOption('mode', mimetype);
	        }
	        else {
	            var info = CodeMirror.findModeByMIME(mimetype);
	            if (info) {
	                this.loadCodeMirrorMode(info.mode, info.mime);
	            }
	        }
	    };
	    /**
	     * Set the mode by the given filename if the mimetype is not set.
	     */
	    CodeMirrorWidget.prototype.updateFilename = function (filename) {
	        this.title.text = filename;
	        if (this._model.mimetype) {
	            return;
	        }
	        var info = CodeMirror.findModeByFileName(filename);
	        if (info) {
	            this.loadCodeMirrorMode(info.mode, info.mime);
	        }
	    };
	    /**
	     * Set the tab size.
	     */
	    CodeMirrorWidget.prototype.updateTabSize = function (size) {
	        this._editor.setOption('tabSize', size);
	    };
	    /**
	     * Update whether line numbers are shown.
	     */
	    CodeMirrorWidget.prototype.updateLineNumbers = function (lineNumbers) {
	        this._editor.setOption('lineNumbers', lineNumbers);
	    };
	    /**
	     * Update the read only property of the editor.
	     */
	    CodeMirrorWidget.prototype.updateReadOnly = function (readOnly) {
	        this._editor.setOption('readOnly', readOnly);
	    };
	    /**
	     * Handle afterAttach messages.
	     */
	    CodeMirrorWidget.prototype.onAfterAttach = function (msg) {
	        if (this._dirty)
	            this.update();
	        this._editor.refresh();
	    };
	    /**
	     * A message handler invoked on an `'after-show'` message.
	     */
	    CodeMirrorWidget.prototype.onAfterShow = function (msg) {
	        if (this._dirty)
	            this.update();
	        this._editor.refresh();
	    };
	    /**
	     * Handle resize messages.
	     */
	    CodeMirrorWidget.prototype.onResize = function (msg) {
	        if (msg.width < 0 || msg.height < 0) {
	            this._editor.refresh();
	        }
	        else {
	            this._editor.setSize(msg.width, msg.height);
	        }
	    };
	    /**
	     * A message handler invoked on an `'update-request'` message.
	     */
	    CodeMirrorWidget.prototype.onUpdateRequest = function (msg) {
	        this._dirty = false;
	        var doc = this._editor.getDoc();
	        var oldText = doc.getValue();
	        var text = this._model.text;
	        if (oldText !== text) {
	            // TODO: do something smart with all the selections
	            var oldCursor = doc.indexFromPos(doc.getCursor());
	            var cursor = 0;
	            if (oldCursor === oldText.length) {
	                // if the cursor was at the end, keep it at the end
	                cursor = text.length;
	            }
	            else {
	                var fragment = oldText.substr(oldCursor, 10);
	                cursor = diffMatchPatch.match_main(text, fragment, oldCursor);
	            }
	            doc.setValue(text);
	            doc.setCursor(doc.posFromIndex(cursor));
	        }
	    };
	    /**
	     * Change handler for model updates.
	     */
	    CodeMirrorWidget.prototype.onModelStateChanged = function (sender, args) {
	        switch (args.name) {
	            case 'fixedHeight':
	                this.updateFixedHeight(args.newValue);
	                break;
	            case 'text':
	                this.updateText(args.newValue);
	                break;
	            case 'filename':
	                this.updateFilename(args.newValue);
	                break;
	            case 'mimetype':
	                this.updateMimetype(args.newValue);
	                break;
	            case 'lineNumbers':
	                this.updateLineNumbers(args.newValue);
	                break;
	            case 'readOnly':
	                this.updateReadOnly(args.newValue);
	                break;
	            case 'tabSize':
	                this.updateTabSize(args.newValue);
	                break;
	        }
	    };
	    /**
	     * Load and set a CodeMirror mode.
	     *
	     * #### Notes
	     * This assumes WebPack as the module loader.
	     * It can be overriden by subclasses.
	     */
	    CodeMirrorWidget.prototype.loadCodeMirrorMode = function (mode, mimetype) {
	        var editor = this._editor;
	        if (CodeMirror.modes.hasOwnProperty(mode)) {
	            editor.setOption('mode', mimetype);
	        }
	        else {
	            // We statically require common modes so that the bundler
	            // picks them up automatically.
	            switch (mode) {
	                case 'python':
	                    __webpack_require__(31);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'javascript':
	                case 'typescript':
	                    __webpack_require__(32);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'css':
	                    __webpack_require__(33);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'julia':
	                    __webpack_require__(34);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'r':
	                    __webpack_require__(35);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'markdown':
	                    __webpack_require__(36);
	                    editor.setOption('mode', mimetype);
	                    break;
	                case 'gfm':
	                    __webpack_require__(38);
	                    editor.setOption('mode', mimetype);
	                    break;
	                default:
	                    // Load the remaining mode bundle asynchronously.
	                    __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [(__webpack_require__(40)("./" + mode + "/" + mode + ".js"))]; (function () {
	                        editor.setOption('mode', mimetype);
	                    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    break;
	            }
	        }
	    };
	    return CodeMirrorWidget;
	})(phosphor_widget_1.Widget);
	exports.CodeMirrorWidget = CodeMirrorWidget;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;

	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);

	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var windows = /win/i.test(platform);

	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;

	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };

	    var cm = this;

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;

	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;

	    d.activeTouch = null;

	    input.init(d);
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter && view[i].gutter)
	        view[i].gutter.style.left = left;
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;
	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    var total = measure.docHeight + cm.display.barHeight;
	    cm.display.heightForcer.style.top = total + "px";
	    cm.display.gutters.style.height = Math.max(total + scrollGap(cm), measure.clientHeight) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // INPUT HANDLING

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }

	  // This will be set to an array of strings when copying, so that,
	  // when pasting, we know what kind of selections the copied text
	  // was made out of.
	  var lastCopied = null;

	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;

	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null;
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);

	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }

	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }

	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;

	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }

	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }

	  function disableBrowserMagic(field) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", "false");
	  }

	  // TEXTAREA INPUT STYLE

	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";

	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };

	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }

	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;

	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);

	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";

	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });

	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return

	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });

	      function prepareCopyCut(e) {
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);

	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });

	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });

	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },

	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);

	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }

	      return result;
	    },

	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },

	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },

	    getField: function() { return this.textarea; },

	    supportsTouch: function() { return false; },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },

	    blur: function() { this.textarea.blur(); },

	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },

	    receivedFocus: function() { this.slowPoll(); },

	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },

	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },

	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;

	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }

	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);

	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;

	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },

	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },

	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },

	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.

	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	      var oldCSS = te.style.cssText;
	      input.wrapper.style.position = "absolute";
	      te.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
	        "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);

	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.position = "relative";
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }

	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },

	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },

	    setUneditable: nothing,

	    needsContentAttribute: false
	  }, TextareaInput.prototype);

	  // CONTENTEDITABLE INPUT STYLE

	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }

	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div);

	      on(div, "paste", function(e) {
	        if (!signalDOMEvent(cm, e)) handlePaste(e, cm);
	      })

	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });

	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });

	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });

	      function onCopyCut(e) {
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        // iOS exposes the clipboard API, but seems to discard content inserted into it
	        if (e.clipboardData && !ios) {
	          e.preventDefault();
	          e.clipboardData.clearData();
	          e.clipboardData.setData("text/plain", lastCopied.join("\n"));
	        } else {
	          // Old-fashioned briefly-focus-a-textarea hack
	          var kludge = hiddenTextarea(), te = kludge.firstChild;
	          cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	          te.value = lastCopied.join("\n");
	          var hadFocus = document.activeElement;
	          selectInput(te);
	          setTimeout(function() {
	            cm.display.lineSpace.removeChild(kludge);
	            hadFocus.focus();
	          }, 50);
	        }
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },

	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },

	    showSelection: function(info) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },

	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;

	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;

	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }

	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },

	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },

	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },

	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },

	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },

	    supportsTouch: function() { return true; },

	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },

	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },

	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },

	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }

	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }

	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;

	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);

	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },

	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },

	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },

	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },

	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },

	    onContextMenu: nothing,
	    resetPosition: nothing,

	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);

	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);

	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }

	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }

	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }

	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;

	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);

	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	  }

	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }

	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;

	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft) near = movePos(doc, near, -dir, line);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }

	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight) far = movePos(doc, far, dir, line);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }

	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }

	  // SELECTION DRAWING

	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }

	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }

	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
	          rect = node.parentNode.getBoundingClientRect();
	        } else if (ie && cm.options.lineWrapping) {
	          var rects = range(node, start, end).getClientRects();
	          if (rects.length)
	            rect = rects[bias == "right" ? rects.length - 1 : 0];
	          else
	            rect = nullRect;
	        } else {
	          rect = range(node, start, end).getBoundingClientRect() || nullRect;
	        }
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var xDiff = x - (ch == from ? fromX : toX);
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
	                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection();
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus()))
	      ensureFocus(op.cm);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - displayWidth(cm), op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function() {clearDragCursor(cm);}
	    };

	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", bind(onFocus, cm));
	    on(inp, "blur", bind(onBlur, cm));
	  }

	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (display.activeTouch && display.input.supportsTouch() || signalDOMEvent(cm, e)) return;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }

	    if (e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;

	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey))
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }

	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }

	  // FOCUS/BLUR EVENTS

	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }

	  function onFocus(cm) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm) {
	    if (cm.state.delayingBlurEvent) return;

	    if (cm.state.focused) {
	      signal(cm, "blur", cm);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    var possible = true;
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return (possible = false);
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") moveOnce();
	    else if (unit == "column") moveOnce(true);
	    else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!possible) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var nextMarkerId = 0;

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
	          fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }

	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 50000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444 characters
	      var pos = Math.min(stream.pos, curStart + 50000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	      builder.content.className = "cm-tab-wrap-hack";

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text;
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function splitSpaces(old) {
	    var out = " ";
	    for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	    out += " ";
	    return out;
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	        if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            while (child.lines.length > 50) {
	              var spilled = child.lines.splice(child.lines.length - 25, 25);
	              var newleaf = new LeafChunk(spilled);
	              child.height -= newleaf.height;
	              this.children.splice(i + 1, 0, newleaf);
	              newleaf.parent = this;
	            }
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	        } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;

	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(lineNo == from.line && from.ch > span.to ||
	                span.from == null && lineNo != from.line||
	                lineNo == to.line && span.from > to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first;
	      this.iter(function(line) {
	        var sz = line.text.length + 1;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + 1;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},

	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, ore are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function nothing() {}

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };

	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "5.10.0";

	  return CodeMirror;
	});


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  CodeMirror.modeInfo = [
	    {name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"]},
	    {name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"]},
	    {name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"]},
	    {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
	    {name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"]},
	    {name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"]},
	    {name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"]},
	    {name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"]},
	    {name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"]},
	    {name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj"]},
	    {name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"]},
	    {name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/},
	    {name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"]},
	    {name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"]},
	    {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
	    {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
	    {name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"]},
	    {name: "CSS", mime: "text/css", mode: "css", ext: ["css"]},
	    {name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"]},
	    {name: "D", mime: "text/x-d", mode: "d", ext: ["d"]},
	    {name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"]},
	    {name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"]},
	    {name: "Django", mime: "text/x-django", mode: "django"},
	    {name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/},
	    {name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"]},
	    {name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"]},
	    {name: "EBNF", mime: "text/x-ebnf", mode: "ebnf"},
	    {name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"]},
	    {name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"]},
	    {name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"]},
	    {name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"]},
	    {name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"]},
	    {name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"]},
	    {name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"]},
	    {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
	    {name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"]},
	    {name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"]},
	    {name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"]},
	    {name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"]},
	    {name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i},
	    {name: "Go", mime: "text/x-go", mode: "go", ext: ["go"]},
	    {name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy"]},
	    {name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"]},
	    {name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"]},
	    {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
	    {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
	    {name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"]},
	    {name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"]},
	    {name: "HTTP", mime: "message/http", mode: "http"},
	    {name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"]},
	    {name: "Jade", mime: "text/x-jade", mode: "jade", ext: ["jade"]},
	    {name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"]},
	    {name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"]},
	    {name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
	     mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]},
	    {name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"]},
	    {name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"]},
	    {name: "Jinja2", mime: "null", mode: "jinja2"},
	    {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
	    {name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"]},
	    {name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"]},
	    {name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"]},
	    {name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"]},
	    {name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"]},
	    {name: "mIRC", mime: "text/mirc", mode: "mirc"},
	    {name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql"},
	    {name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"]},
	    {name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"]},
	    {name: "MUMPS", mime: "text/x-mumps", mode: "mumps"},
	    {name: "MS SQL", mime: "text/x-mssql", mode: "sql"},
	    {name: "MySQL", mime: "text/x-mysql", mode: "sql"},
	    {name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i},
	    {name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"]},
	    {name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"]},
	    {name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"]},
	    {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
	    {name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"]},
	    {name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"]},
	    {name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"]},
	    {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
	    {name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"]},
	    {name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"]},
	    {name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"]},
	    {name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"]},
	    {name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"]},
	    {name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"]},
	    {name: "Python", mime: "text/x-python", mode: "python", ext: ["py", "pyw"]},
	    {name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"]},
	    {name: "Q", mime: "text/x-q", mode: "q", ext: ["q"]},
	    {name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r"], alias: ["rscript"]},
	    {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
	    {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
	    {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
	    {name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"]},
	    {name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"]},
	    {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
	    {name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"]},
	    {name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"]},
	    {name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"]},
	    {name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/},
	    {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
	    {name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"]},
	    {name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"]},
	    {name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"]},
	    {name: "Solr", mime: "text/x-solr", mode: "solr"},
	    {name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"]},
	    {name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"]},
	    {name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"]},
	    {name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"]},
	    {name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"]},
	    {name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"]},
	    {name: "MariaDB", mime: "text/x-mariadb", mode: "sql"},
	    {name: "sTeX", mime: "text/x-stex", mode: "stex"},
	    {name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"]},
	    {name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"]},
	    {name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"]},
	    {name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"]},
	    {name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki"},
	    {name: "Tiki wiki", mime: "text/tiki", mode: "tiki"},
	    {name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"]},
	    {name: "Tornado", mime: "text/x-tornado", mode: "tornado"},
	    {name: "troff", mime: "troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]},
	    {name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"]},
	    {name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"]},
	    {name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"]},
	    {name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"]},
	    {name: "Twig", mime: "text/x-twig", mode: "twig"},
	    {name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"]},
	    {name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"]},
	    {name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"]},
	    {name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"]},
	    {name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"]},
	    {name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd"], alias: ["rss", "wsdl", "xsd"]},
	    {name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"]},
	    {name: "YAML", mime: "text/x-yaml", mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"]},
	    {name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"]},
	    {name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"]},
	    {name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"]},
	    {name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"]}
	  ];
	  // Ensure all modes have a mime property for backwards compatibility
	  for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	    var info = CodeMirror.modeInfo[i];
	    if (info.mimes) info.mime = info.mimes[0];
	  }

	  CodeMirror.findModeByMIME = function(mime) {
	    mime = mime.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.mime == mime) return info;
	      if (info.mimes) for (var j = 0; j < info.mimes.length; j++)
	        if (info.mimes[j] == mime) return info;
	    }
	  };

	  CodeMirror.findModeByExtension = function(ext) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.ext) for (var j = 0; j < info.ext.length; j++)
	        if (info.ext[j] == ext) return info;
	    }
	  };

	  CodeMirror.findModeByFileName = function(filename) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.file && info.file.test(filename)) return info;
	    }
	    var dot = filename.lastIndexOf(".");
	    var ext = dot > -1 && filename.substring(dot + 1, filename.length);
	    if (ext) return CodeMirror.findModeByExtension(ext);
	  };

	  CodeMirror.findModeByName = function(name) {
	    name = name.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.name.toLowerCase() == name) return info;
	      if (info.alias) for (var j = 0; j < info.alias.length; j++)
	        if (info.alias[j].toLowerCase() == name) return info;
	    }
	  };
	});


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor { position: absolute; }\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict'

	/**
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * @fileoverview Computes the difference between two texts to create a patch.
	 * Applies the patch onto another text, allowing for errors.
	 * @author fraser@google.com (Neil Fraser)
	 */

	/**
	 * Class containing the diff, match and patch methods.
	 * @constructor
	 */
	function diff_match_patch() {

	  // Defaults.
	  // Redefine these in your program to override the defaults.

	  // Number of seconds to map a diff before giving up (0 for infinity).
	  this.Diff_Timeout = 1.0;
	  // Cost of an empty edit operation in terms of edit characters.
	  this.Diff_EditCost = 4;
	  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
	  this.Match_Threshold = 0.5;
	  // How far to search for a match (0 = exact location, 1000+ = broad match).
	  // A match this many characters away from the expected location will add
	  // 1.0 to the score (0.0 is a perfect match).
	  this.Match_Distance = 1000;
	  // When deleting a large block of text (over ~64 characters), how close do
	  // the contents have to be to match the expected contents. (0.0 = perfection,
	  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
	  // end points of a delete need to match.
	  this.Patch_DeleteThreshold = 0.5;
	  // Chunk size for context length.
	  this.Patch_Margin = 4;

	  // The number of bits in an int.
	  this.Match_MaxBits = 32;
	}


	//  DIFF FUNCTIONS


	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;

	/** @typedef {{0: number, 1: string}} */
	diff_match_patch.Diff;


	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
	 *     then don't run a line-level diff first to identify the changed areas.
	 *     Defaults to true, which does a faster, slightly less optimal diff.
	 * @param {number} opt_deadline Optional time when the diff should be complete
	 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
	 *     instead.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
	    opt_deadline) {
	  // Set a deadline by which time the diff must be complete.
	  if (typeof opt_deadline == 'undefined') {
	    if (this.Diff_Timeout <= 0) {
	      opt_deadline = Number.MAX_VALUE;
	    } else {
	      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
	    }
	  }
	  var deadline = opt_deadline;

	  // Check for null inputs.
	  if (text1 == null || text2 == null) {
	    throw new Error('Null input. (diff_main)');
	  }

	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [[DIFF_EQUAL, text1]];
	    }
	    return [];
	  }

	  if (typeof opt_checklines == 'undefined') {
	    opt_checklines = true;
	  }
	  var checklines = opt_checklines;

	  // Trim off common prefix (speedup).
	  var commonlength = this.diff_commonPrefix(text1, text2);
	  var commonprefix = text1.substring(0, commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);

	  // Trim off common suffix (speedup).
	  commonlength = this.diff_commonSuffix(text1, text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0, text1.length - commonlength);
	  text2 = text2.substring(0, text2.length - commonlength);

	  // Compute the diff on the middle block.
	  var diffs = this.diff_compute_(text1, text2, checklines, deadline);

	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift([DIFF_EQUAL, commonprefix]);
	  }
	  if (commonsuffix) {
	    diffs.push([DIFF_EQUAL, commonsuffix]);
	  }
	  this.diff_cleanupMerge(diffs);
	  return diffs;
	};


	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean} checklines Speedup flag.  If false, then don't run a
	 *     line-level diff first to identify the changed areas.
	 *     If true, then run a faster, slightly less optimal diff.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
	    deadline) {
	  var diffs;

	  if (!text1) {
	    // Just add some text (speedup).
	    return [[DIFF_INSERT, text2]];
	  }

	  if (!text2) {
	    // Just delete some text (speedup).
	    return [[DIFF_DELETE, text1]];
	  }

	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
	             [DIFF_EQUAL, shorttext],
	             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }

	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedup, the character can't be an equality.
	    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	  }

	  // Check to see if the problem can be split in two.
	  var hm = this.diff_halfMatch_(text1, text2);
	  if (hm) {
	    // A half-match was found, sort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
	    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
	    // Merge the results.
	    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
	  }

	  if (checklines && text1.length > 100 && text2.length > 100) {
	    return this.diff_lineMode_(text1, text2, deadline);
	  }

	  return this.diff_bisect_(text1, text2, deadline);
	};


	/**
	 * Do a quick line-level diff on both strings, then rediff the parts for
	 * greater accuracy.
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
	  // Scan the text on a line-by-line basis first.
	  var a = this.diff_linesToChars_(text1, text2);
	  text1 = a.chars1;
	  text2 = a.chars2;
	  var linearray = a.lineArray;

	  var diffs = this.diff_main(text1, text2, false, deadline);

	  // Convert the diff back to original text.
	  this.diff_charsToLines_(diffs, linearray);
	  // Eliminate freak matches (e.g. blank lines)
	  this.diff_cleanupSemantic(diffs);

	  // Rediff any replacement blocks, this time character-by-character.
	  // Add a dummy entry at the end.
	  diffs.push([DIFF_EQUAL, '']);
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete >= 1 && count_insert >= 1) {
	          // Delete the offending records and add the merged ones.
	          diffs.splice(pointer - count_delete - count_insert,
	                       count_delete + count_insert);
	          pointer = pointer - count_delete - count_insert;
	          var a = this.diff_main(text_delete, text_insert, false, deadline);
	          for (var j = a.length - 1; j >= 0; j--) {
	            diffs.splice(pointer, 0, a[j]);
	          }
	          pointer = pointer + a.length;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	    pointer++;
	  }
	  diffs.pop();  // Remove the dummy entry at the end.

	  return diffs;
	};


	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is odd, then the front path will collide
	  // with the reverse path.
	  var front = (delta % 2 != 0);
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Bail out if deadline is reached.
	    if ((new Date()).getTime() > deadline) {
	      break;
	    }

	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length &&
	             text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }

	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length &&
	             text1.charAt(text1_length - x2 - 1) ==
	             text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of characters, no commonality at all.
	  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	};


	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
	    deadline) {
	  var text1a = text1.substring(0, x);
	  var text2a = text2.substring(0, y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);

	  // Compute both diffs serially.
	  var diffs = this.diff_main(text1a, text2a, false, deadline);
	  var diffsb = this.diff_main(text1b, text2b, false, deadline);

	  return diffs.concat(diffsb);
	};


	/**
	 * Split two texts into an array of strings.  Reduce the texts to a string of
	 * hashes where each Unicode character represents one line.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
	 *     An object containing the encoded text1, the encoded text2 and
	 *     the array of unique strings.
	 *     The zeroth element of the array of unique strings is intentionally blank.
	 * @private
	 */
	diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
	  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
	  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

	  // '\x00' is a valid character, but various debuggers don't like it.
	  // So we'll insert a junk entry to avoid generating a null character.
	  lineArray[0] = '';

	  /**
	   * Split a text into an array of strings.  Reduce the texts to a string of
	   * hashes where each Unicode character represents one line.
	   * Modifies linearray and linehash through being a closure.
	   * @param {string} text String to encode.
	   * @return {string} Encoded string.
	   * @private
	   */
	  function diff_linesToCharsMunge_(text) {
	    var chars = '';
	    // Walk the text, pulling out a substring for each line.
	    // text.split('\n') would would temporarily double our memory footprint.
	    // Modifying text would create many large strings to garbage collect.
	    var lineStart = 0;
	    var lineEnd = -1;
	    // Keeping our own length variable is faster than looking it up.
	    var lineArrayLength = lineArray.length;
	    while (lineEnd < text.length - 1) {
	      lineEnd = text.indexOf('\n', lineStart);
	      if (lineEnd == -1) {
	        lineEnd = text.length - 1;
	      }
	      var line = text.substring(lineStart, lineEnd + 1);
	      lineStart = lineEnd + 1;

	      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
	          (lineHash[line] !== undefined)) {
	        chars += String.fromCharCode(lineHash[line]);
	      } else {
	        chars += String.fromCharCode(lineArrayLength);
	        lineHash[line] = lineArrayLength;
	        lineArray[lineArrayLength++] = line;
	      }
	    }
	    return chars;
	  }

	  var chars1 = diff_linesToCharsMunge_(text1);
	  var chars2 = diff_linesToCharsMunge_(text2);
	  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
	};


	/**
	 * Rehydrate the text in a diff from a string of line hashes to real lines of
	 * text.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {!Array.<string>} lineArray Array of unique strings.
	 * @private
	 */
	diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
	  for (var x = 0; x < diffs.length; x++) {
	    var chars = diffs[x][1];
	    var text = [];
	    for (var y = 0; y < chars.length; y++) {
	      text[y] = lineArray[chars.charCodeAt(y)];
	    }
	    diffs[x][1] = text.join('');
	  }
	};


	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstart, pointermid) ==
	        text2.substring(pointerstart, pointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 ||
	      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
	        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Determine if the suffix of one string is the prefix of another.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of the first
	 *     string and the start of the second string.
	 * @private
	 */
	diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  // Eliminate the null case.
	  if (text1_length == 0 || text2_length == 0) {
	    return 0;
	  }
	  // Truncate the longer string.
	  if (text1_length > text2_length) {
	    text1 = text1.substring(text1_length - text2_length);
	  } else if (text1_length < text2_length) {
	    text2 = text2.substring(0, text1_length);
	  }
	  var text_length = Math.min(text1_length, text2_length);
	  // Quick check for the worst case.
	  if (text1 == text2) {
	    return text_length;
	  }

	  // Start by looking for a single character match
	  // and increase length until no match is found.
	  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
	  var best = 0;
	  var length = 1;
	  while (true) {
	    var pattern = text1.substring(text_length - length);
	    var found = text2.indexOf(pattern);
	    if (found == -1) {
	      return best;
	    }
	    length += found;
	    if (found == 0 || text1.substring(text_length - length) ==
	        text2.substring(0, length)) {
	      best = length;
	      length++;
	    }
	  }
	};


	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 * @private
	 */
	diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
	  if (this.Diff_Timeout <= 0) {
	    // Don't risk returning a non-optimal diff if we have unlimited time.
	    return null;
	  }
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null;  // Pointless.
	  }
	  var dmp = this;  // 'this' becomes 'window' in a closure.

	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closure, but does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtext, shorttext, i) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
	    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
	      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
	                                               shorttext.substring(j));
	      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
	                                               shorttext.substring(0, j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLength, j) +
	            shorttext.substring(j, j + prefixLength);
	        best_longtext_a = longtext.substring(0, i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0, j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_a, best_longtext_b,
	              best_shorttext_a, best_shorttext_b, best_common];
	    } else {
	      return null;
	    }
	  }

	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }

	  // A half-match was found, sort out the return data.
	  var text1_a, text1_b, text2_a, text2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_a, text1_b, text2_a, text2_b, mid_common];
	};


	/**
	 * Reduce the number of edits by eliminating semantically trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastequality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Number of characters that changed prior to the equality.
	  var length_insertions1 = 0;
	  var length_deletions1 = 0;
	  // Number of characters that changed after the equality.
	  var length_insertions2 = 0;
	  var length_deletions2 = 0;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      equalities[equalitiesLength++] = pointer;
	      length_insertions1 = length_insertions2;
	      length_deletions1 = length_deletions2;
	      length_insertions2 = 0;
	      length_deletions2 = 0;
	      lastequality = diffs[pointer][1];
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_INSERT) {
	        length_insertions2 += diffs[pointer][1].length;
	      } else {
	        length_deletions2 += diffs[pointer][1].length;
	      }
	      // Eliminate an equality that is smaller or equal to the edits on both
	      // sides of it.
	      if (lastequality && (lastequality.length <=
	          Math.max(length_insertions1, length_deletions1)) &&
	          (lastequality.length <= Math.max(length_insertions2,
	                                           length_deletions2))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        // Throw away the equality we just deleted.
	        equalitiesLength--;
	        // Throw away the previous equality (it needs to be reevaluated).
	        equalitiesLength--;
	        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
	        length_insertions1 = 0;  // Reset the counters.
	        length_deletions1 = 0;
	        length_insertions2 = 0;
	        length_deletions2 = 0;
	        lastequality = null;
	        changes = true;
	      }
	    }
	    pointer++;
	  }

	  // Normalize the diff.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	  this.diff_cleanupSemanticLossless(diffs);

	  // Find any overlaps between deletions and insertions.
	  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
	  //   -> <del>abc</del>xxx<ins>def</ins>
	  // e.g: <del>xxxabc</del><ins>defxxx</ins>
	  //   -> <ins>def</ins>xxx<del>abc</del>
	  // Only extract an overlap if it is as big as the edit ahead or behind it.
	  pointer = 1;
	  while (pointer < diffs.length) {
	    if (diffs[pointer - 1][0] == DIFF_DELETE &&
	        diffs[pointer][0] == DIFF_INSERT) {
	      var deletion = diffs[pointer - 1][1];
	      var insertion = diffs[pointer][1];
	      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
	      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
	      if (overlap_length1 >= overlap_length2) {
	        if (overlap_length1 >= deletion.length / 2 ||
	            overlap_length1 >= insertion.length / 2) {
	          // Overlap found.  Insert an equality and trim the surrounding edits.
	          diffs.splice(pointer, 0,
	              [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
	          diffs[pointer - 1][1] =
	              deletion.substring(0, deletion.length - overlap_length1);
	          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
	          pointer++;
	        }
	      } else {
	        if (overlap_length2 >= deletion.length / 2 ||
	            overlap_length2 >= insertion.length / 2) {
	          // Reverse overlap found.
	          // Insert an equality and swap and trim the surrounding edits.
	          diffs.splice(pointer, 0,
	              [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
	          diffs[pointer - 1][0] = DIFF_INSERT;
	          diffs[pointer - 1][1] =
	              insertion.substring(0, insertion.length - overlap_length2);
	          diffs[pointer + 1][0] = DIFF_DELETE;
	          diffs[pointer + 1][1] =
	              deletion.substring(overlap_length2);
	          pointer++;
	        }
	      }
	      pointer++;
	    }
	    pointer++;
	  }
	};


	/**
	 * Look for single edits surrounded on both sides by equalities
	 * which can be shifted sideways to align the edit to a word boundary.
	 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
	  /**
	   * Given two strings, compute a score representing whether the internal
	   * boundary falls on logical boundaries.
	   * Scores range from 6 (best) to 0 (worst).
	   * Closure, but does not reference any external variables.
	   * @param {string} one First string.
	   * @param {string} two Second string.
	   * @return {number} The score.
	   * @private
	   */
	  function diff_cleanupSemanticScore_(one, two) {
	    if (!one || !two) {
	      // Edges are the best.
	      return 6;
	    }

	    // Each port of this function behaves slightly differently due to
	    // subtle differences in each language's definition of things like
	    // 'whitespace'.  Since this function's purpose is largely cosmetic,
	    // the choice has been made to use each language's native features
	    // rather than force total conformity.
	    var char1 = one.charAt(one.length - 1);
	    var char2 = two.charAt(0);
	    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
	    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
	    var whitespace1 = nonAlphaNumeric1 &&
	        char1.match(diff_match_patch.whitespaceRegex_);
	    var whitespace2 = nonAlphaNumeric2 &&
	        char2.match(diff_match_patch.whitespaceRegex_);
	    var lineBreak1 = whitespace1 &&
	        char1.match(diff_match_patch.linebreakRegex_);
	    var lineBreak2 = whitespace2 &&
	        char2.match(diff_match_patch.linebreakRegex_);
	    var blankLine1 = lineBreak1 &&
	        one.match(diff_match_patch.blanklineEndRegex_);
	    var blankLine2 = lineBreak2 &&
	        two.match(diff_match_patch.blanklineStartRegex_);

	    if (blankLine1 || blankLine2) {
	      // Five points for blank lines.
	      return 5;
	    } else if (lineBreak1 || lineBreak2) {
	      // Four points for line breaks.
	      return 4;
	    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
	      // Three points for end of sentences.
	      return 3;
	    } else if (whitespace1 || whitespace2) {
	      // Two points for whitespace.
	      return 2;
	    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
	      // One point for non-alphanumeric.
	      return 1;
	    }
	    return 0;
	  }

	  var pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      var equality1 = diffs[pointer - 1][1];
	      var edit = diffs[pointer][1];
	      var equality2 = diffs[pointer + 1][1];

	      // First, shift the edit as far left as possible.
	      var commonOffset = this.diff_commonSuffix(equality1, edit);
	      if (commonOffset) {
	        var commonString = edit.substring(edit.length - commonOffset);
	        equality1 = equality1.substring(0, equality1.length - commonOffset);
	        edit = commonString + edit.substring(0, edit.length - commonOffset);
	        equality2 = commonString + equality2;
	      }

	      // Second, step character by character right, looking for the best fit.
	      var bestEquality1 = equality1;
	      var bestEdit = edit;
	      var bestEquality2 = equality2;
	      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
	          diff_cleanupSemanticScore_(edit, equality2);
	      while (edit.charAt(0) === equality2.charAt(0)) {
	        equality1 += edit.charAt(0);
	        edit = edit.substring(1) + equality2.charAt(0);
	        equality2 = equality2.substring(1);
	        var score = diff_cleanupSemanticScore_(equality1, edit) +
	            diff_cleanupSemanticScore_(edit, equality2);
	        // The >= encourages trailing rather than leading whitespace on edits.
	        if (score >= bestScore) {
	          bestScore = score;
	          bestEquality1 = equality1;
	          bestEdit = edit;
	          bestEquality2 = equality2;
	        }
	      }

	      if (diffs[pointer - 1][1] != bestEquality1) {
	        // We have an improvement, save it back to the diff.
	        if (bestEquality1) {
	          diffs[pointer - 1][1] = bestEquality1;
	        } else {
	          diffs.splice(pointer - 1, 1);
	          pointer--;
	        }
	        diffs[pointer][1] = bestEdit;
	        if (bestEquality2) {
	          diffs[pointer + 1][1] = bestEquality2;
	        } else {
	          diffs.splice(pointer + 1, 1);
	          pointer--;
	        }
	      }
	    }
	    pointer++;
	  }
	};

	// Define some regex patterns for matching boundaries.
	diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
	diff_match_patch.whitespaceRegex_ = /\s/;
	diff_match_patch.linebreakRegex_ = /[\r\n]/;
	diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
	diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;

	/**
	 * Reduce the number of edits by eliminating operationally trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastequality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Is there an insertion operation before the last equality.
	  var pre_ins = false;
	  // Is there a deletion operation before the last equality.
	  var pre_del = false;
	  // Is there an insertion operation after the last equality.
	  var post_ins = false;
	  // Is there a deletion operation after the last equality.
	  var post_del = false;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      if (diffs[pointer][1].length < this.Diff_EditCost &&
	          (post_ins || post_del)) {
	        // Candidate found.
	        equalities[equalitiesLength++] = pointer;
	        pre_ins = post_ins;
	        pre_del = post_del;
	        lastequality = diffs[pointer][1];
	      } else {
	        // Not a candidate, and can never become one.
	        equalitiesLength = 0;
	        lastequality = null;
	      }
	      post_ins = post_del = false;
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_DELETE) {
	        post_del = true;
	      } else {
	        post_ins = true;
	      }
	      /*
	       * Five types to be split:
	       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
	       * <ins>A</ins>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<ins>C</ins>
	       * <ins>A</del>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<del>C</del>
	       */
	      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
	                           ((lastequality.length < this.Diff_EditCost / 2) &&
	                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        equalitiesLength--;  // Throw away the equality we just deleted;
	        lastequality = null;
	        if (pre_ins && pre_del) {
	          // No changes made which could affect previous entry, keep going.
	          post_ins = post_del = true;
	          equalitiesLength = 0;
	        } else {
	          equalitiesLength--;  // Throw away the previous equality.
	          pointer = equalitiesLength > 0 ?
	              equalities[equalitiesLength - 1] : -1;
	          post_ins = post_del = false;
	        }
	        changes = true;
	      }
	    }
	    pointer++;
	  }

	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};


	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
	  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = this.diff_commonPrefix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              if ((pointer - count_delete - count_insert) > 0 &&
	                  diffs[pointer - count_delete - count_insert - 1][0] ==
	                  DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] +=
	                    text_insert.substring(0, commonlength);
	              } else {
	                diffs.splice(0, 0, [DIFF_EQUAL,
	                                    text_insert.substring(0, commonlength)]);
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = this.diff_commonSuffix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length -
	                  commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0, text_insert.length -
	                  commonlength);
	              text_delete = text_delete.substring(0, text_delete.length -
	                  commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          if (count_delete === 0) {
	            diffs.splice(pointer - count_insert,
	                count_delete + count_insert, [DIFF_INSERT, text_insert]);
	          } else if (count_insert === 0) {
	            diffs.splice(pointer - count_delete,
	                count_delete + count_insert, [DIFF_DELETE, text_delete]);
	          } else {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert, [DIFF_DELETE, text_delete],
	                [DIFF_INSERT, text_insert]);
	          }
	          pointer = pointer - count_delete - count_insert +
	                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer, 1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop();  // Remove the dummy entry at the end.
	  }

	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length -
	          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] +
	            diffs[pointer][1].substring(0, diffs[pointer][1].length -
	                                        diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 1, 1);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
	          diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] =
	            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
	            diffs[pointer + 1][1];
	        diffs.splice(pointer + 1, 1);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were made, the diff needs reordering and another shift sweep.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};


	/**
	 * loc is a location in text1, compute and return the equivalent location in
	 * text2.
	 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {number} loc Location within text1.
	 * @return {number} Location within text2.
	 */
	diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
	  var chars1 = 0;
	  var chars2 = 0;
	  var last_chars1 = 0;
	  var last_chars2 = 0;
	  var x;
	  for (x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
	      chars1 += diffs[x][1].length;
	    }
	    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
	      chars2 += diffs[x][1].length;
	    }
	    if (chars1 > loc) {  // Overshot the location.
	      break;
	    }
	    last_chars1 = chars1;
	    last_chars2 = chars2;
	  }
	  // Was the location was deleted?
	  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
	    return last_chars2;
	  }
	  // Add the remaining character length.
	  return last_chars2 + (loc - last_chars1);
	};


	/**
	 * Convert a diff array into a pretty HTML report.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} HTML representation.
	 */
	diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
	  var html = [];
	  var pattern_amp = /&/g;
	  var pattern_lt = /</g;
	  var pattern_gt = />/g;
	  var pattern_para = /\n/g;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];    // Operation (insert, delete, equal)
	    var data = diffs[x][1];  // Text of change.
	    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
	        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
	    switch (op) {
	      case DIFF_INSERT:
	        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
	        break;
	      case DIFF_DELETE:
	        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
	        break;
	      case DIFF_EQUAL:
	        html[x] = '<span>' + text + '</span>';
	        break;
	    }
	  }
	  return html.join('');
	};


	/**
	 * Compute and return the source text (all equalities and deletions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Source text.
	 */
	diff_match_patch.prototype.diff_text1 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};


	/**
	 * Compute and return the destination text (all equalities and insertions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Destination text.
	 */
	diff_match_patch.prototype.diff_text2 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_DELETE) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};


	/**
	 * Compute the Levenshtein distance; the number of inserted, deleted or
	 * substituted characters.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {number} Number of changes.
	 */
	diff_match_patch.prototype.diff_levenshtein = function(diffs) {
	  var levenshtein = 0;
	  var insertions = 0;
	  var deletions = 0;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];
	    var data = diffs[x][1];
	    switch (op) {
	      case DIFF_INSERT:
	        insertions += data.length;
	        break;
	      case DIFF_DELETE:
	        deletions += data.length;
	        break;
	      case DIFF_EQUAL:
	        // A deletion and an insertion is one substitution.
	        levenshtein += Math.max(insertions, deletions);
	        insertions = 0;
	        deletions = 0;
	        break;
	    }
	  }
	  levenshtein += Math.max(insertions, deletions);
	  return levenshtein;
	};


	/**
	 * Crush the diff into an encoded string which describes the operations
	 * required to transform text1 into text2.
	 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
	 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Delta text.
	 */
	diff_match_patch.prototype.diff_toDelta = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    switch (diffs[x][0]) {
	      case DIFF_INSERT:
	        text[x] = '+' + encodeURI(diffs[x][1]);
	        break;
	      case DIFF_DELETE:
	        text[x] = '-' + diffs[x][1].length;
	        break;
	      case DIFF_EQUAL:
	        text[x] = '=' + diffs[x][1].length;
	        break;
	    }
	  }
	  return text.join('\t').replace(/%20/g, ' ');
	};


	/**
	 * Given the original text1, and an encoded string which describes the
	 * operations required to transform text1 into text2, compute the full diff.
	 * @param {string} text1 Source string for the diff.
	 * @param {string} delta Delta text.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
	  var diffs = [];
	  var diffsLength = 0;  // Keeping our own length var is faster in JS.
	  var pointer = 0;  // Cursor in text1
	  var tokens = delta.split(/\t/g);
	  for (var x = 0; x < tokens.length; x++) {
	    // Each token begins with a one character parameter which specifies the
	    // operation of this token (delete, insert, equality).
	    var param = tokens[x].substring(1);
	    switch (tokens[x].charAt(0)) {
	      case '+':
	        try {
	          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
	        } catch (ex) {
	          // Malformed URI sequence.
	          throw new Error('Illegal escape in diff_fromDelta: ' + param);
	        }
	        break;
	      case '-':
	        // Fall through.
	      case '=':
	        var n = parseInt(param, 10);
	        if (isNaN(n) || n < 0) {
	          throw new Error('Invalid number in diff_fromDelta: ' + param);
	        }
	        var text = text1.substring(pointer, pointer += n);
	        if (tokens[x].charAt(0) == '=') {
	          diffs[diffsLength++] = [DIFF_EQUAL, text];
	        } else {
	          diffs[diffsLength++] = [DIFF_DELETE, text];
	        }
	        break;
	      default:
	        // Blank tokens are ok (from a trailing \t).
	        // Anything else is an error.
	        if (tokens[x]) {
	          throw new Error('Invalid diff operation in diff_fromDelta: ' +
	                          tokens[x]);
	        }
	    }
	  }
	  if (pointer != text1.length) {
	    throw new Error('Delta length (' + pointer +
	        ') does not equal source text length (' + text1.length + ').');
	  }
	  return diffs;
	};


	//  MATCH FUNCTIONS


	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc'.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 */
	diff_match_patch.prototype.match_main = function(text, pattern, loc) {
	  // Check for null inputs.
	  if (text == null || pattern == null || loc == null) {
	    throw new Error('Null input. (match_main)');
	  }

	  loc = Math.max(0, Math.min(loc, text.length));
	  if (text == pattern) {
	    // Shortcut (potentially not guaranteed by the algorithm)
	    return 0;
	  } else if (!text.length) {
	    // Nothing to match.
	    return -1;
	  } else if (text.substring(loc, loc + pattern.length) == pattern) {
	    // Perfect match at the perfect spot!  (Includes case of null pattern)
	    return loc;
	  } else {
	    // Do a fuzzy compare.
	    return this.match_bitap_(text, pattern, loc);
	  }
	};


	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
	 * Bitap algorithm.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 * @private
	 */
	diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
	  if (pattern.length > this.Match_MaxBits) {
	    throw new Error('Pattern too long for this browser.');
	  }

	  // Initialise the alphabet.
	  var s = this.match_alphabet_(pattern);

	  var dmp = this;  // 'this' becomes 'window' in a closure.

	  /**
	   * Compute and return the score for a match with e errors and x location.
	   * Accesses loc and pattern through being a closure.
	   * @param {number} e Number of errors in match.
	   * @param {number} x Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  function match_bitapScore_(e, x) {
	    var accuracy = e / pattern.length;
	    var proximity = Math.abs(loc - x);
	    if (!dmp.Match_Distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy;
	    }
	    return accuracy + (proximity / dmp.Match_Distance);
	  }

	  // Highest score beyond which we give up.
	  var score_threshold = this.Match_Threshold;
	  // Is there a nearby exact match? (speedup)
	  var best_loc = text.indexOf(pattern, loc);
	  if (best_loc != -1) {
	    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    // What about in the other direction? (speedup)
	    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
	    if (best_loc != -1) {
	      score_threshold =
	          Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    }
	  }

	  // Initialise the bit arrays.
	  var matchmask = 1 << (pattern.length - 1);
	  best_loc = -1;

	  var bin_min, bin_mid;
	  var bin_max = pattern.length + text.length;
	  var last_rd;
	  for (var d = 0; d < pattern.length; d++) {
	    // Scan for the best match; each iteration allows for one more error.
	    // Run a binary search to determine how far from 'loc' we can stray at this
	    // error level.
	    bin_min = 0;
	    bin_mid = bin_max;
	    while (bin_min < bin_mid) {
	      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
	        bin_min = bin_mid;
	      } else {
	        bin_max = bin_mid;
	      }
	      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
	    }
	    // Use the result from this iteration as the maximum for the next.
	    bin_max = bin_mid;
	    var start = Math.max(1, loc - bin_mid + 1);
	    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

	    var rd = Array(finish + 2);
	    rd[finish + 1] = (1 << d) - 1;
	    for (var j = finish; j >= start; j--) {
	      // The alphabet (s) is a sparse hash, so the following line generates
	      // warnings.
	      var charMatch = s[text.charAt(j - 1)];
	      if (d === 0) {  // First pass: exact match.
	        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
	      } else {  // Subsequent passes: fuzzy match.
	        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
	                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
	                last_rd[j + 1];
	      }
	      if (rd[j] & matchmask) {
	        var score = match_bitapScore_(d, j - 1);
	        // This match will almost certainly be better than any existing match.
	        // But check anyway.
	        if (score <= score_threshold) {
	          // Told you so.
	          score_threshold = score;
	          best_loc = j - 1;
	          if (best_loc > loc) {
	            // When passing loc, don't exceed our current distance from loc.
	            start = Math.max(1, 2 * loc - best_loc);
	          } else {
	            // Already passed loc, downhill from here on in.
	            break;
	          }
	        }
	      }
	    }
	    // No hope for a (better) match at greater error levels.
	    if (match_bitapScore_(d + 1, loc) > score_threshold) {
	      break;
	    }
	    last_rd = rd;
	  }
	  return best_loc;
	};


	/**
	 * Initialise the alphabet for the Bitap algorithm.
	 * @param {string} pattern The text to encode.
	 * @return {!Object} Hash of character locations.
	 * @private
	 */
	diff_match_patch.prototype.match_alphabet_ = function(pattern) {
	  var s = {};
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] = 0;
	  }
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
	  }
	  return s;
	};


	//  PATCH FUNCTIONS


	/**
	 * Increase the context until it is unique,
	 * but don't let the pattern expand beyond Match_MaxBits.
	 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
	 * @param {string} text Source text.
	 * @private
	 */
	diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
	  if (text.length == 0) {
	    return;
	  }
	  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
	  var padding = 0;

	  // Look for the first and last matches of pattern in text.  If two different
	  // matches are found, increase the pattern length.
	  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
	         pattern.length < this.Match_MaxBits - this.Patch_Margin -
	         this.Patch_Margin) {
	    padding += this.Patch_Margin;
	    pattern = text.substring(patch.start2 - padding,
	                             patch.start2 + patch.length1 + padding);
	  }
	  // Add one chunk for good luck.
	  padding += this.Patch_Margin;

	  // Add the prefix.
	  var prefix = text.substring(patch.start2 - padding, patch.start2);
	  if (prefix) {
	    patch.diffs.unshift([DIFF_EQUAL, prefix]);
	  }
	  // Add the suffix.
	  var suffix = text.substring(patch.start2 + patch.length1,
	                              patch.start2 + patch.length1 + padding);
	  if (suffix) {
	    patch.diffs.push([DIFF_EQUAL, suffix]);
	  }

	  // Roll back the start points.
	  patch.start1 -= prefix.length;
	  patch.start2 -= prefix.length;
	  // Extend the lengths.
	  patch.length1 += prefix.length + suffix.length;
	  patch.length2 += prefix.length + suffix.length;
	};


	/**
	 * Compute a list of patches to turn text1 into text2.
	 * Use diffs if provided, otherwise compute it ourselves.
	 * There are four ways to call this function, depending on what data is
	 * available to the caller:
	 * Method 1:
	 * a = text1, b = text2
	 * Method 2:
	 * a = diffs
	 * Method 3 (optimal):
	 * a = text1, b = diffs
	 * Method 4 (deprecated, use method 3):
	 * a = text1, b = text2, c = diffs
	 *
	 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
	 * Array of diff tuples for text1 to text2 (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_b text2 (methods 1,4) or
	 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_c Array of diff tuples
	 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
	  var text1, diffs;
	  if (typeof a == 'string' && typeof opt_b == 'string' &&
	      typeof opt_c == 'undefined') {
	    // Method 1: text1, text2
	    // Compute diffs from text1 and text2.
	    text1 = /** @type {string} */(a);
	    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
	    if (diffs.length > 2) {
	      this.diff_cleanupSemantic(diffs);
	      this.diff_cleanupEfficiency(diffs);
	    }
	  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
	      typeof opt_c == 'undefined') {
	    // Method 2: diffs
	    // Compute text1 from diffs.
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
	    text1 = this.diff_text1(diffs);
	  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
	      typeof opt_c == 'undefined') {
	    // Method 3: text1, diffs
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
	  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
	      opt_c && typeof opt_c == 'object') {
	    // Method 4: text1, text2, diffs
	    // text2 is not used.
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
	  } else {
	    throw new Error('Unknown call format to patch_make.');
	  }

	  if (diffs.length === 0) {
	    return [];  // Get rid of the null case.
	  }
	  var patches = [];
	  var patch = new diff_match_patch.patch_obj();
	  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
	  var char_count1 = 0;  // Number of characters into the text1 string.
	  var char_count2 = 0;  // Number of characters into the text2 string.
	  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
	  // text2 (postpatch_text).  We recreate the patches one by one to determine
	  // context info.
	  var prepatch_text = text1;
	  var postpatch_text = text1;
	  for (var x = 0; x < diffs.length; x++) {
	    var diff_type = diffs[x][0];
	    var diff_text = diffs[x][1];

	    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
	      // A new patch starts here.
	      patch.start1 = char_count1;
	      patch.start2 = char_count2;
	    }

	    switch (diff_type) {
	      case DIFF_INSERT:
	        patch.diffs[patchDiffLength++] = diffs[x];
	        patch.length2 += diff_text.length;
	        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
	                         postpatch_text.substring(char_count2);
	        break;
	      case DIFF_DELETE:
	        patch.length1 += diff_text.length;
	        patch.diffs[patchDiffLength++] = diffs[x];
	        postpatch_text = postpatch_text.substring(0, char_count2) +
	                         postpatch_text.substring(char_count2 +
	                             diff_text.length);
	        break;
	      case DIFF_EQUAL:
	        if (diff_text.length <= 2 * this.Patch_Margin &&
	            patchDiffLength && diffs.length != x + 1) {
	          // Small equality inside a patch.
	          patch.diffs[patchDiffLength++] = diffs[x];
	          patch.length1 += diff_text.length;
	          patch.length2 += diff_text.length;
	        } else if (diff_text.length >= 2 * this.Patch_Margin) {
	          // Time for a new patch.
	          if (patchDiffLength) {
	            this.patch_addContext_(patch, prepatch_text);
	            patches.push(patch);
	            patch = new diff_match_patch.patch_obj();
	            patchDiffLength = 0;
	            // Unlike Unidiff, our patch lists have a rolling context.
	            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
	            // Update prepatch text & pos to reflect the application of the
	            // just completed patch.
	            prepatch_text = postpatch_text;
	            char_count1 = char_count2;
	          }
	        }
	        break;
	    }

	    // Update the current character count.
	    if (diff_type !== DIFF_INSERT) {
	      char_count1 += diff_text.length;
	    }
	    if (diff_type !== DIFF_DELETE) {
	      char_count2 += diff_text.length;
	    }
	  }
	  // Pick up the leftover patch if not empty.
	  if (patchDiffLength) {
	    this.patch_addContext_(patch, prepatch_text);
	    patches.push(patch);
	  }

	  return patches;
	};


	/**
	 * Given an array of patches, return another array that is identical.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_deepCopy = function(patches) {
	  // Making deep copies is hard in JavaScript.
	  var patchesCopy = [];
	  for (var x = 0; x < patches.length; x++) {
	    var patch = patches[x];
	    var patchCopy = new diff_match_patch.patch_obj();
	    patchCopy.diffs = [];
	    for (var y = 0; y < patch.diffs.length; y++) {
	      patchCopy.diffs[y] = patch.diffs[y].slice();
	    }
	    patchCopy.start1 = patch.start1;
	    patchCopy.start2 = patch.start2;
	    patchCopy.length1 = patch.length1;
	    patchCopy.length2 = patch.length2;
	    patchesCopy[x] = patchCopy;
	  }
	  return patchesCopy;
	};


	/**
	 * Merge a set of patches onto the text.  Return a patched text, as well
	 * as a list of true/false values indicating which patches were applied.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @param {string} text Old text.
	 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
	 *      new text and an array of boolean values.
	 */
	diff_match_patch.prototype.patch_apply = function(patches, text) {
	  if (patches.length == 0) {
	    return [text, []];
	  }

	  // Deep copy the patches so that no changes are made to originals.
	  patches = this.patch_deepCopy(patches);

	  var nullPadding = this.patch_addPadding(patches);
	  text = nullPadding + text + nullPadding;

	  this.patch_splitMax(patches);
	  // delta keeps track of the offset between the expected and actual location
	  // of the previous patch.  If there are patches expected at positions 10 and
	  // 20, but the first patch was found at 12, delta is 2 and the second patch
	  // has an effective expected position of 22.
	  var delta = 0;
	  var results = [];
	  for (var x = 0; x < patches.length; x++) {
	    var expected_loc = patches[x].start2 + delta;
	    var text1 = this.diff_text1(patches[x].diffs);
	    var start_loc;
	    var end_loc = -1;
	    if (text1.length > this.Match_MaxBits) {
	      // patch_splitMax will only provide an oversized pattern in the case of
	      // a monster delete.
	      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
	                                  expected_loc);
	      if (start_loc != -1) {
	        end_loc = this.match_main(text,
	            text1.substring(text1.length - this.Match_MaxBits),
	            expected_loc + text1.length - this.Match_MaxBits);
	        if (end_loc == -1 || start_loc >= end_loc) {
	          // Can't find valid trailing context.  Drop this patch.
	          start_loc = -1;
	        }
	      }
	    } else {
	      start_loc = this.match_main(text, text1, expected_loc);
	    }
	    if (start_loc == -1) {
	      // No match found.  :(
	      results[x] = false;
	      // Subtract the delta for this failed patch from subsequent patches.
	      delta -= patches[x].length2 - patches[x].length1;
	    } else {
	      // Found a match.  :)
	      results[x] = true;
	      delta = start_loc - expected_loc;
	      var text2;
	      if (end_loc == -1) {
	        text2 = text.substring(start_loc, start_loc + text1.length);
	      } else {
	        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
	      }
	      if (text1 == text2) {
	        // Perfect match, just shove the replacement text in.
	        text = text.substring(0, start_loc) +
	               this.diff_text2(patches[x].diffs) +
	               text.substring(start_loc + text1.length);
	      } else {
	        // Imperfect match.  Run a diff to get a framework of equivalent
	        // indices.
	        var diffs = this.diff_main(text1, text2, false);
	        if (text1.length > this.Match_MaxBits &&
	            this.diff_levenshtein(diffs) / text1.length >
	            this.Patch_DeleteThreshold) {
	          // The end points match, but the content is unacceptably bad.
	          results[x] = false;
	        } else {
	          this.diff_cleanupSemanticLossless(diffs);
	          var index1 = 0;
	          var index2;
	          for (var y = 0; y < patches[x].diffs.length; y++) {
	            var mod = patches[x].diffs[y];
	            if (mod[0] !== DIFF_EQUAL) {
	              index2 = this.diff_xIndex(diffs, index1);
	            }
	            if (mod[0] === DIFF_INSERT) {  // Insertion
	              text = text.substring(0, start_loc + index2) + mod[1] +
	                     text.substring(start_loc + index2);
	            } else if (mod[0] === DIFF_DELETE) {  // Deletion
	              text = text.substring(0, start_loc + index2) +
	                     text.substring(start_loc + this.diff_xIndex(diffs,
	                         index1 + mod[1].length));
	            }
	            if (mod[0] !== DIFF_DELETE) {
	              index1 += mod[1].length;
	            }
	          }
	        }
	      }
	    }
	  }
	  // Strip the padding off.
	  text = text.substring(nullPadding.length, text.length - nullPadding.length);
	  return [text, results];
	};


	/**
	 * Add some padding on text start and end so that edges can match something.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} The padding string added to each side.
	 */
	diff_match_patch.prototype.patch_addPadding = function(patches) {
	  var paddingLength = this.Patch_Margin;
	  var nullPadding = '';
	  for (var x = 1; x <= paddingLength; x++) {
	    nullPadding += String.fromCharCode(x);
	  }

	  // Bump all the patches forward.
	  for (var x = 0; x < patches.length; x++) {
	    patches[x].start1 += paddingLength;
	    patches[x].start2 += paddingLength;
	  }

	  // Add some padding on start of first diff.
	  var patch = patches[0];
	  var diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.unshift([DIFF_EQUAL, nullPadding]);
	    patch.start1 -= paddingLength;  // Should be 0.
	    patch.start2 -= paddingLength;  // Should be 0.
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[0][1].length) {
	    // Grow first equality.
	    var extraLength = paddingLength - diffs[0][1].length;
	    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
	    patch.start1 -= extraLength;
	    patch.start2 -= extraLength;
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }

	  // Add some padding on end of last diff.
	  patch = patches[patches.length - 1];
	  diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.push([DIFF_EQUAL, nullPadding]);
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
	    // Grow last equality.
	    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
	    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }

	  return nullPadding;
	};


	/**
	 * Look through the patches and break up any which are longer than the maximum
	 * limit of the match algorithm.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_splitMax = function(patches) {
	  var patch_size = this.Match_MaxBits;
	  for (var x = 0; x < patches.length; x++) {
	    if (patches[x].length1 <= patch_size) {
	      continue;
	    }
	    var bigpatch = patches[x];
	    // Remove the big old patch.
	    patches.splice(x--, 1);
	    var start1 = bigpatch.start1;
	    var start2 = bigpatch.start2;
	    var precontext = '';
	    while (bigpatch.diffs.length !== 0) {
	      // Create one of several smaller patches.
	      var patch = new diff_match_patch.patch_obj();
	      var empty = true;
	      patch.start1 = start1 - precontext.length;
	      patch.start2 = start2 - precontext.length;
	      if (precontext !== '') {
	        patch.length1 = patch.length2 = precontext.length;
	        patch.diffs.push([DIFF_EQUAL, precontext]);
	      }
	      while (bigpatch.diffs.length !== 0 &&
	             patch.length1 < patch_size - this.Patch_Margin) {
	        var diff_type = bigpatch.diffs[0][0];
	        var diff_text = bigpatch.diffs[0][1];
	        if (diff_type === DIFF_INSERT) {
	          // Insertions are harmless.
	          patch.length2 += diff_text.length;
	          start2 += diff_text.length;
	          patch.diffs.push(bigpatch.diffs.shift());
	          empty = false;
	        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
	                   patch.diffs[0][0] == DIFF_EQUAL &&
	                   diff_text.length > 2 * patch_size) {
	          // This is a large deletion.  Let it pass in one chunk.
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          empty = false;
	          patch.diffs.push([diff_type, diff_text]);
	          bigpatch.diffs.shift();
	        } else {
	          // Deletion or equality.  Only take as much as we can stomach.
	          diff_text = diff_text.substring(0,
	              patch_size - patch.length1 - this.Patch_Margin);
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          if (diff_type === DIFF_EQUAL) {
	            patch.length2 += diff_text.length;
	            start2 += diff_text.length;
	          } else {
	            empty = false;
	          }
	          patch.diffs.push([diff_type, diff_text]);
	          if (diff_text == bigpatch.diffs[0][1]) {
	            bigpatch.diffs.shift();
	          } else {
	            bigpatch.diffs[0][1] =
	                bigpatch.diffs[0][1].substring(diff_text.length);
	          }
	        }
	      }
	      // Compute the head context for the next patch.
	      precontext = this.diff_text2(patch.diffs);
	      precontext =
	          precontext.substring(precontext.length - this.Patch_Margin);
	      // Append the end context for this patch.
	      var postcontext = this.diff_text1(bigpatch.diffs)
	                            .substring(0, this.Patch_Margin);
	      if (postcontext !== '') {
	        patch.length1 += postcontext.length;
	        patch.length2 += postcontext.length;
	        if (patch.diffs.length !== 0 &&
	            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
	          patch.diffs[patch.diffs.length - 1][1] += postcontext;
	        } else {
	          patch.diffs.push([DIFF_EQUAL, postcontext]);
	        }
	      }
	      if (!empty) {
	        patches.splice(++x, 0, patch);
	      }
	    }
	  }
	};


	/**
	 * Take a list of patches and return a textual representation.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} Text representation of patches.
	 */
	diff_match_patch.prototype.patch_toText = function(patches) {
	  var text = [];
	  for (var x = 0; x < patches.length; x++) {
	    text[x] = patches[x];
	  }
	  return text.join('');
	};


	/**
	 * Parse a textual representation of patches and return a list of Patch objects.
	 * @param {string} textline Text representation of patches.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.patch_fromText = function(textline) {
	  var patches = [];
	  if (!textline) {
	    return patches;
	  }
	  var text = textline.split('\n');
	  var textPointer = 0;
	  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
	  while (textPointer < text.length) {
	    var m = text[textPointer].match(patchHeader);
	    if (!m) {
	      throw new Error('Invalid patch string: ' + text[textPointer]);
	    }
	    var patch = new diff_match_patch.patch_obj();
	    patches.push(patch);
	    patch.start1 = parseInt(m[1], 10);
	    if (m[2] === '') {
	      patch.start1--;
	      patch.length1 = 1;
	    } else if (m[2] == '0') {
	      patch.length1 = 0;
	    } else {
	      patch.start1--;
	      patch.length1 = parseInt(m[2], 10);
	    }

	    patch.start2 = parseInt(m[3], 10);
	    if (m[4] === '') {
	      patch.start2--;
	      patch.length2 = 1;
	    } else if (m[4] == '0') {
	      patch.length2 = 0;
	    } else {
	      patch.start2--;
	      patch.length2 = parseInt(m[4], 10);
	    }
	    textPointer++;

	    while (textPointer < text.length) {
	      var sign = text[textPointer].charAt(0);
	      try {
	        var line = decodeURI(text[textPointer].substring(1));
	      } catch (ex) {
	        // Malformed URI sequence.
	        throw new Error('Illegal escape in patch_fromText: ' + line);
	      }
	      if (sign == '-') {
	        // Deletion.
	        patch.diffs.push([DIFF_DELETE, line]);
	      } else if (sign == '+') {
	        // Insertion.
	        patch.diffs.push([DIFF_INSERT, line]);
	      } else if (sign == ' ') {
	        // Minor equality.
	        patch.diffs.push([DIFF_EQUAL, line]);
	      } else if (sign == '@') {
	        // Start of next patch.
	        break;
	      } else if (sign === '') {
	        // Blank line?  Whatever.
	      } else {
	        // WTF?
	        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
	      }
	      textPointer++;
	    }
	  }
	  return patches;
	};


	/**
	 * Class representing one patch operation.
	 * @constructor
	 */
	diff_match_patch.patch_obj = function() {
	  /** @type {!Array.<!diff_match_patch.Diff>} */
	  this.diffs = [];
	  /** @type {?number} */
	  this.start1 = null;
	  /** @type {?number} */
	  this.start2 = null;
	  /** @type {number} */
	  this.length1 = 0;
	  /** @type {number} */
	  this.length2 = 0;
	};


	/**
	 * Emmulate GNU diff's format.
	 * Header: @@ -382,8 +481,9 @@
	 * Indicies are printed as 1-based, not 0-based.
	 * @return {string} The GNU diff string.
	 */
	diff_match_patch.patch_obj.prototype.toString = function() {
	  var coords1, coords2;
	  if (this.length1 === 0) {
	    coords1 = this.start1 + ',0';
	  } else if (this.length1 == 1) {
	    coords1 = this.start1 + 1;
	  } else {
	    coords1 = (this.start1 + 1) + ',' + this.length1;
	  }
	  if (this.length2 === 0) {
	    coords2 = this.start2 + ',0';
	  } else if (this.length2 == 1) {
	    coords2 = this.start2 + 1;
	  } else {
	    coords2 = (this.start2 + 1) + ',' + this.length2;
	  }
	  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
	  var op;
	  // Escape the body of the patch with %xx notation.
	  for (var x = 0; x < this.diffs.length; x++) {
	    switch (this.diffs[x][0]) {
	      case DIFF_INSERT:
	        op = '+';
	        break;
	      case DIFF_DELETE:
	        op = '-';
	        break;
	      case DIFF_EQUAL:
	        op = ' ';
	        break;
	    }
	    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
	  }
	  return text.join('').replace(/%20/g, ' ');
	};


	// The following export code was added by @ForbesLindesay
	module.exports = diff_match_patch;
	module.exports['diff_match_patch'] = diff_match_patch;
	module.exports['DIFF_DELETE'] = DIFF_DELETE;
	module.exports['DIFF_INSERT'] = DIFF_INSERT;
	module.exports['DIFF_EQUAL'] = DIFF_EQUAL;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  function wordRegexp(words) {
	    return new RegExp("^((" + words.join(")|(") + "))\\b");
	  }

	  var wordOperators = wordRegexp(["and", "or", "not", "is"]);
	  var commonKeywords = ["as", "assert", "break", "class", "continue",
	                        "def", "del", "elif", "else", "except", "finally",
	                        "for", "from", "global", "if", "import",
	                        "lambda", "pass", "raise", "return",
	                        "try", "while", "with", "yield", "in"];
	  var commonBuiltins = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
	                        "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod",
	                        "enumerate", "eval", "filter", "float", "format", "frozenset",
	                        "getattr", "globals", "hasattr", "hash", "help", "hex", "id",
	                        "input", "int", "isinstance", "issubclass", "iter", "len",
	                        "list", "locals", "map", "max", "memoryview", "min", "next",
	                        "object", "oct", "open", "ord", "pow", "property", "range",
	                        "repr", "reversed", "round", "set", "setattr", "slice",
	                        "sorted", "staticmethod", "str", "sum", "super", "tuple",
	                        "type", "vars", "zip", "__import__", "NotImplemented",
	                        "Ellipsis", "__debug__"];
	  var py2 = {builtins: ["apply", "basestring", "buffer", "cmp", "coerce", "execfile",
	                        "file", "intern", "long", "raw_input", "reduce", "reload",
	                        "unichr", "unicode", "xrange", "False", "True", "None"],
	             keywords: ["exec", "print"]};
	  var py3 = {builtins: ["ascii", "bytes", "exec", "print"],
	             keywords: ["nonlocal", "False", "True", "None", "async", "await"]};

	  CodeMirror.registerHelper("hintWords", "python", commonKeywords.concat(commonBuiltins));

	  function top(state) {
	    return state.scopes[state.scopes.length - 1];
	  }

	  CodeMirror.defineMode("python", function(conf, parserConf) {
	    var ERRORCLASS = "error";

	    var singleDelimiters = parserConf.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.]/;
	    var doubleOperators = parserConf.doubleOperators || /^([!<>]==|<>|<<|>>|\/\/|\*\*)/;
	    var doubleDelimiters = parserConf.doubleDelimiters || /^(\+=|\-=|\*=|%=|\/=|&=|\|=|\^=)/;
	    var tripleDelimiters = parserConf.tripleDelimiters || /^(\/\/=|>>=|<<=|\*\*=)/;

	    if (parserConf.version && parseInt(parserConf.version, 10) == 3){
	        // since http://legacy.python.org/dev/peps/pep-0465/ @ is also an operator
	        var singleOperators = parserConf.singleOperators || /^[\+\-\*\/%&|\^~<>!@]/;
	        var identifiers = parserConf.identifiers|| /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
	    } else {
	        var singleOperators = parserConf.singleOperators || /^[\+\-\*\/%&|\^~<>!]/;
	        var identifiers = parserConf.identifiers|| /^[_A-Za-z][_A-Za-z0-9]*/;
	    }

	    var hangingIndent = parserConf.hangingIndent || conf.indentUnit;

	    var myKeywords = commonKeywords, myBuiltins = commonBuiltins;
	    if(parserConf.extra_keywords != undefined){
	      myKeywords = myKeywords.concat(parserConf.extra_keywords);
	    }
	    if(parserConf.extra_builtins != undefined){
	      myBuiltins = myBuiltins.concat(parserConf.extra_builtins);
	    }
	    if (parserConf.version && parseInt(parserConf.version, 10) == 3) {
	      myKeywords = myKeywords.concat(py3.keywords);
	      myBuiltins = myBuiltins.concat(py3.builtins);
	      var stringPrefixes = new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))", "i");
	    } else {
	      myKeywords = myKeywords.concat(py2.keywords);
	      myBuiltins = myBuiltins.concat(py2.builtins);
	      var stringPrefixes = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
	    }
	    var keywords = wordRegexp(myKeywords);
	    var builtins = wordRegexp(myBuiltins);

	    // tokenizers
	    function tokenBase(stream, state) {
	      // Handle scope changes
	      if (stream.sol() && top(state).type == "py") {
	        var scopeOffset = top(state).offset;
	        if (stream.eatSpace()) {
	          var lineOffset = stream.indentation();
	          if (lineOffset > scopeOffset)
	            pushScope(stream, state, "py");
	          else if (lineOffset < scopeOffset && dedent(stream, state))
	            state.errorToken = true;
	          return null;
	        } else {
	          var style = tokenBaseInner(stream, state);
	          if (scopeOffset > 0 && dedent(stream, state))
	            style += " " + ERRORCLASS;
	          return style;
	        }
	      }
	      return tokenBaseInner(stream, state);
	    }

	    function tokenBaseInner(stream, state) {
	      if (stream.eatSpace()) return null;

	      var ch = stream.peek();

	      // Handle Comments
	      if (ch == "#") {
	        stream.skipToEnd();
	        return "comment";
	      }

	      // Handle Number Literals
	      if (stream.match(/^[0-9\.]/, false)) {
	        var floatLiteral = false;
	        // Floats
	        if (stream.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)) { floatLiteral = true; }
	        if (stream.match(/^\d+\.\d*/)) { floatLiteral = true; }
	        if (stream.match(/^\.\d+/)) { floatLiteral = true; }
	        if (floatLiteral) {
	          // Float literals may be "imaginary"
	          stream.eat(/J/i);
	          return "number";
	        }
	        // Integers
	        var intLiteral = false;
	        // Hex
	        if (stream.match(/^0x[0-9a-f]+/i)) intLiteral = true;
	        // Binary
	        if (stream.match(/^0b[01]+/i)) intLiteral = true;
	        // Octal
	        if (stream.match(/^0o[0-7]+/i)) intLiteral = true;
	        // Decimal
	        if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) {
	          // Decimal literals may be "imaginary"
	          stream.eat(/J/i);
	          // TODO - Can you have imaginary longs?
	          intLiteral = true;
	        }
	        // Zero by itself with no other piece of number.
	        if (stream.match(/^0(?![\dx])/i)) intLiteral = true;
	        if (intLiteral) {
	          // Integer literals may be "long"
	          stream.eat(/L/i);
	          return "number";
	        }
	      }

	      // Handle Strings
	      if (stream.match(stringPrefixes)) {
	        state.tokenize = tokenStringFactory(stream.current());
	        return state.tokenize(stream, state);
	      }

	      // Handle operators and Delimiters
	      if (stream.match(tripleDelimiters) || stream.match(doubleDelimiters))
	        return "punctuation";

	      if (stream.match(doubleOperators) || stream.match(singleOperators))
	        return "operator";

	      if (stream.match(singleDelimiters))
	        return "punctuation";

	      if (state.lastToken == "." && stream.match(identifiers))
	        return "property";

	      if (stream.match(keywords) || stream.match(wordOperators))
	        return "keyword";

	      if (stream.match(builtins))
	        return "builtin";

	      if (stream.match(/^(self|cls)\b/))
	        return "variable-2";

	      if (stream.match(identifiers)) {
	        if (state.lastToken == "def" || state.lastToken == "class")
	          return "def";
	        return "variable";
	      }

	      // Handle non-detected items
	      stream.next();
	      return ERRORCLASS;
	    }

	    function tokenStringFactory(delimiter) {
	      while ("rub".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
	        delimiter = delimiter.substr(1);

	      var singleline = delimiter.length == 1;
	      var OUTCLASS = "string";

	      function tokenString(stream, state) {
	        while (!stream.eol()) {
	          stream.eatWhile(/[^'"\\]/);
	          if (stream.eat("\\")) {
	            stream.next();
	            if (singleline && stream.eol())
	              return OUTCLASS;
	          } else if (stream.match(delimiter)) {
	            state.tokenize = tokenBase;
	            return OUTCLASS;
	          } else {
	            stream.eat(/['"]/);
	          }
	        }
	        if (singleline) {
	          if (parserConf.singleLineStringErrors)
	            return ERRORCLASS;
	          else
	            state.tokenize = tokenBase;
	        }
	        return OUTCLASS;
	      }
	      tokenString.isString = true;
	      return tokenString;
	    }

	    function pushScope(stream, state, type) {
	      var offset = 0, align = null;
	      if (type == "py") {
	        while (top(state).type != "py")
	          state.scopes.pop();
	      }
	      offset = top(state).offset + (type == "py" ? conf.indentUnit : hangingIndent);
	      if (type != "py" && !stream.match(/^(\s|#.*)*$/, false))
	        align = stream.column() + 1;
	      state.scopes.push({offset: offset, type: type, align: align});
	    }

	    function dedent(stream, state) {
	      var indented = stream.indentation();
	      while (top(state).offset > indented) {
	        if (top(state).type != "py") return true;
	        state.scopes.pop();
	      }
	      return top(state).offset != indented;
	    }

	    function tokenLexer(stream, state) {
	      var style = state.tokenize(stream, state);
	      var current = stream.current();

	      // Handle decorators
	      if (current == "@"){
	        if(parserConf.version && parseInt(parserConf.version, 10) == 3){
	            return stream.match(identifiers, false) ? "meta" : "operator";
	        } else {
	            return stream.match(identifiers, false) ? "meta" : ERRORCLASS;
	        }
	      }

	      if ((style == "variable" || style == "builtin")
	          && state.lastToken == "meta")
	        style = "meta";

	      // Handle scope changes.
	      if (current == "pass" || current == "return")
	        state.dedent += 1;

	      if (current == "lambda") state.lambda = true;
	      if (current == ":" && !state.lambda && top(state).type == "py")
	        pushScope(stream, state, "py");

	      var delimiter_index = current.length == 1 ? "[({".indexOf(current) : -1;
	      if (delimiter_index != -1)
	        pushScope(stream, state, "])}".slice(delimiter_index, delimiter_index+1));

	      delimiter_index = "])}".indexOf(current);
	      if (delimiter_index != -1) {
	        if (top(state).type == current) state.scopes.pop();
	        else return ERRORCLASS;
	      }
	      if (state.dedent > 0 && stream.eol() && top(state).type == "py") {
	        if (state.scopes.length > 1) state.scopes.pop();
	        state.dedent -= 1;
	      }

	      return style;
	    }

	    var external = {
	      startState: function(basecolumn) {
	        return {
	          tokenize: tokenBase,
	          scopes: [{offset: basecolumn || 0, type: "py", align: null}],
	          lastToken: null,
	          lambda: false,
	          dedent: 0
	        };
	      },

	      token: function(stream, state) {
	        var addErr = state.errorToken;
	        if (addErr) state.errorToken = false;
	        var style = tokenLexer(stream, state);

	        if (style && style != "comment")
	          state.lastToken = (style == "keyword" || style == "punctuation") ? stream.current() : style;
	        if (style == "punctuation") style = null;

	        if (stream.eol() && state.lambda)
	          state.lambda = false;
	        return addErr ? style + " " + ERRORCLASS : style;
	      },

	      indent: function(state, textAfter) {
	        if (state.tokenize != tokenBase)
	          return state.tokenize.isString ? CodeMirror.Pass : 0;

	        var scope = top(state);
	        var closing = textAfter && textAfter.charAt(0) == scope.type;
	        if (scope.align != null)
	          return scope.align - (closing ? 1 : 0);
	        else if (closing && state.scopes.length > 1)
	          return state.scopes[state.scopes.length - 2].offset;
	        else
	          return scope.offset;
	      },

	      closeBrackets: {triples: "'\""},
	      lineComment: "#",
	      fold: "indent"
	    };
	    return external;
	  });

	  CodeMirror.defineMIME("text/x-python", "python");

	  var words = function(str) { return str.split(" "); };

	  CodeMirror.defineMIME("text/x-cython", {
	    name: "python",
	    extra_keywords: words("by cdef cimport cpdef ctypedef enum except"+
	                          "extern gil include nogil property public"+
	                          "readonly struct union DEF IF ELIF ELSE")
	  });

	});


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// TODO actually recognize syntax of TypeScript constructs

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("javascript", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var statementIndent = parserConfig.statementIndent;
	  var jsonldMode = parserConfig.jsonld;
	  var jsonMode = parserConfig.json || jsonldMode;
	  var isTS = parserConfig.typescript;
	  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

	  // Tokenizer

	  var keywords = function(){
	    function kw(type) {return {type: type, style: "keyword"};}
	    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
	    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

	    var jsKeywords = {
	      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
	      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
	      "var": kw("var"), "const": kw("var"), "let": kw("var"),
	      "function": kw("function"), "catch": kw("catch"),
	      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
	      "in": operator, "typeof": operator, "instanceof": operator,
	      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
	      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
	      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C
	    };

	    // Extend the 'normal' keywords with the TypeScript language extensions
	    if (isTS) {
	      var type = {type: "variable", style: "variable-3"};
	      var tsKeywords = {
	        // object-like things
	        "interface": kw("class"),
	        "implements": C,
	        "namespace": C,
	        "module": kw("module"),
	        "enum": kw("module"),

	        // scope modifiers
	        "public": kw("modifier"),
	        "private": kw("modifier"),
	        "protected": kw("modifier"),
	        "abstract": kw("modifier"),

	        // operators
	        "as": operator,

	        // types
	        "string": type, "number": type, "boolean": type, "any": type
	      };

	      for (var attr in tsKeywords) {
	        jsKeywords[attr] = tsKeywords[attr];
	      }
	    }

	    return jsKeywords;
	  }();

	  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
	  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

	  function readRegexp(stream) {
	    var escaped = false, next, inSet = false;
	    while ((next = stream.next()) != null) {
	      if (!escaped) {
	        if (next == "/" && !inSet) return;
	        if (next == "[") inSet = true;
	        else if (inSet && next == "]") inSet = false;
	      }
	      escaped = !escaped && next == "\\";
	    }
	  }

	  // Used as scratch variables to communicate multiple values without
	  // consing up tons of objects.
	  var type, content;
	  function ret(tp, style, cont) {
	    type = tp; content = cont;
	    return style;
	  }
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
	      return ret("number", "number");
	    } else if (ch == "." && stream.match("..")) {
	      return ret("spread", "meta");
	    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
	      return ret(ch);
	    } else if (ch == "=" && stream.eat(">")) {
	      return ret("=>", "operator");
	    } else if (ch == "0" && stream.eat(/x/i)) {
	      stream.eatWhile(/[\da-f]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/o/i)) {
	      stream.eatWhile(/[0-7]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/b/i)) {
	      stream.eatWhile(/[01]/i);
	      return ret("number", "number");
	    } else if (/\d/.test(ch)) {
	      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
	      return ret("number", "number");
	    } else if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      } else if (stream.eat("/")) {
	        stream.skipToEnd();
	        return ret("comment", "comment");
	      } else if (/^(?:operator|sof|keyword c|case|new|[\[{}\(,;:])$/.test(state.lastType) ||
	                 (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - 1)))) {
	        readRegexp(stream);
	        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
	        return ret("regexp", "string-2");
	      } else {
	        stream.eatWhile(isOperatorChar);
	        return ret("operator", "operator", stream.current());
	      }
	    } else if (ch == "`") {
	      state.tokenize = tokenQuasi;
	      return tokenQuasi(stream, state);
	    } else if (ch == "#") {
	      stream.skipToEnd();
	      return ret("error", "error");
	    } else if (isOperatorChar.test(ch)) {
	      stream.eatWhile(isOperatorChar);
	      return ret("operator", "operator", stream.current());
	    } else if (wordRE.test(ch)) {
	      stream.eatWhile(wordRE);
	      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
	      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
	                     ret("variable", "variable", word);
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next;
	      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
	        state.tokenize = tokenBase;
	        return ret("jsonld-keyword", "meta");
	      }
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) break;
	        escaped = !escaped && next == "\\";
	      }
	      if (!escaped) state.tokenize = tokenBase;
	      return ret("string", "string");
	    };
	  }

	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ret("comment", "comment");
	  }

	  function tokenQuasi(stream, state) {
	    var escaped = false, next;
	    while ((next = stream.next()) != null) {
	      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      escaped = !escaped && next == "\\";
	    }
	    return ret("quasi", "string-2", stream.current());
	  }

	  var brackets = "([{}])";
	  // This is a crude lookahead trick to try and notice that we're
	  // parsing the argument patterns for a fat-arrow function before we
	  // actually hit the arrow token. It only works if the arrow is on
	  // the same line as the arguments and there's no strange noise
	  // (comments) in between. Fallback is to only notice when we hit the
	  // arrow, and not declare the arguments as locals for the arrow
	  // body.
	  function findFatArrow(stream, state) {
	    if (state.fatArrowAt) state.fatArrowAt = null;
	    var arrow = stream.string.indexOf("=>", stream.start);
	    if (arrow < 0) return;

	    var depth = 0, sawSomething = false;
	    for (var pos = arrow - 1; pos >= 0; --pos) {
	      var ch = stream.string.charAt(pos);
	      var bracket = brackets.indexOf(ch);
	      if (bracket >= 0 && bracket < 3) {
	        if (!depth) { ++pos; break; }
	        if (--depth == 0) break;
	      } else if (bracket >= 3 && bracket < 6) {
	        ++depth;
	      } else if (wordRE.test(ch)) {
	        sawSomething = true;
	      } else if (/["'\/]/.test(ch)) {
	        return;
	      } else if (sawSomething && !depth) {
	        ++pos;
	        break;
	      }
	    }
	    if (sawSomething && !depth) state.fatArrowAt = pos;
	  }

	  // Parser

	  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

	  function JSLexical(indented, column, type, align, prev, info) {
	    this.indented = indented;
	    this.column = column;
	    this.type = type;
	    this.prev = prev;
	    this.info = info;
	    if (align != null) this.align = align;
	  }

	  function inScope(state, varname) {
	    for (var v = state.localVars; v; v = v.next)
	      if (v.name == varname) return true;
	    for (var cx = state.context; cx; cx = cx.prev) {
	      for (var v = cx.vars; v; v = v.next)
	        if (v.name == varname) return true;
	    }
	  }

	  function parseJS(state, style, type, content, stream) {
	    var cc = state.cc;
	    // Communicate our context to the combinators.
	    // (Less wasteful than consing up a hundred closures on every call.)
	    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

	    if (!state.lexical.hasOwnProperty("align"))
	      state.lexical.align = true;

	    while(true) {
	      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
	      if (combinator(type, content)) {
	        while(cc.length && cc[cc.length - 1].lex)
	          cc.pop()();
	        if (cx.marked) return cx.marked;
	        if (type == "variable" && inScope(state, content)) return "variable-2";
	        return style;
	      }
	    }
	  }

	  // Combinator utils

	  var cx = {state: null, column: null, marked: null, cc: null};
	  function pass() {
	    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
	  }
	  function cont() {
	    pass.apply(null, arguments);
	    return true;
	  }
	  function register(varname) {
	    function inList(list) {
	      for (var v = list; v; v = v.next)
	        if (v.name == varname) return true;
	      return false;
	    }
	    var state = cx.state;
	    cx.marked = "def";
	    if (state.context) {
	      if (inList(state.localVars)) return;
	      state.localVars = {name: varname, next: state.localVars};
	    } else {
	      if (inList(state.globalVars)) return;
	      if (parserConfig.globalVars)
	        state.globalVars = {name: varname, next: state.globalVars};
	    }
	  }

	  // Combinators

	  var defaultVars = {name: "this", next: {name: "arguments"}};
	  function pushcontext() {
	    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
	    cx.state.localVars = defaultVars;
	  }
	  function popcontext() {
	    cx.state.localVars = cx.state.context.vars;
	    cx.state.context = cx.state.context.prev;
	  }
	  function pushlex(type, info) {
	    var result = function() {
	      var state = cx.state, indent = state.indented;
	      if (state.lexical.type == "stat") indent = state.lexical.indented;
	      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
	        indent = outer.indented;
	      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
	    };
	    result.lex = true;
	    return result;
	  }
	  function poplex() {
	    var state = cx.state;
	    if (state.lexical.prev) {
	      if (state.lexical.type == ")")
	        state.indented = state.lexical.indented;
	      state.lexical = state.lexical.prev;
	    }
	  }
	  poplex.lex = true;

	  function expect(wanted) {
	    function exp(type) {
	      if (type == wanted) return cont();
	      else if (wanted == ";") return pass();
	      else return cont(exp);
	    };
	    return exp;
	  }

	  function statement(type, value) {
	    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
	    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
	    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
	    if (type == "{") return cont(pushlex("}"), block, poplex);
	    if (type == ";") return cont();
	    if (type == "if") {
	      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
	        cx.state.cc.pop()();
	      return cont(pushlex("form"), expression, statement, poplex, maybeelse);
	    }
	    if (type == "function") return cont(functiondef);
	    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
	    if (type == "variable") return cont(pushlex("stat"), maybelabel);
	    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
	                                      block, poplex, poplex);
	    if (type == "case") return cont(expression, expect(":"));
	    if (type == "default") return cont(expect(":"));
	    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
	                                     statement, poplex, popcontext);
	    if (type == "class") return cont(pushlex("form"), className, poplex);
	    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
	    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
	    if (type == "module") return cont(pushlex("form"), pattern, pushlex("}"), expect("{"), block, poplex, poplex)
	    return pass(pushlex("stat"), expression, expect(";"), poplex);
	  }
	  function expression(type) {
	    return expressionInner(type, false);
	  }
	  function expressionNoComma(type) {
	    return expressionInner(type, true);
	  }
	  function expressionInner(type, noComma) {
	    if (cx.state.fatArrowAt == cx.stream.start) {
	      var body = noComma ? arrowBodyNoComma : arrowBody;
	      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
	      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
	    }

	    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
	    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
	    if (type == "function") return cont(functiondef, maybeop);
	    if (type == "keyword c") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
	    if (type == "(") return cont(pushlex(")"), maybeexpression, comprehension, expect(")"), poplex, maybeop);
	    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
	    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
	    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
	    if (type == "quasi") return pass(quasi, maybeop);
	    if (type == "new") return cont(maybeTarget(noComma));
	    return cont();
	  }
	  function maybeexpression(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expression);
	  }
	  function maybeexpressionNoComma(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expressionNoComma);
	  }

	  function maybeoperatorComma(type, value) {
	    if (type == ",") return cont(expression);
	    return maybeoperatorNoComma(type, value, false);
	  }
	  function maybeoperatorNoComma(type, value, noComma) {
	    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
	    var expr = noComma == false ? expression : expressionNoComma;
	    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
	    if (type == "operator") {
	      if (/\+\+|--/.test(value)) return cont(me);
	      if (value == "?") return cont(expression, expect(":"), expr);
	      return cont(expr);
	    }
	    if (type == "quasi") { return pass(quasi, me); }
	    if (type == ";") return;
	    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
	    if (type == ".") return cont(property, me);
	    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
	  }
	  function quasi(type, value) {
	    if (type != "quasi") return pass();
	    if (value.slice(value.length - 2) != "${") return cont(quasi);
	    return cont(expression, continueQuasi);
	  }
	  function continueQuasi(type) {
	    if (type == "}") {
	      cx.marked = "string-2";
	      cx.state.tokenize = tokenQuasi;
	      return cont(quasi);
	    }
	  }
	  function arrowBody(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expression);
	  }
	  function arrowBodyNoComma(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expressionNoComma);
	  }
	  function maybeTarget(noComma) {
	    return function(type) {
	      if (type == ".") return cont(noComma ? targetNoComma : target);
	      else return pass(noComma ? expressionNoComma : expression);
	    };
	  }
	  function target(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
	  }
	  function targetNoComma(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
	  }
	  function maybelabel(type) {
	    if (type == ":") return cont(poplex, statement);
	    return pass(maybeoperatorComma, expect(";"), poplex);
	  }
	  function property(type) {
	    if (type == "variable") {cx.marked = "property"; return cont();}
	  }
	  function objprop(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(getterSetter);
	      return cont(afterprop);
	    } else if (type == "number" || type == "string") {
	      cx.marked = jsonldMode ? "property" : (cx.style + " property");
	      return cont(afterprop);
	    } else if (type == "jsonld-keyword") {
	      return cont(afterprop);
	    } else if (type == "modifier") {
	      return cont(objprop)
	    } else if (type == "[") {
	      return cont(expression, expect("]"), afterprop);
	    } else if (type == "spread") {
	      return cont(expression);
	    }
	  }
	  function getterSetter(type) {
	    if (type != "variable") return pass(afterprop);
	    cx.marked = "property";
	    return cont(functiondef);
	  }
	  function afterprop(type) {
	    if (type == ":") return cont(expressionNoComma);
	    if (type == "(") return pass(functiondef);
	  }
	  function commasep(what, end) {
	    function proceed(type) {
	      if (type == ",") {
	        var lex = cx.state.lexical;
	        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
	        return cont(what, proceed);
	      }
	      if (type == end) return cont();
	      return cont(expect(end));
	    }
	    return function(type) {
	      if (type == end) return cont();
	      return pass(what, proceed);
	    };
	  }
	  function contCommasep(what, end, info) {
	    for (var i = 3; i < arguments.length; i++)
	      cx.cc.push(arguments[i]);
	    return cont(pushlex(end, info), commasep(what, end), poplex);
	  }
	  function block(type) {
	    if (type == "}") return cont();
	    return pass(statement, block);
	  }
	  function maybetype(type) {
	    if (isTS && type == ":") return cont(typedef);
	  }
	  function maybedefault(_, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function typedef(type) {
	    if (type == "variable") {cx.marked = "variable-3"; return cont();}
	  }
	  function vardef() {
	    return pass(pattern, maybetype, maybeAssign, vardefCont);
	  }
	  function pattern(type, value) {
	    if (type == "modifier") return cont(pattern)
	    if (type == "variable") { register(value); return cont(); }
	    if (type == "spread") return cont(pattern);
	    if (type == "[") return contCommasep(pattern, "]");
	    if (type == "{") return contCommasep(proppattern, "}");
	  }
	  function proppattern(type, value) {
	    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
	      register(value);
	      return cont(maybeAssign);
	    }
	    if (type == "variable") cx.marked = "property";
	    if (type == "spread") return cont(pattern);
	    return cont(expect(":"), pattern, maybeAssign);
	  }
	  function maybeAssign(_type, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function vardefCont(type) {
	    if (type == ",") return cont(vardef);
	  }
	  function maybeelse(type, value) {
	    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
	  }
	  function forspec(type) {
	    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
	  }
	  function forspec1(type) {
	    if (type == "var") return cont(vardef, expect(";"), forspec2);
	    if (type == ";") return cont(forspec2);
	    if (type == "variable") return cont(formaybeinof);
	    return pass(expression, expect(";"), forspec2);
	  }
	  function formaybeinof(_type, value) {
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return cont(maybeoperatorComma, forspec2);
	  }
	  function forspec2(type, value) {
	    if (type == ";") return cont(forspec3);
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return pass(expression, expect(";"), forspec3);
	  }
	  function forspec3(type) {
	    if (type != ")") cont(expression);
	  }
	  function functiondef(type, value) {
	    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
	    if (type == "variable") {register(value); return cont(functiondef);}
	    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, statement, popcontext);
	  }
	  function funarg(type) {
	    if (type == "spread") return cont(funarg);
	    return pass(pattern, maybetype, maybedefault);
	  }
	  function className(type, value) {
	    if (type == "variable") {register(value); return cont(classNameAfter);}
	  }
	  function classNameAfter(type, value) {
	    if (value == "extends") return cont(expression, classNameAfter);
	    if (type == "{") return cont(pushlex("}"), classBody, poplex);
	  }
	  function classBody(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      if (value == "static") {
	        cx.marked = "keyword";
	        return cont(classBody);
	      }
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(classGetterSetter, functiondef, classBody);
	      return cont(functiondef, classBody);
	    }
	    if (value == "*") {
	      cx.marked = "keyword";
	      return cont(classBody);
	    }
	    if (type == ";") return cont(classBody);
	    if (type == "}") return cont();
	  }
	  function classGetterSetter(type) {
	    if (type != "variable") return pass();
	    cx.marked = "property";
	    return cont();
	  }
	  function afterExport(_type, value) {
	    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
	    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
	    return pass(statement);
	  }
	  function afterImport(type) {
	    if (type == "string") return cont();
	    return pass(importSpec, maybeFrom);
	  }
	  function importSpec(type, value) {
	    if (type == "{") return contCommasep(importSpec, "}");
	    if (type == "variable") register(value);
	    if (value == "*") cx.marked = "keyword";
	    return cont(maybeAs);
	  }
	  function maybeAs(_type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
	  }
	  function maybeFrom(_type, value) {
	    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
	  }
	  function arrayLiteral(type) {
	    if (type == "]") return cont();
	    return pass(expressionNoComma, maybeArrayComprehension);
	  }
	  function maybeArrayComprehension(type) {
	    if (type == "for") return pass(comprehension, expect("]"));
	    if (type == ",") return cont(commasep(maybeexpressionNoComma, "]"));
	    return pass(commasep(expressionNoComma, "]"));
	  }
	  function comprehension(type) {
	    if (type == "for") return cont(forspec, comprehension);
	    if (type == "if") return cont(expression, comprehension);
	  }

	  function isContinuedStatement(state, textAfter) {
	    return state.lastType == "operator" || state.lastType == "," ||
	      isOperatorChar.test(textAfter.charAt(0)) ||
	      /[,.]/.test(textAfter.charAt(0));
	  }

	  // Interface

	  return {
	    startState: function(basecolumn) {
	      var state = {
	        tokenize: tokenBase,
	        lastType: "sof",
	        cc: [],
	        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
	        localVars: parserConfig.localVars,
	        context: parserConfig.localVars && {vars: parserConfig.localVars},
	        indented: 0
	      };
	      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
	        state.globalVars = parserConfig.globalVars;
	      return state;
	    },

	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (!state.lexical.hasOwnProperty("align"))
	          state.lexical.align = false;
	        state.indented = stream.indentation();
	        findFatArrow(stream, state);
	      }
	      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (type == "comment") return style;
	      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
	      return parseJS(state, style, type, content, stream);
	    },

	    indent: function(state, textAfter) {
	      if (state.tokenize == tokenComment) return CodeMirror.Pass;
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
	      // Kludge to prevent 'maybelse' from blocking lexical scope pops
	      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
	        var c = state.cc[i];
	        if (c == poplex) lexical = lexical.prev;
	        else if (c != maybeelse) break;
	      }
	      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
	      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
	        lexical = lexical.prev;
	      var type = lexical.type, closing = firstChar == type;

	      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
	      else if (type == "form" && firstChar == "{") return lexical.indented;
	      else if (type == "form") return lexical.indented + indentUnit;
	      else if (type == "stat")
	        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
	      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
	        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
	      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
	      else return lexical.indented + (closing ? 0 : indentUnit);
	    },

	    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
	    blockCommentStart: jsonMode ? null : "/*",
	    blockCommentEnd: jsonMode ? null : "*/",
	    lineComment: jsonMode ? null : "//",
	    fold: "brace",
	    closeBrackets: "()[]{}''\"\"``",

	    helperType: jsonMode ? "json" : "javascript",
	    jsonldMode: jsonldMode,
	    jsonMode: jsonMode
	  };
	});

	CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

	CodeMirror.defineMIME("text/javascript", "javascript");
	CodeMirror.defineMIME("text/ecmascript", "javascript");
	CodeMirror.defineMIME("application/javascript", "javascript");
	CodeMirror.defineMIME("application/x-javascript", "javascript");
	CodeMirror.defineMIME("application/ecmascript", "javascript");
	CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
	CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
	CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

	});


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("css", function(config, parserConfig) {
	  var inline = parserConfig.inline
	  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

	  var indentUnit = config.indentUnit,
	      tokenHooks = parserConfig.tokenHooks,
	      documentTypes = parserConfig.documentTypes || {},
	      mediaTypes = parserConfig.mediaTypes || {},
	      mediaFeatures = parserConfig.mediaFeatures || {},
	      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
	      propertyKeywords = parserConfig.propertyKeywords || {},
	      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
	      fontProperties = parserConfig.fontProperties || {},
	      counterDescriptors = parserConfig.counterDescriptors || {},
	      colorKeywords = parserConfig.colorKeywords || {},
	      valueKeywords = parserConfig.valueKeywords || {},
	      allowNested = parserConfig.allowNested,
	      supportsAtComponent = parserConfig.supportsAtComponent === true;

	  var type, override;
	  function ret(style, tp) { type = tp; return style; }

	  // Tokenizers

	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (tokenHooks[ch]) {
	      var result = tokenHooks[ch](stream, state);
	      if (result !== false) return result;
	    }
	    if (ch == "@") {
	      stream.eatWhile(/[\w\\\-]/);
	      return ret("def", stream.current());
	    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
	      return ret(null, "compare");
	    } else if (ch == "\"" || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "#") {
	      stream.eatWhile(/[\w\\\-]/);
	      return ret("atom", "hash");
	    } else if (ch == "!") {
	      stream.match(/^\s*\w*/);
	      return ret("keyword", "important");
	    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
	      stream.eatWhile(/[\w.%]/);
	      return ret("number", "unit");
	    } else if (ch === "-") {
	      if (/[\d.]/.test(stream.peek())) {
	        stream.eatWhile(/[\w.%]/);
	        return ret("number", "unit");
	      } else if (stream.match(/^-[\w\\\-]+/)) {
	        stream.eatWhile(/[\w\\\-]/);
	        if (stream.match(/^\s*:/, false))
	          return ret("variable-2", "variable-definition");
	        return ret("variable-2", "variable");
	      } else if (stream.match(/^\w+-/)) {
	        return ret("meta", "meta");
	      }
	    } else if (/[,+>*\/]/.test(ch)) {
	      return ret(null, "select-op");
	    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
	      return ret("qualifier", "qualifier");
	    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
	      return ret(null, ch);
	    } else if ((ch == "u" && stream.match(/rl(-prefix)?\(/)) ||
	               (ch == "d" && stream.match("omain(")) ||
	               (ch == "r" && stream.match("egexp("))) {
	      stream.backUp(1);
	      state.tokenize = tokenParenthesized;
	      return ret("property", "word");
	    } else if (/[\w\\\-]/.test(ch)) {
	      stream.eatWhile(/[\w\\\-]/);
	      return ret("property", "word");
	    } else {
	      return ret(null, null);
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, ch;
	      while ((ch = stream.next()) != null) {
	        if (ch == quote && !escaped) {
	          if (quote == ")") stream.backUp(1);
	          break;
	        }
	        escaped = !escaped && ch == "\\";
	      }
	      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
	      return ret("string", "string");
	    };
	  }

	  function tokenParenthesized(stream, state) {
	    stream.next(); // Must be '('
	    if (!stream.match(/\s*[\"\')]/, false))
	      state.tokenize = tokenString(")");
	    else
	      state.tokenize = null;
	    return ret(null, "(");
	  }

	  // Context management

	  function Context(type, indent, prev) {
	    this.type = type;
	    this.indent = indent;
	    this.prev = prev;
	  }

	  function pushContext(state, stream, type, indent) {
	    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
	    return type;
	  }

	  function popContext(state) {
	    if (state.context.prev)
	      state.context = state.context.prev;
	    return state.context.type;
	  }

	  function pass(type, stream, state) {
	    return states[state.context.type](type, stream, state);
	  }
	  function popAndPass(type, stream, state, n) {
	    for (var i = n || 1; i > 0; i--)
	      state.context = state.context.prev;
	    return pass(type, stream, state);
	  }

	  // Parser

	  function wordAsValue(stream) {
	    var word = stream.current().toLowerCase();
	    if (valueKeywords.hasOwnProperty(word))
	      override = "atom";
	    else if (colorKeywords.hasOwnProperty(word))
	      override = "keyword";
	    else
	      override = "variable";
	  }

	  var states = {};

	  states.top = function(type, stream, state) {
	    if (type == "{") {
	      return pushContext(state, stream, "block");
	    } else if (type == "}" && state.context.prev) {
	      return popContext(state);
	    } else if (supportsAtComponent && /@component/.test(type)) {
	      return pushContext(state, stream, "atComponentBlock");
	    } else if (/^@(-moz-)?document$/.test(type)) {
	      return pushContext(state, stream, "documentTypes");
	    } else if (/^@(media|supports|(-moz-)?document|import)$/.test(type)) {
	      return pushContext(state, stream, "atBlock");
	    } else if (/^@(font-face|counter-style)/.test(type)) {
	      state.stateArg = type;
	      return "restricted_atBlock_before";
	    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) {
	      return "keyframes";
	    } else if (type && type.charAt(0) == "@") {
	      return pushContext(state, stream, "at");
	    } else if (type == "hash") {
	      override = "builtin";
	    } else if (type == "word") {
	      override = "tag";
	    } else if (type == "variable-definition") {
	      return "maybeprop";
	    } else if (type == "interpolation") {
	      return pushContext(state, stream, "interpolation");
	    } else if (type == ":") {
	      return "pseudo";
	    } else if (allowNested && type == "(") {
	      return pushContext(state, stream, "parens");
	    }
	    return state.context.type;
	  };

	  states.block = function(type, stream, state) {
	    if (type == "word") {
	      var word = stream.current().toLowerCase();
	      if (propertyKeywords.hasOwnProperty(word)) {
	        override = "property";
	        return "maybeprop";
	      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
	        override = "string-2";
	        return "maybeprop";
	      } else if (allowNested) {
	        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
	        return "block";
	      } else {
	        override += " error";
	        return "maybeprop";
	      }
	    } else if (type == "meta") {
	      return "block";
	    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
	      override = "error";
	      return "block";
	    } else {
	      return states.top(type, stream, state);
	    }
	  };

	  states.maybeprop = function(type, stream, state) {
	    if (type == ":") return pushContext(state, stream, "prop");
	    return pass(type, stream, state);
	  };

	  states.prop = function(type, stream, state) {
	    if (type == ";") return popContext(state);
	    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
	    if (type == "}" || type == "{") return popAndPass(type, stream, state);
	    if (type == "(") return pushContext(state, stream, "parens");

	    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
	      override += " error";
	    } else if (type == "word") {
	      wordAsValue(stream);
	    } else if (type == "interpolation") {
	      return pushContext(state, stream, "interpolation");
	    }
	    return "prop";
	  };

	  states.propBlock = function(type, _stream, state) {
	    if (type == "}") return popContext(state);
	    if (type == "word") { override = "property"; return "maybeprop"; }
	    return state.context.type;
	  };

	  states.parens = function(type, stream, state) {
	    if (type == "{" || type == "}") return popAndPass(type, stream, state);
	    if (type == ")") return popContext(state);
	    if (type == "(") return pushContext(state, stream, "parens");
	    if (type == "interpolation") return pushContext(state, stream, "interpolation");
	    if (type == "word") wordAsValue(stream);
	    return "parens";
	  };

	  states.pseudo = function(type, stream, state) {
	    if (type == "word") {
	      override = "variable-3";
	      return state.context.type;
	    }
	    return pass(type, stream, state);
	  };

	  states.documentTypes = function(type, stream, state) {
	    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
	      override = "tag";
	      return state.context.type;
	    } else {
	      return states.atBlock(type, stream, state);
	    }
	  };

	  states.atBlock = function(type, stream, state) {
	    if (type == "(") return pushContext(state, stream, "atBlock_parens");
	    if (type == "}" || type == ";") return popAndPass(type, stream, state);
	    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

	    if (type == "interpolation") return pushContext(state, stream, "interpolation");

	    if (type == "word") {
	      var word = stream.current().toLowerCase();
	      if (word == "only" || word == "not" || word == "and" || word == "or")
	        override = "keyword";
	      else if (mediaTypes.hasOwnProperty(word))
	        override = "attribute";
	      else if (mediaFeatures.hasOwnProperty(word))
	        override = "property";
	      else if (mediaValueKeywords.hasOwnProperty(word))
	        override = "keyword";
	      else if (propertyKeywords.hasOwnProperty(word))
	        override = "property";
	      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
	        override = "string-2";
	      else if (valueKeywords.hasOwnProperty(word))
	        override = "atom";
	      else if (colorKeywords.hasOwnProperty(word))
	        override = "keyword";
	      else
	        override = "error";
	    }
	    return state.context.type;
	  };

	  states.atComponentBlock = function(type, stream, state) {
	    if (type == "}")
	      return popAndPass(type, stream, state);
	    if (type == "{")
	      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
	    if (type == "word")
	      override = "error";
	    return state.context.type;
	  };

	  states.atBlock_parens = function(type, stream, state) {
	    if (type == ")") return popContext(state);
	    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
	    return states.atBlock(type, stream, state);
	  };

	  states.restricted_atBlock_before = function(type, stream, state) {
	    if (type == "{")
	      return pushContext(state, stream, "restricted_atBlock");
	    if (type == "word" && state.stateArg == "@counter-style") {
	      override = "variable";
	      return "restricted_atBlock_before";
	    }
	    return pass(type, stream, state);
	  };

	  states.restricted_atBlock = function(type, stream, state) {
	    if (type == "}") {
	      state.stateArg = null;
	      return popContext(state);
	    }
	    if (type == "word") {
	      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
	          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
	        override = "error";
	      else
	        override = "property";
	      return "maybeprop";
	    }
	    return "restricted_atBlock";
	  };

	  states.keyframes = function(type, stream, state) {
	    if (type == "word") { override = "variable"; return "keyframes"; }
	    if (type == "{") return pushContext(state, stream, "top");
	    return pass(type, stream, state);
	  };

	  states.at = function(type, stream, state) {
	    if (type == ";") return popContext(state);
	    if (type == "{" || type == "}") return popAndPass(type, stream, state);
	    if (type == "word") override = "tag";
	    else if (type == "hash") override = "builtin";
	    return "at";
	  };

	  states.interpolation = function(type, stream, state) {
	    if (type == "}") return popContext(state);
	    if (type == "{" || type == ";") return popAndPass(type, stream, state);
	    if (type == "word") override = "variable";
	    else if (type != "variable" && type != "(" && type != ")") override = "error";
	    return "interpolation";
	  };

	  return {
	    startState: function(base) {
	      return {tokenize: null,
	              state: inline ? "block" : "top",
	              stateArg: null,
	              context: new Context(inline ? "block" : "top", base || 0, null)};
	    },

	    token: function(stream, state) {
	      if (!state.tokenize && stream.eatSpace()) return null;
	      var style = (state.tokenize || tokenBase)(stream, state);
	      if (style && typeof style == "object") {
	        type = style[1];
	        style = style[0];
	      }
	      override = style;
	      state.state = states[state.state](type, stream, state);
	      return override;
	    },

	    indent: function(state, textAfter) {
	      var cx = state.context, ch = textAfter && textAfter.charAt(0);
	      var indent = cx.indent;
	      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
	      if (cx.prev) {
	        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
	                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
	          // Resume indentation from parent context.
	          cx = cx.prev;
	          indent = cx.indent;
	        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
	            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
	          // Dedent relative to current context.
	          indent = Math.max(0, cx.indent - indentUnit);
	          cx = cx.prev;
	        }
	      }
	      return indent;
	    },

	    electricChars: "}",
	    blockCommentStart: "/*",
	    blockCommentEnd: "*/",
	    fold: "brace"
	  };
	});

	  function keySet(array) {
	    var keys = {};
	    for (var i = 0; i < array.length; ++i) {
	      keys[array[i]] = true;
	    }
	    return keys;
	  }

	  var documentTypes_ = [
	    "domain", "regexp", "url", "url-prefix"
	  ], documentTypes = keySet(documentTypes_);

	  var mediaTypes_ = [
	    "all", "aural", "braille", "handheld", "print", "projection", "screen",
	    "tty", "tv", "embossed"
	  ], mediaTypes = keySet(mediaTypes_);

	  var mediaFeatures_ = [
	    "width", "min-width", "max-width", "height", "min-height", "max-height",
	    "device-width", "min-device-width", "max-device-width", "device-height",
	    "min-device-height", "max-device-height", "aspect-ratio",
	    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
	    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
	    "max-color", "color-index", "min-color-index", "max-color-index",
	    "monochrome", "min-monochrome", "max-monochrome", "resolution",
	    "min-resolution", "max-resolution", "scan", "grid", "orientation",
	    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
	    "pointer", "any-pointer", "hover", "any-hover"
	  ], mediaFeatures = keySet(mediaFeatures_);

	  var mediaValueKeywords_ = [
	    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
	    "interlace", "progressive"
	  ], mediaValueKeywords = keySet(mediaValueKeywords_);

	  var propertyKeywords_ = [
	    "align-content", "align-items", "align-self", "alignment-adjust",
	    "alignment-baseline", "anchor-point", "animation", "animation-delay",
	    "animation-direction", "animation-duration", "animation-fill-mode",
	    "animation-iteration-count", "animation-name", "animation-play-state",
	    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
	    "background", "background-attachment", "background-clip", "background-color",
	    "background-image", "background-origin", "background-position",
	    "background-repeat", "background-size", "baseline-shift", "binding",
	    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
	    "bookmark-target", "border", "border-bottom", "border-bottom-color",
	    "border-bottom-left-radius", "border-bottom-right-radius",
	    "border-bottom-style", "border-bottom-width", "border-collapse",
	    "border-color", "border-image", "border-image-outset",
	    "border-image-repeat", "border-image-slice", "border-image-source",
	    "border-image-width", "border-left", "border-left-color",
	    "border-left-style", "border-left-width", "border-radius", "border-right",
	    "border-right-color", "border-right-style", "border-right-width",
	    "border-spacing", "border-style", "border-top", "border-top-color",
	    "border-top-left-radius", "border-top-right-radius", "border-top-style",
	    "border-top-width", "border-width", "bottom", "box-decoration-break",
	    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
	    "caption-side", "clear", "clip", "color", "color-profile", "column-count",
	    "column-fill", "column-gap", "column-rule", "column-rule-color",
	    "column-rule-style", "column-rule-width", "column-span", "column-width",
	    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
	    "cue-after", "cue-before", "cursor", "direction", "display",
	    "dominant-baseline", "drop-initial-after-adjust",
	    "drop-initial-after-align", "drop-initial-before-adjust",
	    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
	    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
	    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
	    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
	    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
	    "font-stretch", "font-style", "font-synthesis", "font-variant",
	    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
	    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
	    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
	    "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end",
	    "grid-column-start", "grid-row", "grid-row-end", "grid-row-start",
	    "grid-template", "grid-template-areas", "grid-template-columns",
	    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
	    "icon", "image-orientation", "image-rendering", "image-resolution",
	    "inline-box-align", "justify-content", "left", "letter-spacing",
	    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
	    "line-stacking-shift", "line-stacking-strategy", "list-style",
	    "list-style-image", "list-style-position", "list-style-type", "margin",
	    "margin-bottom", "margin-left", "margin-right", "margin-top",
	    "marker-offset", "marks", "marquee-direction", "marquee-loop",
	    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
	    "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index",
	    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
	    "opacity", "order", "orphans", "outline",
	    "outline-color", "outline-offset", "outline-style", "outline-width",
	    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
	    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
	    "page", "page-break-after", "page-break-before", "page-break-inside",
	    "page-policy", "pause", "pause-after", "pause-before", "perspective",
	    "perspective-origin", "pitch", "pitch-range", "play-during", "position",
	    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
	    "region-break-before", "region-break-inside", "region-fragment",
	    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
	    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
	    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
	    "shape-outside", "size", "speak", "speak-as", "speak-header",
	    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
	    "tab-size", "table-layout", "target", "target-name", "target-new",
	    "target-position", "text-align", "text-align-last", "text-decoration",
	    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
	    "text-decoration-style", "text-emphasis", "text-emphasis-color",
	    "text-emphasis-position", "text-emphasis-style", "text-height",
	    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
	    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
	    "text-wrap", "top", "transform", "transform-origin", "transform-style",
	    "transition", "transition-delay", "transition-duration",
	    "transition-property", "transition-timing-function", "unicode-bidi",
	    "vertical-align", "visibility", "voice-balance", "voice-duration",
	    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
	    "voice-volume", "volume", "white-space", "widows", "width", "word-break",
	    "word-spacing", "word-wrap", "z-index",
	    // SVG-specific
	    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
	    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
	    "color-interpolation", "color-interpolation-filters",
	    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
	    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
	    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
	    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
	    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
	    "glyph-orientation-vertical", "text-anchor", "writing-mode"
	  ], propertyKeywords = keySet(propertyKeywords_);

	  var nonStandardPropertyKeywords_ = [
	    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
	    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
	    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
	    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
	    "searchfield-results-decoration", "zoom"
	  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

	  var fontProperties_ = [
	    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
	    "font-stretch", "font-weight", "font-style"
	  ], fontProperties = keySet(fontProperties_);

	  var counterDescriptors_ = [
	    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
	    "speak-as", "suffix", "symbols", "system"
	  ], counterDescriptors = keySet(counterDescriptors_);

	  var colorKeywords_ = [
	    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
	    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
	    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
	    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
	    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
	    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
	    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
	    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
	    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
	    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
	    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
	    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
	    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
	    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
	    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
	    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
	    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
	    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
	    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
	    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
	    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
	    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
	    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
	    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
	    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
	    "whitesmoke", "yellow", "yellowgreen"
	  ], colorKeywords = keySet(colorKeywords_);

	  var valueKeywords_ = [
	    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
	    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
	    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
	    "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page",
	    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
	    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
	    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
	    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
	    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
	    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
	    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
	    "col-resize", "collapse", "column", "column-reverse", "compact", "condensed", "contain", "content",
	    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
	    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "dashed", "decimal",
	    "decimal-leading-zero", "default", "default-button", "destination-atop",
	    "destination-in", "destination-out", "destination-over", "devanagari",
	    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
	    "dot-dash", "dot-dot-dash",
	    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
	    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
	    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
	    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
	    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
	    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
	    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
	    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
	    "ethiopic-numeric", "ew-resize", "expanded", "extends", "extra-condensed",
	    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
	    "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove",
	    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew",
	    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
	    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore",
	    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
	    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
	    "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert",
	    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
	    "katakana", "katakana-iroha", "keep-all", "khmer",
	    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
	    "landscape", "lao", "large", "larger", "left", "level", "lighter",
	    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
	    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
	    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
	    "lower-roman", "lowercase", "ltr", "malayalam", "match", "matrix", "matrix3d",
	    "media-controls-background", "media-current-time-display",
	    "media-fullscreen-button", "media-mute-button", "media-play-button",
	    "media-return-to-realtime-button", "media-rewind-button",
	    "media-seek-back-button", "media-seek-forward-button", "media-slider",
	    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
	    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
	    "menu", "menulist", "menulist-button", "menulist-text",
	    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
	    "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize",
	    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
	    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
	    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote",
	    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
	    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
	    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
	    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
	    "progress", "push-button", "radial-gradient", "radio", "read-only",
	    "read-write", "read-write-plaintext-only", "rectangle", "region",
	    "relative", "repeat", "repeating-linear-gradient",
	    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
	    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
	    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
	    "s-resize", "sans-serif", "scale", "scale3d", "scaleX", "scaleY", "scaleZ",
	    "scroll", "scrollbar", "se-resize", "searchfield",
	    "searchfield-cancel-button", "searchfield-decoration",
	    "searchfield-results-button", "searchfield-results-decoration",
	    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
	    "simp-chinese-formal", "simp-chinese-informal", "single",
	    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
	    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
	    "small", "small-caps", "small-caption", "smaller", "solid", "somali",
	    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square",
	    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
	    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table",
	    "table-caption", "table-cell", "table-column", "table-column-group",
	    "table-footer-group", "table-header-group", "table-row", "table-row-group",
	    "tamil",
	    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
	    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
	    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
	    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
	    "trad-chinese-formal", "trad-chinese-informal",
	    "translate", "translate3d", "translateX", "translateY", "translateZ",
	    "transparent", "ultra-condensed", "ultra-expanded", "underline", "up",
	    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
	    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
	    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
	    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
	    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
	    "xx-large", "xx-small"
	  ], valueKeywords = keySet(valueKeywords_);

	  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
	    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
	    .concat(valueKeywords_);
	  CodeMirror.registerHelper("hintWords", "css", allWords);

	  function tokenCComment(stream, state) {
	    var maybeEnd = false, ch;
	    while ((ch = stream.next()) != null) {
	      if (maybeEnd && ch == "/") {
	        state.tokenize = null;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ["comment", "comment"];
	  }

	  CodeMirror.defineMIME("text/css", {
	    documentTypes: documentTypes,
	    mediaTypes: mediaTypes,
	    mediaFeatures: mediaFeatures,
	    mediaValueKeywords: mediaValueKeywords,
	    propertyKeywords: propertyKeywords,
	    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
	    fontProperties: fontProperties,
	    counterDescriptors: counterDescriptors,
	    colorKeywords: colorKeywords,
	    valueKeywords: valueKeywords,
	    tokenHooks: {
	      "/": function(stream, state) {
	        if (!stream.eat("*")) return false;
	        state.tokenize = tokenCComment;
	        return tokenCComment(stream, state);
	      }
	    },
	    name: "css"
	  });

	  CodeMirror.defineMIME("text/x-scss", {
	    mediaTypes: mediaTypes,
	    mediaFeatures: mediaFeatures,
	    mediaValueKeywords: mediaValueKeywords,
	    propertyKeywords: propertyKeywords,
	    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
	    colorKeywords: colorKeywords,
	    valueKeywords: valueKeywords,
	    fontProperties: fontProperties,
	    allowNested: true,
	    tokenHooks: {
	      "/": function(stream, state) {
	        if (stream.eat("/")) {
	          stream.skipToEnd();
	          return ["comment", "comment"];
	        } else if (stream.eat("*")) {
	          state.tokenize = tokenCComment;
	          return tokenCComment(stream, state);
	        } else {
	          return ["operator", "operator"];
	        }
	      },
	      ":": function(stream) {
	        if (stream.match(/\s*\{/))
	          return [null, "{"];
	        return false;
	      },
	      "$": function(stream) {
	        stream.match(/^[\w-]+/);
	        if (stream.match(/^\s*:/, false))
	          return ["variable-2", "variable-definition"];
	        return ["variable-2", "variable"];
	      },
	      "#": function(stream) {
	        if (!stream.eat("{")) return false;
	        return [null, "interpolation"];
	      }
	    },
	    name: "css",
	    helperType: "scss"
	  });

	  CodeMirror.defineMIME("text/x-less", {
	    mediaTypes: mediaTypes,
	    mediaFeatures: mediaFeatures,
	    mediaValueKeywords: mediaValueKeywords,
	    propertyKeywords: propertyKeywords,
	    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
	    colorKeywords: colorKeywords,
	    valueKeywords: valueKeywords,
	    fontProperties: fontProperties,
	    allowNested: true,
	    tokenHooks: {
	      "/": function(stream, state) {
	        if (stream.eat("/")) {
	          stream.skipToEnd();
	          return ["comment", "comment"];
	        } else if (stream.eat("*")) {
	          state.tokenize = tokenCComment;
	          return tokenCComment(stream, state);
	        } else {
	          return ["operator", "operator"];
	        }
	      },
	      "@": function(stream) {
	        if (stream.eat("{")) return [null, "interpolation"];
	        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
	        stream.eatWhile(/[\w\\\-]/);
	        if (stream.match(/^\s*:/, false))
	          return ["variable-2", "variable-definition"];
	        return ["variable-2", "variable"];
	      },
	      "&": function() {
	        return ["atom", "atom"];
	      }
	    },
	    name: "css",
	    helperType: "less"
	  });

	  CodeMirror.defineMIME("text/x-gss", {
	    documentTypes: documentTypes,
	    mediaTypes: mediaTypes,
	    mediaFeatures: mediaFeatures,
	    propertyKeywords: propertyKeywords,
	    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
	    fontProperties: fontProperties,
	    counterDescriptors: counterDescriptors,
	    colorKeywords: colorKeywords,
	    valueKeywords: valueKeywords,
	    supportsAtComponent: true,
	    tokenHooks: {
	      "/": function(stream, state) {
	        if (!stream.eat("*")) return false;
	        state.tokenize = tokenCComment;
	        return tokenCComment(stream, state);
	      }
	    },
	    name: "css",
	    helperType: "gss"
	  });

	});


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("julia", function(_conf, parserConf) {
	  var ERRORCLASS = 'error';

	  function wordRegexp(words) {
	    return new RegExp("^((" + words.join(")|(") + "))\\b");
	  }

	  var operators = parserConf.operators || /^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/;
	  var delimiters = parserConf.delimiters || /^[;,()[\]{}]/;
	  var identifiers = parserConf.identifiers|| /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*!*/;
	  var blockOpeners = ["begin", "function", "type", "immutable", "let", "macro", "for", "while", "quote", "if", "else", "elseif", "try", "finally", "catch", "do"];
	  var blockClosers = ["end", "else", "elseif", "catch", "finally"];
	  var keywordList = ['if', 'else', 'elseif', 'while', 'for', 'begin', 'let', 'end', 'do', 'try', 'catch', 'finally', 'return', 'break', 'continue', 'global', 'local', 'const', 'export', 'import', 'importall', 'using', 'function', 'macro', 'module', 'baremodule', 'type', 'immutable', 'quote', 'typealias', 'abstract', 'bitstype', 'ccall'];
	  var builtinList = ['true', 'false', 'enumerate', 'open', 'close', 'nothing', 'NaN', 'Inf', 'print', 'println', 'Int', 'Int8', 'Uint8', 'Int16', 'Uint16', 'Int32', 'Uint32', 'Int64', 'Uint64', 'Int128', 'Uint128', 'Bool', 'Char', 'Float16', 'Float32', 'Float64', 'Array', 'Vector', 'Matrix', 'String', 'UTF8String', 'ASCIIString', 'error', 'warn', 'info', '@printf'];

	  //var stringPrefixes = new RegExp("^[br]?('|\")")
	  var stringPrefixes = /^(`|'|"{3}|([br]?"))/;
	  var keywords = wordRegexp(keywordList);
	  var builtins = wordRegexp(builtinList);
	  var openers = wordRegexp(blockOpeners);
	  var closers = wordRegexp(blockClosers);
	  var macro = /^@[_A-Za-z][_A-Za-z0-9]*/;
	  var symbol = /^:[_A-Za-z][_A-Za-z0-9]*/;

	  function in_array(state) {
	    var ch = cur_scope(state);
	    if(ch=="[" || ch=="{") {
	      return true;
	    }
	    else {
	      return false;
	    }
	  }

	  function cur_scope(state) {
	    if(state.scopes.length==0) {
	      return null;
	    }
	    return state.scopes[state.scopes.length - 1];
	  }

	  // tokenizers
	  function tokenBase(stream, state) {
	    // Handle scope changes
	    var leaving_expr = state.leaving_expr;
	    if(stream.sol()) {
	      leaving_expr = false;
	    }
	    state.leaving_expr = false;
	    if(leaving_expr) {
	      if(stream.match(/^'+/)) {
	        return 'operator';
	      }

	    }

	    if(stream.match(/^\.{2,3}/)) {
	      return 'operator';
	    }

	    if (stream.eatSpace()) {
	      return null;
	    }

	    var ch = stream.peek();
	    // Handle Comments
	    if (ch === '#') {
	        stream.skipToEnd();
	        return 'comment';
	    }
	    if(ch==='[') {
	      state.scopes.push("[");
	    }

	    if(ch==='{') {
	      state.scopes.push("{");
	    }

	    var scope=cur_scope(state);

	    if(scope==='[' && ch===']') {
	      state.scopes.pop();
	      state.leaving_expr=true;
	    }

	    if(scope==='{' && ch==='}') {
	      state.scopes.pop();
	      state.leaving_expr=true;
	    }

	    if(ch===')') {
	      state.leaving_expr = true;
	    }

	    var match;
	    if(!in_array(state) && (match=stream.match(openers, false))) {
	      state.scopes.push(match);
	    }

	    if(!in_array(state) && stream.match(closers, false)) {
	      state.scopes.pop();
	    }

	    if(in_array(state)) {
	      if(stream.match(/^end/)) {
	        return 'number';
	      }

	    }

	    if(stream.match(/^=>/)) {
	      return 'operator';
	    }


	    // Handle Number Literals
	    if (stream.match(/^[0-9\.]/, false)) {
	      var imMatcher = RegExp(/^im\b/);
	      var floatLiteral = false;
	      // Floats
	      if (stream.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)) { floatLiteral = true; }
	      if (stream.match(/^\d+\.(?!\.)\d*/)) { floatLiteral = true; }
	      if (stream.match(/^\.\d+/)) { floatLiteral = true; }
	      if (floatLiteral) {
	          // Float literals may be "imaginary"
	          stream.match(imMatcher);
	          state.leaving_expr = true;
	          return 'number';
	      }
	      // Integers
	      var intLiteral = false;
	      // Hex
	      if (stream.match(/^0x[0-9a-f]+/i)) { intLiteral = true; }
	      // Binary
	      if (stream.match(/^0b[01]+/i)) { intLiteral = true; }
	      // Octal
	      if (stream.match(/^0o[0-7]+/i)) { intLiteral = true; }
	      // Decimal
	      if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) {
	          intLiteral = true;
	      }
	      // Zero by itself with no other piece of number.
	      if (stream.match(/^0(?![\dx])/i)) { intLiteral = true; }
	      if (intLiteral) {
	          // Integer literals may be "long"
	          stream.match(imMatcher);
	          state.leaving_expr = true;
	          return 'number';
	      }
	    }

	    if(stream.match(/^(::)|(<:)/)) {
	      return 'operator';
	    }

	    // Handle symbols
	    if(!leaving_expr && stream.match(symbol)) {
	      return 'string';
	    }

	    // Handle operators and Delimiters
	    if (stream.match(operators)) {
	      return 'operator';
	    }


	    // Handle Strings
	    if (stream.match(stringPrefixes)) {
	      state.tokenize = tokenStringFactory(stream.current());
	      return state.tokenize(stream, state);
	    }

	    if (stream.match(macro)) {
	      return 'meta';
	    }


	    if (stream.match(delimiters)) {
	      return null;
	    }

	    if (stream.match(keywords)) {
	      return 'keyword';
	    }

	    if (stream.match(builtins)) {
	      return 'builtin';
	    }


	    if (stream.match(identifiers)) {
	      state.leaving_expr=true;
	      return 'variable';
	    }
	    // Handle non-detected items
	    stream.next();
	    return ERRORCLASS;
	  }

	  function tokenStringFactory(delimiter) {
	    while ('rub'.indexOf(delimiter.charAt(0).toLowerCase()) >= 0) {
	      delimiter = delimiter.substr(1);
	    }
	    var singleline = delimiter.length == 1;
	    var OUTCLASS = 'string';

	    function tokenString(stream, state) {
	      while (!stream.eol()) {
	        stream.eatWhile(/[^'"\\]/);
	        if (stream.eat('\\')) {
	            stream.next();
	            if (singleline && stream.eol()) {
	              return OUTCLASS;
	            }
	        } else if (stream.match(delimiter)) {
	            state.tokenize = tokenBase;
	            return OUTCLASS;
	        } else {
	            stream.eat(/['"]/);
	        }
	      }
	      if (singleline) {
	        if (parserConf.singleLineStringErrors) {
	            return ERRORCLASS;
	        } else {
	            state.tokenize = tokenBase;
	        }
	      }
	      return OUTCLASS;
	    }
	    tokenString.isString = true;
	    return tokenString;
	  }

	  function tokenLexer(stream, state) {
	    var style = state.tokenize(stream, state);
	    var current = stream.current();

	    // Handle '.' connected identifiers
	    if (current === '.') {
	      style = stream.match(identifiers, false) ? null : ERRORCLASS;
	      if (style === null && state.lastStyle === 'meta') {
	          // Apply 'meta' style to '.' connected identifiers when
	          // appropriate.
	        style = 'meta';
	      }
	      return style;
	    }

	    return style;
	  }

	  var external = {
	    startState: function() {
	      return {
	        tokenize: tokenBase,
	        scopes: [],
	        leaving_expr: false
	      };
	    },

	    token: function(stream, state) {
	      var style = tokenLexer(stream, state);
	      state.lastStyle = style;
	      return style;
	    },

	    indent: function(state, textAfter) {
	      var delta = 0;
	      if(textAfter=="end" || textAfter=="]" || textAfter=="}" || textAfter=="else" || textAfter=="elseif" || textAfter=="catch" || textAfter=="finally") {
	        delta = -1;
	      }
	      return (state.scopes.length + delta) * _conf.indentUnit;
	    },

	    lineComment: "#",
	    fold: "indent",
	    electricChars: "edlsifyh]}"
	  };
	  return external;
	});


	CodeMirror.defineMIME("text/x-julia", "julia");

	});


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("r", function(config) {
	  function wordObj(str) {
	    var words = str.split(" "), res = {};
	    for (var i = 0; i < words.length; ++i) res[words[i]] = true;
	    return res;
	  }
	  var atoms = wordObj("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_");
	  var builtins = wordObj("list quote bquote eval return call parse deparse");
	  var keywords = wordObj("if else repeat while function for in next break");
	  var blockkeywords = wordObj("if else repeat while function for");
	  var opChars = /[+\-*\/^<>=!&|~$:]/;
	  var curPunc;

	  function tokenBase(stream, state) {
	    curPunc = null;
	    var ch = stream.next();
	    if (ch == "#") {
	      stream.skipToEnd();
	      return "comment";
	    } else if (ch == "0" && stream.eat("x")) {
	      stream.eatWhile(/[\da-f]/i);
	      return "number";
	    } else if (ch == "." && stream.eat(/\d/)) {
	      stream.match(/\d*(?:e[+\-]?\d+)?/);
	      return "number";
	    } else if (/\d/.test(ch)) {
	      stream.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/);
	      return "number";
	    } else if (ch == "'" || ch == '"') {
	      state.tokenize = tokenString(ch);
	      return "string";
	    } else if (ch == "." && stream.match(/.[.\d]+/)) {
	      return "keyword";
	    } else if (/[\w\.]/.test(ch) && ch != "_") {
	      stream.eatWhile(/[\w\.]/);
	      var word = stream.current();
	      if (atoms.propertyIsEnumerable(word)) return "atom";
	      if (keywords.propertyIsEnumerable(word)) {
	        // Block keywords start new blocks, except 'else if', which only starts
	        // one new block for the 'if', no block for the 'else'.
	        if (blockkeywords.propertyIsEnumerable(word) &&
	            !stream.match(/\s*if(\s+|$)/, false))
	          curPunc = "block";
	        return "keyword";
	      }
	      if (builtins.propertyIsEnumerable(word)) return "builtin";
	      return "variable";
	    } else if (ch == "%") {
	      if (stream.skipTo("%")) stream.next();
	      return "variable-2";
	    } else if (ch == "<" && stream.eat("-")) {
	      return "arrow";
	    } else if (ch == "=" && state.ctx.argList) {
	      return "arg-is";
	    } else if (opChars.test(ch)) {
	      if (ch == "$") return "dollar";
	      stream.eatWhile(opChars);
	      return "operator";
	    } else if (/[\(\){}\[\];]/.test(ch)) {
	      curPunc = ch;
	      if (ch == ";") return "semi";
	      return null;
	    } else {
	      return null;
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      if (stream.eat("\\")) {
	        var ch = stream.next();
	        if (ch == "x") stream.match(/^[a-f0-9]{2}/i);
	        else if ((ch == "u" || ch == "U") && stream.eat("{") && stream.skipTo("}")) stream.next();
	        else if (ch == "u") stream.match(/^[a-f0-9]{4}/i);
	        else if (ch == "U") stream.match(/^[a-f0-9]{8}/i);
	        else if (/[0-7]/.test(ch)) stream.match(/^[0-7]{1,2}/);
	        return "string-2";
	      } else {
	        var next;
	        while ((next = stream.next()) != null) {
	          if (next == quote) { state.tokenize = tokenBase; break; }
	          if (next == "\\") { stream.backUp(1); break; }
	        }
	        return "string";
	      }
	    };
	  }

	  function push(state, type, stream) {
	    state.ctx = {type: type,
	                 indent: state.indent,
	                 align: null,
	                 column: stream.column(),
	                 prev: state.ctx};
	  }
	  function pop(state) {
	    state.indent = state.ctx.indent;
	    state.ctx = state.ctx.prev;
	  }

	  return {
	    startState: function() {
	      return {tokenize: tokenBase,
	              ctx: {type: "top",
	                    indent: -config.indentUnit,
	                    align: false},
	              indent: 0,
	              afterIdent: false};
	    },

	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (state.ctx.align == null) state.ctx.align = false;
	        state.indent = stream.indentation();
	      }
	      if (stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (style != "comment" && state.ctx.align == null) state.ctx.align = true;

	      var ctype = state.ctx.type;
	      if ((curPunc == ";" || curPunc == "{" || curPunc == "}") && ctype == "block") pop(state);
	      if (curPunc == "{") push(state, "}", stream);
	      else if (curPunc == "(") {
	        push(state, ")", stream);
	        if (state.afterIdent) state.ctx.argList = true;
	      }
	      else if (curPunc == "[") push(state, "]", stream);
	      else if (curPunc == "block") push(state, "block", stream);
	      else if (curPunc == ctype) pop(state);
	      state.afterIdent = style == "variable" || style == "keyword";
	      return style;
	    },

	    indent: function(state, textAfter) {
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), ctx = state.ctx,
	          closing = firstChar == ctx.type;
	      if (ctx.type == "block") return ctx.indent + (firstChar == "{" ? 0 : config.indentUnit);
	      else if (ctx.align) return ctx.column + (closing ? 0 : 1);
	      else return ctx.indent + (closing ? 0 : config.indentUnit);
	    },

	    lineComment: "#"
	  };
	});

	CodeMirror.defineMIME("text/x-rsrc", "r");

	});


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26), __webpack_require__(37), __webpack_require__(27));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

	  var htmlFound = CodeMirror.modes.hasOwnProperty("xml");
	  var htmlMode = CodeMirror.getMode(cmCfg, htmlFound ? {name: "xml", htmlMode: true} : "text/plain");

	  function getMode(name) {
	    if (CodeMirror.findModeByName) {
	      var found = CodeMirror.findModeByName(name);
	      if (found) name = found.mime || found.mimes[0];
	    }
	    var mode = CodeMirror.getMode(cmCfg, name);
	    return mode.name == "null" ? null : mode;
	  }

	  // Should characters that affect highlighting be highlighted separate?
	  // Does not include characters that will be output (such as `1.` and `-` for lists)
	  if (modeCfg.highlightFormatting === undefined)
	    modeCfg.highlightFormatting = false;

	  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
	  // Excess `>` will emit `error` token.
	  if (modeCfg.maxBlockquoteDepth === undefined)
	    modeCfg.maxBlockquoteDepth = 0;

	  // Should underscores in words open/close em/strong?
	  if (modeCfg.underscoresBreakWords === undefined)
	    modeCfg.underscoresBreakWords = true;

	  // Use `fencedCodeBlocks` to configure fenced code blocks. false to
	  // disable, string to specify a precise regexp that the fence should
	  // match, and true to allow three or more backticks or tildes (as
	  // per CommonMark).

	  // Turn on task lists? ("- [ ] " and "- [x] ")
	  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

	  // Turn on strikethrough syntax
	  if (modeCfg.strikethrough === undefined)
	    modeCfg.strikethrough = false;

	  // Allow token types to be overridden by user-provided token types.
	  if (modeCfg.tokenTypeOverrides === undefined)
	    modeCfg.tokenTypeOverrides = {};

	  var codeDepth = 0;

	  var tokenTypes = {
	    header: "header",
	    code: "comment",
	    quote: "quote",
	    list1: "variable-2",
	    list2: "variable-3",
	    list3: "keyword",
	    hr: "hr",
	    image: "tag",
	    formatting: "formatting",
	    linkInline: "link",
	    linkEmail: "link",
	    linkText: "link",
	    linkHref: "string",
	    em: "em",
	    strong: "strong",
	    strikethrough: "strikethrough"
	  };

	  for (var tokenType in tokenTypes) {
	    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
	      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
	    }
	  }

	  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
	  ,   ulRE = /^[*\-+]\s+/
	  ,   olRE = /^[0-9]+([.)])\s+/
	  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow ulRE or olRE
	  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
	  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
	  ,   textRE = /^[^#!\[\]*_\\<>` "'(~]+/
	  ,   fencedCodeRE = new RegExp("^(" + (modeCfg.fencedCodeBlocks === true ? "~~~+|```+" : modeCfg.fencedCodeBlocks) +
	                                ")[ \\t]*([\\w+#]*)");

	  function switchInline(stream, state, f) {
	    state.f = state.inline = f;
	    return f(stream, state);
	  }

	  function switchBlock(stream, state, f) {
	    state.f = state.block = f;
	    return f(stream, state);
	  }

	  function lineIsEmpty(line) {
	    return !line || !/\S/.test(line.string)
	  }

	  // Blocks

	  function blankLine(state) {
	    // Reset linkTitle state
	    state.linkTitle = false;
	    // Reset EM state
	    state.em = false;
	    // Reset STRONG state
	    state.strong = false;
	    // Reset strikethrough state
	    state.strikethrough = false;
	    // Reset state.quote
	    state.quote = 0;
	    // Reset state.indentedCode
	    state.indentedCode = false;
	    if (!htmlFound && state.f == htmlBlock) {
	      state.f = inlineNormal;
	      state.block = blockNormal;
	    }
	    // Reset state.trailingSpace
	    state.trailingSpace = 0;
	    state.trailingSpaceNewLine = false;
	    // Mark this line as blank
	    state.prevLine = state.thisLine
	    state.thisLine = null
	    return null;
	  }

	  function blockNormal(stream, state) {

	    var sol = stream.sol();

	    var prevLineIsList = state.list !== false,
	        prevLineIsIndentedCode = state.indentedCode;

	    state.indentedCode = false;

	    if (prevLineIsList) {
	      if (state.indentationDiff >= 0) { // Continued list
	        if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
	          state.indentation -= state.indentationDiff;
	        }
	        state.list = null;
	      } else if (state.indentation > 0) {
	        state.list = null;
	        state.listDepth = Math.floor(state.indentation / 4);
	      } else { // No longer a list
	        state.list = false;
	        state.listDepth = 0;
	      }
	    }

	    var match = null;
	    if (state.indentationDiff >= 4) {
	      stream.skipToEnd();
	      if (prevLineIsIndentedCode || lineIsEmpty(state.prevLine)) {
	        state.indentation -= 4;
	        state.indentedCode = true;
	        return tokenTypes.code;
	      } else {
	        return null;
	      }
	    } else if (stream.eatSpace()) {
	      return null;
	    } else if ((match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
	      state.header = match[1].length;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (!lineIsEmpty(state.prevLine) && !state.quote && !prevLineIsList &&
	               !prevLineIsIndentedCode && (match = stream.match(setextHeaderRE))) {
	      state.header = match[0].charAt(0) == '=' ? 1 : 2;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (stream.eat('>')) {
	      state.quote = sol ? 1 : state.quote + 1;
	      if (modeCfg.highlightFormatting) state.formatting = "quote";
	      stream.eatSpace();
	      return getType(state);
	    } else if (stream.peek() === '[') {
	      return switchInline(stream, state, footnoteLink);
	    } else if (stream.match(hrRE, true)) {
	      state.hr = true;
	      return tokenTypes.hr;
	    } else if ((lineIsEmpty(state.prevLine) || prevLineIsList) && (stream.match(ulRE, false) || stream.match(olRE, false))) {
	      var listType = null;
	      if (stream.match(ulRE, true)) {
	        listType = 'ul';
	      } else {
	        stream.match(olRE, true);
	        listType = 'ol';
	      }
	      state.indentation = stream.column() + stream.current().length;
	      state.list = true;
	      state.listDepth++;
	      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
	        state.taskList = true;
	      }
	      state.f = state.inline;
	      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
	      return getType(state);
	    } else if (modeCfg.fencedCodeBlocks && (match = stream.match(fencedCodeRE, true))) {
	      state.fencedChars = match[1]
	      // try switching mode
	      state.localMode = getMode(match[2]);
	      if (state.localMode) state.localState = state.localMode.startState();
	      state.f = state.block = local;
	      if (modeCfg.highlightFormatting) state.formatting = "code-block";
	      state.code = true;
	      return getType(state);
	    }

	    return switchInline(stream, state, state.inline);
	  }

	  function htmlBlock(stream, state) {
	    var style = htmlMode.token(stream, state.htmlState);
	    if ((htmlFound && state.htmlState.tagStart === null &&
	         (!state.htmlState.context && state.htmlState.tokenize.isInText)) ||
	        (state.md_inside && stream.current().indexOf(">") > -1)) {
	      state.f = inlineNormal;
	      state.block = blockNormal;
	      state.htmlState = null;
	    }
	    return style;
	  }

	  function local(stream, state) {
	    if (stream.sol() && state.fencedChars && stream.match(state.fencedChars, false)) {
	      state.localMode = state.localState = null;
	      state.f = state.block = leavingLocal;
	      return null;
	    } else if (state.localMode) {
	      return state.localMode.token(stream, state.localState);
	    } else {
	      stream.skipToEnd();
	      return tokenTypes.code;
	    }
	  }

	  function leavingLocal(stream, state) {
	    stream.match(state.fencedChars);
	    state.block = blockNormal;
	    state.f = inlineNormal;
	    state.fencedChars = null;
	    if (modeCfg.highlightFormatting) state.formatting = "code-block";
	    state.code = true;
	    var returnType = getType(state);
	    state.code = false;
	    return returnType;
	  }

	  // Inline
	  function getType(state) {
	    var styles = [];

	    if (state.formatting) {
	      styles.push(tokenTypes.formatting);

	      if (typeof state.formatting === "string") state.formatting = [state.formatting];

	      for (var i = 0; i < state.formatting.length; i++) {
	        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

	        if (state.formatting[i] === "header") {
	          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
	        }

	        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
	        // Add `error` instead if the maximum blockquote nesting depth is passed
	        if (state.formatting[i] === "quote") {
	          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
	          } else {
	            styles.push("error");
	          }
	        }
	      }
	    }

	    if (state.taskOpen) {
	      styles.push("meta");
	      return styles.length ? styles.join(' ') : null;
	    }
	    if (state.taskClosed) {
	      styles.push("property");
	      return styles.length ? styles.join(' ') : null;
	    }

	    if (state.linkHref) {
	      styles.push(tokenTypes.linkHref, "url");
	    } else { // Only apply inline styles to non-url text
	      if (state.strong) { styles.push(tokenTypes.strong); }
	      if (state.em) { styles.push(tokenTypes.em); }
	      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
	      if (state.linkText) { styles.push(tokenTypes.linkText); }
	      if (state.code) { styles.push(tokenTypes.code); }
	    }

	    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

	    if (state.quote) {
	      styles.push(tokenTypes.quote);

	      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
	      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	        styles.push(tokenTypes.quote + "-" + state.quote);
	      } else {
	        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
	      }
	    }

	    if (state.list !== false) {
	      var listMod = (state.listDepth - 1) % 3;
	      if (!listMod) {
	        styles.push(tokenTypes.list1);
	      } else if (listMod === 1) {
	        styles.push(tokenTypes.list2);
	      } else {
	        styles.push(tokenTypes.list3);
	      }
	    }

	    if (state.trailingSpaceNewLine) {
	      styles.push("trailing-space-new-line");
	    } else if (state.trailingSpace) {
	      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
	    }

	    return styles.length ? styles.join(' ') : null;
	  }

	  function handleText(stream, state) {
	    if (stream.match(textRE, true)) {
	      return getType(state);
	    }
	    return undefined;
	  }

	  function inlineNormal(stream, state) {
	    var style = state.text(stream, state);
	    if (typeof style !== 'undefined')
	      return style;

	    if (state.list) { // List marker (*, +, -, 1., etc)
	      state.list = null;
	      return getType(state);
	    }

	    if (state.taskList) {
	      var taskOpen = stream.match(taskListRE, true)[1] !== "x";
	      if (taskOpen) state.taskOpen = true;
	      else state.taskClosed = true;
	      if (modeCfg.highlightFormatting) state.formatting = "task";
	      state.taskList = false;
	      return getType(state);
	    }

	    state.taskOpen = false;
	    state.taskClosed = false;

	    if (state.header && stream.match(/^#+$/, true)) {
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      return getType(state);
	    }

	    // Get sol() value now, before character is consumed
	    var sol = stream.sol();

	    var ch = stream.next();

	    if (ch === '\\') {
	      stream.next();
	      if (modeCfg.highlightFormatting) {
	        var type = getType(state);
	        var formattingEscape = tokenTypes.formatting + "-escape";
	        return type ? type + " " + formattingEscape : formattingEscape;
	      }
	    }

	    // Matches link titles present on next line
	    if (state.linkTitle) {
	      state.linkTitle = false;
	      var matchCh = ch;
	      if (ch === '(') {
	        matchCh = ')';
	      }
	      matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
	      if (stream.match(new RegExp(regex), true)) {
	        return tokenTypes.linkHref;
	      }
	    }

	    // If this block is changed, it may need to be updated in GFM mode
	    if (ch === '`') {
	      var previousFormatting = state.formatting;
	      if (modeCfg.highlightFormatting) state.formatting = "code";
	      var t = getType(state);
	      var before = stream.pos;
	      stream.eatWhile('`');
	      var difference = 1 + stream.pos - before;
	      if (!state.code) {
	        codeDepth = difference;
	        state.code = true;
	        return getType(state);
	      } else {
	        if (difference === codeDepth) { // Must be exact
	          state.code = false;
	          return t;
	        }
	        state.formatting = previousFormatting;
	        return getType(state);
	      }
	    } else if (state.code) {
	      return getType(state);
	    }

	    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
	      stream.match(/\[[^\]]*\]/);
	      state.inline = state.f = linkHref;
	      return tokenTypes.image;
	    }

	    if (ch === '[' && stream.match(/.*\](\(.*\)| ?\[.*\])/, false)) {
	      state.linkText = true;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      return getType(state);
	    }

	    if (ch === ']' && state.linkText && stream.match(/\(.*\)| ?\[.*\]/, false)) {
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      state.linkText = false;
	      state.inline = state.f = linkHref;
	      return type;
	    }

	    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkEmail;
	    }

	    if (ch === '<' && stream.match(/^(!--|\w)/, false)) {
	      var end = stream.string.indexOf(">", stream.pos);
	      if (end != -1) {
	        var atts = stream.string.substring(stream.start, end);
	        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
	      }
	      stream.backUp(1);
	      state.htmlState = CodeMirror.startState(htmlMode);
	      return switchBlock(stream, state, htmlBlock);
	    }

	    if (ch === '<' && stream.match(/^\/\w*?>/)) {
	      state.md_inside = false;
	      return "tag";
	    }

	    var ignoreUnderscore = false;
	    if (!modeCfg.underscoresBreakWords) {
	      if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
	        var prevPos = stream.pos - 2;
	        if (prevPos >= 0) {
	          var prevCh = stream.string.charAt(prevPos);
	          if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
	            ignoreUnderscore = true;
	          }
	        }
	      }
	    }
	    if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
	      if (sol && stream.peek() === ' ') {
	        // Do nothing, surrounded by newline and space
	      } else if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        var t = getType(state);
	        state.strong = false;
	        return t;
	      } else if (!state.strong && stream.eat(ch)) { // Add STRONG
	        state.strong = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        return getType(state);
	      } else if (state.em === ch) { // Remove EM
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        var t = getType(state);
	        state.em = false;
	        return t;
	      } else if (!state.em) { // Add EM
	        state.em = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        return getType(state);
	      }
	    } else if (ch === ' ') {
	      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
	        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	          return getType(state);
	        } else { // Not surrounded by spaces, back up pointer
	          stream.backUp(1);
	        }
	      }
	    }

	    if (modeCfg.strikethrough) {
	      if (ch === '~' && stream.eatWhile(ch)) {
	        if (state.strikethrough) {// Remove strikethrough
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          var t = getType(state);
	          state.strikethrough = false;
	          return t;
	        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
	          state.strikethrough = true;
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          return getType(state);
	        }
	      } else if (ch === ' ') {
	        if (stream.match(/^~~/, true)) { // Probably surrounded by space
	          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	            return getType(state);
	          } else { // Not surrounded by spaces, back up pointer
	            stream.backUp(2);
	          }
	        }
	      }
	    }

	    if (ch === ' ') {
	      if (stream.match(/ +$/, false)) {
	        state.trailingSpace++;
	      } else if (state.trailingSpace) {
	        state.trailingSpaceNewLine = true;
	      }
	    }

	    return getType(state);
	  }

	  function linkInline(stream, state) {
	    var ch = stream.next();

	    if (ch === ">") {
	      state.f = state.inline = inlineNormal;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    stream.match(/^[^>]+/, true);

	    return tokenTypes.linkInline;
	  }

	  function linkHref(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    var ch = stream.next();
	    if (ch === '(' || ch === '[') {
	      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
	      if (modeCfg.highlightFormatting) state.formatting = "link-string";
	      state.linkHref = true;
	      return getType(state);
	    }
	    return 'error';
	  }

	  function getLinkHrefInside(endChar) {
	    return function(stream, state) {
	      var ch = stream.next();

	      if (ch === endChar) {
	        state.f = state.inline = inlineNormal;
	        if (modeCfg.highlightFormatting) state.formatting = "link-string";
	        var returnState = getType(state);
	        state.linkHref = false;
	        return returnState;
	      }

	      if (stream.match(inlineRE(endChar), true)) {
	        stream.backUp(1);
	      }

	      state.linkHref = true;
	      return getType(state);
	    };
	  }

	  function footnoteLink(stream, state) {
	    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
	      state.f = footnoteLinkInside;
	      stream.next(); // Consume [
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      state.linkText = true;
	      return getType(state);
	    }
	    return switchInline(stream, state, inlineNormal);
	  }

	  function footnoteLinkInside(stream, state) {
	    if (stream.match(/^\]:/, true)) {
	      state.f = state.inline = footnoteUrl;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var returnType = getType(state);
	      state.linkText = false;
	      return returnType;
	    }

	    stream.match(/^([^\]\\]|\\.)+/, true);

	    return tokenTypes.linkText;
	  }

	  function footnoteUrl(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    // Match URL
	    stream.match(/^[^\s]+/, true);
	    // Check for link title
	    if (stream.peek() === undefined) { // End of line, set flag to check next line
	      state.linkTitle = true;
	    } else { // More content on line, check if link title
	      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
	    }
	    state.f = state.inline = inlineNormal;
	    return tokenTypes.linkHref + " url";
	  }

	  var savedInlineRE = [];
	  function inlineRE(endChar) {
	    if (!savedInlineRE[endChar]) {
	      // Escape endChar for RegExp (taken from http://stackoverflow.com/a/494122/526741)
	      endChar = (endChar+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	      // Match any non-endChar, escaped character, as well as the closing
	      // endChar.
	      savedInlineRE[endChar] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + endChar + ')');
	    }
	    return savedInlineRE[endChar];
	  }

	  var mode = {
	    startState: function() {
	      return {
	        f: blockNormal,

	        prevLine: null,
	        thisLine: null,

	        block: blockNormal,
	        htmlState: null,
	        indentation: 0,

	        inline: inlineNormal,
	        text: handleText,

	        formatting: false,
	        linkText: false,
	        linkHref: false,
	        linkTitle: false,
	        em: false,
	        strong: false,
	        header: 0,
	        hr: false,
	        taskList: false,
	        list: false,
	        listDepth: 0,
	        quote: 0,
	        trailingSpace: 0,
	        trailingSpaceNewLine: false,
	        strikethrough: false,
	        fencedChars: null
	      };
	    },

	    copyState: function(s) {
	      return {
	        f: s.f,

	        prevLine: s.prevLine,
	        thisLine: s.thisLine,

	        block: s.block,
	        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
	        indentation: s.indentation,

	        localMode: s.localMode,
	        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

	        inline: s.inline,
	        text: s.text,
	        formatting: false,
	        linkTitle: s.linkTitle,
	        code: s.code,
	        em: s.em,
	        strong: s.strong,
	        strikethrough: s.strikethrough,
	        header: s.header,
	        hr: s.hr,
	        taskList: s.taskList,
	        list: s.list,
	        listDepth: s.listDepth,
	        quote: s.quote,
	        indentedCode: s.indentedCode,
	        trailingSpace: s.trailingSpace,
	        trailingSpaceNewLine: s.trailingSpaceNewLine,
	        md_inside: s.md_inside,
	        fencedChars: s.fencedChars
	      };
	    },

	    token: function(stream, state) {

	      // Reset state.formatting
	      state.formatting = false;

	      if (stream != state.thisLine) {
	        var forceBlankLine = state.header || state.hr;

	        // Reset state.header and state.hr
	        state.header = 0;
	        state.hr = false;

	        if (stream.match(/^\s*$/, true) || forceBlankLine) {
	          blankLine(state);
	          if (!forceBlankLine) return null
	          state.prevLine = null
	        }

	        state.prevLine = state.thisLine
	        state.thisLine = stream

	        // Reset state.taskList
	        state.taskList = false;

	        // Reset state.trailingSpace
	        state.trailingSpace = 0;
	        state.trailingSpaceNewLine = false;

	        state.f = state.block;
	        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
	        var difference = Math.floor((indentation - state.indentation) / 4) * 4;
	        if (difference > 4) difference = 4;
	        var adjustedIndentation = state.indentation + difference;
	        state.indentationDiff = adjustedIndentation - state.indentation;
	        state.indentation = adjustedIndentation;
	        if (indentation > 0) return null;
	      }
	      return state.f(stream, state);
	    },

	    innerMode: function(state) {
	      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
	      if (state.localState) return {state: state.localState, mode: state.localMode};
	      return {state: state, mode: mode};
	    },

	    blankLine: blankLine,

	    getType: getType,

	    fold: "markdown"
	  };
	  return mode;
	}, "xml");

	CodeMirror.defineMIME("text/x-markdown", "markdown");

	});


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("xml", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var multilineTagIndentFactor = parserConfig.multilineTagIndentFactor || 1;
	  var multilineTagIndentPastTag = parserConfig.multilineTagIndentPastTag;
	  if (multilineTagIndentPastTag == null) multilineTagIndentPastTag = true;

	  var Kludges = parserConfig.htmlMode ? {
	    autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
	                      'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
	                      'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
	                      'track': true, 'wbr': true, 'menuitem': true},
	    implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
	                       'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
	                       'th': true, 'tr': true},
	    contextGrabbers: {
	      'dd': {'dd': true, 'dt': true},
	      'dt': {'dd': true, 'dt': true},
	      'li': {'li': true},
	      'option': {'option': true, 'optgroup': true},
	      'optgroup': {'optgroup': true},
	      'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
	            'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
	            'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
	            'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
	            'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
	      'rp': {'rp': true, 'rt': true},
	      'rt': {'rp': true, 'rt': true},
	      'tbody': {'tbody': true, 'tfoot': true},
	      'td': {'td': true, 'th': true},
	      'tfoot': {'tbody': true},
	      'th': {'td': true, 'th': true},
	      'thead': {'tbody': true, 'tfoot': true},
	      'tr': {'tr': true}
	    },
	    doNotIndent: {"pre": true},
	    allowUnquoted: true,
	    allowMissing: true,
	    caseFold: true
	  } : {
	    autoSelfClosers: {},
	    implicitlyClosed: {},
	    contextGrabbers: {},
	    doNotIndent: {},
	    allowUnquoted: false,
	    allowMissing: false,
	    caseFold: false
	  };
	  var alignCDATA = parserConfig.alignCDATA;

	  // Return variables for tokenizers
	  var type, setStyle;

	  function inText(stream, state) {
	    function chain(parser) {
	      state.tokenize = parser;
	      return parser(stream, state);
	    }

	    var ch = stream.next();
	    if (ch == "<") {
	      if (stream.eat("!")) {
	        if (stream.eat("[")) {
	          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
	          else return null;
	        } else if (stream.match("--")) {
	          return chain(inBlock("comment", "-->"));
	        } else if (stream.match("DOCTYPE", true, true)) {
	          stream.eatWhile(/[\w\._\-]/);
	          return chain(doctype(1));
	        } else {
	          return null;
	        }
	      } else if (stream.eat("?")) {
	        stream.eatWhile(/[\w\._\-]/);
	        state.tokenize = inBlock("meta", "?>");
	        return "meta";
	      } else {
	        type = stream.eat("/") ? "closeTag" : "openTag";
	        state.tokenize = inTag;
	        return "tag bracket";
	      }
	    } else if (ch == "&") {
	      var ok;
	      if (stream.eat("#")) {
	        if (stream.eat("x")) {
	          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
	        } else {
	          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
	        }
	      } else {
	        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
	      }
	      return ok ? "atom" : "error";
	    } else {
	      stream.eatWhile(/[^&<]/);
	      return null;
	    }
	  }
	  inText.isInText = true;

	  function inTag(stream, state) {
	    var ch = stream.next();
	    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
	      state.tokenize = inText;
	      type = ch == ">" ? "endTag" : "selfcloseTag";
	      return "tag bracket";
	    } else if (ch == "=") {
	      type = "equals";
	      return null;
	    } else if (ch == "<") {
	      state.tokenize = inText;
	      state.state = baseState;
	      state.tagName = state.tagStart = null;
	      var next = state.tokenize(stream, state);
	      return next ? next + " tag error" : "tag error";
	    } else if (/[\'\"]/.test(ch)) {
	      state.tokenize = inAttribute(ch);
	      state.stringStartCol = stream.column();
	      return state.tokenize(stream, state);
	    } else {
	      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
	      return "word";
	    }
	  }

	  function inAttribute(quote) {
	    var closure = function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.next() == quote) {
	          state.tokenize = inTag;
	          break;
	        }
	      }
	      return "string";
	    };
	    closure.isInAttribute = true;
	    return closure;
	  }

	  function inBlock(style, terminator) {
	    return function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.match(terminator)) {
	          state.tokenize = inText;
	          break;
	        }
	        stream.next();
	      }
	      return style;
	    };
	  }
	  function doctype(depth) {
	    return function(stream, state) {
	      var ch;
	      while ((ch = stream.next()) != null) {
	        if (ch == "<") {
	          state.tokenize = doctype(depth + 1);
	          return state.tokenize(stream, state);
	        } else if (ch == ">") {
	          if (depth == 1) {
	            state.tokenize = inText;
	            break;
	          } else {
	            state.tokenize = doctype(depth - 1);
	            return state.tokenize(stream, state);
	          }
	        }
	      }
	      return "meta";
	    };
	  }

	  function Context(state, tagName, startOfLine) {
	    this.prev = state.context;
	    this.tagName = tagName;
	    this.indent = state.indented;
	    this.startOfLine = startOfLine;
	    if (Kludges.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
	      this.noIndent = true;
	  }
	  function popContext(state) {
	    if (state.context) state.context = state.context.prev;
	  }
	  function maybePopContext(state, nextTagName) {
	    var parentTagName;
	    while (true) {
	      if (!state.context) {
	        return;
	      }
	      parentTagName = state.context.tagName;
	      if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
	          !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
	        return;
	      }
	      popContext(state);
	    }
	  }

	  function baseState(type, stream, state) {
	    if (type == "openTag") {
	      state.tagStart = stream.column();
	      return tagNameState;
	    } else if (type == "closeTag") {
	      return closeTagNameState;
	    } else {
	      return baseState;
	    }
	  }
	  function tagNameState(type, stream, state) {
	    if (type == "word") {
	      state.tagName = stream.current();
	      setStyle = "tag";
	      return attrState;
	    } else {
	      setStyle = "error";
	      return tagNameState;
	    }
	  }
	  function closeTagNameState(type, stream, state) {
	    if (type == "word") {
	      var tagName = stream.current();
	      if (state.context && state.context.tagName != tagName &&
	          Kludges.implicitlyClosed.hasOwnProperty(state.context.tagName))
	        popContext(state);
	      if (state.context && state.context.tagName == tagName) {
	        setStyle = "tag";
	        return closeState;
	      } else {
	        setStyle = "tag error";
	        return closeStateErr;
	      }
	    } else {
	      setStyle = "error";
	      return closeStateErr;
	    }
	  }

	  function closeState(type, _stream, state) {
	    if (type != "endTag") {
	      setStyle = "error";
	      return closeState;
	    }
	    popContext(state);
	    return baseState;
	  }
	  function closeStateErr(type, stream, state) {
	    setStyle = "error";
	    return closeState(type, stream, state);
	  }

	  function attrState(type, _stream, state) {
	    if (type == "word") {
	      setStyle = "attribute";
	      return attrEqState;
	    } else if (type == "endTag" || type == "selfcloseTag") {
	      var tagName = state.tagName, tagStart = state.tagStart;
	      state.tagName = state.tagStart = null;
	      if (type == "selfcloseTag" ||
	          Kludges.autoSelfClosers.hasOwnProperty(tagName)) {
	        maybePopContext(state, tagName);
	      } else {
	        maybePopContext(state, tagName);
	        state.context = new Context(state, tagName, tagStart == state.indented);
	      }
	      return baseState;
	    }
	    setStyle = "error";
	    return attrState;
	  }
	  function attrEqState(type, stream, state) {
	    if (type == "equals") return attrValueState;
	    if (!Kludges.allowMissing) setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrValueState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return attrState;}
	    setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrContinuedState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    return attrState(type, stream, state);
	  }

	  return {
	    startState: function() {
	      return {tokenize: inText,
	              state: baseState,
	              indented: 0,
	              tagName: null, tagStart: null,
	              context: null};
	    },

	    token: function(stream, state) {
	      if (!state.tagName && stream.sol())
	        state.indented = stream.indentation();

	      if (stream.eatSpace()) return null;
	      type = null;
	      var style = state.tokenize(stream, state);
	      if ((style || type) && style != "comment") {
	        setStyle = null;
	        state.state = state.state(type || style, stream, state);
	        if (setStyle)
	          style = setStyle == "error" ? style + " error" : setStyle;
	      }
	      return style;
	    },

	    indent: function(state, textAfter, fullLine) {
	      var context = state.context;
	      // Indent multi-line strings (e.g. css).
	      if (state.tokenize.isInAttribute) {
	        if (state.tagStart == state.indented)
	          return state.stringStartCol + 1;
	        else
	          return state.indented + indentUnit;
	      }
	      if (context && context.noIndent) return CodeMirror.Pass;
	      if (state.tokenize != inTag && state.tokenize != inText)
	        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
	      // Indent the starts of attribute names.
	      if (state.tagName) {
	        if (multilineTagIndentPastTag)
	          return state.tagStart + state.tagName.length + 2;
	        else
	          return state.tagStart + indentUnit * multilineTagIndentFactor;
	      }
	      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
	      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
	      if (tagAfter && tagAfter[1]) { // Closing tag spotted
	        while (context) {
	          if (context.tagName == tagAfter[2]) {
	            context = context.prev;
	            break;
	          } else if (Kludges.implicitlyClosed.hasOwnProperty(context.tagName)) {
	            context = context.prev;
	          } else {
	            break;
	          }
	        }
	      } else if (tagAfter) { // Opening tag spotted
	        while (context) {
	          var grabbers = Kludges.contextGrabbers[context.tagName];
	          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
	            context = context.prev;
	          else
	            break;
	        }
	      }
	      while (context && !context.startOfLine)
	        context = context.prev;
	      if (context) return context.indent + indentUnit;
	      else return 0;
	    },

	    electricInput: /<\/[\s\w:]+>$/,
	    blockCommentStart: "<!--",
	    blockCommentEnd: "-->",

	    configuration: parserConfig.htmlMode ? "html" : "xml",
	    helperType: parserConfig.htmlMode ? "html" : "xml"
	  };
	});

	CodeMirror.defineMIME("text/xml", "xml");
	CodeMirror.defineMIME("application/xml", "xml");
	if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
	  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

	});


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26), __webpack_require__(36), __webpack_require__(39));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	var urlRE = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i

	CodeMirror.defineMode("gfm", function(config, modeConfig) {
	  var codeDepth = 0;
	  function blankLine(state) {
	    state.code = false;
	    return null;
	  }
	  var gfmOverlay = {
	    startState: function() {
	      return {
	        code: false,
	        codeBlock: false,
	        ateSpace: false
	      };
	    },
	    copyState: function(s) {
	      return {
	        code: s.code,
	        codeBlock: s.codeBlock,
	        ateSpace: s.ateSpace
	      };
	    },
	    token: function(stream, state) {
	      state.combineTokens = null;

	      // Hack to prevent formatting override inside code blocks (block and inline)
	      if (state.codeBlock) {
	        if (stream.match(/^```+/)) {
	          state.codeBlock = false;
	          return null;
	        }
	        stream.skipToEnd();
	        return null;
	      }
	      if (stream.sol()) {
	        state.code = false;
	      }
	      if (stream.sol() && stream.match(/^```+/)) {
	        stream.skipToEnd();
	        state.codeBlock = true;
	        return null;
	      }
	      // If this block is changed, it may need to be updated in Markdown mode
	      if (stream.peek() === '`') {
	        stream.next();
	        var before = stream.pos;
	        stream.eatWhile('`');
	        var difference = 1 + stream.pos - before;
	        if (!state.code) {
	          codeDepth = difference;
	          state.code = true;
	        } else {
	          if (difference === codeDepth) { // Must be exact
	            state.code = false;
	          }
	        }
	        return null;
	      } else if (state.code) {
	        stream.next();
	        return null;
	      }
	      // Check if space. If so, links can be formatted later on
	      if (stream.eatSpace()) {
	        state.ateSpace = true;
	        return null;
	      }
	      if (stream.sol() || state.ateSpace) {
	        state.ateSpace = false;
	        if (modeConfig.gitHubSpice !== false) {
	          if(stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) {
	            // User/Project@SHA
	            // User@SHA
	            // SHA
	            state.combineTokens = true;
	            return "link";
	          } else if (stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) {
	            // User/Project#Num
	            // User#Num
	            // #Num
	            state.combineTokens = true;
	            return "link";
	          }
	        }
	      }
	      if (stream.match(urlRE) &&
	          stream.string.slice(stream.start - 2, stream.start) != "](" &&
	          (stream.start == 0 || /\W/.test(stream.string.charAt(stream.start - 1)))) {
	        // URLs
	        // Taken from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
	        // And then (issue #1160) simplified to make it not crash the Chrome Regexp engine
	        // And then limited url schemes to the CommonMark list, so foo:bar isn't matched as a URL
	        state.combineTokens = true;
	        return "link";
	      }
	      stream.next();
	      return null;
	    },
	    blankLine: blankLine
	  };

	  var markdownConfig = {
	    underscoresBreakWords: false,
	    taskLists: true,
	    fencedCodeBlocks: '```',
	    strikethrough: true
	  };
	  for (var attr in modeConfig) {
	    markdownConfig[attr] = modeConfig[attr];
	  }
	  markdownConfig.name = "markdown";
	  return CodeMirror.overlayMode(CodeMirror.getMode(config, markdownConfig), gfmOverlay);

	}, "markdown");

	  CodeMirror.defineMIME("text/x-gfm", "gfm");
	});


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// Utility function that allows modes to be combined. The mode given
	// as the base argument takes care of most of the normal mode
	// functionality, but a second (typically simple) mode is used, which
	// can override the style of text. Both modes get to parse all of the
	// text, but when both assign a non-null style to a piece of code, the
	// overlay wins, unless the combine argument was true and not overridden,
	// or state.overlay.combineTokens was true, in which case the styles are
	// combined.

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(26));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.overlayMode = function(base, overlay, combine) {
	  return {
	    startState: function() {
	      return {
	        base: CodeMirror.startState(base),
	        overlay: CodeMirror.startState(overlay),
	        basePos: 0, baseCur: null,
	        overlayPos: 0, overlayCur: null,
	        streamSeen: null
	      };
	    },
	    copyState: function(state) {
	      return {
	        base: CodeMirror.copyState(base, state.base),
	        overlay: CodeMirror.copyState(overlay, state.overlay),
	        basePos: state.basePos, baseCur: null,
	        overlayPos: state.overlayPos, overlayCur: null
	      };
	    },

	    token: function(stream, state) {
	      if (stream != state.streamSeen ||
	          Math.min(state.basePos, state.overlayPos) < stream.start) {
	        state.streamSeen = stream;
	        state.basePos = state.overlayPos = stream.start;
	      }

	      if (stream.start == state.basePos) {
	        state.baseCur = base.token(stream, state.base);
	        state.basePos = stream.pos;
	      }
	      if (stream.start == state.overlayPos) {
	        stream.pos = stream.start;
	        state.overlayCur = overlay.token(stream, state.overlay);
	        state.overlayPos = stream.pos;
	      }
	      stream.pos = Math.min(state.basePos, state.overlayPos);

	      // state.overlay.combineTokens always takes precedence over combine,
	      // unless set to null
	      if (state.overlayCur == null) return state.baseCur;
	      else if (state.baseCur != null &&
	               state.overlay.combineTokens ||
	               combine && state.overlay.combineTokens == null)
	        return state.baseCur + " " + state.overlayCur;
	      else return state.overlayCur;
	    },

	    indent: base.indent && function(state, textAfter) {
	      return base.indent(state.base, textAfter);
	    },
	    electricChars: base.electricChars,

	    innerMode: function(state) { return {state: state.base, mode: base}; },

	    blankLine: function(state) {
	      if (base.blankLine) base.blankLine(state.base);
	      if (overlay.blankLine) overlay.blankLine(state.overlay);
	    }
	  };
	};

	});


/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".CodeMirrorWidget {\n\tborder: 1px solid gray;\n}", ""]);

	// exports


/***/ }
/******/ ]);
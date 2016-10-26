(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("ndb-client", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["ndb-client"] = factory(require("angular"));
	else
		root["ndb-client"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var EntityStore = (function () {
	    function EntityStore(idKey) {
	        if (idKey === void 0) { idKey = "id"; }
	        this._store = {};
	        this._array = [];
	        this._idKey = idKey;
	    }
	    EntityStore.prototype.clear = function () {
	        var _this = this;
	        this._array.length = 0;
	        Object.keys(this._store).forEach(function (key) {
	            delete _this._store[key];
	        });
	    };
	    EntityStore.prototype.findItem = function (key) {
	        if (key == null || key.length === 0) {
	            return null;
	        }
	        return this._store[key];
	    };
	    EntityStore.prototype.addItem = function (item) {
	        if (this.findObject(item) == null) {
	            this.insertItem(item);
	        }
	    };
	    EntityStore.prototype.addItems = function (items) {
	        var _this = this;
	        items.forEach(function (item) {
	            _this.addItem(item);
	        });
	    };
	    EntityStore.prototype.removeItem = function (item) {
	        var obj = this.findObject(item);
	        if (obj != null) {
	            this.deleteItem(obj);
	        }
	        return obj;
	    };
	    EntityStore.prototype.removeItems = function (items) {
	        var _this = this;
	        return items.map(function (item) {
	            return _this.removeItem(item);
	        });
	    };
	    EntityStore.prototype.where = function (fcn) {
	        return this._array.filter(function (item) {
	            return fcn(item);
	        });
	    };
	    Object.defineProperty(EntityStore.prototype, "items", {
	        get: function () {
	            return this._array;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EntityStore.prototype.findObject = function (item) {
	        return this.findItem(this.getKey(item));
	    };
	    EntityStore.prototype.getKey = function (item) {
	        if (item == null) {
	            return null;
	        }
	        return item[this._idKey];
	    };
	    EntityStore.prototype.insertItem = function (item) {
	        this._array.push(item);
	        this._store[item[this._idKey]] = item;
	    };
	    EntityStore.prototype.deleteItem = function (item) {
	        if (item == null) {
	            return;
	        }
	        var key = item[this._idKey];
	        if (key == null) {
	            return;
	        }
	        var index = this._array.indexOf(item);
	        if (index > -1) {
	            this._array.splice(index, 1);
	        }
	        if (key in this._store) {
	            delete this._store[key];
	        }
	    };
	    return EntityStore;
	}());
	exports.EntityStore = EntityStore;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var entityStore_1 = __webpack_require__(1);
	var DataService = (function () {
	    function DataService($resource) {
	        this.$resource = $resource;
	        this._entityStore = new entityStore_1.EntityStore();
	        this.resourcesAreAvailable = false;
	        this.apiLocation = "";
	    }
	    DataService.prototype.setLocation = function (resourceLocation) {
	        this.resourcesAreAvailable = false;
	        this.apiLocation = resourceLocation;
	        this.createResource(this.apiLocation);
	        return this.refreshData();
	    };
	    DataService.prototype.refreshData = function () {
	        var _this = this;
	        this.resourcesAreAvailable = false;
	        this._entityStore.clear();
	        return new Promise(function (resolve) {
	            _this.dataSource.query(function (data) {
	                _this.registerNewItems(data);
	                _this.resourcesAreAvailable = true;
	                resolve();
	            });
	        });
	    };
	    DataService.prototype.update = function (data) {
	        var resourceClass;
	        resourceClass = this.dataSource;
	        resourceClass.update({}, data);
	    };
	    DataService.prototype.createItem = function (data) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.dataSource.save(data).$promise.then(function (obj) {
	                _this.dataSource.get({ id: obj.id }, function (item) {
	                    item = _this.registerNewItem(item);
	                    resolve(item);
	                });
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    DataService.prototype.find = function (id) {
	        return this._entityStore.findItem(id);
	    };
	    DataService.prototype.getDisplayName = function (item, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = ""; }
	        if ("name" in item)
	            return item["name"];
	        return defaultValue;
	    };
	    DataService.prototype.getDisplayNameForId = function (id, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = ""; }
	        var item = this.find(id);
	        return item == null ? defaultValue : this.getDisplayName(item);
	    };
	    DataService.prototype.createCustomResourceMethods = function () {
	        return {};
	    };
	    Object.defineProperty(DataService.prototype, "apiUrl", {
	        get: function () {
	            return this.apiLocation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataService.prototype.mapQueriedItem = function (obj) {
	        obj.createdAt = new Date(obj.createdAt);
	        obj.updatedAt = new Date(obj.updatedAt);
	        return obj;
	    };
	    DataService.prototype.registerNewItem = function (obj) {
	        var item = this.mapQueriedItem(obj);
	        this._entityStore.addItem(item);
	        return item;
	    };
	    DataService.prototype.registerNewItems = function (items) {
	        var _this = this;
	        items = items.map(function (obj) {
	            return _this.registerNewItem(obj);
	        });
	        return items;
	    };
	    DataService.prototype.where = function (fcn) {
	        var items = this.whereAll(fcn);
	        return items.length > 0 ? items[0] : null;
	    };
	    DataService.prototype.whereAll = function (fcn) {
	        return this._entityStore.where(fcn);
	    };
	    DataService.prototype.createResource = function (location) {
	        var obj = this.createCustomResourceMethods();
	        obj.update = { method: "PUT", url: location + "brainareas" };
	        this.dataSource = this.$resource(location + this.resourcePath() + "/:id", { id: "@id" }, obj);
	    };
	    DataService.$inject = [
	        "$resource"
	    ];
	    return DataService;
	}());
	exports.DataService = DataService;
	var NumberedItemDataService = (function (_super) {
	    __extends(NumberedItemDataService, _super);
	    function NumberedItemDataService() {
	        _super.apply(this, arguments);
	    }
	    NumberedItemDataService.prototype.findWithIdNumber = function (id) {
	        var item = this.where(function (obj) {
	            return obj.idNumber === id;
	        });
	        return item;
	    };
	    return NumberedItemDataService;
	}(DataService));
	exports.NumberedItemDataService = NumberedItemDataService;
	var NamedItemDataService = (function (_super) {
	    __extends(NamedItemDataService, _super);
	    function NamedItemDataService() {
	        _super.apply(this, arguments);
	    }
	    NamedItemDataService.prototype.findWithName = function (name) {
	        var item = this.where(function (obj) {
	            return obj.name.toLowerCase() === name.toLowerCase();
	        });
	        return item;
	    };
	    return NamedItemDataService;
	}(DataService));
	exports.NamedItemDataService = NamedItemDataService;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var BrainAreaDepthEntry = (function () {
	    function BrainAreaDepthEntry() {
	    }
	    return BrainAreaDepthEntry;
	}());
	exports.BrainAreaDepthEntry = BrainAreaDepthEntry;
	var BrainAreaService = (function (_super) {
	    __extends(BrainAreaService, _super);
	    function BrainAreaService($resource) {
	        _super.call(this, $resource);
	    }
	    Object.defineProperty(BrainAreaService.prototype, "service", {
	        get: function () {
	            return this.dataSource;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BrainAreaService.prototype.mapQueriedItem = function (obj) {
	        obj.createdAt = new Date(obj.createdAt);
	        obj.updatedAt = new Date(obj.updatedAt);
	        return obj;
	    };
	    BrainAreaService.prototype.resourcePath = function () {
	        return "brainareas";
	    };
	    BrainAreaService.prototype.createCustomResourceMethods = function () {
	        return {
	            queryForDepth: {
	                method: "GET",
	                url: this.apiUrl + "brainareas/depth/:depth",
	                params: { depth: "@depth" },
	                isArray: true
	            },
	            queryForParent: {
	                method: "GET",
	                url: this.apiUrl + "brainareas/parent/:parentId",
	                params: { parentId: "@parentId" },
	                isArray: true
	            }
	        };
	    };
	    BrainAreaService.prototype.brainAreasForDepth = function (depth) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.service.queryForDepth({ depth: depth }).$promise.then(function (data) {
	                data = _this.registerNewItems(data);
	                resolve(data);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    BrainAreaService.prototype.brainAreasForParent = function (parentId) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.service.queryForParent({ parentId: parentId }).$promise.then(function (data) {
	                data = _this.registerNewItems(data);
	                resolve(data);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    BrainAreaService.$inject = [
	        "$resource"
	    ];
	    return BrainAreaService;
	}(dataService_1.NamedItemDataService));
	exports.BrainAreaService = BrainAreaService;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var FluorophoreService = (function (_super) {
	    __extends(FluorophoreService, _super);
	    function FluorophoreService($resource) {
	        _super.call(this, $resource);
	    }
	    FluorophoreService.prototype.resourcePath = function () {
	        return "fluorophores";
	    };
	    Object.defineProperty(FluorophoreService.prototype, "fluorophores", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FluorophoreService.$inject = [
	        "$resource"
	    ];
	    return FluorophoreService;
	}(dataService_1.NamedItemDataService));
	exports.FluorophoreService = FluorophoreService;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var InjectionService = (function (_super) {
	    __extends(InjectionService, _super);
	    function InjectionService($resource, injectionVirusService, brainAreaService) {
	        _super.call(this, $resource);
	        this.injectionVirusService = injectionVirusService;
	        this.brainAreaService = brainAreaService;
	        this.injectionSampleMap = {};
	    }
	    InjectionService.prototype.resourcePath = function () {
	        return "injections";
	    };
	    InjectionService.prototype.createCustomResourceMethods = function () {
	        return {
	            injectionsForSample: {
	                method: "GET",
	                url: this.apiUrl + "injections/sample/:id/",
	                params: { id: "@id" },
	                isArray: true
	            }
	        };
	    };
	    InjectionService.prototype.registerNewItem = function (obj) {
	        var item = _super.prototype.registerNewItem.call(this, obj);
	        var list = this.injectionSampleMap[item.sampleId];
	        if (list === undefined || list === null) {
	            list = [];
	            this.injectionSampleMap[item.sampleId] = list;
	        }
	        var matching = list.map(function (obj, index) { return obj.id === item.sampleId ? index : -1; }).filter(function (index) { return index > -1; });
	        var index = matching.length > 0 ? matching[0] : -1;
	        if (index < 0) {
	            list.push(item);
	        }
	        else {
	            list[index] = item;
	        }
	        return item;
	    };
	    InjectionService.prototype.injectionsForSample = function (sampleId) {
	        var injections = this.injectionSampleMap[sampleId];
	        if (injections === undefined || injections === null) {
	            injections = [];
	            this.injectionSampleMap[sampleId] = injections;
	        }
	        return injections;
	    };
	    Object.defineProperty(InjectionService.prototype, "injections", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InjectionService.prototype.getDisplayName = function (item, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = ""; }
	        return "(" + this.brainAreaService.getDisplayNameForId(item.brainAreaId) + ":" + this.injectionVirusService.getDisplayNameForId(item.injectionVirusId) + ")";
	    };
	    InjectionService.$inject = [
	        "$resource",
	        "injectionVirusService",
	        "brainAreaService"
	    ];
	    return InjectionService;
	}(dataService_1.DataService));
	exports.InjectionService = InjectionService;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var InjectionVirusService = (function (_super) {
	    __extends(InjectionVirusService, _super);
	    function InjectionVirusService($resource) {
	        _super.call(this, $resource);
	    }
	    InjectionVirusService.prototype.resourcePath = function () {
	        return "viruses";
	    };
	    Object.defineProperty(InjectionVirusService.prototype, "injectionViruses", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InjectionVirusService.$inject = [
	        "$resource"
	    ];
	    return InjectionVirusService;
	}(dataService_1.NamedItemDataService));
	exports.InjectionVirusService = InjectionVirusService;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var MouseStrainService = (function (_super) {
	    __extends(MouseStrainService, _super);
	    function MouseStrainService($resource) {
	        _super.call(this, $resource);
	    }
	    MouseStrainService.prototype.resourcePath = function () {
	        return "mousestrains";
	    };
	    Object.defineProperty(MouseStrainService.prototype, "mouseStrains", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MouseStrainService.$inject = [
	        "$resource"
	    ];
	    return MouseStrainService;
	}(dataService_1.NamedItemDataService));
	exports.MouseStrainService = MouseStrainService;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var NeuronService = (function (_super) {
	    __extends(NeuronService, _super);
	    function NeuronService($resource) {
	        _super.call(this, $resource);
	        this.neuronInjectionMap = {};
	    }
	    NeuronService.prototype.registerNewItem = function (rawObj) {
	        var item = _super.prototype.registerNewItem.call(this, rawObj);
	        var list = this.neuronInjectionMap[item.injectionId];
	        if (list === undefined || list === null) {
	            list = [];
	            this.neuronInjectionMap[item.injectionId] = list;
	        }
	        var matching = list.map(function (obj, index) { return obj.id === item.injectionId ? index : -1; }).filter(function (index) { return index > -1; });
	        var index = matching.length > 0 ? matching[0] : -1;
	        if (index < 0) {
	            list.push(item);
	        }
	        else {
	            list[index] = item;
	        }
	        return item;
	    };
	    NeuronService.prototype.resourcePath = function () {
	        return "neurons";
	    };
	    NeuronService.prototype.neuronsForInjection = function (injectionId) {
	        var neurons = this.neuronInjectionMap[injectionId];
	        if (neurons === undefined || neurons === null) {
	            neurons = [];
	            this.neuronInjectionMap[injectionId] = neurons;
	        }
	        return neurons;
	    };
	    Object.defineProperty(NeuronService.prototype, "neurons", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NeuronService.prototype.getDisplayName = function (item, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = ""; }
	        if (item === null) {
	            return "";
	        }
	        if (item.tag.length > 0) {
	            return item.idNumber.toString() + " " + item.tag;
	        }
	        else {
	            return item.idNumber.toString();
	        }
	    };
	    NeuronService.$inject = [
	        "$resource"
	    ];
	    return NeuronService;
	}(dataService_1.NumberedItemDataService));
	exports.NeuronService = NeuronService;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var RegistrationTransformService = (function (_super) {
	    __extends(RegistrationTransformService, _super);
	    function RegistrationTransformService($resource) {
	        _super.call(this, $resource);
	    }
	    RegistrationTransformService.prototype.resourcePath = function () {
	        return "registrationtransforms";
	    };
	    Object.defineProperty(RegistrationTransformService.prototype, "transforms", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RegistrationTransformService.$inject = [
	        "$resource"
	    ];
	    return RegistrationTransformService;
	}(dataService_1.NamedItemDataService));
	exports.RegistrationTransformService = RegistrationTransformService;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var SampleService = (function (_super) {
	    __extends(SampleService, _super);
	    function SampleService($resource) {
	        _super.call(this, $resource);
	    }
	    SampleService.prototype.mapQueriedItem = function (obj) {
	        obj = _super.prototype.mapQueriedItem.call(this, obj);
	        obj.sampleDate = new Date(obj.sampleDate);
	        return obj;
	    };
	    SampleService.prototype.resourcePath = function () {
	        return "samples";
	    };
	    Object.defineProperty(SampleService.prototype, "samples", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SampleService.prototype.getDisplayName = function (item, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = ""; }
	        if (item === null || item.sampleDate === null) {
	            return "";
	        }
	        var date = item.sampleDate.getFullYear() + "-" + lpad(item.sampleDate.getMonth() + 1, 2) + "-" + lpad(item.sampleDate.getDate(), 2);
	        if (item.tag.length > 0) {
	            return item.idNumber.toString() + " " + item.tag + " (" + date + ")";
	        }
	        else {
	            return item.idNumber.toString() + " (" + date + ")";
	        }
	    };
	    SampleService.$inject = [
	        "$resource"
	    ];
	    return SampleService;
	}(dataService_1.NumberedItemDataService));
	exports.SampleService = SampleService;
	function lpad(n, width, z) {
	    if (z === void 0) { z = "0"; }
	    var str = n + "";
	    return str.length >= width ? str : new Array(width - str.length + 1).join(z) + str;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var StructureIdentifierService = (function (_super) {
	    __extends(StructureIdentifierService, _super);
	    function StructureIdentifierService($resource) {
	        _super.call(this, $resource);
	    }
	    StructureIdentifierService.prototype.resourcePath = function () {
	        return "structures";
	    };
	    Object.defineProperty(StructureIdentifierService.prototype, "structures", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    StructureIdentifierService.$inject = [
	        "$resource"
	    ];
	    return StructureIdentifierService;
	}(dataService_1.NamedItemDataService));
	exports.StructureIdentifierService = StructureIdentifierService;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataService_1 = __webpack_require__(2);
	var TracingNodeService = (function (_super) {
	    __extends(TracingNodeService, _super);
	    function TracingNodeService($resource) {
	        _super.call(this, $resource);
	    }
	    Object.defineProperty(TracingNodeService.prototype, "service", {
	        get: function () {
	            return this.dataSource;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TracingNodeService.prototype.resourcePath = function () {
	        return "nodes";
	    };
	    TracingNodeService.prototype.createCustomResourceMethods = function () {
	        return {
	            nodesForStructure: {
	                method: "GET",
	                url: this.apiUrl + "nodes/findByStructure/:id/",
	                params: { id: "@id" },
	                isArray: true
	            }
	        };
	    };
	    Object.defineProperty(TracingNodeService.prototype, "nodes", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TracingNodeService.prototype.nodesForStructure = function (structureId) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.service.nodesForStructure({ id: structureId }).$promise.then(function (data) {
	                resolve(data);
	            }).catch(function (err) {
	                reject(err);
	            });
	        });
	    };
	    TracingNodeService.$inject = [
	        "$resource"
	    ];
	    return TracingNodeService;
	}(dataService_1.DataService));
	exports.TracingNodeService = TracingNodeService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ng = __webpack_require__(14);
	var dataService_1 = __webpack_require__(2);
	var TracingService = (function (_super) {
	    __extends(TracingService, _super);
	    function TracingService($resource, $http) {
	        _super.call(this, $resource);
	        this.$http = $http;
	    }
	    Object.defineProperty(TracingService.prototype, "service", {
	        get: function () {
	            return this.dataSource;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TracingService.prototype.resourcePath = function () {
	        return "tracings";
	    };
	    TracingService.prototype.createCustomResourceMethods = function () {
	        return {
	            nodes: {
	                method: "GET",
	                url: location + "tracings/:id/nodes/",
	                params: { id: "@id" },
	                isArray: true
	            }
	        };
	    };
	    Object.defineProperty(TracingService.prototype, "tracings", {
	        get: function () {
	            return this._entityStore.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TracingService.prototype.uploadSwcFile = function (theFile, tracingInfo) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var url = _this.apiUrl + "upload";
	            var fd = new FormData();
	            fd.append("contents", theFile);
	            _this.$http.post(url, fd, {
	                params: tracingInfo,
	                transformRequest: ng.identity,
	                headers: { "Content-Type": undefined }
	            }).then(function (result) {
	                _this.dataSource.get({ id: result.data.id }, function (fullItem) {
	                    _this._entityStore.addItem(fullItem);
	                    resolve(fullItem);
	                });
	            }).catch(function (error) {
	                console.log(error);
	                reject(error);
	            });
	        });
	    };
	    TracingService.$inject = [
	        "$resource",
	        "$http"
	    ];
	    return TracingService;
	}(dataService_1.DataService));
	exports.TracingService = TracingService;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ndb-client.js.map
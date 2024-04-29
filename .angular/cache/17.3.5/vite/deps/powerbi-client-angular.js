import {
  require_powerbi
} from "./chunk-UE3FXQGR.js";
import {
  Component,
  Input,
  NgModule,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-TCLYII5N.js";
import "./chunk-57S6QRR4.js";
import {
  __toESM
} from "./chunk-ASLTLD6L.js";

// node_modules/powerbi-client-angular/fesm2020/powerbi-client-angular.mjs
var import_powerbi_client = __toESM(require_powerbi(), 1);
var _c0 = ["reportContainer"];
var _c1 = ["embedConfig", ""];
var _c2 = ["dashboardContainer"];
var _c3 = ["tileContainer"];
var _c4 = ["paginatedReportContainer"];
var _c5 = ["visualContainer"];
var _c6 = ["qnaContainer"];
var stringifyMap = (map) => {
  if (!map) {
    return "";
  }
  const mapEntries = Array.from(map);
  return JSON.stringify(mapEntries.map((mapEntry) => (
    // Convert event handler method to a string containing its source code for comparison
    [mapEntry[0], mapEntry[1] ? mapEntry[1].toString() : ""]
  )));
};
var sdkType = "powerbi-client-angular";
var sdkWrapperVersion = "3.0.5";
var PowerBIEmbedComponent = class {
  constructor() {
    this.prevEventHandlerMapString = "";
  }
  ngOnInit() {
    if (this.service) {
      this.powerbi = this.service;
    } else {
      this.powerbi = new import_powerbi_client.service.Service(import_powerbi_client.factories.hpmFactory, import_powerbi_client.factories.wpmpFactory, import_powerbi_client.factories.routerFactory);
    }
    this.powerbi.setSdkInfo(sdkType, sdkWrapperVersion);
  }
  /**
   * Sets all event handlers from the input on the embedded entity
   *
   * @param embed Embedded object
   * @param eventHandlerMap Array of event handlers to be set on embedded entity
   * @returns void
   */
  setEventHandlers(embed, eventHandlerMap) {
    const eventHandlerMapString = stringifyMap(eventHandlerMap);
    if (this.prevEventHandlerMapString === eventHandlerMapString) {
      return;
    }
    this.prevEventHandlerMapString = eventHandlerMapString;
    eventHandlerMap.forEach((eventHandlerMethod, eventName) => {
      embed.off(eventName);
      if (eventHandlerMethod) {
        embed.on(eventName, (event) => {
          eventHandlerMethod(event, embed);
        });
      }
    });
  }
};
PowerBIEmbedComponent.ɵfac = function PowerBIEmbedComponent_Factory(t) {
  return new (t || PowerBIEmbedComponent)();
};
PowerBIEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIEmbedComponent,
  selectors: [["powerbi-embed"]],
  inputs: {
    cssClassName: "cssClassName",
    service: "service"
  },
  decls: 0,
  vars: 0,
  template: function PowerBIEmbedComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-embed",
      template: ""
    }]
  }], null, {
    cssClassName: [{
      type: Input
    }],
    service: [{
      type: Input
    }]
  });
})();
var PowerBIReportEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
    this.phasedEmbedding = false;
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  // Returns embed object to calling function
  getReport() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdateReport(prevEmbedConfig);
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedReport();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed or load the PowerBI Report based on phasedEmbedding flag
   *
   * @returns void
   */
  embedReport() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    if (this.phasedEmbedding) {
      this.embed = this.powerbi.load(this.containerRef.nativeElement, this.embedConfig);
    } else {
      this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
    }
  }
  /**
   * When component updates, choose to _embed_ or _load_ the powerbi report
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig IReportEmbedConfiguration
   * @returns void
   */
  embedOrUpdateReport(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedReport();
    }
  }
};
PowerBIReportEmbedComponent.ɵfac = function PowerBIReportEmbedComponent_Factory(t) {
  return new (t || PowerBIReportEmbedComponent)();
};
PowerBIReportEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIReportEmbedComponent,
  selectors: [["powerbi-report", "embedConfig", ""]],
  viewQuery: function PowerBIReportEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig",
    phasedEmbedding: "phasedEmbedding",
    eventHandlers: "eventHandlers"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["reportContainer", ""]],
  template: function PowerBIReportEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIReportEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-report[embedConfig]",
      template: "<div class={{cssClassName}} #reportContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    phasedEmbedding: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["reportContainer"]
    }]
  });
})();
var PowerBIDashboardEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  // Returns embed object to calling function
  getDashboard() {
    return this.embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdateDashboard(prevEmbedConfig);
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedDashboard();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Dashboard
   *
   * @returns void
   */
  embedDashboard() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  /**
   * When component updates, choose to _embed_ the powerbi dashboard
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig IDashboardEmbedConfiguration
   * @returns void
   */
  embedOrUpdateDashboard(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedDashboard();
    }
  }
};
PowerBIDashboardEmbedComponent.ɵfac = function PowerBIDashboardEmbedComponent_Factory(t) {
  return new (t || PowerBIDashboardEmbedComponent)();
};
PowerBIDashboardEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIDashboardEmbedComponent,
  selectors: [["powerbi-dashboard", "embedConfig", ""]],
  viewQuery: function PowerBIDashboardEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig",
    eventHandlers: "eventHandlers"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["dashboardContainer", ""]],
  template: function PowerBIDashboardEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIDashboardEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-dashboard[embedConfig]",
      template: "<div class={{cssClassName}} #dashboardContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["dashboardContainer"]
    }]
  });
})();
var PowerBITileEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  // Returns embed object to calling function
  getTile() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdateTile(prevEmbedConfig);
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedTile();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Tile
   *
   * @returns void
   */
  embedTile() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  /**
   * When component updates, choose to _embed_ the powerbi tile
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig ITileEmbedConfiguration
   * @returns void
   */
  embedOrUpdateTile(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedTile();
    }
  }
};
PowerBITileEmbedComponent.ɵfac = function PowerBITileEmbedComponent_Factory(t) {
  return new (t || PowerBITileEmbedComponent)();
};
PowerBITileEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBITileEmbedComponent,
  selectors: [["powerbi-tile", "embedConfig", ""]],
  viewQuery: function PowerBITileEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig",
    eventHandlers: "eventHandlers"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["tileContainer", ""]],
  template: function PowerBITileEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBITileEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-tile[embedConfig]",
      template: "<div class={{cssClassName}} #tileContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["tileContainer"]
    }]
  });
})();
var PowerBIPaginatedReportEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdatedPaginatedReport(prevEmbedConfig);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      this.embedPaginatedReport();
    }
  }
  /**
   * Embed the PowerBI Paginated report
   *
   * @returns void
   */
  embedPaginatedReport() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  /**
   * When component updates, choose to _embed_ the powerbi paginated report
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig IEmbedConfiguration
   * @returns void
   */
  embedOrUpdatedPaginatedReport(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedPaginatedReport();
    }
  }
};
PowerBIPaginatedReportEmbedComponent.ɵfac = function PowerBIPaginatedReportEmbedComponent_Factory(t) {
  return new (t || PowerBIPaginatedReportEmbedComponent)();
};
PowerBIPaginatedReportEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIPaginatedReportEmbedComponent,
  selectors: [["powerbi-paginated-report", "embedConfig", ""]],
  viewQuery: function PowerBIPaginatedReportEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["paginatedReportContainer", ""]],
  template: function PowerBIPaginatedReportEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIPaginatedReportEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-paginated-report[embedConfig]",
      template: "<div class={{cssClassName}} #paginatedReportContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["paginatedReportContainer"]
    }]
  });
})();
var PowerBIVisualEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  // Returns embed object to calling function
  getVisual() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdateVisual(prevEmbedConfig);
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedVisual();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Visual
   *
   * @returns void
   */
  embedVisual() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  /**
   * When component updates, choose to _embed_ the powerbi visual
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig IVisualEmbedConfiguration
   * @returns void
   */
  embedOrUpdateVisual(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedVisual();
    }
  }
};
PowerBIVisualEmbedComponent.ɵfac = function PowerBIVisualEmbedComponent_Factory(t) {
  return new (t || PowerBIVisualEmbedComponent)();
};
PowerBIVisualEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIVisualEmbedComponent,
  selectors: [["powerbi-visual", "embedConfig", ""]],
  viewQuery: function PowerBIVisualEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig",
    eventHandlers: "eventHandlers"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["visualContainer", ""]],
  template: function PowerBIVisualEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIVisualEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-visual[embedConfig]",
      template: "<div class={{cssClassName}} #visualContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["visualContainer"]
    }]
  });
})();
var PowerBIQnaEmbedComponent = class extends PowerBIEmbedComponent {
  constructor() {
    super();
  }
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  // Returns embed object to calling function
  getQna() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      const prevEmbedConfig = changes.embedConfig.previousValue;
      if (!prevEmbedConfig) {
        return;
      }
      this.embedOrUpdateQna(prevEmbedConfig);
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedQnaVisual();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI QnA Visual
   *
   * @returns void
   */
  embedQnaVisual() {
    if (!this.containerRef.nativeElement) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  /**
   * When component updates, choose to _embed_ the powerbi qna visual
   * or do nothing if the embedUrl and accessToken did not update in the new properties
   *
   * @param prevEmbedConfig IQnaEmbedConfiguration
   * @returns void
   */
  embedOrUpdateQna(prevEmbedConfig) {
    if (!this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    if (this.containerRef.nativeElement && this.embedConfig.embedUrl !== prevEmbedConfig.embedUrl) {
      this.embedQnaVisual();
    }
  }
};
PowerBIQnaEmbedComponent.ɵfac = function PowerBIQnaEmbedComponent_Factory(t) {
  return new (t || PowerBIQnaEmbedComponent)();
};
PowerBIQnaEmbedComponent.ɵcmp = ɵɵdefineComponent({
  type: PowerBIQnaEmbedComponent,
  selectors: [["powerbi-qna", "embedConfig", ""]],
  viewQuery: function PowerBIQnaEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    embedConfig: "embedConfig",
    eventHandlers: "eventHandlers"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  attrs: _c1,
  decls: 2,
  vars: 3,
  consts: [["qnaContainer", ""]],
  template: function PowerBIQnaEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClassName);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIQnaEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-qna[embedConfig]",
      template: "<div class={{cssClassName}} #qnaContainer></div>"
    }]
  }], function() {
    return [];
  }, {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["qnaContainer"]
    }]
  });
})();
var PowerBIEmbedModule = class {
};
PowerBIEmbedModule.ɵfac = function PowerBIEmbedModule_Factory(t) {
  return new (t || PowerBIEmbedModule)();
};
PowerBIEmbedModule.ɵmod = ɵɵdefineNgModule({
  type: PowerBIEmbedModule,
  declarations: [PowerBIEmbedComponent, PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent],
  exports: [PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent]
});
PowerBIEmbedModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIEmbedModule, [{
    type: NgModule,
    args: [{
      declarations: [PowerBIEmbedComponent, PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent],
      imports: [],
      exports: [PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent]
    }]
  }], null, null);
})();
export {
  PowerBIDashboardEmbedComponent,
  PowerBIEmbedModule,
  PowerBIPaginatedReportEmbedComponent,
  PowerBIQnaEmbedComponent,
  PowerBIReportEmbedComponent,
  PowerBITileEmbedComponent,
  PowerBIVisualEmbedComponent
};
//# sourceMappingURL=powerbi-client-angular.js.map

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/fontawesome'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@fortawesome/fontawesome', '@angular/platform-browser'], factory) :
	(factory((global.ngFontawesome = global.ngFontawesome || {}),global.ng.core,global.fontawesome,global.ng.platformBrowser));
}(this, (function (exports,_angular_core,fontawesome,_angular_platformBrowser) { 'use strict';

fontawesome = fontawesome && 'default' in fontawesome ? fontawesome['default'] : fontawesome;

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @param {?} icon
 * @return {?}
 */
function normalizeIconArgs(icon) {
    if (icon === null) {
        return null;
    }
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
        return icon;
    }
    if (Array.isArray(icon) && icon.length === 2) {
        return { prefix: icon[0], iconName: icon[1] };
    }
    if (typeof icon === 'string') {
        return { prefix: 'fas', iconName: icon };
    }
}
/**
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function objectWithKey(key, value) {
    return ((Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value)) ? (_a = {}, _a[key] = value, _a) : {};
    var _a;
}
/**
 * @param {?} props
 * @return {?}
 */
function classList(props) {
    var /** @type {?} */ classes = (_a = {
            'fa-spin': props.spin,
            'fa-pulse': props.pulse,
            'fa-fw': props.fixedWidth,
            'fa-border': props.border,
            'fa-li': props.listItem,
            'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
            'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
        },
        _a["fa-" + props.size] = props.size !== null,
        _a["fa-rotate-" + props.rotation] = props.rotation !== null,
        _a["fa-pull-" + props.pull] = props.pull !== null,
        _a);
    return Object.keys(classes)
        .map(function (key) { return classes[key] ? key : null; })
        .filter(function (key) { return key; });
    var _a;
}
var FaIconComponent = (function () {
    /**
     * @param {?} sanitizer
     */
    function FaIconComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaIconComponent.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ icon = normalizeIconArgs(this.icon);
        var /** @type {?} */ classOpts = {
            spin: typeof this.spin !== 'undefined',
            pulse: typeof this.pulse !== 'undefined',
            fixedWidth: typeof this.fixedWidth !== 'undefined',
            border: typeof this.border !== 'undefined',
            listItem: typeof this.listItem !== 'undefined',
            flip: this.flip,
            size: this.size || null,
            rotation: this.rotation || null,
            pull: this.pull || null
        };
        var /** @type {?} */ classes = objectWithKey('classes', classList(classOpts).concat((this.className || '').split(' ')));
        var /** @type {?} */ transform = objectWithKey('transform', (typeof this.transform === 'string') ?
            fontawesome.parse.transform(this.transform) : this.transform);
        var /** @type {?} */ mask = objectWithKey('mask', normalizeIconArgs(this.mask));
        var /** @type {?} */ renderedIcon = fontawesome.icon(icon, __assign({}, classes, transform, mask, { symbol: this.symbol }));
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html);
    };
    return FaIconComponent;
}());
FaIconComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'fa-icon',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
FaIconComponent.ctorParameters = function () { return [
    { type: _angular_platformBrowser.DomSanitizer, },
]; };
FaIconComponent.propDecorators = {
    'icon': [{ type: _angular_core.Input },],
    'mask': [{ type: _angular_core.Input },],
    'symbol': [{ type: _angular_core.Input },],
    'className': [{ type: _angular_core.Input },],
    'fixedWidth': [{ type: _angular_core.Input },],
    'spin': [{ type: _angular_core.Input },],
    'pulse': [{ type: _angular_core.Input },],
    'border': [{ type: _angular_core.Input },],
    'listItem': [{ type: _angular_core.Input },],
    'flip': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'rotation': [{ type: _angular_core.Input },],
    'pull': [{ type: _angular_core.Input },],
    'transform': [{ type: _angular_core.Input },],
    'renderedIconHTML': [{ type: _angular_core.HostBinding, args: ['innerHTML',] },],
};

var FaModule = (function () {
    function FaModule() {
    }
    return FaModule;
}());
FaModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    FaIconComponent,
                ],
                exports: [
                    FaIconComponent,
                ],
            },] },
];
/**
 * @nocollapse
 */
FaModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

exports.FaModule = FaModule;
exports.FaIconComponent = FaIconComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-fontawesome.umd.js.map

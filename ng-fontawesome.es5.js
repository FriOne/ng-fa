import { Component, HostBinding, Input, NgModule } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { DomSanitizer } from '@angular/platform-browser';

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
    { type: Component, args: [{
                selector: 'fa-icon',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
FaIconComponent.ctorParameters = function () { return [
    { type: DomSanitizer, },
]; };
FaIconComponent.propDecorators = {
    'icon': [{ type: Input },],
    'mask': [{ type: Input },],
    'symbol': [{ type: Input },],
    'className': [{ type: Input },],
    'fixedWidth': [{ type: Input },],
    'spin': [{ type: Input },],
    'pulse': [{ type: Input },],
    'border': [{ type: Input },],
    'listItem': [{ type: Input },],
    'flip': [{ type: Input },],
    'size': [{ type: Input },],
    'rotation': [{ type: Input },],
    'pull': [{ type: Input },],
    'transform': [{ type: Input },],
    'renderedIconHTML': [{ type: HostBinding, args: ['innerHTML',] },],
};

var FaModule = (function () {
    function FaModule() {
    }
    return FaModule;
}());
FaModule.decorators = [
    { type: NgModule, args: [{
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

export { FaModule, FaIconComponent };
//# sourceMappingURL=ng-fontawesome.es5.js.map

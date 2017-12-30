import { Component, HostBinding, Input, NgModule } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { DomSanitizer } from '@angular/platform-browser';

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
    return ((Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value)) ? { [key]: value } : {};
}
/**
 * @param {?} props
 * @return {?}
 */
function classList(props) {
    const /** @type {?} */ classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotation}`]: props.rotation !== null,
        [`fa-pull-${props.pull}`]: props.pull !== null
    };
    return Object.keys(classes)
        .map(key => classes[key] ? key : null)
        .filter(key => key);
}
class FaIconComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ icon = normalizeIconArgs(this.icon);
        const /** @type {?} */ classOpts = {
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
        const /** @type {?} */ classes = objectWithKey('classes', [...classList(classOpts), ...(this.className || '').split(' ')]);
        const /** @type {?} */ transform = objectWithKey('transform', (typeof this.transform === 'string') ?
            fontawesome.parse.transform(this.transform) : this.transform);
        const /** @type {?} */ mask = objectWithKey('mask', normalizeIconArgs(this.mask));
        const /** @type {?} */ renderedIcon = fontawesome.icon(icon, Object.assign({}, classes, transform, mask, { symbol: this.symbol }));
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html);
    }
}
FaIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fa-icon',
                template: ``
            },] },
];
/**
 * @nocollapse
 */
FaIconComponent.ctorParameters = () => [
    { type: DomSanitizer, },
];
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

class FaModule {
}
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
FaModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FaModule, FaIconComponent };
//# sourceMappingURL=ng-fontawesome.js.map

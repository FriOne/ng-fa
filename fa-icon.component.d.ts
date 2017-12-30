import { SimpleChanges, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class FaIconComponent implements OnChanges {
    private sanitizer;
    icon: any;
    mask?: any;
    symbol?: any;
    className?: any;
    fixedWidth?: boolean;
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    listItem?: boolean;
    flip?: string;
    size?: string;
    rotation?: any;
    pull?: any;
    transform?: any;
    renderedIconHTML: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(changes: SimpleChanges): void;
}

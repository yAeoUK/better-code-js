declare function getDefaultExportFromCjs(x: any): any;
declare var react: {
    exports: {};
};
declare var react_development: {
    exports: {};
};
declare var hasRequiredReact_development: any;
declare function requireReact_development(): {};
declare var react_production_min: {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var hasRequiredReact_production_min: any;
declare function requireReact_production_min(): {};
declare var reactExports: {};
declare var React: any;
declare function styleInject(css: any, ref: any): void;
declare var css_248z: string;
declare var style: {
    icon: string;
    active: string;
};
declare function ownKeys$1(object: any, enumerableOnly: any): string[];
declare function _objectSpread2$1(target: any): any;
declare function _typeof$1(obj: any): any;
declare function _classCallCheck(instance: any, Constructor: any): void;
declare function _defineProperties(target: any, props: any): void;
declare function _createClass(Constructor: any, protoProps: any, staticProps: any): any;
declare function _defineProperty$1(obj: any, key: any, value: any): any;
declare function _slicedToArray(arr: any, i: any): void | any[];
declare function _toConsumableArray$1(arr: any): void | any[];
declare function _arrayWithoutHoles$1(arr: any): any[] | undefined;
declare function _arrayWithHoles(arr: any): any[] | undefined;
declare function _iterableToArray$1(iter: any): unknown[] | undefined;
declare function _iterableToArrayLimit(arr: any, i: any): any[] | undefined;
declare function _unsupportedIterableToArray$1(o: any, minLen: any): any[] | undefined;
declare function _arrayLikeToArray$1(arr: any, len: any): any[];
declare function _nonIterableSpread$1(): void;
declare function _nonIterableRest(): void;
declare var noop: () => void;
declare var _WINDOW: {};
declare var _DOCUMENT: {};
declare var _MUTATION_OBSERVER: any;
declare var _PERFORMANCE: {
    mark: () => void;
    measure: () => void;
};
declare var _ref: any, _ref$userAgent: any, userAgent: any;
declare var WINDOW: {};
declare var DOCUMENT: {};
declare var MUTATION_OBSERVER: {
    new (callback: MutationCallback): MutationObserver;
    prototype: MutationObserver;
} | null;
declare var PERFORMANCE: {
    mark: () => void;
    measure: () => void;
};
declare var IS_DOM: boolean;
declare var IS_IE: number;
declare var _familyProxy: any, _familyProxy2: any, _familyProxy3: any, _familyProxy4: any, _familyProxy5: any;
declare var NAMESPACE_IDENTIFIER: string;
declare var UNITS_IN_GRID: number;
declare var DEFAULT_CSS_PREFIX: string;
declare var DEFAULT_REPLACEMENT_CLASS: string;
declare var DATA_FA_I2SVG: string;
declare var DATA_FA_PSEUDO_ELEMENT: string;
declare var DATA_FA_PSEUDO_ELEMENT_PENDING: string;
declare var DATA_PREFIX: string;
declare var DATA_ICON: string;
declare var HTML_CLASS_I2SVG_BASE_CLASS: string;
declare var MUTATION_APPROACH_ASYNC: string;
declare var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS: string[];
declare var PRODUCTION$1: boolean;
declare var FAMILY_CLASSIC: string;
declare var FAMILY_SHARP: string;
declare var FAMILIES: string[];
declare function familyProxy(obj: any): any;
declare var PREFIX_TO_STYLE: any;
declare var STYLE_TO_PREFIX: any;
declare var PREFIX_TO_LONG_STYLE: any;
declare var LONG_STYLE_TO_PREFIX: any;
declare var ICON_SELECTION_SYNTAX_PATTERN: RegExp;
declare var LAYERS_TEXT_CLASSNAME: string;
declare var FONT_FAMILY_PATTERN: RegExp;
declare var FONT_WEIGHT_TO_PREFIX: any;
declare var oneToTen: number[];
declare var oneToTwenty: number[];
declare var ATTRIBUTES_WATCHED_FOR_MUTATION: string[];
declare var DUOTONE_CLASSES: {
    GROUP: string;
    SWAP_OPACITY: string;
    PRIMARY: string;
    SECONDARY: string;
};
declare var prefixes: Set<unknown>;
declare var RESERVED_CLASSES: never[];
declare var initial: any;
declare function getAttrConfig(attr: any): any;
declare function coerce(val: any): any;
declare var _default: {
    styleDefault: string;
    familyDefault: string;
    cssPrefix: string;
    replacementClass: string;
    autoReplaceSvg: boolean;
    autoAddCss: boolean;
    autoA11y: boolean;
    searchPseudoElements: boolean;
    observeMutations: boolean;
    mutateApproach: string;
    keepOriginalSource: boolean;
    measurePerformance: boolean;
    showMissingIcons: boolean;
};
declare var _config: any;
declare var config: {};
declare var _onChangeCb: any[];
declare function onChange(cb: any): () => void;
declare var d: number;
declare var meaninglessTransform: {
    size: number;
    x: number;
    y: number;
    rotate: number;
    flipX: boolean;
    flipY: boolean;
};
declare function insertCss(css: any): any;
declare var idPool: string;
declare function nextUniqueId(): string;
declare function toArray(obj: any): any[];
declare function classArray(node: any): any;
declare function htmlEscape(str: any): string;
declare function joinAttributes(attributes: any): string;
declare function joinStyles(styles: any): string;
declare function transformIsMeaningful(transform: any): any;
declare function transformForSvg(_ref: any): {
    outer: {
        transform: string;
    };
    inner: {
        transform: string;
    };
    path: {
        transform: string;
    };
};
declare function transformForCss(_ref2: any): string;
declare var baseStyles: string;
declare function css(): string;
declare var _cssInserted: boolean;
declare function ensureCss(): void;
declare var InjectCSS: {
    mixout: () => {
        dom: {
            css: typeof css;
            insertCss: typeof ensureCss;
        };
    };
    hooks: () => {
        beforeDOMElementCreation: () => void;
        beforeI2svg: () => void;
    };
};
declare var w: {};
declare var namespace: any;
declare var functions: any[];
declare var listener: () => void;
declare var loaded: boolean;
declare function domready(fn: any): void;
declare function toHtml(abstractNodes: any): string;
declare function iconFromMapping(mapping: any, prefix: any, iconName: any): {
    prefix: any;
    iconName: any;
    icon: any;
} | undefined;
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
declare var bindInternal4: (func: any, thisContext: any) => (a: any, b: any, c: any, d: any) => any;
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
declare var reduce: (subject: any, fn: any, initialValue: any, thisContext: any) => any;
/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare function ucs2decode(string: any): any[];
declare function toHex(unicode: any): any;
declare function codePointAt(string: any, index: any): any;
declare function normalizeIcons(icons: any): {};
declare function defineIcons(prefix: any, icons: any): void;
declare var _LONG_STYLE: any, _PREFIXES: any, _PREFIXES_FOR_FAMILY: any;
declare var styles: any, shims: any;
declare var LONG_STYLE: {};
declare var _defaultUsablePrefix: any;
declare var _byUnicode: {};
declare var _byLigature: {};
declare var _byOldName: {};
declare var _byOldUnicode: {};
declare var _byAlias: {};
declare var PREFIXES: {};
declare function isReserved(name: any): number;
declare function getIconName(cssPrefix: any, cls: any): any;
declare var build: () => void;
declare function byUnicode(prefix: any, unicode: any): any;
declare function byLigature(prefix: any, ligature: any): any;
declare function byAlias(prefix: any, alias: any): any;
declare function byOldName(name: any): any;
declare function byOldUnicode(unicode: any): any;
declare function getDefaultUsablePrefix(): any;
declare var emptyCanonicalIcon: () => {
    prefix: null;
    iconName: null;
    rest: never[];
};
declare function getCanonicalPrefix(styleOrPrefix: any): any;
declare var PREFIXES_FOR_FAMILY: {};
declare function getCanonicalIcon(values: any): any;
declare var Library: () => void;
declare var _plugins: any[];
declare var _hooks: {};
declare var providers: {};
declare var defaultProviderKeys: string[];
declare function registerPlugins(nextPlugins: any, _ref: any): any;
declare function chainHooks(hook: any, accumulator: any): any;
declare function callHooks(hook: any): undefined;
declare function callProvided(): any;
declare function findIconDefinition(iconLookup: any): {
    prefix: any;
    iconName: any;
    icon: any;
} | undefined;
declare var library: any;
declare var noAuto: () => void;
declare var dom: {
    i2svg: () => any;
    watch: () => void;
};
declare var parse: {
    icon: (_icon: any) => {
        prefix: any;
        iconName: any;
    } | null | undefined;
};
declare var api: {
    noAuto: () => void;
    config: {};
    dom: {
        i2svg: () => any;
        watch: () => void;
    };
    parse: {
        icon: (_icon: any) => {
            prefix: any;
            iconName: any;
        } | null | undefined;
    };
    library: any;
    findIconDefinition: typeof findIconDefinition;
    toHtml: typeof toHtml;
};
declare var autoReplace: () => void;
declare function domVariants(val: any, abstractCreator: any): any;
declare function asIcon(_ref: any): {
    tag: string;
    attributes: any;
    children: any;
}[];
declare function asSymbol(_ref: any): {
    tag: string;
    attributes: {
        style: string;
    };
    children: {
        tag: string;
        attributes: any;
        children: any;
    }[];
}[];
declare function makeInlineSvgAbstract(params: any): {
    tag: string;
    attributes: any;
    children: any;
}[];
declare function makeLayersTextAbstract(params: any): {
    tag: string;
    attributes: any;
    children: any[];
}[];
declare function makeLayersCounterAbstract(params: any): {
    tag: string;
    attributes: any;
    children: any[];
}[];
declare var styles$1: any;
declare function asFoundIcon(icon: any): {
    found: boolean;
    width: any;
    height: any;
    icon: {
        tag: string;
        attributes: {
            class: string;
            fill?: undefined;
            d?: undefined;
        };
        children: {
            tag: string;
            attributes: {
                class: string;
                fill: string;
                d: any;
            };
        }[];
    } | {
        tag: string;
        attributes: {
            fill: string;
            d: any;
            class?: undefined;
        };
        children?: undefined;
    };
};
declare var missingIconResolutionMixin: {
    found: boolean;
    width: number;
    height: number;
};
declare function maybeNotifyMissing(iconName: any, prefix: any): void;
declare function findIcon(iconName: any, prefix: any): Promise<unknown>;
declare var noop$1: () => void;
declare var p: {
    mark: () => void;
    measure: () => void;
};
declare var preamble: string;
declare var begin: (name: any) => () => void;
declare var end: (name: any) => void;
declare var perf: {
    begin: (name: any) => () => void;
    end: (name: any) => void;
};
declare var noop$2: () => void;
declare function isWatched(node: any): boolean;
declare function hasPrefixAndIcon(node: any): any;
declare function hasBeenReplaced(node: any): any;
declare function getMutator(): any;
declare function createElementNS(tag: any): any;
declare function createElement(tag: any): any;
declare function convertSVG(abstractObj: any): any;
declare function nodeAsComment(node: any): string;
declare var mutators: {
    replace: (mutation: any) => void;
    nest: (mutation: any) => void;
};
declare function performOperationSync(op: any): void;
declare function perform(mutations: any, callback: any): void;
declare var disabled: boolean;
declare function disableObservation(): void;
declare function enableObservation(): void;
declare var mo: any;
declare function observe(options: any): void;
declare function disconnect(): void;
declare function styleParser(node: any): any;
declare function classParser(node: any): any;
declare function attributesParser(node: any): any;
declare function blankMeta(): {
    iconName: null;
    title: null;
    titleId: null;
    prefix: null;
    transform: {
        size: number;
        x: number;
        y: number;
        rotate: number;
        flipX: boolean;
        flipY: boolean;
    };
    symbol: boolean;
    mask: {
        iconName: null;
        prefix: null;
        rest: never[];
    };
    maskId: null;
    extra: {
        classes: never[];
        styles: {};
        attributes: {};
    };
};
declare function parseMeta(node: any): any;
declare var styles$2: any;
declare function generateMutation(node: any): any;
declare var knownPrefixes: Set<unknown>;
declare function onTree(root: any): Promise<unknown>;
declare function onNode(node: any): void;
declare function resolveIcons(next: any): (maybeIconDefinition: any) => any;
declare var render: (iconDefinition: any) => any;
declare var ReplaceElements: {
    mixout: () => {
        icon: (maybeIconDefinition: any) => any;
    };
    hooks: () => {
        mutationObserverCallbacks: (accumulator: any) => any;
    };
    provides: (providers$$1: any) => void;
};
declare var Layers: {
    mixout: () => {
        layer: (assembler: any) => any;
    };
};
declare var LayersCounter: {
    mixout: () => {
        counter: (content: any) => any;
    };
};
declare var LayersText: {
    mixout: () => {
        text: (content: any) => any;
    };
    provides: (providers$$1: any) => void;
};
declare var CLEAN_CONTENT_PATTERN: RegExp;
declare var SECONDARY_UNICODE_RANGE: number[];
declare function hexValueFromContent(content: any): {
    value: any;
    isSecondary: boolean;
};
declare function replaceForPosition(node: any, position: any): Promise<unknown>;
declare function replace(node: any): Promise<[unknown, unknown]>;
declare function processable(node: any): boolean;
declare function searchPseudoElements(root: any): Promise<unknown> | undefined;
declare var PseudoElements: {
    hooks: () => {
        mutationObserverCallbacks: (accumulator: any) => any;
    };
    provides: (providers$$1: any) => void;
};
declare var _unwatched: boolean;
declare var MutationObserver$1: {
    mixout: () => {
        dom: {
            unwatch: () => void;
        };
    };
    hooks: () => {
        bootstrap: () => void;
        noAuto: () => void;
        watch: (params: any) => void;
    };
};
declare var parseTransformString: (transformString: any) => any;
declare var PowerTransforms: {
    mixout: () => {
        parse: {
            transform: (transformString: any) => any;
        };
    };
    hooks: () => {
        parseNodeAttributes: (accumulator: any, node: any) => any;
    };
    provides: (providers: any) => void;
};
declare var ALL_SPACE: {
    x: number;
    y: number;
    width: string;
    height: string;
};
declare function fillBlack(_abstract: any): any;
declare function deGroup(_abstract2: any): any;
declare var Masks: {
    hooks: () => {
        parseNodeAttributes: (accumulator: any, node: any) => any;
    };
    provides: (providers: any) => void;
};
declare var MissingIconIndicator: {
    provides: (providers: any) => void;
};
declare var SvgSymbols: {
    hooks: () => {
        parseNodeAttributes: (accumulator: any, node: any) => any;
    };
};
declare var plugins: ({
    mixout: () => {
        dom: {
            css: typeof css;
            insertCss: typeof ensureCss;
        };
    };
    hooks: () => {
        beforeDOMElementCreation: () => void;
        beforeI2svg: () => void;
    };
} | {
    mixout: () => {
        layer: (assembler: any) => any;
    };
} | {
    mixout: () => {
        counter: (content: any) => any;
    };
} | {
    mixout: () => {
        dom: {
            unwatch: () => void;
        };
    };
    hooks: () => {
        bootstrap: () => void;
        noAuto: () => void;
        watch: (params: any) => void;
    };
} | {
    provides: (providers: any) => void;
} | {
    hooks: () => {
        parseNodeAttributes: (accumulator: any, node: any) => any;
    };
})[];
declare var parse$1: {
    icon: (_icon: any) => {
        prefix: any;
        iconName: any;
    } | null | undefined;
};
declare var icon: any;
declare var propTypes: {
    exports: {};
};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var ReactPropTypesSecret_1: any;
declare var hasRequiredReactPropTypesSecret: any;
declare function requireReactPropTypesSecret(): any;
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var factoryWithThrowingShims: any;
declare var hasRequiredFactoryWithThrowingShims: any;
declare function requireFactoryWithThrowingShims(): any;
declare var reactIs: {
    exports: {};
};
declare var reactIs_development: {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var hasRequiredReactIs_development: any;
declare function requireReactIs_development(): {};
declare var reactIs_production_min: {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var hasRequiredReactIs_production_min: any;
declare function requireReactIs_production_min(): {};
declare var hasRequiredReactIs: any;
declare function requireReactIs(): {};
declare var objectAssign: any;
declare var hasRequiredObjectAssign: any;
declare function requireObjectAssign(): any;
declare var has: any;
declare var hasRequiredHas: any;
declare function requireHas(): any;
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var checkPropTypes_1: any;
declare var hasRequiredCheckPropTypes: any;
declare function requireCheckPropTypes(): any;
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare var factoryWithTypeCheckers: any;
declare var hasRequiredFactoryWithTypeCheckers: any;
declare function requireFactoryWithTypeCheckers(): any;
declare var propTypesExports: {};
declare var PropTypes: any;
declare function ownKeys(object: any, enumerableOnly: any): string[];
declare function _objectSpread2(target: any): any;
declare function _typeof(obj: any): any;
declare function _defineProperty(obj: any, key: any, value: any): any;
declare function _objectWithoutPropertiesLoose(source: any, excluded: any): {};
declare function _objectWithoutProperties(source: any, excluded: any): {};
declare function _toConsumableArray(arr: any): void | any[];
declare function _arrayWithoutHoles(arr: any): any[] | undefined;
declare function _iterableToArray(iter: any): unknown[] | undefined;
declare function _unsupportedIterableToArray(o: any, minLen: any): any[] | undefined;
declare function _arrayLikeToArray(arr: any, len: any): any[];
declare function _nonIterableSpread(): void;
declare function classList(props: any): (string | null)[];
declare function _isNumerical(obj: any): boolean;
declare function camelize(string: any): any;
declare var _excluded: string[];
declare function capitalize(val: any): any;
declare function styleToObject(style: any): any;
declare function convert(createElement: any, element: any): any;
declare var PRODUCTION: boolean;
declare function log(): void;
declare function normalizeIconArgs(icon: any): any;
declare function objectWithKey(key: any, value: any): any;
declare var FontAwesomeIcon: any;
declare var convertCurry: (element: any) => any;
declare var MenuItem: (props: any) => any;

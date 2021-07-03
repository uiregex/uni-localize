/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { UniStoreType } from "@uni/udk";
export namespace Components {
    interface UniLangMenu {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "list": string;
        "mini": boolean;
        "only": boolean;
        "round": boolean;
        "route": string;
        "routing": boolean;
        "select": string;
        "separator": string;
        "shadow": boolean;
        "top": boolean;
        "translatePath": string;
        "type": UniStoreType;
    }
    interface UniLangMenuShadow {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "list": string;
        "mini": boolean;
        "only": boolean;
        "round": boolean;
        "route": string;
        "routing": boolean;
        "select": string;
        "separator": string;
        "shadow": boolean;
        "top": boolean;
        "translatePath": string;
        "type": UniStoreType;
    }
    interface UniLangMenuWrap {
    }
    interface UniTranslate {
        "activate": boolean;
        "bindEnd": string;
        "bindStart": string;
        "feature": string;
        "inactive": boolean;
        "path": string;
        "separator": string;
        "top": boolean;
        "type": UniStoreType;
    }
    interface UniTranslateShadow {
        "activate": boolean;
        "bindEnd": string;
        "bindStart": string;
        "feature": string;
        "inactive": boolean;
        "path": string;
        "separator": string;
        "top": boolean;
        "type": UniStoreType;
    }
}
declare global {
    interface HTMLUniLangMenuElement extends Components.UniLangMenu, HTMLStencilElement {
    }
    var HTMLUniLangMenuElement: {
        prototype: HTMLUniLangMenuElement;
        new (): HTMLUniLangMenuElement;
    };
    interface HTMLUniLangMenuShadowElement extends Components.UniLangMenuShadow, HTMLStencilElement {
    }
    var HTMLUniLangMenuShadowElement: {
        prototype: HTMLUniLangMenuShadowElement;
        new (): HTMLUniLangMenuShadowElement;
    };
    interface HTMLUniLangMenuWrapElement extends Components.UniLangMenuWrap, HTMLStencilElement {
    }
    var HTMLUniLangMenuWrapElement: {
        prototype: HTMLUniLangMenuWrapElement;
        new (): HTMLUniLangMenuWrapElement;
    };
    interface HTMLUniTranslateElement extends Components.UniTranslate, HTMLStencilElement {
    }
    var HTMLUniTranslateElement: {
        prototype: HTMLUniTranslateElement;
        new (): HTMLUniTranslateElement;
    };
    interface HTMLUniTranslateShadowElement extends Components.UniTranslateShadow, HTMLStencilElement {
    }
    var HTMLUniTranslateShadowElement: {
        prototype: HTMLUniTranslateShadowElement;
        new (): HTMLUniTranslateShadowElement;
    };
    interface HTMLElementTagNameMap {
        "uni-lang-menu": HTMLUniLangMenuElement;
        "uni-lang-menu-shadow": HTMLUniLangMenuShadowElement;
        "uni-lang-menu-wrap": HTMLUniLangMenuWrapElement;
        "uni-translate": HTMLUniTranslateElement;
        "uni-translate-shadow": HTMLUniTranslateShadowElement;
    }
}
declare namespace LocalJSX {
    interface UniLangMenu {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "list": string;
        "mini"?: boolean;
        "only"?: boolean;
        "round"?: boolean;
        "route"?: string;
        "routing"?: boolean;
        "select"?: string;
        "separator"?: string;
        "shadow"?: boolean;
        "top"?: boolean;
        "translatePath"?: string;
        "type"?: UniStoreType;
    }
    interface UniLangMenuShadow {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "list": string;
        "mini"?: boolean;
        "only"?: boolean;
        "round"?: boolean;
        "route"?: string;
        "routing"?: boolean;
        "select"?: string;
        "separator"?: string;
        "shadow"?: boolean;
        "top"?: boolean;
        "translatePath"?: string;
        "type"?: UniStoreType;
    }
    interface UniLangMenuWrap {
    }
    interface UniTranslate {
        "activate"?: boolean;
        "bindEnd"?: string;
        "bindStart"?: string;
        "feature"?: string;
        "inactive"?: boolean;
        "path"?: string;
        "separator"?: string;
        "top"?: boolean;
        "type"?: UniStoreType;
    }
    interface UniTranslateShadow {
        "activate"?: boolean;
        "bindEnd"?: string;
        "bindStart"?: string;
        "feature"?: string;
        "inactive"?: boolean;
        "path"?: string;
        "separator"?: string;
        "top"?: boolean;
        "type"?: UniStoreType;
    }
    interface IntrinsicElements {
        "uni-lang-menu": UniLangMenu;
        "uni-lang-menu-shadow": UniLangMenuShadow;
        "uni-lang-menu-wrap": UniLangMenuWrap;
        "uni-translate": UniTranslate;
        "uni-translate-shadow": UniTranslateShadow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-lang-menu": LocalJSX.UniLangMenu & JSXBase.HTMLAttributes<HTMLUniLangMenuElement>;
            "uni-lang-menu-shadow": LocalJSX.UniLangMenuShadow & JSXBase.HTMLAttributes<HTMLUniLangMenuShadowElement>;
            "uni-lang-menu-wrap": LocalJSX.UniLangMenuWrap & JSXBase.HTMLAttributes<HTMLUniLangMenuWrapElement>;
            "uni-translate": LocalJSX.UniTranslate & JSXBase.HTMLAttributes<HTMLUniTranslateElement>;
            "uni-translate-shadow": LocalJSX.UniTranslateShadow & JSXBase.HTMLAttributes<HTMLUniTranslateShadowElement>;
        }
    }
}

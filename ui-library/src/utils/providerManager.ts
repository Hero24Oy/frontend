import { ComponentType, PropsWithChildren } from "react";

export class ProviderManager {
    private readonly _providers: [ComponentType, PropsWithChildren][] = [];
    
    push<P extends any>(Component: React.ComponentType<P>, props?: P): void {
        this._providers.push([Component,props]);
    }

    forEach(callback: (provider:[ComponentType, PropsWithChildren]) => void) {
        this._providers.forEach(callback);
    }
}
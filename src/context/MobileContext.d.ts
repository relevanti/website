import * as React from "react";
import { ReactNode } from "react";
interface MobileProviderProps {
    children: ReactNode;
}
export declare const MobileProvider: React.FC<MobileProviderProps>;
export declare const useMobile: () => boolean;
export {};

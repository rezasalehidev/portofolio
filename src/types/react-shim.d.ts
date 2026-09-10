declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: unknown;
  }
}

declare module "react" {
  export type ReactNode = unknown;
  export type CSSProperties = Record<string, string | number | undefined>;
  export type RefObject<T> = {
    current: T | null;
  };

  export interface MutableRefObject<T> {
    current: T;
  }

  export type FC<P = Record<string, unknown>> = (
    props: P
  ) => JSX.Element | null;

  export type PropsWithChildren<P = Record<string, unknown>> = P & {
    children?: ReactNode;
  };

  export type MouseEventHandler<T = Element> = (event: {
    preventDefault: () => void;
    currentTarget: T;
    clientX: number;
    clientY: number;
  }) => void;

  export type KeyboardEventHandler<T = Element> = (event: {
    key: string;
    preventDefault: () => void;
    currentTarget: T;
  }) => void;

  export function useState<S>(
    initialState: S | (() => S)
  ): [S, (value: S | ((previous: S) => S)) => void];

  export function useEffect(
    effect: () => void | (() => void),
    deps?: readonly unknown[]
  ): void;

  export function useLayoutEffect(
    effect: () => void | (() => void),
    deps?: readonly unknown[]
  ): void;

  export function useRef<T>(initialValue: T): MutableRefObject<T>;
  export function useRef<T>(initialValue: T | null): RefObject<T>;
  export function useRef<T = unknown>(): MutableRefObject<T | undefined>;

  export function useMemo<T>(factory: () => T, deps?: readonly unknown[]): T;

  export function useCallback<T extends (...args: never[]) => unknown>(
    callback: T,
    deps?: readonly unknown[]
  ): T;

  const React: {
    StrictMode: FC<{ children?: ReactNode }>;
    useEffect: typeof useEffect;
    useLayoutEffect: typeof useLayoutEffect;
    useState: typeof useState;
    useRef: typeof useRef;
    useMemo: typeof useMemo;
    useCallback: typeof useCallback;
    FC: FC;
  };

  export default React;
}

declare module "react-dom" {
  export function render(
    element: unknown,
    container: Element | DocumentFragment | null
  ): void;
}

declare module "react-dom/client" {
  export function createRoot(container: Element | DocumentFragment): {
    render: (element: unknown) => void;
  };
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: unknown;
  }
}

declare module "react" {
  export type ReactNode = unknown;

  export interface RefObject<T> {
    current: T | null;
  }

  export type FC<P = Record<string, unknown>> = (
    props: P
  ) => JSX.Element | null;

  export function useState<S>(
    initialState: S | (() => S)
  ): [S, (value: S | ((previous: S) => S)) => void];

  export function useEffect(
    effect: () => void | (() => void),
    deps?: readonly unknown[]
  ): void;

  export function useRef<T>(initialValue: T | null): RefObject<T>;

  const React: {
    StrictMode: FC<{ children?: ReactNode }>;
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

export type Node = {
    constel?: string;
    x: number;
    y: number;
    popup?: HTMLImageElement;
};
export type Constellation = {
    x: number;
    y: number;
    size: number;
    img: HTMLImageElement;
};
export type Edge = {
    from: number;
    to: number
};
export type TraverseGraphFunc = (startId: number, nodes: Record<number, Node>, edges: Edge[]) => Edge[][];
export type ConstructGraphFunc = (nodes: Record<number, Node>) => Edge[];

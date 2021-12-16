export interface Action<TPayload> {
  readonly type: string;
  readonly payload?: TPayload;
}

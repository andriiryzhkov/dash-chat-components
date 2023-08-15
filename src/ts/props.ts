/**
 * Every Dash components are given these props.
 * Use with your own props:
 * ```
 * type Props = {
 *     my_prop: string;
 * } & DashComponentProps;
 * ```
 * Recommended to use `type` instead of `interface` so you can define the
 * order of props with types concatenation.
 */
export type DashComponentProps = {
  /**
   * Unique ID to identify this component in Dash callbacks.
   */
  id?: string;
  /**
   * Often used with CSS to style elements with common properties.
   */
  className?: string;
  /**
   * Defines CSS styles which will override styles previously set.
   */
  style?: any;
  /**
   * Update props to trigger callbacks.
   */
  setProps: (props: Record<string, any>) => void;
};

export type PersistenceProps = {
  /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
  persistence?: boolean | string | number;
  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props?: Array<string>;
  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type?: "local" | "session" | "memory";
};

export type LoadingStateProps = {
  /**
   * Object that holds the loading state object coming from dash-renderer
   */
  loading_state?: {
    /**
     * Determines if the component is loading or not
     */
    is_loading: boolean;
    /**
     * Holds which property is loading
     */
    prop_name: string;
    /**
     * Holds the name of the component that is loading
     */
    component_name: string;
  };
};

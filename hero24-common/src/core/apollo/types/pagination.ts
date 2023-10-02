import {
  DEFAULT_INPUT_NAME,
  DEFAULT_RESPONSE_NAME,
  SortOrder,
} from '../constants';

export type GraphQlResponse<Data> = Record<typeof DEFAULT_RESPONSE_NAME, Data>;

export type GraphQlInput<Variables> = Record<
  typeof DEFAULT_INPUT_NAME,
  Variables
>;

export type GraphQlPaginationEdge<Node, Cursor> = {
  cursor: Cursor;
  node: Node;
};

export type GraphQlPagination<Node, Cursor = string> = {
  edges: GraphQlPaginationEdge<Node, Cursor>[];
  endCursor: Cursor | null;
  hasNextPage: boolean;
  total: number;
};

export type GraphQlPaginationArguments<Filter, Columns extends string> = {
  filter?: Filter;
  limit?: number;
  offset?: number;
  ordersBy?: GraphQlOrder<Columns>[];
};

export type GraphQlOrder<Column> = {
  column: Column;
  order: SortOrder;
};
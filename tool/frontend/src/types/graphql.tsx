import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CategoryType = {
   __typename?: 'CategoryType',
  id: Scalars['ID'],
  name: Scalars['String'],
  ingredients: Array<IngredientType>,
};

export type IngredientType = {
   __typename?: 'IngredientType',
  id: Scalars['ID'],
  name: Scalars['String'],
  notes: Scalars['String'],
  category: CategoryType,
};

export type Query = {
   __typename?: 'Query',
  allCategories?: Maybe<Array<Maybe<CategoryType>>>,
  allIngredients?: Maybe<Array<Maybe<IngredientType>>>,
};
export type AllIngredientsQueryVariables = {};


export type AllIngredientsQuery = (
  { __typename?: 'Query' }
  & { allIngredients: Maybe<Array<Maybe<(
    { __typename?: 'IngredientType' }
    & Pick<IngredientType, 'id' | 'name' | 'notes'>
    & { category: (
      { __typename?: 'CategoryType' }
      & Pick<CategoryType, 'id'>
    ) }
  )>>> }
);

export const AllIngredientsDocument = gql`
    query AllIngredients {
  allIngredients {
    id
    name
    notes
    category {
      id
    }
  }
}
    `;

    export function useAllIngredientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllIngredientsQuery, AllIngredientsQueryVariables>) {
      return ApolloReactHooks.useQuery<AllIngredientsQuery, AllIngredientsQueryVariables>(AllIngredientsDocument, baseOptions);
    }
      export function useAllIngredientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllIngredientsQuery, AllIngredientsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllIngredientsQuery, AllIngredientsQueryVariables>(AllIngredientsDocument, baseOptions);
      }
      
export type AllIngredientsQueryHookResult = ReturnType<typeof useAllIngredientsQuery>;
export type AllIngredientsQueryResult = ApolloReactCommon.QueryResult<AllIngredientsQuery, AllIngredientsQueryVariables>;
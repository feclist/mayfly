import React from 'react'
import SeedForm from 'components/Forms/SeedForm'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { IngredientType } from 'types/graphql'
import { useAllIngredientsQuery } from 'types/graphql'

gql`
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
`

const Main: React.FC = () => {
  const { loading, error, data } = useAllIngredientsQuery()
  console.log(loading, error, data)

  return (
    <div className="pa4" style={{ height: '100vh' }}>
      <SeedForm />
    </div>
  )
}

export default Main

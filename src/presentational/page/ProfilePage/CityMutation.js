import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation CityMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id
        isPublicProfileComplete
        publicAddress {
          address
          country
          city
          zip
          position {
            lat,
            lng
          }
        }
      }
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input
    },
    updater: (store) => {
       const payload = store.getRootField('upUser');
      const newItem = payload.getLinkedRecord('user')
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('publicAddress'), 'publicAddress')
      onCompleted()
    },
    onError
  })
}

export default {commit}
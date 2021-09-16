import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation ChangePasswordMutation($input: changePasswordInput!) {
    changePassword(input: $input) {
      clientMutationId,
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
      onCompleted()
    },
    onError
  })
}

export default {commit}

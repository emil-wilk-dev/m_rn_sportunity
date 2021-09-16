/**
 * @flow
 * @relayHash ffca6e1547cb35ba4baab56036687c5a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatSportunity_viewer$ref = any;
export type ChatSportunityRefetchQueryVariables = {|
  id?: ?string,
  queryChat: boolean,
|};
export type ChatSportunityRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ChatSportunity_viewer$ref
  |}
|};
export type ChatSportunityRefetchQuery = {|
  variables: ChatSportunityRefetchQueryVariables,
  response: ChatSportunityRefetchQueryResponse,
|};
*/


/*
query ChatSportunityRefetchQuery(
  $id: ID
  $queryChat: Boolean!
) {
  viewer {
    ...ChatSportunity_viewer_1NWXMO
    id
  }
}

fragment ChatSportunity_viewer_1NWXMO on Viewer {
  ...ChatDetailPage_viewer
  chats(id: $id, first: 1) @include(if: $queryChat) {
    edges {
      node {
        id
        ...ChatDetailPage_chat
      }
    }
  }
}

fragment ChatDetailPage_viewer on Viewer {
  me {
    id
  }
  ...MessagesList_viewer
}

fragment ChatDetailPage_chat on Chat {
  id
  users {
    id
    pseudo
    ...UserItem_user
  }
  sportunity {
    id
    title
  }
  circle {
    id
    name
  }
  read
  messages(last: 20) {
    pageInfo {
      hasPreviousPage
    }
    edges {
      node {
        id
        text
        author {
          id
          firstName
          lastName
          pseudo
          avatar
        }
        created
      }
    }
  }
}

fragment UserItem_user on User {
  id
  pseudo
  avatar
}

fragment MessagesList_viewer on Viewer {
  me {
    id
    pseudo
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryChat",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = [
  v1,
  v2,
  v3
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ChatSportunityRefetchQuery",
  "id": null,
  "text": "query ChatSportunityRefetchQuery(\n  $id: ID\n  $queryChat: Boolean!\n) {\n  viewer {\n    ...ChatSportunity_viewer_1NWXMO\n    id\n  }\n}\n\nfragment ChatSportunity_viewer_1NWXMO on Viewer {\n  ...ChatDetailPage_viewer\n  chats(id: $id, first: 1) @include(if: $queryChat) {\n    edges {\n      node {\n        id\n        ...ChatDetailPage_chat\n      }\n    }\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment ChatDetailPage_chat on Chat {\n  id\n  users {\n    id\n    pseudo\n    ...UserItem_user\n  }\n  sportunity {\n    id\n    title\n  }\n  circle {\n    id\n    name\n  }\n  read\n  messages(last: 20) {\n    pageInfo {\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        text\n        author {\n          id\n          firstName\n          lastName\n          pseudo\n          avatar\n        }\n        created\n      }\n    }\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  pseudo\n  avatar\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChatSportunityRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ChatSportunity_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryChat",
                "variableName": "queryChat",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatSportunityRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": v4
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryChat",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "chats",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1,
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "id",
                    "type": "ID"
                  }
                ],
                "concreteType": "ChatConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ChatEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Chat",
                        "plural": false,
                        "selections": [
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "users",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v4
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunity",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sportunity",
                            "plural": false,
                            "selections": [
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "title",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "circle",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Circle",
                            "plural": false,
                            "selections": [
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "name",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "read",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "messages",
                            "storageKey": "messages(last:20)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "last",
                                "value": 20,
                                "type": "Int"
                              }
                            ],
                            "concreteType": "MessageConnection",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "pageInfo",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "PageInfo",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "hasPreviousPage",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "edges",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "MessageEdge",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Message",
                                    "plural": false,
                                    "selections": [
                                      v1,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "text",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "author",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "plural": false,
                                        "selections": [
                                          v1,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "firstName",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "lastName",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          v2,
                                          v3
                                        ]
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "created",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e383d159997bc66df56c8c39406d121b';
module.exports = node;

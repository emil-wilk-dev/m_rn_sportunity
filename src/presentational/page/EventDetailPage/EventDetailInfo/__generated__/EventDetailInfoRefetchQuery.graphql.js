/**
 * @flow
 * @relayHash f3d684541498a6a736ef0160c0870566
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailInfo_viewer$ref = any;
export type EventDetailInfoRefetchQueryVariables = {|
  sportunityRelaunchId: string,
  queryRelaunch: boolean,
  superToken?: ?string,
  querySuperMe: boolean,
  userToken?: ?string,
  queryAuthorizedAccounts: boolean,
|};
export type EventDetailInfoRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventDetailInfo_viewer$ref
  |}
|};
export type EventDetailInfoRefetchQuery = {|
  variables: EventDetailInfoRefetchQueryVariables,
  response: EventDetailInfoRefetchQueryResponse,
|};
*/


/*
query EventDetailInfoRefetchQuery(
  $sportunityRelaunchId: String!
  $queryRelaunch: Boolean!
  $superToken: String
  $querySuperMe: Boolean!
  $userToken: String
  $queryAuthorizedAccounts: Boolean!
) {
  viewer {
    ...EventDetailInfo_viewer_aZ2Ke
    id
  }
}

fragment EventDetailInfo_viewer_aZ2Ke on Viewer {
  ...VoteForManOfTheGame_viewer
  ...PriceView_viewer
  ...ButtonSportunity_viewer
  ...ParticipantsList_viewer
  ...ButtonFeedback_viewer
  ...StatisticFillingModal_viewer
  ...EventStatistics_viewer
  ...TopContent_viewer
  relaunchInviteds(sportunityID: $sportunityRelaunchId) @include(if: $queryRelaunch) {
    id
  }
  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {
    id
    avatar
    pseudo
    accounts {
      id
      avatar
      token
      pseudo
    }
  }
  superMe(superToken: $superToken) @include(if: $querySuperMe) {
    id
    pseudo
    avatar
    subAccounts {
      id
      avatar
      pseudo
      token
    }
  }
}

fragment VoteForManOfTheGame_viewer on Viewer {
  me {
    id
  }
  statisticPreferences {
    private
  }
}

fragment PriceView_viewer on Viewer {
  me {
    id
  }
}

fragment ButtonSportunity_viewer on Viewer {
  id
  me {
    id
    isProfileComplete
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
}

fragment ParticipantsList_viewer on Viewer {
  id
  ...AddParticipants_viewer
}

fragment ButtonFeedback_viewer on Viewer {
  id
  me {
    id
  }
}

fragment StatisticFillingModal_viewer on Viewer {
  ...SportunityStatisticsModal_viewer
  ...ParticipantsStatisticsModal_viewer
}

fragment EventStatistics_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    avatar
  }
}

fragment TopContent_viewer on Viewer {
  id
}

fragment SportunityStatisticsModal_viewer on Viewer {
  id
}

fragment ParticipantsStatisticsModal_viewer on Viewer {
  id
}

fragment AddParticipants_viewer on Viewer {
  id
  ...AddUser_viewer
}

fragment AddUser_viewer on Viewer {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityRelaunchId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryRelaunch",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "superToken",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "querySuperMe",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userToken",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryAuthorizedAccounts",
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailInfoRefetchQuery",
  "id": null,
  "text": "query EventDetailInfoRefetchQuery(\n  $sportunityRelaunchId: String!\n  $queryRelaunch: Boolean!\n  $superToken: String\n  $querySuperMe: Boolean!\n  $userToken: String\n  $queryAuthorizedAccounts: Boolean!\n) {\n  viewer {\n    ...EventDetailInfo_viewer_aZ2Ke\n    id\n  }\n}\n\nfragment EventDetailInfo_viewer_aZ2Ke on Viewer {\n  ...VoteForManOfTheGame_viewer\n  ...PriceView_viewer\n  ...ButtonSportunity_viewer\n  ...ParticipantsList_viewer\n  ...ButtonFeedback_viewer\n  ...StatisticFillingModal_viewer\n  ...EventStatistics_viewer\n  ...TopContent_viewer\n  relaunchInviteds(sportunityID: $sportunityRelaunchId) @include(if: $queryRelaunch) {\n    id\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {\n    id\n    avatar\n    pseudo\n    accounts {\n      id\n      avatar\n      token\n      pseudo\n    }\n  }\n  superMe(superToken: $superToken) @include(if: $querySuperMe) {\n    id\n    pseudo\n    avatar\n    subAccounts {\n      id\n      avatar\n      pseudo\n      token\n    }\n  }\n}\n\nfragment VoteForManOfTheGame_viewer on Viewer {\n  me {\n    id\n  }\n  statisticPreferences {\n    private\n  }\n}\n\nfragment PriceView_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment ButtonSportunity_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n}\n\nfragment ParticipantsList_viewer on Viewer {\n  id\n  ...AddParticipants_viewer\n}\n\nfragment ButtonFeedback_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n\nfragment StatisticFillingModal_viewer on Viewer {\n  ...SportunityStatisticsModal_viewer\n  ...ParticipantsStatisticsModal_viewer\n}\n\nfragment EventStatistics_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    avatar\n  }\n}\n\nfragment TopContent_viewer on Viewer {\n  id\n}\n\nfragment SportunityStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment ParticipantsStatisticsModal_viewer on Viewer {\n  id\n}\n\nfragment AddParticipants_viewer on Viewer {\n  id\n  ...AddUser_viewer\n}\n\nfragment AddUser_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailInfoRefetchQuery",
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
            "name": "EventDetailInfo_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "queryAuthorizedAccounts",
                "variableName": "queryAuthorizedAccounts",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryRelaunch",
                "variableName": "queryRelaunch",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySuperMe",
                "variableName": "querySuperMe",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityRelaunchId",
                "variableName": "sportunityRelaunchId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "superToken",
                "variableName": "superToken",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userToken",
                "variableName": "userToken",
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
    "name": "EventDetailInfoRefetchQuery",
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
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentMethods",
                "storageKey": null,
                "args": null,
                "concreteType": "PaymentMethod",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardType",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cardMask",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expirationDate",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "private",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySuperMe",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "superMe",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "superToken",
                    "variableName": "superToken",
                    "type": "String"
                  }
                ],
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": [
                      v1,
                      v3,
                      v2,
                      v4
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryAuthorizedAccounts",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "authorizedAccounts",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "userToken",
                    "variableName": "userToken",
                    "type": "String"
                  }
                ],
                "concreteType": "AuthorizedAccounts",
                "plural": false,
                "selections": [
                  v1,
                  v3,
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "accounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorizedAccountsList",
                    "plural": true,
                    "selections": [
                      v1,
                      v3,
                      v4,
                      v2
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryRelaunch",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "relaunchInviteds",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "sportunityID",
                    "variableName": "sportunityRelaunchId",
                    "type": "String!"
                  }
                ],
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  v1
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
(node/*: any*/).hash = '195a75a25005c4ba495cd7e519784444';
module.exports = node;

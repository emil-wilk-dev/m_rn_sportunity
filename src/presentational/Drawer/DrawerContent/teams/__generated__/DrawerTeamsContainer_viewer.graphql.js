/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawerTeamsContainer_viewer$ref: FragmentReference;
export type DrawerTeamsContainer_viewer = {|
  +me: ?{|
    +id: string
  |},
  +superMe?: ?{|
    +id: ?string,
    +pseudo: ?string,
    +avatar: ?string,
    +profileType: ?UserProfileType,
    +isSubAccount: ?boolean,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: ?string,
      +pseudo: ?string,
      +avatar: ?string,
      +token: ?string,
      +unreadChats: ?number,
      +numberOfUnreadNotifications: ?number,
    |}>,
    +userPreferences: ?{|
      +areSubAccountsActivated: ?boolean
    |},
  |},
  +$refType: DrawerTeamsContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "DrawerTeamsContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "superToken",
      "type": "String",
      "defaultValue": null
    }
  ],
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
        v0
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "query",
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
            v0,
            v1,
            v2,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "profileType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isSubAccount",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subAccounts",
              "storageKey": null,
              "args": null,
              "concreteType": "SubAccounts",
              "plural": true,
              "selections": [
                v0,
                v1,
                v2,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "token",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "unreadChats",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "numberOfUnreadNotifications",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "userPreferences",
              "storageKey": null,
              "args": null,
              "concreteType": "SuperUserPreferences",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "areSubAccountsActivated",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '26a490438a9ab5ad1adec93c74bcd438';
module.exports = node;

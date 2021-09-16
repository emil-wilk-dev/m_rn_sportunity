/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportList_allSports$ref = any;
type SportList_sports$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PublicCirclesFilter_viewer$ref: FragmentReference;
export type PublicCirclesFilter_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +sports: ?$ReadOnlyArray<?{|
      +$fragmentRefs: SportList_sports$ref
    |}>,
  |},
  +sports?: ?{|
    +$fragmentRefs: SportList_allSports$ref
  |},
  +$refType: PublicCirclesFilter_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PublicCirclesFilter_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "querySports",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "sportFilter",
      "type": "SportFilter",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sports",
          "storageKey": null,
          "args": null,
          "concreteType": "SportDescriptor",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportList_sports",
              "args": null
            }
          ]
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "querySports",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sports",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "sportFilter",
              "type": "SportFilter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }
          ],
          "concreteType": "SportConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportList_allSports",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1de5aa39f5115f0a91c619106a76d1fd';
module.exports = node;

import { component, node, app, div, TMintContent } from "mint";

import { Route, Router, RouteType } from "thyme";

import {
  OreganoAppComponent,
  Header,
  Content,
  oreganoSettings,
  Pages,
  List,
  Manage,
  PrimaryButtons,
  AddAppButton,
  UpLevelAppButton,
  TList,
  EditListItem,
  DeleteListItem,
  TitleField,
  MessageField,
} from "oregano-core";

oreganoSettings.sessionStorageKey = "oregano-lite-3-key";

const _routes: Array<[string, TMintContent]> = [
  [
    "list",
    node<TList>(List, { itemOptions: [EditListItem, DeleteListItem] }, []),
  ],
  [
    "manage",
    node(Manage, null, [
      div({ class: "grid-12" }, node(TitleField)),
      div({ class: "grid-12" }, node(MessageField)),
    ]),
  ],
];
const routes = _routes.map(
  ([target, content]) => new Route({ target, type: RouteType["^"] }, content)
);

const content = [node(AddAppButton), node(UpLevelAppButton)];

const App = component("main", OreganoAppComponent, null, [
  node(Header, {
    headerTitle: "Oregano",
    version: "lite",
  }),

  node(Content, null, [
    node(PrimaryButtons, null, content),
    node(Pages, null, node(Router, { routes })),
  ]),
]);

app(document.body, {}, node(App));

import _package from "../package.json";

import { component, element, app, MintComponent, div } from "mint";

import { Header, List, Manage, appInit, appStore } from "oregano-core";

appStore.mainButtons = [
  "Add",
  "Edit",
  "Level up",
  "Up to root",
  "Paste",
  "Save",
];
appStore.secondaryButtons = [];
appStore.hasActions = false;
appStore.sessionStorageKey = "oregano-lite-key";
appStore.headerTitle = "Oregano Lite";
appStore.version = _package.version;

class AppComponent extends MintComponent {
  constructor() {
    super();

    this.oninsert = function () {
      appInit();
    };

    appStore.connect(this);
  }
}

const App = component("main", AppComponent, null, [
  element(Header),
  div({ class: "pages" }, [
    element(List, { mIf: "showList" }),
    element(Manage, { mIf: "showManage" }),
  ]),
]);

app(document.body, {}, [element(App)]);

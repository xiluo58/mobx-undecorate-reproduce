import { inject, observer } from "mobx-react";

import React from "react";
import { computed } from "mobx";

@inject("store")
@observer
export class ActionItems extends React.Component<any, {}> {
    @computed private get name() {
        return "name";
    }

    public render() {
        return <div>{this.name}</div>;
    }
}

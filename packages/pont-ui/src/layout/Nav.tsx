/**
 * @author jasonHzq
 * @description
 */
import { Button, Icon, Select } from "@alicloud/console-components";
import { PontSpec } from "pont-spec";
import * as React from "react";
import { PontUIService } from "../service";
import { LayoutContext } from "./context";
import "./Nav.less";

export class NavProps {}

export const Nav: React.FC<NavProps> = (props) => {
  const { currSpec, changeCurrSpec, specs } = LayoutContext.useContainer();

  return (
    <div className="pont-ui-nav">
      <div className="title">pont UI</div>
      <div className="last-time">
        <span>最后一次拉取时间:</span>
      </div>
      <div className="operator">
        <Button
          text
          onClick={() => {
            PontUIService.syncRemoteSpec().then((res) => console.log(res));
          }}
        >
          <Icon size={"large"} type="redo" />
        </Button>
      </div>
      {specs.length > 1 ? (
        <Select
          value={currSpec.name}
          onChange={(value) => {
            changeCurrSpec(specs.find((spec) => spec.name === value) as PontSpec);
          }}
          dataSource={specs.map((spec) => spec.name)}
        ></Select>
      ) : null}
    </div>
  );
};

Nav.defaultProps = new NavProps();

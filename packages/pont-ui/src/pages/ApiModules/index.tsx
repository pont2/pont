/**
 * @description API Modules
 * @autho leehao
 */

import { Collapse } from "@alifd/next";
import React, { FC } from "react";
import "./index.less";
import { LayoutContext } from "../../layout/context";
import { API } from "../API";
import { Mod } from "pont-spec";

export class ApiModulesProps {
  module?: Mod;
}
const { Panel } = Collapse;
export const ApiModules: FC<ApiModulesProps> = (props) => {
  const { selectModule } = LayoutContext.useContainer();
  const mod = props?.module || selectModule;
  return (
    <>
      <Collapse expandedKeys={[mod?.name]}>
        <Panel
          className="api-module"
          key={mod?.name}
          title={
            <div className="mod-name">
              <span className="desc">{mod?.description}</span>
              <span className="name">{mod?.name}</span>
            </div>
          }
        >
          {mod?.interfaces.map((api) => (
            <API selectedApi={api} />
          ))}
        </Panel>
      </Collapse>
    </>
  );
};

ApiModules.defaultProps = new ApiModulesProps();

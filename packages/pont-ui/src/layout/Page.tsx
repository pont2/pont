/**
 * @author jasonHzq
 * @description API Page Content
 */
import * as React from "react";
import * as PontSpec from "pont-spec";
import { LayoutContext } from "./context";
import "./Page.less";
import { Collapse, Table } from "@alicloud/console-components";
import { API } from "../pages/API";
import { BaseClass } from "../pages/BaseClass";
import { ApiModules } from "../pages/ApiModules";

export class PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const { specs, currSpec, selectedMeta } = LayoutContext.useContainer();
  console.log(selectedMeta);

  return (
    <div className="pont-ui-page">
      {(selectedMeta as PontSpec.Interface)?.path ? <ApiModules /> : <ApiModules module={currSpec?.mods[0]} />}
      {(selectedMeta as PontSpec.BaseClass)?.schema ? (
        <BaseClass selectedClass={selectedMeta as PontSpec.BaseClass} />
      ) : null}
    </div>
  );
};

Page.defaultProps = new PageProps();

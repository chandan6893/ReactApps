import React, { Component } from "react";
import { Dummy } from "./Dummy";
import { UIBackup } from "./UIBackup";

export class ErrorBoundary extends Component {
    render(){
        return (
          //   <>
          //     <UIBackup>
          //       <div>Error Component</div>
          //       <Dummy Country="India" />
          //       <Dummy Country="Russia" />
          //       {/* <Dummy Country="usa" /> */}
          //     </UIBackup>
          //   </>

          <>
            <div>Error Component</div>
            <UIBackup>
              <Dummy Country="India" />
            </UIBackup>
            <UIBackup>
              <Dummy Country="Russia" />
            </UIBackup>
            <UIBackup>
              <Dummy Country="usa" />
            </UIBackup>
          </>
        );
    }
}
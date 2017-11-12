//bootstrap react comp into browser
import 'whatwg-fetch';
import {render} from "react-dom";
import {App} from "./app/App";
import Router from "./app/Router"
import React from "react";
render(<Router/>,
    document.getElementById("root")
);
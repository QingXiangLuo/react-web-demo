import React from "react";
import {Redirect} from "react-router-dom";
import Home from './containers/home/index';

export default function createRoutes(tabItems) {
    return [
        {
            path: "/home",
            component: Home,
            exact: true
        },
    ]
}
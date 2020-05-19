'use strict';

import { app, BrowserWindow } from 'electron';

import path from 'path';

class App {
  constructor() {
    this.landingWindow = null;
  };

  createLandingWindow = () => {
    this.landingWindow = new BrowserWindow({
      width: 600,
      height: 600,
      useContentSize: true,
      alwaysOnTop: true,
      // titleBarStyle: "hidden",
      // frame: false,
    });

    const filePath = path.join(__dirname, "../../renderer/landing/index.html");

    this.landingWindow.loadFile(filePath);

    this.landingWindow.webContents.openDevTools();

    this.landingWindow.once("ready-to-show", this.landingWindow.show);

    this.landingWindow.on("closed", () => {
      this.landingWindow = null;
    });
  };

  init = () => {
    this.lifecycle();
  };

  lifecycle = () => {
    app.on("ready", () => {
      this.createLandingWindow();
    });
  };
};

new App().init();

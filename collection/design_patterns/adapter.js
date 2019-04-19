/**
 * 适配器模式
 * 特性：适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。
 * 包装模式。
 * @class Adapter
 */

class HDMI {
  initHDMI() {
    return "HDMI 连接";
  }
  show() {
    return "HDMI 接口";
  }
}

class VGA {
  initVGA() {
    return "VGA 连接";
  }
  show() {
    return "VGA 接口";
  }
}

class Adapter {
  constructor() {
    this.HDMI = new HDMI();
    this.VGA = new VGA();
  }

  init() {
    return this.HDMI.initHDMI() + this.VGA.initVGA();
  }
  show() {
    return this.HDMI.show() + this.VGA.show();
  }
}

const adapter = new Adapter();
console.log(adapter.init());
console.log(adapter.show());

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("不同设备制造商生产的设备可能存在差异化的解锁方式，建议您借助互联网搜索适用于您的解锁方案，我们在这里提供了部分设备的解锁教程：")]),t._v(" "),s("ul",[s("li",[t._v("锤子 - 甩锅给导演填坑")]),t._v(" "),s("li",[t._v("小米 - "),s("a",{attrs:{href:"http://www.miui.com/unlock/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("申请解锁小米手机"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("一加 - 甩锅给电大填坑")]),t._v(" "),s("li",[t._v("整理中...")])]),t._v(" "),t._m(4),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载 Recovery - 例如 "),s("a",{attrs:{href:"https://twrp.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TWRP"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("您可以前往 "),s("a",{attrs:{href:"https://download.mokeedev.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("魔趣下载站"),s("OutboundLink")],1),t._v(" 的设备页面，点击 "),s("strong",[t._v("Recovery 下载")]),t._v("。")]),t._v(" "),s("li",[t._v("如果没有找到适用于您设备的 Recovery，请借助互联网搜索设备维护者或资深玩家发布的教程。")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载你想要安装的魔趣ROM包。")]),t._v(" "),s("ul",[s("li",[t._v("可选项，下载第三方扩展包，例如 "),s("a",{attrs:{href:"https://opengapps.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenGapps"),s("OutboundLink")],1)])])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"解锁引导加载程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解锁引导加载程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 解锁引导加载程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v("在刷入第三方ROM前，您可能需要先解锁设备，该步骤只需执行一次。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("重要")]),this._v(" "),e("p",[this._v("解锁引导加载程序将删除设备上的所有数据！在开始之前，请确保您已将想要保留的数据备份到您的 PC 或 Google 账户中。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通过-fastboot-安装-recovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过-fastboot-安装-recovery","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过 fastboot 安装 Recovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("通过USB将您的设备连接到电脑。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("在电脑上打开命令提示符（Windows）或 终端 （Linux 或 macOS）并输入：")]),this._v(" "),e("p",[e("code",[this._v("adb reboot bootloader")])]),this._v(" "),e("p",[this._v("您也可以通过组合键启动 fastboot 模式：")]),this._v(" "),e("ul",[e("li",[this._v("关闭设备后，按住音量调低 + 电源键，直到屏幕上方出现“FASTBOOT”字样，然后松开。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("一旦设备处于 fastboot 模式，请通过键入以下内容验证您的 PC 是否找到它：")]),this._v(" "),e("p",[e("code",[this._v("fastboot devices")])]),this._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v('如果在 Linux 或 macOS 上看到 "no permissions fastboot"，请在 ROOT 下运行该命令。')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("将 Recovery 刷入到您的设备。")]),this._v(" "),e("p",[e("code",[this._v("fastboot flash recovery twrp-x.x.x-x-x.img")])]),this._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v("请根据 Recovery 的名称对命令做相应的调整。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("现在进入 Recovery 模式以验证安装：")]),this._v(" "),e("ul",[e("li",[this._v("关闭设备后，按住音量调高 + 电源键，直到进入 Recovery 模式，然后松开。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通过-recovery-安装魔趣rom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过-recovery-安装魔趣rom","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过 Recovery 安装魔趣ROM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("如果您尚未进入 Recovery 模式，请重启到 Recovery 模式。")]),this._v(" "),e("ul",[e("li",[this._v("关闭设备后，按住音量调高 + 电源键，直到进入 Recovery 模式，然后松开。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("点击主界面的 WIPE 按钮。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("点击 Format Data 执行格式化过程。这将删除加密以及存储在内部存储上的所有文件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("定位到您存储在内部存储上的魔趣ROM包，并执行安装过程。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("使用同样的方式安装其它第三方扩展包。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("安装结束后，返回主菜单，点击 Reboot, 然后点击 System。")])])}],!1,null,null,null);r.options.__file="getting_started.md";e.default=r.exports}}]);
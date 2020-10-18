window.exports = {
	"copy_text": { // 注意：键对应的是 plugin.json 中的 features.code
		mode: "none", // 用于无需 UI 显示，执行一些简单的代码
		args: {
			enter: (action) => {
				// action = { code, type, payload }
				utools.copyText(action.payload)
				utools.outPlugin()
				utools.hideMainWindow()
				utools.showNotification('已复制')
			}
		}
	}
}
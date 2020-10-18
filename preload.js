window.exports = {
	// 注意：键对应的是 plugin.json 中的 features.code
	"copy_text": {
		// 用于无需 UI 显示，执行一些简单的代码
		// 除此之外，utools还提供了列表、文档等模式
		mode: "none",
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

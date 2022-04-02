const fs = require('fs')

const getDocTitles = path => {
  let docTitles = []
  let fileType = /\.md$/ //匹配以.md结尾的文件
  // 开始便利路径处理
  fs.readdirSync(path).forEach(file => {
    let docInfo = fs.statSync(path + '/' + file)
    if (docInfo.isFile()) {
      if (fileType.test(file)) {
        docTitles.push(file.replace('.md', ''))
      }
    }
  })
  return docTitles
}

module.exports = {
  getDocTitles
}

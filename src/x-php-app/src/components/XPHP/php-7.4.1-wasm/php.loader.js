export default (PHP, default_code = '<?php phpinfo() ') => {
  let phpModule = null

  const outputElement = document.getElementById('output')

  const outputArea = outputElement.contentWindow.document

  outputArea.open()

  const init = () => {
    let code = default_code
    code = code.replace(/^\s*<\?php/, '')
    code = code + '\necho PHP_EOL;'

    let ret = phpModule.ccall('pib_eval', 'number', ['string'], [code])

    if (ret != 0) {
      outputArea.write('Error, please check your code')
    }

    outputArea.close()

    outputElement.contentDocument.body.style.margin = 0
    outputElement.contentDocument.body.style.padding = 0

  }

  const print = text => {
    outputArea.write(text)
  }

  const phpModuleOptions = {
    postRun: [init],
    print,
    printErr: print,
  }

  phpModule = PHP(phpModuleOptions)
}

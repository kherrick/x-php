export default (default_code = '<?php phpinfo(); ') => {
  let phpModule = null;

  const output_area = document.getElementById('output').contentWindow.document;
  output_area.open();

  const init = () => {
    let code = default_code
    code = code.replace(/^\s*<\?php/, '') // remove <?php
    code = code + '\necho PHP_EOL;' // flush line buffer

    let ret = phpModule.ccall('pib_eval', 'number', ['string'], [code])

    if (ret != 0) {
      output_area.write('Error, please check your code')
    }

    output_area.close();
  }

  const print = text => {
    output_area.write(text)
  }

  const phpModuleOptions = {
    postRun: [init],
    print,
    printErr: print,
  }

  phpModule = PHP(phpModuleOptions)
}

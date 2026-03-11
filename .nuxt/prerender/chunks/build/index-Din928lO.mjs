import { $dt } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styled/dist/index.mjs';
import * as utils from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/index.mjs';

function blockBodyScroll() {
  utils.blockBodyScroll({
    variableName: $dt("scrollbar.width").name
  });
}
function unblockBodyScroll() {
  utils.unblockBodyScroll({
    variableName: $dt("scrollbar.width").name
  });
}

export { blockBodyScroll as b, unblockBodyScroll as u };

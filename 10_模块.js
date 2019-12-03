// 10.1 总是使用模组 (import/export) 而不是其他非标准模块系统。你可以编译为你喜欢的模块系统。

// 为什么？模块就是未来，让我们开始迈向未来吧。

// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;

// 10.2 不要使用通配符 import。

// 为什么？这样能确保你只有一个默认 export。

// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';


// 10.3 不要从 import 中直接 export。

// 为什么？虽然一行代码简洁明了，但让 import 和 export 各司其职让事情能保持一致。

// bad
// filename es6.js
export { es6 as default } from './airbnbStyleGuide';

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
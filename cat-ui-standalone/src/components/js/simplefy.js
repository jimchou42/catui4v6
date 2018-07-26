/**
 * tag简化实现：属性值与sample默认值对比，相同的设置简化
 */
import finder from './finder.js'
import typeoptions from './typeoptions.js'

export default function simplefy($type, key, value) {
  var sample = finder({attributes:{}, config:{}, children:typeoptions}, 'attributes', 'value', $type);
  if(sample!==undefined
    &&sample!==null
    &&sample.config.sample[key]!==undefined
    &&typeof sample.config.sample[key]==='boolean') {
    return value===sample.config.sample[key];
  }
}
